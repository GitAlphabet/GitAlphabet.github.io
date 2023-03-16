import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},t=e(`<h3 id="css常见技巧" tabindex="-1"><a class="header-anchor" href="#css常见技巧" aria-hidden="true">#</a> CSS常见技巧</h3><h4 id="_1、文本超出部分显示省略号" tabindex="-1"><a class="header-anchor" href="#_1、文本超出部分显示省略号" aria-hidden="true">#</a> 1、文本超出部分显示省略号</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">// 单行
div</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">// 多行
div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span> // 最多显示几行
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、设置input-的placeholder的字体样式" tabindex="-1"><a class="header-anchor" href="#_2、设置input-的placeholder的字体样式" aria-hidden="true">#</a> 2、设置input 的placeholder的字体样式</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input::-webkit-input-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Chrome/Opera/Safari */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input::-moz-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Firefox 19+ */</span>  
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input:-ms-input-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* IE 10+ */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input:-moz-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Firefox 18- */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;input type=<span class="token string">&quot;text&quot;</span> placeholder=<span class="token string">&quot;请设置用户名&quot;</span>&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、纯css绘制三角形" tabindex="-1"><a class="header-anchor" href="#_3、纯css绘制三角形" aria-hidden="true">#</a> 3、纯CSS绘制三角形</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 正三角 */</span>
<span class="token selector">.up-triangle</span> <span class="token punctuation">{</span>
   <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
   <span class="token property">border-width</span><span class="token punctuation">:</span> 0 25px 40px 25px<span class="token punctuation">;</span>
   <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent <span class="token function">rgb</span><span class="token punctuation">(</span>245<span class="token punctuation">,</span> 129<span class="token punctuation">,</span> 127<span class="token punctuation">)</span> transparent<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token comment">/* 倒三角 */</span>
 <span class="token selector">.down-triangle</span> <span class="token punctuation">{</span>
   <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
   <span class="token property">border-width</span><span class="token punctuation">:</span> 40px 25px 0 25px<span class="token punctuation">;</span>
   <span class="token property">border-color</span><span class="token punctuation">:</span>  <span class="token function">rgb</span><span class="token punctuation">(</span>245<span class="token punctuation">,</span> 129<span class="token punctuation">,</span> 127<span class="token punctuation">)</span> transparent transparent transparent<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[t];function i(o,l){return s(),a("div",null,c)}const r=n(p,[["render",i],["__file","skill.html.vue"]]);export{r as default};
