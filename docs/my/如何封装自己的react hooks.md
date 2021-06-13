---
title: 如何封装自己的react hooks
date: 2021-01-12
permalink: /read/2021011201
author: RuiLin Dong
categories:
  - raact
tags:
  - javascript
  - react
---

通过自定义 Hook，可以将组件逻辑提取到可重用的函数中。

## 1、常用的一个hooks
官方中提供了几个内置的钩子，下面做下简单介绍

### 1.1 useState：状态
使用useState钩子，我们就可以给函数组件添加state了，例如点击按钮一下，count+1的操作：

```javascript
const [count , setCount] = useState(0)

return (
    <>
    <button onClick = {()=>setCount(count+1)}>
    </button>
    </>
)
```
useState的返回值有两个，一个是state，一个是修改state的函数，上面使用的是数组解构的方式，来简化了操作，这也是官方所推荐的。

### 1.2 useEffect: 副作用钩子
useEffect可以看作是componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

useEffect 钩子在组件初始化完毕时，一定会执行一次，在组件重新渲染的过程中，是否还要 update，还要看传入的第 2 个参数。


当只有回调函数这一个参数时，组件的每次更新，回调都会执行；

当有 2 个参数时，只有第 2 参数里的数据发生变化时，回调才执行；

只想在组件初始化完毕时只执行一次，第 2 个参数可以传入一个空的数组

举个例子看下：

```javascript
const Home = () => {
    const [count, setCount] = useState(0);
    const [nowtime, setNowtime] = useState(0);

    useEffect(() => {
        console.log('count', count);
        console.log('nowtime', nowtime);
    });

    return ( <>
        <p>count: {count} </p>
        <p>nowtime: {nowtime} </p>
        <button onClick = {() => setCount(count + 1)}> add 1 </button>
        <button onClick = {() => setNowtime(Date.now())} > set now time </button>
    </>);
};
```
若改成下面的这样，回调仅会在 count 发生变化时才会在控制台输出，仅修改 nowtime 的值时没有输出：
```javascript
useEffect(() => {
    console.log('count', count);
    console.log('nowtime', nowtime);
}, [count]);
```
useEffect 的回调函数还可以返回一个函数，这个函数在 effect 生命周期结束之前调用。为防止内存泄漏，清除函数会在组件卸载前执行。另外，如果组件多次渲染，则在执行下一个 effect 之前，上一个 effect 就已被清除。

基于这个机制，在一些存在添加绑定和取消绑定的案例上特别合适，例如监听页面的窗口大小变化、设置定时器、与后端的 websocket 接口建立连接和断开连接等，都可以预计 useEffect 进行二次的封装，形成自定义的 hook。

## 2、自定义hook

### 2.1 获取窗口变化的宽高
我们通过监听resize事件来获取实时获取window窗口的宽高，对这个方法进行封装后可以在生命周期结束前能自动解绑resize事件：

```js
const useWinResize = () => {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });
    const resize = useCallback(() => {
        setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    }, [])
    useEffect(() => {
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);
    return size;
}
```

## 3、总结
使用react hook可以做很多有意思的事情，这里我们也仅仅是举几个简单的例子，可以更好的理解hook的使用和react函数式编程的思想。