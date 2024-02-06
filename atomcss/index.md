为了提高 ui 样式的开发效率，设置的基础类

## 布局类原子样式

类名组成：(布局类型)(方向?)-(值)

| 元素     | 可选值                                                     | 类名 | 描述           |
| -------- | ---------------------------------------------------------- | ---- | -------------- |
| 布局类型 | m                                                          |      | margin         |
|          | p                                                          |      | padding        |
| 方向     | l                                                          | ml   | 左             |
|          | r                                                          | mr   | 右             |
|          | t                                                          | mt   | 上             |
|          | b                                                          | mb   | 下             |
|          | y                                                          | my   | 上和下         |
|          | x                                                          | mx   | 左和右         |
|          | 无                                                         | m    | 上、下、左、右 |
| 值       | 0, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 48, 60, 80 | m-8  | 单位像素       |

其他类名

| 类型     | 类名     | 描述     |
| -------- | -------- | -------- |
| position | absolute | 绝对定位 |
|          | relative | 相对定位 |
|          | fixed    | 固定定位 |
|          | static   | 静态定位 |

:::tip
🌰：
ml-4：左外边距 4 像素，
px-12:左右内边距 12 像素，
m-32:上下左右外边距 32 像素
:::

## 文本类原子样式

类名组成：text-(字体大小?)-(字体粗细?)-(颜色?)

| 元素     | 可选值                                                | 类名             | 描述                   |
| -------- | ----------------------------------------------------- | ---------------- | ---------------------- |
| 字体大小 | 12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,46,56,68 | text-16          | 单位像素               |
| 字体粗细 | normal                                                | text-normal      | 正常                   |
|          | medium                                                | text-medium      | 中粗                   |
|          | bold                                                  | text-bold        | 加粗                   |
| 颜色     | primary                                               | text-primary     | 字体通用颜色， #333333 |
|          | sub                                                   | text-sub         | 字体对比色，#666666    |
|          | tip                                                   | text-tip         | 字体说明颜色，#999999  |
|          | theme                                                 | text-theme       | 主题色，#053dc8        |
|          | theme--true                                           | text-theme--true | 主题色，#053dc8        |
|          | white                                                 | text-white       | 白色，#fff             |
|          | disable                                               | text-disable     | 字体禁用颜色，#ccc     |
|          | red                                                   | text-red         | 错误色， #f5222d       |
|          | orange                                                | text-orange      | 警告色， #ffaa00       |
|          | green                                                 | text-green       | 成功色， #7ed322       |
|          | blue-light                                            | text-blue-light  | 高亮主题色， #829ee4   |

其他类名

| 类型       | 类名                           | 描述                           |
| ---------- | ------------------------------ | ------------------------------ |
| 文字链接   | text-link                      | 文字链接样式，#053DC8          |
| 文字画线价 | text-line-through/text-through | 文字中划线                     |
| 文字底线   | text-underline                 | 文字底线                       |
| 文本断行   | break-all                      | non-CJK 文本可在任意字符间断行 |

:::tip
🌰：
text-12：12 像素文本，text-tip：说明颜色文本，text-12-red：12 像素警告色文本
:::

## 弹性盒原子样式

类名组成：flex-(方向?)-(换行?)-(主轴对其方式?)-(交叉轴对其方式?)

| 元素           | 可选值  | 类名               | 描述                               |
| -------------- | ------- | ------------------ | ---------------------------------- |
| 方向           | column  | flex-column        | 竖直方向排列                       |
|                | 无      |                    | 不设置，取默认值水平方向排列       |
| 换行           | wrap    | flex-wrap          | 可换行                             |
|                | 无      |                    | 不设置，取默认值不换行             |
| 主轴对齐方式   | start   | flex-start         | justify-content:flex-start（默认） |
|                | end     | flex-end           | justify-content:flex-end           |
|                | between | flex-between       | justify-content:space-between      |
|                | around  | flex-around        | justify-content:space-around       |
|                | center  | flex-center        | justify-content:center             |
| 交叉轴对齐方式 | start   | flex-start-start   | align-items:flex-start             |
|                | end     | flex-start-end     | align-items:flex-end               |
|                | center  | flex-start-center  | align-items:center                 |
|                | stretch | flex-start-stretch | align-items:flex-stretch（默认）   |

其他类名

| 类型      | 类名                        | 描述                        |
| --------- | --------------------------- | --------------------------- |
| flex 属性 | flex-[1,2,3,4,5,6,7,8,9,10] | flex:[1,2,3,4,5,6,7,8,9,10] |
|           | flex-grow                   | flex-grow: 1                |
|           | flex-no-shrink              | flex-shrink: 0              |
|           | inline-flex                 | display: inline-flex        |

