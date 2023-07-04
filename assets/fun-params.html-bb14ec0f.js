import{_ as n,p as s,q as a,a1 as e}from"./framework-94826b74.js";const t={},p=e(`<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><h3 id="函数参数" tabindex="-1"><a class="header-anchor" href="#函数参数" aria-hidden="true">#</a> 函数参数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 仅仅在参数前面加了一个*号。在函数内部，参数numbers接收到的是一个tuple</span>
<span class="token keyword">def</span> <span class="token function">calc</span> <span class="token punctuation">(</span><span class="token operator">*</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> x <span class="token keyword">in</span> numbers<span class="token punctuation">:</span>
        <span class="token builtin">sum</span> <span class="token operator">+=</span> x
    <span class="token keyword">return</span> <span class="token builtin">sum</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>calc<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 这些可变参数在函数调用时自动组装为一个tuple,关键字参数在函数内部自动组装为一个dict</span>
<span class="token keyword">def</span> <span class="token function">person</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;name:&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token string">&#39;age:&#39;</span><span class="token punctuation">,</span> age<span class="token punctuation">,</span> <span class="token string">&#39;other:&#39;</span><span class="token punctuation">,</span> kw<span class="token punctuation">)</span>

<span class="token comment"># *args是可变参数，args接收的是一个tuple；</span>
<span class="token comment"># **kw是关键字参数，kw接收的是一个dict。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","fun-params.html.vue"]]);export{r as default};