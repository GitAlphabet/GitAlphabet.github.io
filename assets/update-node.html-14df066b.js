import{_ as a,p as n,q as e,a1 as s}from"./framework-5866ffd3.js";const d={},i=s(`<h3 id="更新-node" tabindex="-1"><a class="header-anchor" href="#更新-node" aria-hidden="true">#</a> 更新 Node</h3><h4 id="_1、查看本机当前-node-和-npm-版本" tabindex="-1"><a class="header-anchor" href="#_1、查看本机当前-node-和-npm-版本" aria-hidden="true">#</a> 1、查看本机当前 Node 和 npm 版本</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、清除-node-的-cache-清除-node-的缓存" tabindex="-1"><a class="header-anchor" href="#_2、清除-node-的-cache-清除-node-的缓存" aria-hidden="true">#</a> 2、清除 node 的 cache（清除 node 的缓存）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">npm</span> cache clean <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、安装-n-版本管理工具-管理-node-没有错-就是-n" tabindex="-1"><a class="header-anchor" href="#_3、安装-n-版本管理工具-管理-node-没有错-就是-n" aria-hidden="true">#</a> 3、安装&quot;n&quot;版本管理工具，管理 node（没有错，就是 n）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4、更新-node-npm" tabindex="-1"><a class="header-anchor" href="#_4、更新-node-npm" aria-hidden="true">#</a> 4、更新 node/npm</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">sudo</span> n stable
 <span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> npm@latest <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[i];function o(t,l){return n(),e("div",null,c)}const p=a(d,[["render",o],["__file","update-node.html.vue"]]);export{p as default};
