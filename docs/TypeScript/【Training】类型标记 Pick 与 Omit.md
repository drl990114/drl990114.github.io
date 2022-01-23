---
title: 【Training】类型标记 Pick 与 Omit
date: 2022-01-23 21:19:14
author: RuiLin Dong
permalink: /read/20220123091936
categories:
  - TypeScript
tags:
  - TypeScript
  - Training
---
## Pick 与 Omit

```typescript
interface Page {
  id: number;
  title: string;
  author: string;
}

type OmitPage = Omit<Page, "id">;
// { title: string; author: string; }

type PickPage= Pick<Page, "id" | "title">;
// { id: number; title: string; }
```
显然，`Omit` 的作用是用来去掉类型中的某个属性，`Pick` 的作用是用来选取类型中的属性，下面来实现一下这两个类型标记。
## 实现
在实现这两个类型标记之前，需要了解 TypeScript 中这几个操作符的作用。
### keyof
该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。
```typescript
interface Page {
  id: number;
  title: string;
  author: string;
}
type P = keyof Page; // "id" | "title" | "author"
```
### in 
该操作符类似 for...in 的效果,可以逐一映射类型的键。
```typescript
type Create<P extends keyof any, T> = { [K in P]: T };

type test = Create<'x' | 'y', number>;
// { x: number, y: number };
```
### 实现 Pick 与 Omit 
```typescript
type myPick<T, K extends keyof T> = {
  // K 需要是 T 的子属性，可以是联合类型, 循环 K ，并赋值。
  [P in K]: T[P];
};
type myOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

## 参考文献
- [Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
- [Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)
- [Pick](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)