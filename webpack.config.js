const path = require('path')                            //path是Nodejs中的基本包,用来处理路径
const HTMLPlugin = require('html-webpack-plugin')       //引入html-webpack-plugin
const webpack = require("webpack")                      //引入webpack
const ExtractPlugin = require("extract-text-webpack-plugin")

const isDev = process.env.NODE_ENV === "development"    //判断是否为测试环境,在启动脚本时设置的环境变量都是存在于process.env这个对象里面的

const config = {
    target: "web",                                      //设置webpack的编译目标是web平台
    entry: path.join(__dirname,'src/index.js'),         //声明js文件入口,__dirname就是我们文件的根目录,用join拼接
    output:{                                            //声明出口文件
        filename: 'bundle.js',                          //将挂载的App全部打包成一个bundle.js,在浏览器中可以直接运行的代码  
        path: path.join(__dirname,'dist')               //bundle.js保存的位置
    },
    module:{                                            //因为webpack只能处理js文件,且只识别ES5的语法
        rules:[                                         //所以针对不同类型的文件,我们定义不同的识别规则,最终目的都是打包成js文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'                    //处理.vue文件
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'                  //处理jsx文件
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',                     //将css的样式写入到html里面去
            //         'css-loader'                        //处理css文件  
            //     ]
            // },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,      //处理图片
                use: [
                    {                                   //loader是可以配置选项的,如下options
                        loader: 'url-loader',           //url-loader实际上依赖于file-loader,file-loader处理完文件可以保存为一个文件供处理
                        options: { 
                            limit: 1024,                //url-loader的好处是可以加一个限制的大小,对于小图片,在范围内可直接将图片转换成base64码直接存放在js中,以减少http请求.
                            name: '[name].[ext]'        //输出文件的名字,[name] 文件原名,[ext]文件扩展名.
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({                      //主要作用是在此处可以根据isdev配置process.env,一是可以在js代码中可以获取到process.env,
            'process.env':{                             //二是webpack或则vue等根据process.env如果是development,会给一些特殊的错误提醒等,而这些特殊项在正式环境是不需要的
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()                                //引入HTMLPlugin    
    ]
}

if(isDev){
    config.module.rules.push(
        {
            test: /\.styl/,
            use: [
                'style-loader',                     //将css写入到html中去
                'css-loader',                       //css-loader处理css
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,            //stylus-loader和postcss-loader自己都会生成sourceMap,如果前面stylus-loader已生成了sourceMap
                    }                               //那么postcss-loader可以直接引用前面的sourceMap
                },
                'stylus-loader'                     //处理stylus的css预处理器的问题件,转换成css后,抛给上一层的css-loader
            ]
        }
    )                                             //如果是测试环境下的一些配置
    config.devtool = '#cheap-module-eval-source-map'    //官方推荐使用这个配置,作用是在浏览器中调试时,显示的代码和我们的项目中的代码会基本相似,而不会显示编译后的代码,以致于我们调试连自己都看不懂                                      
    config.devServer = {                                //这个devServer的配置是在webpack2.x以后引入的,1.x是没有的
        port: 8000,                                     //访问的端口号
        host: '127.0.0.1',                              //可以设置0.0.0.0 ,这样设置你可以通过127.0.0.1或则localhost去访问
        overlay: {
            errors: true,                               //编译中遇到的错误都会显示到网页中去
        },
        // open: true ,                                 //项目启动时,会默认帮你打开浏览器
        hot: true                                       //在单页面应用开发中,我们修改了代码后是整个页面都刷新,开启hot后,将只刷新对应的组件
    },
    config.plugins.push(                                //添加两个插件用于hot:true的配置
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
} else{
    config.entry = {
        app: path.join(__dirname,'src/index.js'),
        vendor: ['vue']   
    }
    config.output.filename = '[name].[chunkhash:8].js'  //此处一定是chunkhash,因为用hash时app和vendor的hash码是一样的了,这样每次业务代码更新,vendor也会更新,也就没有了意义.
    config.module.rules.push(
        {
            test: /\.styl/,
            use: ExtractPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',                       //css-loader处理css
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,            //stylus-loader和postcss-loader自己都会生成sourceMap,如果前面stylus-loader已生成了sourceMap
                        }                               //那么postcss-loader可以直接引用前面的sourceMap
                    },
                    'stylus-loader'                     //处理stylus的css预处理器的问题件,转换成css后,抛给上一层的css-loader
                ]
            })
        },
    ),
    config.plugins.push(
        new ExtractPlugin('styles.[contentHash:8].css'),   //定义打包分离出的css文件名
        new webpack.optimize.CommonsChunkPlugin({          //定义静态文件打包
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({         //将app.js文件中一些关于webpack文件的配置单独打包出为一个文件,用于解决部分浏览器长缓存问题   
            name: 'runtime'
        })
    )
} 

module.exports = config                                 //声明一个config的配置,用于对外暴露