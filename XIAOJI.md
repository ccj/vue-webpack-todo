# CSS小记

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

# javaScript小记
## unshift()方法
unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
语法: arrayObject.unshift(newelement1,newelement2,....,newelementX)
参数|描述
:--:|:--:
newelement1|必需。向数组添加的第一个元素。
newelement2|可选。向数组添加的第二个元素。
newelementX|可选。可添加若干个元素。

说明:unshift() 方法将把它的参数插入 arrayObject 的头部，并将已经存在的元素顺次地移到较高的下标处，以便留出空间。该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。   
请注意，unshift() 方法不创建新的创建，而是直接修改原有的数组。   
注释：该方法会改变数组的长度。      
注释：unshift() 方法无法在 Internet Explorer 中正确地工作！   
提示：要把一个或多个元素添加到数组的尾部，请使用 push() 方法。  

# vue小记
## 1.vue中$emit的用法   
父组件可以使用 props 把数据传给子组件。   
子组件可以使用 $emit 触发父组件的自定义事件。


