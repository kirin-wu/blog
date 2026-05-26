---
title: 'Next/Nuxt'
showArticleMetadata: true
sort: 6
date: 2026-05-26
description: Next/Nuxt
---

# Next/Nuxt 学习与实战

## 一、核心能力目标

1. 理解 SSR/SSG/ISR/CSR 的取舍。
2. 能基于 Next 或 Nuxt 搭建可上线应用。
3. 处理 SEO、缓存、部署与性能问题。

## 二、渲染策略

1. CSR：交互强，但首屏和 SEO 弱。
2. SSR：首屏快、SEO 好，但服务端压力更大。
3. SSG：构建期产出静态页面，性能优。
4. ISR：静态页面按策略增量更新。

## 三、Next.js（App Router）

### 1. 核心概念

- Server Components（默认服务端渲染）。
- Client Components（`'use client'`）。
- Route Handlers（接口路由）。

### 2. 数据获取

```tsx
// app/posts/page.tsx
export default async function Page() {
  const res = await fetch('https://example.com/api/posts', { next: { revalidate: 60 } })
  const data = await res.json()
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
```

## 四、Nuxt 3

### 1. 核心概念

- `pages/` 文件路由。
- `server/api` 服务端接口。
- `useFetch/useAsyncData` 数据获取。
- Nitro 负责服务端运行时。

### 2. 典型模式

- 页面中使用 `useAsyncData` 做 SSR 数据注入。
- 服务端接口做鉴权与聚合，前端减少直连外部服务。

## 五、如何选型

1. React 生态沉淀深、团队习惯 React：选 Next。
2. Vue 团队、希望约定优于配置：选 Nuxt。
3. 内容站点看 SEO、首屏和部署成本优先级。

## 六、部署与性能

1. 静态资源走 CDN。
2. 开启图片优化与缓存头。
3. 区分动态路由与静态路由的缓存策略。
4. 监控 Core Web Vitals（LCP、INP、CLS）。

## 七、常见问题

1. SSR 与浏览器 API 冲突：判断 `window` 环境。
2. Hydration mismatch：确保服务端和客户端输出一致。
3. 过度客户端化导致 SSR 价值下降。

## 八、实战清单

1. 博客站（SSG + 搜索 + 评论）。
2. 文档站（多语言 + 版本管理）。
3. 官网（SEO + A/B 实验 + 性能优化）。

