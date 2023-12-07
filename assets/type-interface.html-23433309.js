import{_ as n,p as s,q as a,a1 as e}from"./framework-6c4d1a9b.js";const t={},p=e(`<h2 id="type和interface" tabindex="-1"><a class="header-anchor" href="#type和interface" aria-hidden="true">#</a> type和interface</h2><h3 id="相同点" tabindex="-1"><a class="header-anchor" href="#相同点" aria-hidden="true">#</a> 相同点</h3><ul><li><strong>都可以描述一个对象或者函数</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// interface</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>都允许拓展</strong><code>interface</code> 和 <code>type</code> 都可以拓展，并且两者并不是相互独立的，也就是说 <code>interface</code> 可以 <code>extends type</code>, <code>type</code> 也可以 <code>extends interface</code> 。 虽然效果差不多，但是两者语法不同。</p><ul><li><strong>interface extends interface</strong>(extends)</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点" aria-hidden="true">#</a> 不同点</h3><ul><li><code>type</code> 可以而 <code>interface</code> 不行。<strong>type 可以声明基本类型别名，联合类型，元组等类型</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 基本类型别名</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>interface</code> 可以而 <code>type</code> 不行。<strong>interface 能够声明合并</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),i=[p];function l(o,c){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","type-interface.html.vue"]]);export{d as default};
