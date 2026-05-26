---
title: '工程化'
showArticleMetadata: true
sort: 7
date: 2026-05-26
description: 前端工程化
---

# 前端工程化学习与实战

## 一、核心能力目标

1. 建立统一开发规范，降低协作成本。
2. 搭建可持续交付链路（开发、测试、发布、监控）。
3. 让项目具备长期维护能力。

## 二、工程化四层模型

1. 规范层：Lint、格式化、提交规范。
2. 构建层：打包、代码分割、缓存策略。
3. 质量层：测试、CI、代码审查。
4. 运维层：发布、回滚、监控、告警。

## 三、基础规范建议

### 1. 代码规范

- ESLint：静态代码检查。
- Prettier：格式统一。
- Stylelint：样式规范。

### 2. Git 规范

- 分支策略：`main/develop/feature/hotfix`。
- Commit 规范：Conventional Commits。
- PR 必须有变更说明与测试说明。

### 3. 目录建议

```txt
src/
  components/
  pages/
  hooks/
  services/
  stores/
  utils/
  styles/
  types/
```

## 四、构建与性能

1. 基于 Vite 或 Webpack 做按需分包。
2. 路由懒加载、组件懒加载。
3. 第三方库体积审查（bundle analyzer）。
4. 资源压缩（Gzip/Brotli）。

## 五、测试体系

1. 单元测试：Vitest/Jest。
2. 组件测试：Testing Library。
3. E2E：Playwright/Cypress。

建议顺序：先补关键业务路径的 E2E，再补核心工具函数单测。

## 六、CI/CD 建议

1. CI 阶段：安装依赖 -> lint -> type-check -> test -> build。
2. CD 阶段：灰度发布 -> 监控 -> 全量发布。
3. 发布策略：蓝绿发布或金丝雀发布。

## 七、监控与可观测性

1. 错误监控：前端异常、Promise rejection、资源加载失败。
2. 性能监控：LCP、INP、CLS、FCP、TTFB。
3. 日志追踪：关键用户路径埋点。

## 八、工程化落地清单

1. 新项目初始化脚手架模板。
2. 接入 ESLint + Prettier + Husky + lint-staged。
3. 接入 TypeScript 严格模式。
4. 接入测试框架并覆盖关键链路。
5. 接入 CI/CD 与监控报警。

## 九、常见反模式

1. 规则太多但无人执行。
2. 发布无回滚方案。
3. 只看构建通过，不看线上指标。
4. 缺少文档，导致新人上手慢。

