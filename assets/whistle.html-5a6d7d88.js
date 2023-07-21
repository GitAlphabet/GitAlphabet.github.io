import{_ as s,p as e,q as a,a1 as n}from"./framework-453091bf.js";const i={},l=n(`<h2 id="whistle" tabindex="-1"><a class="header-anchor" href="#whistle" aria-hidden="true">#</a> whistle</h2><h3 id="安装-启动" tabindex="-1"><a class="header-anchor" href="#安装-启动" aria-hidden="true">#</a> 安装/启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> whistle <span class="token comment"># 安装</span>

w2 <span class="token builtin class-name">help</span> <span class="token comment"># 查看帮助</span>

w2 start <span class="token comment"># 启动</span>

w2 restart  <span class="token comment"># 重启whsitle</span>

w2 stop <span class="token comment"># 停止whistle</span>

w2 run <span class="token comment"># 调试模式启动whistle(主要用于查看whistle的异常及插件开发)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问whistle" tabindex="-1"><a class="header-anchor" href="#访问whistle" aria-hidden="true">#</a> 访问Whistle</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>address：127.0.0.1:8899
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置代理" tabindex="-1"><a class="header-anchor" href="#配置代理" aria-hidden="true">#</a> 配置代理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>手机<span class="token punctuation">(</span>需要和电脑在同一网段<span class="token punctuation">)</span>配置代理即可抓包。
Chrome浏览器可以安装Proxy SwitchyOmega做代理。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[l];function t(c,r){return e(),a("div",null,d)}const o=s(i,[["render",t],["__file","whistle.html.vue"]]);export{o as default};
