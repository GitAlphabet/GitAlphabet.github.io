### js 面试题

#### 1、documen.write和 innerHTML的区别

* document.write只能重绘整个页面
* innerHTML可以重绘页面的一部分

#### 2、如何将 JS 日期转换为ISO标准

>toISOString() 方法用于将js日期转换为ISO标准。 它使用ISO标准将js Date对象转换为字符串。如：

```js
let date = new Date();
let n = date.toISOString();
console.log(n);
// YYYY-MM-DDTHH:mm:ss.sssZ
```

#### 3、JS中的substr()和substring()函数有什么区别

substr() 函数的形式为substr(startIndex,length)。 它从startIndex返回子字符串并返回'length'个字符数。

```js
let s = "hello";
s.substr(1,4) == "ello" // true
```

substring() 函数的形式为substring(startIndex,endIndex)。 它返回从startIndex到endIndex - 1的子字符串。

```js
let s = "hello";
s.substring(1,4) == "ell" // true
```

#### 4、浏览器的重绘和回流导致的性能问题

重绘（Repaint）和回流（Reflow）  
重绘和回流是渲染步骤中的一小节，但是这两个步骤对于性能影响很大。

* 重绘是当节点需要更改外观而不会影响布局的，比如改变 color就叫称为重绘
* 回流是布局或者几何属性需要改变就称为回流。

::: tip
**回流必定会发生重绘，重绘不一定会引发回流**。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流。
:::
  