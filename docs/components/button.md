---
title:Button
---

# Button

## 需求演示

- 默认按钮/图标按钮/加载中状态/不可用状态/ 按钮组合状态

<ClientOnly>
  <button-demo-1></button-demo-1>
</ClientOnly>

## API

| 参数          | 说明     | 类型    | 默认值 |
| ------------- | -------- | ------- | ------ |
| disabled      | 是否禁用 | Boolean | false  |
| icon          | 按钮类型 | String  | -      |
| loading       | 加载状态 | Boolean | false  |
| icon-position | 图标位置 | String  | left   |

## 实现的逻辑

- 样式状态变化：根据在组件传入的内容，通过 props 拿到添加到 class，根据 class 来变化状态
- icon 位置变化：根据 class 来设定元素 order 顺序
- 校验传参：根据 validator 校验传入的 value 值是否符合
- 在 mounted 里检测 buttonGroup 的子元素检测必须为 button
