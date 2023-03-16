import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},p=e(`<h3 id="type-和-interface-区别" tabindex="-1"><a class="header-anchor" href="#type-和-interface-区别" aria-hidden="true">#</a> type 和 interface 区别</h3><h4 id="_1、相同点" tabindex="-1"><a class="header-anchor" href="#_1、相同点" aria-hidden="true">#</a> 1、相同点</h4><ul><li>都可以描述一个对象或者函数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// interface</span>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> string
 <span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">SetUser</span> <span class="token punctuation">{</span>
 <span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// type</span>
type User <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> string
 <span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span><span class="token punctuation">;</span>
type SetUser <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>都允许拓展（extends）<br> interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。</p><ul><li><strong>interface extends interface</strong>(extends)</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>type extends type</strong> (&amp;)</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>type Name <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
type User <span class="token operator">=</span> Name <span class="token operator">&amp;</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>interface extends type</strong>(extends)</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>type Name <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>type extends interface</strong> (extends)</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
type User <span class="token operator">=</span> Name <span class="token operator">&amp;</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_2、不同点" tabindex="-1"><a class="header-anchor" href="#_2、不同点" aria-hidden="true">#</a> 2、不同点</h4><ul><li>type 可以而 interface 不行。<strong>type 可以声明基本类型别名，联合类型，元组等类型</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 基本类型别名</span>
type Name <span class="token operator">=</span> string
<span class="token comment">// 联合类型</span>
<span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
 <span class="token function">wong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
 <span class="token function">miao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
type Pet <span class="token operator">=</span> Dog <span class="token operator">|</span> Cat
<span class="token comment">// 具体定义数组每个位置的类型</span>
type PetList <span class="token operator">=</span> <span class="token punctuation">[</span>Dog<span class="token punctuation">,</span> Pet<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>interface 可以而 type 不行。<strong>interface 能够声明合并</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> string
 <span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">sex</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
<span class="token comment">/*
User 接口为 {
 name: string
 age: number
 sex: string 
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),i=[p];function l(r,c){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","type-interface.html.vue"]]);export{d as default};
