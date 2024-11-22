import{_ as s,c as a,a2 as e,o as n}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"CSS面试题","description":"","frontmatter":{},"headers":[],"relativePath":"interview/subject/css.md","filePath":"interview/subject/css.md","lastUpdated":1732262625000}'),l={name:"interview/subject/css.md"};function h(t,i,p,d,k,r){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="css面试题" tabindex="-1">CSS面试题 <a class="header-anchor" href="#css面试题" aria-label="Permalink to &quot;CSS面试题&quot;">​</a></h1><h2 id="line-height继承" tabindex="-1">line-height继承 <a class="header-anchor" href="#line-height继承" aria-label="Permalink to &quot;line-height继承&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    line-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; // </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 标签 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">line-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 为20</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">px</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    line-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;    // </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 标签 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">line-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 为40</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(20*2)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    line-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  // </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 标签 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">line-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 为80</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(40*2)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><code>line-height</code> 为具体的数值时，就是多少 px;</li><li><code>line-height</code> 为具体的比例时，当前标签的<code>font-size</code> * <code>line-height</code>;</li><li><strong><code>line-height</code> 为具体的百分比时，当前继承标签的 <code>font-size</code> * <code>line-height</code> 单位为 px;</strong></li></ul><h2 id="link和-import区别" tabindex="-1">link和@import区别 <a class="header-anchor" href="#link和-import区别" aria-label="Permalink to &quot;link和@import区别&quot;">​</a></h2><ul><li><code>link</code>属于<code>HTML</code>标签，而<code>@import</code>是<code>CSS</code>提供的;</li><li>页面被加载的时，<strong><code>link</code>会同时被加载，而<code>@import</code>引用的<code>CSS</code>会等到页面被加载完再加载</strong>;</li><li><code>import</code>只在IE5以上才能识别，而<code>link</code>是<code>HTML</code>标签，无兼容问题;</li><li><code>link</code>方式的样式的权重高于<code>@import</code>的权重.</li></ul><h2 id="margin纵向重叠" tabindex="-1">margin纵向重叠 <a class="header-anchor" href="#margin纵向重叠" aria-label="Permalink to &quot;margin纵向重叠&quot;">​</a></h2><ul><li>相邻元素的 <code>margin-top</code> 和 <code>margin-bottom</code> 会发生重叠。（取最大值）</li><li>空白的 p 标签也会重叠。</li></ul><h2 id="margin负值" tabindex="-1">margin负值 <a class="header-anchor" href="#margin负值" aria-label="Permalink to &quot;margin负值&quot;">​</a></h2><ul><li><code>margin-top</code> 和 <code>margin-left</code> 负值,元素向上、向左移动。</li><li><code>margin-right</code> 负值,右侧元素左移，自身不受影响。</li><li><code>margin-bottom</code> 负值,下侧元素上移，自身不受影响。</li></ul><h2 id="盒模型" tabindex="-1">盒模型 <a class="header-anchor" href="#盒模型" aria-label="Permalink to &quot;盒模型&quot;">​</a></h2><ul><li>IE盒模型:<code>width</code> 指 <code>content</code>+<code>padding</code>+<code>border</code></li><li>标准盒模型:<code>width</code>指<code>content</code>部分的宽度</li></ul>`,12)]))}const E=s(l,[["render",h]]);export{c as __pageData,E as default};