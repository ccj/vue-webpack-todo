# CSS小计

## 1.opacity [CSS3属性] 
opacity 属性设置元素的不透明级别。  
语法: opacity: value|inherit.   
值|描述
:--:|:--:
value|规定不透明度。从 0.0 （完全透明）到 1.0（完全不透明）。
inherit|应该从父元素继承 opacity 属性的值。

## 2.appearance [CSS3属性]   
appearance 属性允许您使元素看上去像标准的用户界面元素。   
语法: appearance: normal|icon|window|button|menu|field;   
值|描述
:--:|:--:
normal|将元素呈现为常规元素。
icon|将元素呈现为图标（小图片）。
window|将元素呈现为视口。
button|将元素呈现为按钮。
menu|将元素呈现为一套供用户选择的选项。
field|将元素呈现为输入字段。

浏览器支持   
所有主流浏览器都不支持 appearance 属性。   
Firefox 支持替代的 -moz-appearance 属性。   
Safari 和 Chrome 支持替代的 -webkit-appearance 属性。   

## 3.disply: flex布局 justify-content
[参考链接](http://www.runoob.com/try/playit.php?f=playcss_justify-content&preval=space-between)

## 4.font-smoothing 用于设置字体的抗锯齿或光滑度的属性。   
它有三个属性值:   
none ------ 对低像素的文本比较好    
subpixel-antialiased------默认值    
antialiased ------抗锯齿很好    