import{_ as n,p as s,q as a,a1 as e}from"./framework-453091bf.js";const t={},p=e(`<h2 id="umi兼容ie11" tabindex="-1"><a class="header-anchor" href="#umi兼容ie11" aria-hidden="true">#</a> umi兼容IE11</h2><h3 id="修改config-js" tabindex="-1"><a class="header-anchor" href="#修改config-js" aria-hidden="true">#</a> 修改config.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">dva</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">hmr</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">immer</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 关闭 dva 的 immer</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// esbuild: {}, // 关闭 esbulid</span>
  <span class="token comment">// fastRefresh: {}, // 关闭 Fast Refresh 热更新</span>
  
  <span class="token literal-property property">nodeModulesTransform</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token comment">// none =&gt; all</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// mfsu: {}, // 关闭 mfsu</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="immer需要处理" tabindex="-1"><a class="header-anchor" href="#immer需要处理" aria-hidden="true">#</a> immer需要处理</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 想入入口处处理</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> enableES5 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;immer&#39;</span><span class="token punctuation">;</span>
<span class="token function">enableES5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function i(l,c){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","uim-ie11.html.vue"]]);export{u as default};
