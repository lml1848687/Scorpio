# Scorpio - 一个初级的 Vue UI 组件

[![Build Status](https://travis-ci.org/lml1848687/Scorpio.svg?branch=master)](https://travis-ci.org/lml1848687/VUE-Learning)

## 介绍

## 开始使用

1. 添加 CSS 样式
   使用本框架前，请在 CSS 中开启 border-box

```
*,*::before,*::after{box-sizing:border-box;}
```

IE 8 及以上的浏览器都支持此样式。

你需要自己如下面一样设置默认样式（我后续会优化,改成 SCSS 变量）

```
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```

IE 15 及以上的浏览器都支持此样式。

2. 安装 Scorpio

```
npm i --save Scorpio
```

3. 引入 Scorpio

```
import {Button, ButtonGroup, Icon} from 'Scropio'
import 'Scropio/dist/index.css'

export default {
  components: {
    's-button': Button,
    's-icon': Icon
  }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
