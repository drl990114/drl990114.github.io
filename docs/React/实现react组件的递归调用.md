---
title: 实现react组件的递归调用
date: 2021-05-14 21:20:34
permalink: /read/2021051401
author: RuiLin Dong
categories:
  - React
tags:
  - React
---

使用React来简单实现下组件的递归。在React可以通过props和children来向子组件传递信息，不过在这里大致的思路都是一样的。我们先定义一下要渲染的json结构：
<!-- more -->
```js
list = [
    {
        name: '1',
        children: [
        {
            name: '1-1'
        },
        {
            name: '1-2',
            children: [
            {
                name: '1-2-1'
            }
            ]
        },
        {
            name: '1-3'
        }
        ]
    },
    {
        name: '2',
        children: [
        {
            name: '2-1'
        }
        ]
    }
]

```
我们的Item组件可以这样实现：

```js
render() {
    const list: any = this.props.children || [];
    return (
        <div className="item">
            {
                list.map((item: ItemData, index: number) => {
                    return <React.Fragment key={index}>
                        <h3>{item.name}</h3>
                        {
                            // 当该节点还有children时，则递归调用本身
                            item.children && item.children.length ?
                            <Item>{item.children}</Item> : null
                        }
                    </React.Fragment>
                })
            }
        </div>
    )
}
```

最后调用这个组件：
```js
<Item>{this.list}</Item>
```
