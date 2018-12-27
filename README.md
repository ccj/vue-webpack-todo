# 项目搭建记录
<font color=#0099ff size=3 face="黑体">代码中具体细节都有详细注释</font>
## 1.vue+webpack项目工程配置
npm init    初始化一个npm项目   
npm i webpack vue vue-loader  安装webpack和vue,使用vue要安装vue-loader   
npm i css-loader 根据终端WARN提示安装css-loader,因为vue-loader依赖css-loader

在app.vue中书写基本的vue结构   

首先在webpack.config.js设置入口entry   
声明我们的入口文件index.js

示例中app.vue实际是一个组件,组件是不能直接挂载到我们的html中去,需要在index.js中挂载