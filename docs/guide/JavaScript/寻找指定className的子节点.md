---
title: 寻找指定className的子节点
date: 2021-06-29 21:20:34
permalink: /read/2021062901
author: RuiLin Dong
categories:
  - JavaScript
tags:
  - JavaScript
---

今天在工作中遇到了一个问题，在 AntVX6 中，使用了 dataV 这个第三方库，但它的动态环图不能通过配置来更改字的颜色，只能更改翻牌器的颜色。

于是我需要找到这个字的 HTMLElement 来进行更改,例如以下的 JSX 标签：
```JSX
<div>
  <ArctiveRing>
    <span>翻牌器</span>
    <div className='target'>字</div>
  </ArctiveRing>
</div>
```
需要找到 className 为 'target' 的DOM元素，但我们不能去直接使用 getElementsByClassName ，因为画布中可能会存在多个该节点，所以我们可以通过先找到父节点的方式，再来寻找我们的目标节点

我们需要先将 cellId 给父节点，这是为了给节点一个唯一的标识，来方便我们从画布中寻找到 'target' 的父节点。
```JSX
<div id={cellId}>
  <ArctiveRing>
    <span>翻牌器</span>
    <div className='target'>字</div>
  </ArctiveRing>
</div>
```

接下来，我们可以很方便的通过 getElementById 来获得目标元素的父节点了。下面的代码就是为了在父节点中找到我们的目标节点。

```js
/**
 * 
 * @param childElement 
 * @param className 
 * @returns 
 */
export const findClassName = (childElement, className: String) => {
    if (!childElement) return
    let res
    for (let i = 0; i < childElement.length; i++) {
        if (childElement.item(i).className == className) {
            res = childElement.item(i)
            return res
        } else {
            res = findClassName(childElement.item(i).children, className)
        }
    }
    return res
}
```
使用时：
```js
const parentDOM = document.getElementById(cellId)
const targetDOM = findClassName(parentDOM.children , 'target')
```
代码的思想主要是通过递归去寻找 className 相同的节点，同样的方式，我们也可以反过来去寻找子节点中的父节点，不过我们就不需要再去循环，因为父节点只有一个。

-- 至此完 --