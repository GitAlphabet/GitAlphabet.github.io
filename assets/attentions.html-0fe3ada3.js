import{_ as a,p as n,q as s,a1 as t}from"./framework-5866ffd3.js";const e={},p=t(`<h3 id="小程序注意点" tabindex="-1"><a class="header-anchor" href="#小程序注意点" aria-hidden="true">#</a> 小程序注意点</h3><h4 id="_1、事件绑定传参" tabindex="-1"><a class="header-anchor" href="#_1、事件绑定传参" aria-hidden="true">#</a> 1、事件绑定传参</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{list}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>id<span class="token punctuation">&#39;</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toDetail<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{item.id}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>获取参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">toDetail</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> id <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[p];function o(l,i){return n(),s("div",null,c)}const r=a(e,[["render",o],["__file","attentions.html.vue"]]);export{r as default};
