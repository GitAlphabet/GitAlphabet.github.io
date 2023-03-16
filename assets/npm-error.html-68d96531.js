import{_ as n,p as e,q as a,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h3 id="npm-err-code-elifecycle" tabindex="-1"><a class="header-anchor" href="#npm-err-code-elifecycle" aria-hidden="true">#</a> npm ERR! code ELIFECYCLE</h3><h4 id="报错信息" tabindex="-1"><a class="header-anchor" href="#报错信息" aria-hidden="true">#</a> 报错信息</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>sh: umi: command not found
npm ERR! code ELIFECYCLE
npm ERR! syscall spawn
npm ERR! file sh
npm ERR! errno ENOENT
npm ERR! ant-design-pro@5.0.0 build: <span class="token code-snippet code keyword">\`umi build\`</span>
npm ERR! spawn ENOENT
npm ERR! 
npm ERR! Failed at the ant-design-pro@5.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、解决方案" tabindex="-1"><a class="header-anchor" href="#_2、解决方案" aria-hidden="true">#</a> 2、解决方案</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> package-lock.json
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[d];function r(c,o){return e(),a("div",null,l)}const p=n(i,[["render",r],["__file","npm-error.html.vue"]]);export{p as default};
