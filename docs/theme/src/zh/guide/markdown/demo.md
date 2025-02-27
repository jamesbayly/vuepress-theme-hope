---
title: 代码演示
icon: splotch
category:
  - Markdown
tag:
  - Markdown
  - 代码演示
---

让你的 VuePress 站点中的 Markdown 文件支持代码案例。

<!-- more -->

## 配置

::: code-tabs#language

@tab TS

```ts {8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        demo: true,
      },
    },
  }),
});
```

@tab JS

```js {7-9}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        demo: true,
      },
    },
  }),
};
```

:::

<!-- @include: @md-enhance/zh/guide/demo/README.md#syntax -->

::: tip

JSON 块是可选的，可用的配置详见 [配置](../../config/plugins/md-enhance.md#demo)。

:::

该插件支持三种类型:

- normal
- vue
- react

:::: code-tabs

@tab Normal

<!-- @include: @md-enhance/zh/guide/demo/normal.md#syntax -->

@tab Vue

<!-- @include: @md-enhance/zh/guide/demo/vue.md#syntax -->

@tab React

<!-- @include: @md-enhance/zh/guide/demo/react.md#syntax -->

::::

<!-- @include: @md-enhance/zh/guide/demo/README.md#language -->

## 案例

<!-- @include: @md-enhance/zh/guide/demo/normal.md#demo -->
<!-- @include: @md-enhance/zh/guide/demo/vue.md#demo -->
<!-- @include: @md-enhance/zh/guide/demo/react.md#demo -->
<!-- @include: @md-enhance/zh/guide/demo/README.md#demo -->
