---
title: js实现链式调用
date: "2021年3月26日 15：30"
permalink: /read/2021031201
author: RuiLin Dong
categories:
  - JavaScript
tags:
  - JavaScript
---
使用原生的js获取的DOM对象，只能使用一次addEventLisenter方法添加事件，如果要接着添加事件，还得再调用addEventLisenter。
<!-- more -->
```js
var area = document.querySelector('.area');
area.addEventListener('mouseenter', function(){
    console.log( 'mouse enter' );
});
area.addEventListener('click', function(){
    console.log( 'click' );
});
```

如果我们可以直接实现一种链式的调用，可以简化这样的操作。
```js
function(){
    window.G = function(selector){
        return new _G(selector);
    }
    function _G(selector){
        this.elements = document.querySelector(selector);
        return this;
    }
    _G.prototype = {
        constructor : _G,
        method : function(name, fn){
            if(this.elements){
                this.elements.addEventListener(name, fn, false);
            }
            return this;
        }
    }
}();
```
实现原理：

1、输出一下G('.area')，他返回的就是一个_G的实例对象；

2、在_G的内部，把DOM对象存储在elements上，然后prototype上实现了method方法，就是给elements添加对应的事件，每次调用后，都把this返回，供下次使用；

3、G('.area')就能使用使用method方法来添加事件了，同时每次method都会把this返回，这样就能连续添加事件

```js
G('.area').method('mouseenter', function(){
    console.log( 'mouse enter' );
}).method('click', function(){
    console.log( 'click' );
})
```