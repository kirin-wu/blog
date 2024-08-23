---
title: '01-基础用法'
showArticleMetadata: true
sort: 1
date: 2024-08-23
description: 01-基础用法
---

# 1.类型声明

类型声明的写法，一律为在标识符后面添加“冒号 + 类型”。函数参数和返回值，也是这样来声明类型。

```typeScript
const boo: string = 'hello word'

const boo2 = (msg: string): string => {
	return msg + 'hello word'
}
boo2('xiaoming')
```

# 2.类型推断

类型声明并不是必需的，如果没有，TypeScript 会自己推断类型。

```typeScript
let name = "xiaoming"
let age = 18

let foo = 123;
foo = 'hello'; // 报错
```

```typeScript
function toString(num:number) {
  return String(num);
}
```

从这里可以看到，TypeScript 的设计思想是，类型声明是可选的，你可以加，也可以不加。即使不加类型声明，依然是有效的 TypeScript 代码，只是这时不能保证 TypeScript 会正确推断出类型。

# 3.typescript 的编译

JavaScript 的运行环境（浏览器和 Node.js）不认识 TypeScript 代码。所以，TypeScript 项目要想运行，必须先转为 JavaScript 代码，这个代码转换的过程就叫做“编译”（compile）。

TypeScript 官方没有做运行环境，只提供编译器。编译时，会将类型声明和类型相关的代码全部删除，只留下能运行的 JavaScript 代码，并且不会改变 JavaScript 的运行结果。

因此，TypeScript 的类型检查只是编译时的类型检查，而不是运行时的类型检查。一旦代码编译为 JavaScript，运行时就不再检查类型了。

# 4.值和类型

- 值是 value,每一个值都有类型 type
- ts 只涉及类型，所有值有关的都是 js 完成

# 5.tsc 编译器

全局安装

```shell
npm install -g typescript
```

编译

```shell
tsc index.ts
```

编译多个文件

```shell
tsc index.ts index2.ts
```

1. 如果想将多个 TypeScript 脚本编译成一个 JavaScript 文件，使用--outFile 参数。

```shell
tsc file1.ts file2.ts --outFile app.js
```

2. 编译结果默认都保存在当前目录，--outDir 参数可以指定保存到其他目录。

```shell
tsc index.ts --outDir dist
```

3. --taget 生成目标版本

```shell
tsc index.ts --target es6
```

# 6.tsconfig.json 配置文件

[tsconfig.json 配置文档](https://wangdoc.com/typescript/tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "dist",
    "strict": true
  },
  "include": ["src"]
}
```

- target: 指定 ECMAScript 目标版本
- module: 指定使用模块: 'commonjs', 'amd', 'system', 'umd' 或 'es6'
- outDir: 指定输出目录
- strict: 启用所有严格类型检查选项

# 7.ts-node 模块

是一个可以直接运行 ts 代码的 npm 模块

```shell
npx ts-node script.ts
```
