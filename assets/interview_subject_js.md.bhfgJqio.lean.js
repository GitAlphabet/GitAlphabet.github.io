import{_ as i,c as a,a2 as n,o as e}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"js面试题","description":"","frontmatter":{},"headers":[],"relativePath":"interview/subject/js.md","filePath":"interview/subject/js.md","lastUpdated":1732262625000}'),l={name:"interview/subject/js.md"};function t(p,s,h,r,d,k){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="js面试题" tabindex="-1">js面试题 <a class="header-anchor" href="#js面试题" aria-label="Permalink to &quot;js面试题&quot;">​</a></h1><h2 id="write和innerhtml" tabindex="-1">write和innerHTML <a class="header-anchor" href="#write和innerhtml" aria-label="Permalink to &quot;write和innerHTML&quot;">​</a></h2><ul><li><code>document.write</code>只能重绘整个页面</li><li><code>innerHTML</code>可以重绘页面的一部分</li></ul><h2 id="日期转换" tabindex="-1">日期转换 <a class="header-anchor" href="#日期转换" aria-label="Permalink to &quot;日期转换&quot;">​</a></h2><p><strong>将JS日期转换为ISO标准</strong></p><blockquote><p>toISOString() 方法用于将js日期转换为ISO标准。 它使用ISO标准将js Date对象转换为字符串。</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toISOString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// YYYY-MM-DDTHH:mm:ss.sssZ</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="字符截取" tabindex="-1">字符截取 <a class="header-anchor" href="#字符截取" aria-label="Permalink to &quot;字符截取&quot;">​</a></h2><p><strong>substr和substring区别</strong></p><p>substr() 函数的形式为substr(startIndex,length)。 它从startIndex返回子字符串并返回&#39;length&#39;个字符数。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ello&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>substring()</code> 函数的形式为<code>substring(startIndex,endIndex)</code>。 它返回从<code>startIndex</code>到<code>endIndex - 1</code>的子字符串。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ell&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="重绘回流" tabindex="-1">重绘回流 <a class="header-anchor" href="#重绘回流" aria-label="Permalink to &quot;重绘回流&quot;">​</a></h2><p>重绘（<code>Repaint</code>）和回流（<code>Reflow</code>）<br> 重绘和回流是渲染步骤中的一小节，但是这两个步骤对于性能影响很大。</p><ul><li>重绘是当节点需要更改外观而不会影响布局的，比如改变 <code>color</code>就叫称为重绘</li><li>回流是布局或者几何属性需要改变就称为回流。</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>回流必定会发生重绘，重绘不一定会引发回流</strong>。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流。</p></div><h2 id="计算精度" tabindex="-1">计算精度 <a class="header-anchor" href="#计算精度" aria-label="Permalink to &quot;计算精度&quot;">​</a></h2><p><strong>0.1+0.2 ===0.3？为什么？</strong></p><p>答案：不相等。</p><p>在两数相加时，会<strong>先转换成二进制</strong>，0.1 和 0.2 转换成二进制的时候尾数会发生无限循环，然后进行对阶运算，JS 引擎对二进制进行截断，所以造成精度丢失。</p><h2 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h2><ul><li>6 种原始类型，使用 typeof 运算符检查。 <ul><li>undefined：typeof instance === &quot;undefined&quot;</li><li>Boolean：typeof instance === &quot;boolean&quot;</li><li>Number：typeof instance === &quot;number&quot;</li><li>String：typeof instance === &quot;string</li><li>BigInt：typeof instance === &quot;bigint&quot;</li><li>Symbol ：typeof instance === &quot;symbol&quot;</li></ul></li><li>null：typeof instance === &quot;object&quot;。</li><li>Object：typeof instance === &quot;object&quot;。任何 constructed 对象实例的特殊非数据结构类型，也用做数据结构：new <strong>Object</strong>，new <strong>Array</strong>，new <strong>Map</strong>，new <strong>Set</strong>，new <strong>WeakMap</strong>，new <strong>WeakSet</strong>，new <strong>Date</strong>，和几乎所有通过 new keyword 创建的东西。</li><li>Function：非数据结构，尽管 typeof 操作的结果是：typeof instance === &quot;function&quot;。这个结果是为 Function 的一个特殊缩写，尽管每个 Function 构造器都由 Object 构造器派生。</li></ul><h2 id="parseint" tabindex="-1">parseInt <a class="header-anchor" href="#parseint" aria-label="Permalink to &quot;parseInt&quot;">​</a></h2><p><strong>[&#39;1&#39;,&#39;2&#39;,&#39;3&#39;].map(parseInt)的结果是什么？</strong></p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">先说结果：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[&#39;1&#39;, NaN, NaN]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">为什么不是[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;]呢，下面开始分析</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。</li><li>map() 方法按照原始数组元素顺序依次处理元素。</li></ul><p>map(parseInt)其实是：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item, index);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">即依次运行的是：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>parseInt(string, radix)</p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">string</td><td style="text-align:left;">必需。要被解析的字符串。</td></tr><tr><td style="text-align:left;">radix</td><td style="text-align:left;">可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。<br>如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。<br>如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。</td></tr></tbody></table><h2 id="sort" tabindex="-1">sort <a class="header-anchor" href="#sort" aria-label="Permalink to &quot;sort&quot;">​</a></h2><p><strong>使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">102</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 直接使用sort()方法，默认的排序方法会将数组元素转换为字符串，然后比较字符串中字符的UTF-16编码顺序来进行排序。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> brr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(brr);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//[102,15,22,29,3,8]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// sort，可以接收一个函数，返回值是比较两个数的相对顺序的值</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> brr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(brr);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//[3, 8, 15, 22, 29, 102]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="隐式转换" tabindex="-1">隐式转换 <a class="header-anchor" href="#隐式转换" aria-label="Permalink to &quot;隐式转换&quot;">​</a></h2><p><strong>== 和 === 哪个性能好？</strong></p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">== 需要做类型转换，所以性能较差</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="宏任务和微任务" tabindex="-1">宏任务和微任务 <a class="header-anchor" href="#宏任务和微任务" aria-label="Permalink to &quot;宏任务和微任务&quot;">​</a></h2><ul><li>宏任务：当前调用栈中执行的任务称为宏任务。（主代码快，定时器等等）。</li><li>微任务： 当前（此次事件循环中）宏任务执行完，<strong>在下一个宏任务开始之前需要执行的任务为微任务</strong>。（可以理解为回调事件，<code>promise.then</code>，<code>proness.nextTick</code>等等）。</li><li>宏任务中的事件放在<code>callback queue</code>中，由事件触发线程维护；微任务的事件放在微任务队列中，由js引擎线程维护。</li></ul><h2 id="浏览器访问过程" tabindex="-1">浏览器访问过程 <a class="header-anchor" href="#浏览器访问过程" aria-label="Permalink to &quot;浏览器访问过程&quot;">​</a></h2><ul><li>1、读取缓存：搜索自身的 <code>DNS</code> 缓存。(如果 <code>DNS</code> 缓存中找到<code>IP</code> 地址就跳过了接下来查找 <code>IP</code> 地址步骤，直接访问该 IP 地址。)</li><li>2、<code>DNS</code> 解析:将域名解析成 <code>IP</code> 地址</li><li>3、<code>TCP</code> 连接：<code>TCP</code> 三次握手，简易描述三次握手 <ul><li>客户端：服务端你在么？</li><li>服务端：客户端我在，你要连接我么？</li><li>客户端：是的服务端，我要链接。</li><li>连接打通，可以开始请求来</li></ul></li><li>4、发送 <code>HTTP</code> 请求</li><li>5、服务器处理请求并返回 <code>HTTP</code> 报文</li><li>6、浏览器解析渲染页面</li><li>7、断开连接：<code>TCP</code> 四次挥手</li></ul><p>关于第六步浏览器解析渲染页面又可以聊聊如果返回的是html页面</p><ul><li>根据 <code>HTML</code> 解析出 <code>DOM</code> 树</li><li>根据 <code>CSS</code> 解析生成 <code>CSS</code> 规则树</li><li>结合 <code>DOM</code> 树和 <code>CSS</code> 规则树，生成渲染树</li><li>根据渲染树计算每一个节点的信息</li><li>根据计算好的信息绘制页面</li></ul><h2 id="原型链" tabindex="-1">原型链 <a class="header-anchor" href="#原型链" aria-label="Permalink to &quot;原型链&quot;">​</a></h2><ul><li>每个构造函数都有一个原型对象</li><li>每个原型对象都有一个指向构造函数的指针</li><li>每个实例函数都有一个指向原型对象的指针。</li><li>查找方式是一层一层查找，直至顶层。<code>Object.prototype</code></li></ul><h2 id="同源策略" tabindex="-1">同源策略 <a class="header-anchor" href="#同源策略" aria-label="Permalink to &quot;同源策略&quot;">​</a></h2><p><strong>协议、域名、端口</strong>必须一致。</p><h2 id="防抖和节流" tabindex="-1">防抖和节流 <a class="header-anchor" href="#防抖和节流" aria-label="Permalink to &quot;防抖和节流&quot;">​</a></h2><ul><li>防抖：触发事件后，在n秒内，事件只执行一次，如果在n秒内又触发了事件，则会重新计算函数的执行时间。 比如点击按钮，2秒后调用函数，结果在1.5秒的时候又点了，则会重新计算2秒后在调用函数。 应用场景：下拉触底加载下一页。</li><li>节流：连续发生的事件在n秒内，只执行为一次 应用场景比较多的是：搜索查询</li></ul><h2 id="闭包" tabindex="-1"><a href="https://gitalphabet.github.io/home/javascript/closure.html" target="_blank" rel="noreferrer">闭包</a> <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;[闭包](https://gitalphabet.github.io/home/javascript/closure.html)&quot;">​</a></h2><p>闭包就是能够读取其他函数内部变量的函数,可以延长变量的生命周期可以创建私有的环境 优点:</p><ul><li>可以读取其他函数的内部变量</li><li>将变量始终保存在内存中</li><li>可以封装对象的私有属性和方法</li></ul><p>缺点：消耗内存、使用不当会造成内存溢出问题</p><h2 id="数组方法" tabindex="-1">数组方法 <a class="header-anchor" href="#数组方法" aria-label="Permalink to &quot;数组方法&quot;">​</a></h2><ul><li><code>map</code> 循环遍历数组、返回一个新的数组</li><li><code>forEach</code> 循环遍历数组，不改变原数组</li><li><code>push</code> <code>pop</code> 在数组的末尾添加/删除元素 改变原数组</li><li><code>unshift</code> <code>shift</code> 在数组的头部添加/删除元素，改变原数组</li><li><code>join</code> 把数组转化为字符串</li><li><code>some</code> 有一项返回为true，则整体为true</li><li><code>every</code> 有一项返回为true，则整体为false</li><li><code>filter</code> 数组过滤</li><li><code>slice(start, end)</code> 数组截取，包括开头，不包括截取，返回一个新的数组</li><li><code>splice(start, number, value)</code> 删除数组元素，改变原数组</li><li><code>indexof</code> <code>lastindexof</code>: 查找数组项，返回对应的下标</li><li><code>concat</code>:数组的拼接，不影响原数组，浅拷贝</li><li><code>sort</code>:数组排序 改变原数组</li><li><code>reverse</code>:数组反转，改变原数组</li></ul><h2 id="键盘遮挡" tabindex="-1">键盘遮挡 <a class="header-anchor" href="#键盘遮挡" aria-label="Permalink to &quot;键盘遮挡&quot;">​</a></h2><p><strong>移动端底部input被弹出的键盘遮挡</strong></p><p><code>Element.srollIntoView()</code>:方法让当前的元素滚动到浏览器窗口的可视区域内。</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 只要在input的点击事件或者获取焦点的事件中，加入这个api就好了</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.querySelector(&#39;#inputed&#39;).srollIntoView();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="延迟和穿透" tabindex="-1">延迟和穿透 <a class="header-anchor" href="#延迟和穿透" aria-label="Permalink to &quot;延迟和穿透&quot;">​</a></h2><p><strong>click的300ms延迟问题和点击穿透问题</strong></p><p>300ms延迟导致用户体验不好。为了解决这个问题，一般在移动端用touchstart、touchend、touchmove、tap（模拟的事件）事件来取代click事件。</p><p>方案二：FastClick FastClick是FTLabs专门为解决移动端浏览器300ms点击延迟问题所开发的一个轻量级的库。<strong>FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即触发模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉</strong>。</p><p>点击穿透： 假如页面上有两个元素A和B。B元素在A元素之上。我们在B元素的touchstart事件上注册了一个回调函数，该回调函数的作用是隐藏B元素。我们发现，当我们点击B元素，B元素被隐藏了，随后，A元素触发了click元素。</p><p>这是因为在<strong>移动端浏览器，事件执行的顺序是touchstart&gt;touchend&gt;click</strong>。而click事件有300ms的延迟，当touchstart事件把B元素隐藏之后，隔了300ms，浏览器触发了click事件，但是此时B元素不见了，所以该事件被派发到A元素身上。如果A元素是一个链接，那此时页面就会意外地跳转。</p><h2 id="阴影" tabindex="-1">阴影 <a class="header-anchor" href="#阴影" aria-label="Permalink to &quot;阴影&quot;">​</a></h2><p><strong>iphone及ipad下输入框默认内阴影</strong></p><p>通过以下代码设置样式：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">element</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -webkit-appearance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,69)]))}const E=i(l,[["render",t]]);export{c as __pageData,E as default};