---
title: '控制器'
showArticleMetadata: false
date: 2024-08-12
---

# nest generate -- help

| Schematic   | Alias | Description                                                   |
| ----------- | ----- | ------------------------------------------------------------- |
| class       | cl    | 生成一个简单的 TypeScript 类                                  |
| controller  | co    | 生成一个新的控制器 (Controller)，用于处理 HTTP 请求           |
| service     | s     | 生成一个新的服务 (Service)，通常用于封装业务逻辑              |
| module      | mo    | 生成一个新的模块 (Module)，用于组织代码和依赖关系             |
| middleware  | mi    | 生成一个中间件 (Middleware)，用于处理请求响应周期中的中间逻辑 |
| guard       | gu    | 生成一个守卫 (Guard)，用于路由保护                            |
| interceptor | in    | 生成一个拦截器 (Interceptor)，用于拦截请求和响应              |
| filter      | fi    | 生成一个异常过滤器 (Exception Filter)，用于处理异常情况       |
| gateway     | ga    | 生成一个 WebSocket 网关 (Gateway)，用于处理 WebSocket 通信    |
| pipe        | pi    | 生成一个管道 (Pipe)，用于验证和转换数据                       |

常用命令

```bash
# 生成一个简单的 TypeScript 类
nest generate class auth

# 生成一个新的控制器 (Controller)，用于处理 HTTP 请求
nest generate controller auth

# 生成一个新的服务 (Service)，通常用于封装业务逻辑
nest generate service auth

# 生成一个新的模块 (Module)，用于组织代码和依赖关系
nest generate module auth
```
