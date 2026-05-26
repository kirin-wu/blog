---
title: 'TypeScript'
showArticleMetadata: true
sort: 3
date: 2026-05-26
description: TypeScript
---

# TypeScript 学习与实战

## 一、核心能力目标

1. 用类型系统约束业务模型，而不只是“给变量加类型”。
2. 能设计可复用泛型工具，减少重复代码。
3. 能落地一套可维护的 TS 工程规范。

## 二、类型系统基础

### 1. 常用类型

- 基础：`string`、`number`、`boolean`、`null`、`undefined`
- 容器：`Array<T>`、`Record<K, V>`
- 组合：联合类型 `|`、交叉类型 `&`

### 2. 类型别名与接口

- `type`：更适合复杂类型表达式。
- `interface`：更适合对象结构和可扩展定义。

### 3. 泛型

```ts
function pickFirst<T>(arr: T[]): T | undefined {
  return arr[0]
}
```

泛型本质：把类型当参数传入，提升复用性。

## 三、进阶类型能力

### 1. keyof / typeof / in

```ts
type User = { id: string; name: string }
type UserKey = keyof User // 'id' | 'name'
```

### 2. 条件类型

```ts
type IdType<T> = T extends { id: infer U } ? U : never
```

### 3. 工具类型

- `Partial<T>`：全部可选
- `Required<T>`：全部必填
- `Pick<T, K>`：挑选字段
- `Omit<T, K>`：排除字段
- `ReturnType<T>`：函数返回值

## 四、接口模型设计示例

```ts
interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

interface PageResult<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}

type User = {
  id: string
  nickname: string
  createdAt: string
}

type UserPageResponse = ApiResponse<PageResult<User>>
```

## 五、tsconfig 建议

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true,
    "noImplicitAny": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "skipLibCheck": true
  }
}
```

关键：`strict` 必开，配合渐进迁移。

## 六、常见问题

1. `any` 扩散导致类型系统失效。
2. `as` 过度断言掩盖真实错误。
3. 接口字段命名不稳定导致前后端对齐困难。

## 七、落地实践建议

1. 新模块强制 TS，旧模块渐进迁移。
2. DTO（接口层）与 ViewModel（展示层）分离。
3. 在 CI 中增加 `tsc --noEmit` 检查。

## 八、面试高频

1. `type` 和 `interface` 区别。
2. `unknown`、`any`、`never` 区别。
3. 泛型约束与默认泛型。
4. 条件类型和分发机制。