:::tip
🌰：
flex：设置弹性盒，flex-column：设置竖直方向弹性盒，flex-between：两端对其弹性盒，flex-start-center：垂直居中弹性盒
:::

## 盒框架原子样式

:::

| 类型     | 类名                          | 描述                                      |
| -------- | ----------------------------- | ----------------------------------------- |
| display  | none                          |                                           |
|          | block                         |                                           |
|          | inline                        |                                           |
|          | inline-block                  |                                           |
| border   | br                            | 默认颜色边                                |
|          | br-[t,b,l,r]                  | 默认颜色各边                              |
|          | br-theme                      | 主题色边                                  |
|          | br-hover                      | 默认颜色边带 hover                        |
|          | br-theme-selected             | 带（主题色 + 白\*90%）background 选中状态 |
|          | br-icon-selected              | 带 icon 的选中                            |
| 边框圆角 | radius-[1,2,3,4,5,6,7,8,9,10] | 选定值 px 的边框圆角                      |
|          | radius-50                     | 50%的边框圆角                             |
| 宽高     | w-[120, 160, 300]             | [120, 160, 300] 的宽                      |
|          | h-[120, 160, 300]             | [120, 160, 300] 的高                      |
|          | square-[120, 160, 300]        | [120, 160, 300] 的宽和高                  |
|          | w-full                        | 100% 的宽                                 |
|          | h-full                        | 100% 的高                                 |
|          | full                          | 100% 的宽高                               |
| 盒子阴影 | shadow                        | 0px 2px 8px 0px rgba(#053dc8, 0.08)       |
|          | shadow-small                  | 0px 1px 4px 0px rgba(#053dc8, 0.08)       |

border 演示

:::demo

```html
<template>
    <div class="br-theme-selected" style="height:100px">br-theme-selected</div>
    <div class="br-icon-selected" style="height:100px;margin-top:20px">br-icon-selected</div>
</template>
```

## 背景原子样式

:::

| 类型 | 类名             | 描述                             |
| ---- | ---------------- | -------------------------------- |
| 背景 | bg-main          | mix(#fff, #1a6fff(primary), 98%) |
|      | bg-white         | #fff                             |
|      | bg-table-header  | #e6ecfa（#e6ebf9）               |
|      | bg-theme         | 主题色 #053dc8                   |
|      | bg-gray          | 表头背景 #eaedf4                 |
|      | bg-orange        | 高亮警告 #ffeecc                 |
|      | bg-main-new      | #f2f3f6                          |
|      | bg-disabled      | 禁用 #f5f5f5                     |
|      | bg-text          | #f2f3f6                          |
|      | bg-header        | 表头背景 #eaedf4                 |
|      | bg-light         | #f5f7fd                          |
|      | text-warning--bg | 警告文本背景 #ffaa00             |
|      | text-success--bg | 成功文本背景 #7ed322             |
|      | text-ing--bg     | #66bdff                          |
|      | text-info--bg    | 提示信息背景 #ccc                |

## 其它原子样式

:::

| 类型           | 类名                             | 描述                                                  |
| -------------- | -------------------------------- | ----------------------------------------------------- |
| text-align     | text-center                      | 行内内容居中                                          |
|                | text-left                        | 行内内容向左侧边对齐                                  |
|                | text-right                       | 行内内容向右侧边对齐                                  |
| vertical-align | vertical-middle                  | 使元素的中部与父元素的基线加上父元素 x 高度的一半对齐 |
|                | vertical-top                     | 使元素的顶部与父元素的字体顶部对齐                    |
|                | vertical-baseline                | 使元素的基线与父元素的基线对齐                        |
|                | vertical-bottom                  | 使元素的底部与父元素的字体底部对齐                    |
|                | vertical-text-top                | 使元素的顶部与父元素的字体顶部对齐                    |
|                | vertical-text-bottom             | 使元素的底部与父元素的字体底部对齐                    |
| ellipsis       | ellipsis                         |                                                       |
|                | ellipsis-2                       | 两行省略                                              |
| overflow       | overflow-[hidden, auto, visible] |                                                       |
| white-space    | white-space-pre                  | 保留连续空白符,遇换行符或者< br >元素时换行           |
| 鼠标样式       | pointer                          | 手型鼠标                                              |
|                | cursor                           | 手型鼠标+主题色                                       |
|                | not-allowed                      | disabled 样式                                         |

## 圆点原子样式

类名组成：point-(值?)

| 类型     | 类名                                 | 描述                                |
| -------- | ------------------------------------ | ----------------------------------- |
| 值       | 4，8，12，16，20，24，28，32，36，40 | 单位像素                            |
| 颜色默认 |                                      | 默认红色，弱警告色：$--color-danger |

:::tip
🌰：
.point-4
:::
