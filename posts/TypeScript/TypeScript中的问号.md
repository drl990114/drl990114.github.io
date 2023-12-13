---
title: TypeScript中的问号
date: 2021-07-11 21:05:38
author: RuiLin Dong
permalink: /read/20210711093729
categories:
  - TypeScript
tags:
  - TypeScript
---
当你链式的去调用对象的某个属性或者方法时，可能经常会见到 `属性可能为 undefined` 类似的错误。比如：
```TypeScript
const x = nav.bar.show();
```
<!-- more -->
这里的访问链路上 nav bar show 任何一个为 undefined，程序就停止工作。

使用 ? 修改后：
```TypeScript
const x = nav?.bar.show();
```
这里 ?. 的句法就是 Optional Chaining，在 TypeScript 3.7 中实现，目前 tc39 提案中处于 Stage 4 阶段。

Optional Chaining 在这里表示，如果 foo 是 null 或 undefined，整个语句不继续往后执行，直接返回 undefined。

作用范围
需要注意的是，?. 只作用于左边的对象。

所以可以这样来修正：
```TypeScript
const x = nav?.bar?.show();
```
这样可以保障 nav bar 为空的情况下不报错。这体现了 optional property accesses 的功能。

Opptoinal call
对于方法也同样适用。
```TypeScript
async function makeRequest(url: string, log?: (msg: string) => void) {
  log?.(`Request started at ${new Date().toISOString()}`);
  // roughly equivalent to
  //   if (log != null) {
  //       log(`Request started at ${new Date().toISOString()}`);
  //   }

  const result = (await fetch(url)).json();

  log?.(`Request finished at at ${new Date().toISOString()}`);

  return result;
}
```
Optional element access
数组也是对象，只不是特殊的对象，通过数字索引作为属性来访问。所以 Optional Chaining 也可作用于数组元素的访问，此时就体现了 optional element access 的功能，请看来自官方文档中的示例：
```TypeScript
/**
 * Get the first element of the array if we have an array.
 * Otherwise return undefined.
 */
function tryGetFirstElement<T>(arr?: T[]) {
  return arr?.[0];
  // equivalent to
  //   return (arr === null || arr === undefined) ?
  //       undefined :
  //       arr[0];
}
```
和 && 的差别
虽说 Optional Chaining 取代了如下通过 && 来实现的判空操作：
```TypeScript
// Before
if (foo && foo.bar && foo.bar.baz) {
  // ...
}
```
但 Optional Chaining 和 && 还是有区别，后者利用 JavaScript 中的短路机制，遇到假值时中断执行。而前者只会在被判定对象为 null 或 undefined 时才会中断执行。

请看如下示例：
```TypeScript
const a: any = 0;
console.log(a?.nav);
console.log(a && a.nav);

const b: any = false;
console.log(b?.nav);
console.log(b && b.nav);

const c: any = "";
console.log(c?.nav);
console.log(c && c.nav);
 
输出：

> undefined
> 0
> undefined
> false
> undefined
> ""
```
 
在 TypeScript 中，你应该不会只看到这样的问号， 你也许还会看到 ?? 的用法，它是一个 nullish 合并运算符，是另一个即将到来的ECMAScript的功能。

此功能（??运算符）视为在处理 null 或 undefined 时“回退”到默认值的一种方式。当我们编写代码时:
```TypeSCript
let x = foo ?? bar();
```
这是一种新的方式，当 foo 存在时将使用该值；但是当它是null 或 undefined，将使用 bar() 。

上面的代码等价于下面的代码。
```TypeScript
let x = foo !== null && foo !== undefined ? foo : bar();
```
该 ?? 操作可替代的用途 || 尝试使用默认值时。例如，以下代码片段尝试获取上次保存的 localStorage（如果曾经保存过）；但是，它有一个错误，因为它使用 ||.
```TypeScript
function initializeAudio() {
  let volume = localStorage.volume || 0.5;
  // ...
}
```
当 localStorage.volume 为 `0`，页面会设置为音量 `0.5` 这是意想不到的。 ?? 避免了一些意外情况 `0`，`NaN` 以及 `""` 被视为falsy值。

参考文献：
- [Optional Chaining](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining)
- [Nullish Coalescing](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing)
