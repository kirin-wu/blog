---
title: '02-any、unknown、never'
showArticleMetadata: true
sort: 1
date: 2024-08-23
description: 02-any、unknown、never
---

# 1.any 类型

`any` 类型表示没有任何限制，该类型的变量可以赋予任意类型的值。

```typeScript
let x:any;

x = 1; // 正确
x = 'foo'; // 正确
x = true; // 正确
```

TypeScript 认为，只要开发者使用了 `any` 类型，就表示开发者想要自己来处理这些代码，所以就不对 `any` 类型进行任何限制，怎么使用都可以

- 问题 1：类型推断问题。无法推断类型默认都认为是`any`。
- 问题 2：变量污染，可以赋值给其他任何类型的变量（因为没有类型检查），导致其他变量出错。

# 2.unknown 类型

为了解决 `any` 类型“污染”其他变量的问题，TypeScript 3.0 引入了 `unknown` 类型。它与 `any` 含义相同，表示类型不确定，可能是任意类型，但是它的使用有一些限制，不像 `any` 那样自由，可以视为严格版的 `any`。

## 相同点和区别

1. `unknown` 跟 `any` 的相似之处，在于所有类型的值都可以分配给 `unknown` 类型。

```typeScript
let x:unknown;

x = true; // 正确
x = 42; // 正确
x = 'Hello World'; // 正确
```

2. `unknown` 类型的变量，不能直接赋值给其他类型的变量（除了 `any` 类型和 `unknown` 类型）。

```typeScript
let v:unknown = 123;

let v1:boolean = v; // 报错
let v2:number = v; // 报错
```

3. 赋值给`any`和`unknown`以外类型的变量都会报错，这就避免了污染问题，从而克服了 any 类型的一大缺点
4. `unknown`类型变量的属性和方法，或者直接当作函数执行，都会报错。

```typeScript
let v1:unknown = { foo: 123 };
v1.foo  // 报错

let v2:unknown = 'hello';
v2.trim() // 报错

let v3:unknown = (n = 0) => n + 1;
v3() // 报错
```

5. `unknown`类型变量能够进行的运算是有限的，只能进行比较运算（运算符`==`、`===`、`!=`、`!==`、`||`、`&&`、`?`）、取反运算（运算符`!`）、`typeof`运算符和`instanceof`运算符这几种，其他运算都会报错。

```typeScript
let a:unknown = 1;

a + 1 // 报错
a === 1 // 正确
```

## 正确使用 unknown 类型

1. 经过“类型缩小”，`unknown`类型变量才可以使用。所谓“类型缩小”，就是缩小`unknown`变量的类型范围，确保不会出错。

```typeScript
let a:unknown = 1;

if (typeof a === 'number') {
  let r = a + 10; // 正确
}
```

2. 明确`unknown`变量的实际类型，才允许使用它，防止像`any`那样可以随意乱用，“污染”其他变量。类型缩小以后再使用，就不会报错

```typeScript
let s:unknown = 'hello';

if (typeof s === 'string') {
  s.length; // 正确
}
```

## 总结

总之，`unknown`可以看作是更安全的`any`。一般来说，凡是需要设为`any`类型的地方，通常都应该优先考虑设为`unknown`类型。
在集合论上，`unknown`也可以视为所有其他类型（除了`any`）的全集，所以它和 any 一样，也属于 TypeScript 的顶层类型。

# 3.never 类型

为了保持与集合论的对应关系，以及类型运算的完整性，`TypeScript` 还引入了“空类型”的概念，即该类型为空，不包含任何值。

由于不存在任何属于“空类型”的值，所以该类型被称为`never`，即不可能有这样的值。

```typeScript
let x:never;
```

上面示例中，变量 x 的类型是 never，就不可能赋给它任何值，否则都会报错

## 如何使用

1. 如果一个变量可能有多种类型（即联合类型），通常需要使用分支处理每一种类型。这时，处理所有可能的类型之后，剩余的情况就属于 `never` 类型。

```typeScript
function fn(x:string|number) {
  if (typeof x === 'string') {
    // ...
  } else if (typeof x === 'number') {
    // ...
  } else {
    x; // never 类型
  }
}
```

2. never 类型的一个重要特点是，可以赋值给任意其他类型。

```typeScript
function f():never {
  throw new Error('Error');
}

let v1:number = f(); // 不报错
let v2:string = f(); // 不报错
let v3:boolean = f(); // 不报错

```

## 总结：

为什么 `never` 类型可以赋值给任意其他类型呢？这也跟集合论有关，空集是任何集合的子集。TypeScript 就相应规定，任何类型都包含了 `never` 类型。因此，`never` 类型是任何其他类型所共有的，TypeScript 把这种情况称为“底层类型”（bottom type）。

总之，TypeScript 有两个“顶层类型”（`any` 和 `unknown`），但是“底层类型”只有 `never` 唯一一个。
