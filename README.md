<div align="center  ">
    <img src="https://jason-1255999874.cos.ap-beijing.myqcloud.com/vue%2Bwebpack.png" width="500px" />
</div>

# 项目搭建文档
<font color=#0099ff size=3 face="黑体">代码中具体细节都有详细注释</font>
## 1.vue+webpack项目工程配置
npm init    初始化一个npm项目   
npm i webpack@3.10.0 vue@2.5.13 vue-loader@13.6.0  安装webpack和vue,使用vue要安装vue-loader   
npm i css-loader@0.28.7 vue-template-compiler@2.5.13 根据终端WARN提示安装css-loader,因为vue-loader依赖css-loader
//针对各版本做了详细指定,由于更新过快,避免版本差异性问题,故指定了版本

在app.vue中书写基本的vue结构   

首先在webpack.config.js设置入口entry   
声明我们的入口文件index.js

示例中app.vue实际是一个组件,组件是不能直接挂载到我们的html中去,需要在index.js中挂载

webpack.config.js同样设置出口文件bundle.js及存放路径

配置完后,在webpack.config.js中配置build脚本, --config 指定我们的config文件 因为在这里面写,当你调用时才会调用这个项目里面的webpack,否则将会调用全局的webpack,全局webpack和项目中的版本可能存在差异,建议使用这种方式会好一点