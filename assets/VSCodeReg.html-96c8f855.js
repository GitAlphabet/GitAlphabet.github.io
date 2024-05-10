import{_ as n,p as s,q as a,a1 as e}from"./framework-1c630d00.js";const t={},p=e(`<h2 id="vscode-正则替换" tabindex="-1"><a class="header-anchor" href="#vscode-正则替换" aria-hidden="true">#</a> VSCode 正则替换</h2><h3 id="末尾需要加分号" tabindex="-1"><a class="header-anchor" href="#末尾需要加分号" aria-hidden="true">#</a> 末尾需要加分号</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span>
<span class="token punctuation">}</span>
<span class="token comment">// 查找：(\\w):(.+)</span>
<span class="token comment">// 替换：$1:$2,  </span>
<span class="token comment">// $1,$2 表示括号里的变量</span>
<span class="token comment">// 替换后</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[p];function c(o,i){return s(),a("div",null,r)}const d=n(t,[["render",c],["__file","VSCodeReg.html.vue"]]);export{d as default};
