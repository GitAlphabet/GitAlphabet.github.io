import{_ as n,p as a,q as s,a1 as e}from"./framework-6c4d1a9b.js";const t={},p=e(`<h2 id="watch-注意点" tabindex="-1"><a class="header-anchor" href="#watch-注意点" aria-hidden="true">#</a> watch 注意点</h2><h3 id="监听方式" tabindex="-1"><a class="header-anchor" href="#监听方式" aria-hidden="true">#</a> 监听方式</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 监听对象需要深度监听（数组不需要）</span>
<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nVal<span class="token punctuation">,</span> oVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 处理逻辑</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 设置deep: true，将深度监听对象</span>
      <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 设置 immediate: true,将立即以表达式的当前值触发回调，解决第一次传参不触发问题。</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 非对象类型监听方式</span>
<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">count</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span>oldVal</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 处理逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">获取参数</p><p>注意，不应该使用箭头函数来定义 <code>watcher</code> 函数 (例如 searchQuery: newValue =&gt; this.updateAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 <code>undefined</code></p></div>`,4),c=[p];function o(i,l){return a(),s("div",null,c)}const u=n(t,[["render",o],["__file","watch.html.vue"]]);export{u as default};
