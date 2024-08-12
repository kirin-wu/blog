---
title: 'Nest.js'
showArticleMetadata: true
---

# Nest.js

## Nest.js 是什么

Nest.js 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的渐进式框架。它使用 TypeScript 构建，并结合了 OOP（面向对象编程）、FP（函数式编程）和 FRP（函数响应式编程）等现代 JavaScript/TypeScript 的特性。

## Nest.js 的特点

- **渐进式框架**：Nest.js 是一个渐进式框架，可以根据项目的需求逐步添加更多的功能。

## Nest.js 的安装

```bash
node -v > 16.x.x
npm install -g @nestjs/cli
```

## Nest.js 的使用

```bash
nest new project-name
```

## Nest.js 的最佳实践

- **模块化**：将应用程序拆分为多个模块，每个模块负责处理特定的功能。
- **依赖注入**：使用依赖注入来管理应用程序中的依赖关系。
- **控制器**：使用控制器来处理 HTTP 请求。
- **服务**：使用服务来处理业务逻辑。
- **中间件**：使用中间件来处理请求和响应。
