---
title: '03-类型系统'
showArticleMetadata: true
sort: 3
date: 2024-08-26
description: 03-类型系统
---

# 1. 基本类型

# 1.1 概述

JavaScript(不是 TypeScript) 将值分为 8 种类型

- string
- bolean
- number
- bigint
- symbol-
- undefined
- object
- null

1. TypeScript 继承了 JavaScript 的类型设计，以上 8 种类型可以看作 TypeScript 的基本类型。
2. 上面所有类型的名称都是小写字母，首字母大写的`Number`、`String`、`Boolean`等在 JavaScript 语言中都是内置对象，而不是类型名称。
3. 另外，undefined 和 null 既可以作为值，也可以作为类型，取决于在哪里使用它们

## 1.2 bollean 类型

`string` 类型包含所有字符串。

```typeScript
const x:string = 'hello';
const y:string = `${x} world`;
```

## 1.3 number 类型

`number`类型包含所有整数和浮点数。

```typeScript
const x:number = 1;
const y:number = 0b1010;
const z:number = 0o12;
```

## 1.4 bigint 类型

`bigint`类型表示任意精度的整数。

```typeScript
const x:bigint = 9007199254740991n;
```

## 1.5 symbol 类型

`symbol`类型表示独一无二的值。

```typeScript
const x:symbol = Symbol('hello');
```

## 1.6 undefined 类型

`undefined`类型表示未定义。

```typeScript
const x:undefined = undefined;
```

## 1.7 null 类型

`null`类型表示空值。

```typeScript
const x:null = null;
```

注意，如果没有声明类型的变量，被赋值为 `undefined` 或 `null`，在关闭编译设置 `noImplicitAny` 和 `strictNullChecks` 时，它们的类型会被推断为 any。
