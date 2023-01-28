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

#### 5、0.1 + 0.2 === 0.3 嘛？为什么？

答案：不相等。

```md  
在两数相加时，会先转换成二进制，0.1 和 0.2 转换成二进制的时候尾数会发生无限循环，然后进行对阶运算，JS 引擎对二进制进行截断，所以造成精度丢失。
```

#### 6、JS 数据类型

* 6 种原始类型，使用 typeof 运算符检查。
  * undefined：typeof instance === "undefined"
  * Boolean：typeof instance === "boolean"
  * Number：typeof instance === "number"
  * String：typeof instance === "string
  * BigInt：typeof instance === "bigint"
  * Symbol ：typeof instance === "symbol"
* null：typeof instance === "object"。
* Object：typeof instance === "object"。任何 constructed 对象实例的特殊非数据结构类型，也用做数据结构：new **Object**，new **Array**，new **Map**，new **Set**，new **WeakMap**，new **WeakSet**，new **Date**，和几乎所有通过 new keyword 创建的东西。
* Function：非数据结构，尽管 typeof 操作的结果是：typeof instance === "function"。这个结果是为 Function 的一个特殊缩写，尽管每个 Function 构造器都由 Object 构造器派生。

#### 7、['1', '2', '3'].map(parseInt)的结果是什么？

```md
先说结果：
['1', NaN, NaN]
为什么不是['1', '2', '3']呢，下面开始分析
```

* map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
* map() 方法按照原始数组元素顺序依次处理元素。

map(parseInt)其实是：

```js
map(function(item, index){
    return parseInt(item, index);
})

即依次运行的是：
parseInt('1', 0);
parseInt('2', 1);
parseInt('3', 2);
```

parseInt(string, radix)

| 参数              | 描述             |
|:---|:--|
|string|必需。要被解析的字符串。|
|radix|可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。<br>如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。<br>如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。|

#### 8、使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果

```js
var arr = [3,15,8,29,102,22]
// 直接使用sort()方法，默认的排序方法会将数组元素转换为字符串，然后比较字符串中字符的UTF-16编码顺序来进行排序。
var brr = arr.sort();
console.log(brr);//[102,15,22,29,3,8]

// sort，可以接收一个函数，返回值是比较两个数的相对顺序的值
var brr = arr.sort((a,b)=>a-b);
console.log(brr);//[3, 8, 15, 22, 29, 102]
```

#### 9、== 和 === 哪个性能好？

```md
== 需要做类型转换，所以性能较差
```

#### 10、宏任务和微任务

* 宏任务：当前调用栈中执行的任务称为宏任务。（主代码快，定时器等等）。
* 微任务： 当前（此次事件循环中）宏任务执行完，**在下一个宏任务开始之前需要执行的任务为微任务**。（可以理解为回调事件，promise.then，proness.nextTick等等）。
* 宏任务中的事件放在callback queue中，由事件触发线程维护；微任务的事件放在微任务队列中，由js引擎线程维护。

#### 11、陈述输入URL回车后的过程

* 1、读取缓存：搜索自身的 DNS 缓存。(如果 DNS 缓存中找到IP 地址就跳过了接下来查找 IP 地址步骤，直接访问该 IP 地址。)
* 2、DNS 解析:将域名解析成 IP 地址
* 3、TCP 连接：TCP 三次握手，简易描述三次握手
  * 客户端：服务端你在么？
  * 服务端：客户端我在，你要连接我么？
  * 客户端：是的服务端，我要链接。
  * 连接打通，可以开始请求来
* 4、发送 HTTP 请求
* 5、服务器处理请求并返回 HTTP 报文
* 6、浏览器解析渲染页面
* 7、断开连接：TCP 四次挥手

关于第六步浏览器解析渲染页面又可以聊聊如果返回的是html页面

* 根据 HTML 解析出 DOM 树
* 根据 CSS 解析生成 CSS 规则树
* 结合 DOM 树和 CSS 规则树，生成渲染树
* 根据渲染树计算每一个节点的信息
* 根据计算好的信息绘制页面

#### 12、原型链

* 每个构造函数都有一个原型对象
* 每个原型对象都有一个指向构造函数的指针
* 每个实例函数都有一个指向原型对象的指针。
* 查找方式是一层一层查找，直至顶层。Object.prototype

#### 13、同源策略

**协议、域名、端口**必须一致。

#### 14、防抖和节流

* 防抖：触发事件后，在n秒内，事件只执行一次，如果在n秒内又触发了事件，则会重新计算函数的执行时间。
比如点击按钮，2秒后调用函数，结果在1.5秒的时候又点了，则会重新计算2秒后在调用函数。
应用场景：下拉触底加载下一页。
* 节流：连续发生的事件在n秒内，只执行为一次
应用场景比较多的是：搜索查询

#### 15、[闭包](https://gitalphabet.github.io/home/javascript/closure.html)

闭包就是能够读取其他函数内部变量的函数,可以延长变量的生命周期可以创建私有的环境
优点:

* 可以读取其他函数的内部变量
* 将变量始终保存在内存中
* 可以封装对象的私有属性和方法

缺点：消耗内存、使用不当会造成内存溢出问题

### 16、数组方法汇总

* map 循环遍历数组、返回一个新的数组
* forEach 循环遍历数组，不改变原数组
* push/pop 在数组的末尾添加/删除元素  改变原数组
* unshift/ shift 在数组的头部添加/删除元素，改变原数组
* join  把数组转化为字符串
* some  有一项返回为true，则整体为true
* every  有一项返回为true，则整体为false
* filter 数组过滤
* slice(start, end)  数组截取，包括开头，不包括截取，返回一个新的数组
* splice(start, number, value)  删除数组元素，改变原数组
* indexof/lastindexof： 查找数组项，返回对应的下标
* concat：数组的拼接，不影响原数组，浅拷贝
* sort：数组排序 改变原数组
* reverse： 数组反转，改变原数组

### 17、移动端底部input被弹出的键盘遮挡

Element.srollIntoView():方法让当前的元素滚动到浏览器窗口的可视区域内。

```md
// 只要在input的点击事件或者获取焦点的事件中，加入这个api就好了
document.querySelector('#inputed').srollIntoView();
```

### 18、click的300ms延迟问题和点击穿透问题

300ms延迟导致用户体验不好。为了解决这个问题，一般在移动端用touchstart、touchend、touchmove、tap（模拟的事件）事件来取代click事件。

方案二：FastClick
FastClick是FTLabs专门为解决移动端浏览器300ms点击延迟问题所开发的一个轻量级的库。**FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即触发模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉**。

点击穿透：
假如页面上有两个元素A和B。B元素在A元素之上。我们在B元素的touchstart事件上注册了一个回调函数，该回调函数的作用是隐藏B元素。我们发现，当我们点击B元素，B元素被隐藏了，随后，A元素触发了click元素。

这是因为在**移动端浏览器，事件执行的顺序是touchstart>touchend>click**。而click事件有300ms的延迟，当touchstart事件把B元素隐藏之后，隔了300ms，浏览器触发了click事件，但是此时B元素不见了，所以该事件被派发到A元素身上。如果A元素是一个链接，那此时页面就会意外地跳转。

### 19、iphone及ipad下输入框默认内阴影

通过以下代码设置样式：

```css
element{
  -webkit-appearance:none;
}
```
