import{_ as a,p as n,q as e,a1 as s}from"./framework-5866ffd3.js";const t={},r=s(`<h3 id="访问图片返回403" tabindex="-1"><a class="header-anchor" href="#访问图片返回403" aria-hidden="true">#</a> 访问图片返回403</h3><h4 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h4><p>html 中添加以下代码</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>referrer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-referrer<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>默认http请求中会带有一个referrer字段，服务器端可以通过referrer值判断请求是否来自本站，若不是则返回403或者重定向返回其他信息，从而实现图片的防盗链。通过添加上面的html，告诉客户端不带这个referrer信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),c=[r];function o(d,i){return n(),e("div",null,c)}const p=a(t,[["render",o],["__file","img.html.vue"]]);export{p as default};
