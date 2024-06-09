import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.D5qxx6u8.js";const g=JSON.parse('{"title":"CSS 部分属性","description":"","frontmatter":{},"headers":[],"relativePath":"home/htmlAndCss/some-css.md","filePath":"home/htmlAndCss/some-css.md","lastUpdated":1717944999000}'),l={name:"home/htmlAndCss/some-css.md"},e=n(`<h1 id="css-部分属性" tabindex="-1">CSS 部分属性 <a class="header-anchor" href="#css-部分属性" aria-label="Permalink to &quot;CSS 部分属性&quot;">​</a></h1><h2 id="calc不生效问题" tabindex="-1">calc不生效问题 <a class="header-anchor" href="#calc不生效问题" aria-label="Permalink to &quot;calc不生效问题&quot;">​</a></h2><p>使用’+’,’-‘时，’+’,’-‘前后必须要用空格，’*’,’/&#39;不需要加空格</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 错误用法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">height: calc(100vh-196px);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 正确说法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">height: calc(100vh - 196px);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// less 中使用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">height: calc(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;100vh - 196px&#39;);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="background-attachment" tabindex="-1">background-attachment <a class="header-anchor" href="#background-attachment" aria-label="Permalink to &quot;background-attachment&quot;">​</a></h2><p>如果文档比较长，那么当文档向下滚动时，背景图像也会随之滚动。当文档滚动到超过图像的位置时，图像就会消失。 您可以通过 <code>background-attachment</code> 属性防止这种滚动。通过这个属性，可以声明图像相对于可视区是固定的（fixed），因此不会受到滚动的影响：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">background-attachment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: fixed;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="webkit-line-clamp" tabindex="-1">-webkit-line-clamp <a class="header-anchor" href="#webkit-line-clamp" aria-label="Permalink to &quot;-webkit-line-clamp&quot;">​</a></h2><p>可以把 块容器 中的内容限制为指定的行数。并且在超过行数后，在最后一行显示&quot;...&quot;</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">display: -webkit-box; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*值必须为-webkit-box或者-webkit-inline-box*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-webkit-box-orient: vertical; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*值必须为vertical*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-webkit-line-clamp: 2; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*值为数字，表示一共显示几行*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">overflow: hidden;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="caret-color" tabindex="-1">caret-color <a class="header-anchor" href="#caret-color" aria-label="Permalink to &quot;caret-color&quot;">​</a></h2><p>用来定义插入光标（caret）的颜色，这里说的插入光标，就是那个在网页的可编辑器区域内，用来指示用户的输入具体会插入到哪里的那个一闪一闪的形似竖杠 | 的东西。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">caret-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: red;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="object-fit" tabindex="-1">object-fit <a class="header-anchor" href="#object-fit" aria-label="Permalink to &quot;object-fit&quot;">​</a></h2><p>object-fit: 属性指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">object-fit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: fill ｜contain ｜cover｜none;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>contain 包容 图片不会变形，图片会按照自身比例进行缩放，整个图片放入父容器中，较短的边会出现自动填充的空白。</li><li>cover 覆盖 图片不会变形，图片会按照自身比例进行缩放，整个图片放入父容器中，按照图片最短的边，纳入父容器为基准。较长的边会溢出。</li><li><code>none</code> 和父容器的宽高没关系。展示其图片最原始的宽高比，以自身图片的“中心”为基点，放置到父容器的“中心”位置。</li><li><code>scale-down</code> 内容的尺寸与 <code>none</code> 或 <code>contain</code> 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。 如果图片比父容器尺寸大，那么按照 <code>contain</code> 的效果，如果图片比父容器小，那么按照 <code>none</code> 的效果。</li></ul><h2 id="object-position" tabindex="-1">object-position <a class="header-anchor" href="#object-position" aria-label="Permalink to &quot;object-position&quot;">​</a></h2><p>object-position:属性来指定被替换元素的内容对象在元素框内的对齐方式。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">object-position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 10px 10px;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>可以设置 px，第一个值代表距离父容器左边的距离，第二个值代表距离父容器顶部的距离。</li><li>只有一个数值则只代表距离父容器左侧的距离。也可以设置%数值，但此时只有某一边有空白才会起作用，如果没有空白，刚好铺满父元素，则不起作用。设置 px 就没有这样的问题，任何之后都会起作用。</li><li><code>sobject-position: right top;</code>可以设置关键字，第一个值关键字可设置（left|center|right），第二个关键字可设置(top|center|bottom),此时不表示距离左侧或者顶部的距离，而表示放置在父元素的什么位置。拉变形，宽度和高度都被拉到父容器的 100%，以适应父容器</li></ul><h2 id="scroll-behavior" tabindex="-1">scroll-behavior <a class="header-anchor" href="#scroll-behavior" aria-label="Permalink to &quot;scroll-behavior&quot;">​</a></h2><p>当用户手动导航或者 CSSOM scrolling API 触发滚动操作时，CSS 属性 <code>scroll-behavior</code> 为一个滚动框指定滚动行为，其他任何的滚动，例如那些由于用户行为而产生的滚动，不受这个属性的影响。在根元素中指定这个属性时，它反而适用于视窗。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scroll-behavior</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: smooth | auto;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>auto</code> 滚动框立即滚动。</li><li><code>smooth</code> 滚动框通过一个用户代理预定义的时长、使用预定义的时间函数，来实现平稳的滚动，用户代理应遵循其平台的约定，如果有的话。</li></ul><h2 id="out-of-range" tabindex="-1">out-of-range <a class="header-anchor" href="#out-of-range" aria-label="Permalink to &quot;out-of-range&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:out-of-range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rgba</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="in-range" tabindex="-1">in-range <a class="header-anchor" href="#in-range" aria-label="Permalink to &quot;in-range&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:in-range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rgba</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>:out-of-range</code> CSS 伪类 表示一个 input 元素，其当前值处于属性 min 和 max 限定的范围外。</li><li><code>:in-range</code> CSS 伪类 表示一个 input 元素，其当前值处于属性 min 和 max 限定的范围内。</li></ul><h2 id="content-visibility" tabindex="-1">content-visibility <a class="header-anchor" href="#content-visibility" aria-label="Permalink to &quot;content-visibility&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Keyword values */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">content-visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: visible;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">content-visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: hidden;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">content-visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: auto;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Global values */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">content-visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: inherit;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">content-visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: initial;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">content-visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: revert;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">content-visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">revert-layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">content-visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: unset;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><code>visible</code> 没有效果。元素的内容被正常布局和呈现。</li><li><code>hidden</code> 元素跳过它的内容。跳过的内容不能被用户代理功能访问，例如在页面中查找、标签顺序导航等，也不能被选择或聚焦。这类似于给内容<code>display: none。</code>。</li><li><code>auto</code> 该元素打开<strong>布局包含、样式包含和绘制包含</strong>。如果该元素与用户不相关，它也会跳过其内容。与 hidden 不同，跳过的内容必须仍可正常用于用户代理功能，例如在页面中查找、tab 顺序导航等，并且必须正常可聚焦和可选择。<strong>使用 auto 降低长页面的渲染成本</strong></li></ul><h2 id="contain-intrinsic-size" tabindex="-1">contain-intrinsic-size <a class="header-anchor" href="#contain-intrinsic-size" aria-label="Permalink to &quot;contain-intrinsic-size&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Keyword values */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">contain-intrinsic-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: none;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* &lt;length&gt; values */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">contain-intrinsic-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 1000px;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">contain-intrinsic-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 10rem;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* width | height */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">contain-intrinsic-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 1000px 1.5em;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* auto &lt;length&gt; */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">contain-intrinsic-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: auto 300px;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* auto width | auto height */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">contain-intrinsic-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: auto 300px auto 4rem;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Global values */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">contain-intrinsic-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: inherit;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">contain-intrinsic-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: initial;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">contain-intrinsic-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: revert;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">contain-intrinsic-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: unset;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>可以为元素指定以下一个或两个值。如果指定了两个值，则第一个值适用于宽度，第二个值适用于高度。如果指定单个值，则它适用于宽度和高度</li></ul><h2 id="filter" tabindex="-1">filter <a class="header-anchor" href="#filter" aria-label="Permalink to &quot;filter&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: url(&quot;.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">./</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">./media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/examples/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shadow</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">element-id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 网址 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: blur(5px); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 模糊 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: brightness(2); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 亮度 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: contrast(200%); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 对比 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: grayscale(80%); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 将输入图像转换为灰度 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: hue-rotate(90deg); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 对输入图像应用色调旋转 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: drop-shadow(16px 16px 20px red) invert(75%); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 阴影 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: invert(100%); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 反转输入图像中的样本 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: opacity(50%); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 将透明度应用于输入图像中的样本 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: saturate(200%); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 使输入图像饱和 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: sepia(100%); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 将输入图像转换为棕褐 */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.sad-theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -webkit-filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">grayscale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -moz-filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">grayscale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -ms-filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">grayscale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -o-filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">grayscale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">grayscale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -webkit-filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">grey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">gray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: progid:DXImageTransform.Microsoft.BasicImage(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">grayscale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,39),t=[e];function p(h,r,k,d,c,E){return a(),i("div",null,t)}const b=s(l,[["render",p]]);export{g as __pageData,b as default};