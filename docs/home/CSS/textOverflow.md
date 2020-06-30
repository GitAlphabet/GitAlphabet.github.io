### 文本超出部分显示省略号

#### 单行

```css
div {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
```

#### 多行

```css
div {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; // 最多显示几行
  overflow: hidden;
}
```
