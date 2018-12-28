const path = require('path')  //path是Nodejs中的基本包,用来处理路径

module.exports = {
    entry: path.join(__dirname,'src/index.js'),   //声明js文件入口,__dirname就是我们文件的根目录,用join拼接
    output:{                                      //声明出口文件
        filename: 'bundle.js',                    //将挂载的App全部打包成一个bundle.js,在浏览器中可以直接运行的代码  
        path: path.join(__dirname,'dist')         //bundle.js保存的位置
    },
    module:{                                      //因为webpack只能处理js文件,且只识别ES5的语法
        rules:[                                   //所以针对不同类型的文件,我们定义不同的识别规则
            {
                test: /.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}