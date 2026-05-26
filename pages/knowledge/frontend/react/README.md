---
title: 'React'
showArticleMetadata: true
sort: 5
date: 2026-05-26
description: React
---

# React 学习与实战

## 一、核心能力目标

1. 理解 React 的渲染心智模型。
2. 熟练掌握 Hooks 与状态管理。
3. 能写出稳定、可测试、可扩展的中大型页面。

## 二、React 核心概念

### 1. 单向数据流

- 状态提升。
- 父子通信清晰可追踪。

### 2. 组件渲染

- state/props 变化触发重新渲染。
- 减少无意义重渲染是性能关键。

### 3. Hooks 规则

1. 只能在组件顶层调用。
2. 只能在 React 函数组件或自定义 Hook 内调用。

## 三、常用 Hooks 模式

### 1. 状态与副作用

```tsx
import { useEffect, useState } from 'react'

export function Profile({ userId }: { userId: string }) {
  const [data, setData] = useState<{ name: string } | null>(null)

  useEffect(() => {
    let canceled = false
    fetch(`/api/users/${userId}`)
      .then(r => r.json())
      .then(res => {
        if (!canceled) setData(res)
      })
    return () => {
      canceled = true
    }
  }, [userId])

  return <div>{data?.name ?? 'loading...'}</div>
}
```

### 2. 自定义 Hook

- 复用业务逻辑，而不是复用 UI。
- 示例：`usePagination`、`usePermission`、`useRequest`。

## 四、状态管理建议

1. 小型应用：`useState + Context`。
2. 中大型应用：Zustand/Redux Toolkit。
3. 服务端状态推荐 React Query/TanStack Query。

## 五、性能优化

1. `React.memo`：避免子组件重复渲染。
2. `useMemo/useCallback`：缓存计算与函数引用。
3. 列表 `key` 稳定，不要滥用索引。
4. 路由级别代码分割（`lazy + Suspense`）。

## 六、常见问题

1. `useEffect` 依赖不完整导致脏数据。
2. 闭包陷阱导致读取旧状态。
3. 组件内直接发请求缺少取消机制。

## 七、面试高频

1. `useEffect` 与 `useLayoutEffect` 区别。
2. React Fiber 的价值。
3. 为什么 key 不能乱写。
4. 受控组件与非受控组件。

## 八、进阶方向

1. React Server Components 心智。
2. 设计系统与组件库建设。
3. 结合 Next.js 做全栈应用。

