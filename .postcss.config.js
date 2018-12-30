const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        autoprefixer()      //优化的过程通过一系列的组件进行优化,此次采用的是autoprefixer
    ]
}

//PostCss会对CSS代码进行优化,主要是解决不同浏览器识别码的问题,具体作用自行查阅
//PostCss官网: https://www.postcss.com.cn/
//-ms代表【ie】内核识别码
//-moz代表火狐【firefox】内核识别码
//-webkit代表谷歌【chrome】/苹果【safari】内核识别码
//-o代表欧朋【opera】内核识别码