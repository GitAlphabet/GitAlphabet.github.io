import{_ as n,p as s,q as a,a1 as p}from"./framework-94826b74.js";const t={},o=p(`<h2 id="cryptojs-aes加密" tabindex="-1"><a class="header-anchor" href="#cryptojs-aes加密" aria-hidden="true">#</a> CryptoJS(AES加密)</h2><p><code>密钥必须16位</code></p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> crypto-js --save-dev
<span class="token function">yarn</span> <span class="token function">add</span> crypto-js <span class="token parameter variable">--dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ecb-模式" tabindex="-1"><a class="header-anchor" href="#ecb-模式" aria-hidden="true">#</a> ECB 模式</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 解密</span>
<span class="token function">decrypt</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> key <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;1234567890abcdef&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> decrypt <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>mode<span class="token punctuation">.</span><span class="token constant">ECB</span><span class="token punctuation">,</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>pad<span class="token punctuation">.</span>Pkcs7
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>decrypt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// 解密事件</span>
<span class="token function">decryptionHandler</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> key <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;1234567890abcdef&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> decrypt <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>mode<span class="token punctuation">.</span><span class="token constant">ECB</span><span class="token punctuation">,</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>pad<span class="token punctuation">.</span>Pkcs7
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>decrypt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cbc模式" tabindex="-1"><a class="header-anchor" href="#cbc模式" aria-hidden="true">#</a> CBC模式</h3><p>注：CBC模式必须要偏移量 <code>iv</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 加密</span>
<span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> key <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;1234567890abcdef&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> iv <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> srcs <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> encrypted <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>srcs<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    iv<span class="token punctuation">,</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>mode<span class="token punctuation">.</span><span class="token constant">CBC</span><span class="token punctuation">,</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>pad<span class="token punctuation">.</span>ZeroPadding
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> encrypted<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// 解密</span>
<span class="token function">decrypt</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> key <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;1234567890abcdef&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> iv <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> decrypt <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    iv<span class="token punctuation">,</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>mode<span class="token punctuation">.</span><span class="token constant">CBC</span><span class="token punctuation">,</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>pad<span class="token punctuation">.</span>ZeroPadding
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> decrypt<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),e=[o];function c(i,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","encryt.html.vue"]]);export{r as default};