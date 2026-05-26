---
title: 'HTML/CSS'
showArticleMetadata: true
sort: 1
date: 2026-05-26
description: HTML/CSS
---

# HTML/CSS 学习与实战

## 一、核心能力目标

1. 写出语义化、可维护的 HTML 结构。
2. 熟练掌握 Flex、Grid、定位、响应式布局。
3. 解决跨端样式问题并兼顾可访问性。
4. 能基于设计稿高质量还原页面。

## 二、HTML 必备知识

### 1. 语义化标签

常用：`header`、`main`、`section`、`article`、`aside`、`footer`、`nav`。

收益：

- SEO 更友好。
- 屏幕阅读器更易理解。
- 结构清晰，维护成本低。

### 2. 表单与可访问性

- `label` 必须与输入框关联。
- 图片要有 `alt`。
- 可点击元素优先使用 `button/a`，不要全靠 `div`。
- 保证键盘可操作（Tab 顺序、焦点可见）。

### 3. SEO 基础

- 合理使用 `title`、`meta description`。
- 页面仅保留一个 `h1`。
- 重要信息不要全部放在图片里。

## 三、CSS 必备知识

### 1. 盒模型与选择器

- `box-sizing: border-box` 作为全局默认。
- 了解层叠顺序：`!important`、内联样式、选择器优先级、源码顺序。

### 2. 布局系统

#### Flex（组件内布局）

```css
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
```

#### Grid（页面级网格）

```css
.dashboard {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
}
.card {
  grid-column: span 4;
}
```

### 3. 响应式设计

- 优先移动端优先（Mobile First）。
- 使用 `min-width` 媒体查询逐级增强。
- 文本、容器、图片都要可收缩。

```css
.container {
  width: min(1200px, 100% - 32px);
  margin: 0 auto;
}
```

### 4. 常见样式体系

1. BEM 命名：`block__element--modifier`。
2. CSS Modules：避免样式污染。
3. 原子化 CSS（如 Tailwind）：提高开发效率。

### 5. 动画与过渡

- 小交互优先 `transition`。
- 复杂动画用 `transform/opacity`，避免频繁触发布局。

## 四、常见问题与解法

1. `margin` 塌陷：使用 `padding`、`border` 或建立 BFC。
2. 文字溢出：`overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`。
3. 多行省略：`-webkit-line-clamp` + `display: -webkit-box`。
4. `z-index` 不生效：确认是否建立层叠上下文。

## 五、实战清单

1. 登录页（表单校验、状态反馈、按钮 loading）。
2. 后台列表页（筛选、分页、固定表头、空状态）。
3. 官网落地页（响应式、动效、SEO 基础）。
4. 主题切换（CSS 变量 + `data-theme`）。

## 六、面试高频

1. 说一下 BFC 及其应用场景。
2. Flex 和 Grid 各适用于什么场景。
3. 如何做移动端适配。
4. 如何提升首屏渲染体验。

## 七、进阶方向

1. CSS 架构设计（设计令牌、主题体系）。
2. 动画系统化（关键帧、状态机、可中断动画）。
3. 可访问性审计（对比度、焦点流、读屏体验）。

