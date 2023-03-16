import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const l={},i=e(`<h3 id="babel-入门" tabindex="-1"><a class="header-anchor" href="#babel-入门" aria-hidden="true">#</a> Babel(入门)</h3><h4 id="_1、初始化" tabindex="-1"><a class="header-anchor" href="#_1、初始化" aria-hidden="true">#</a> 1、初始化</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、配置文件-babelrc" tabindex="-1"><a class="header-anchor" href="#_2、配置文件-babelrc" aria-hidden="true">#</a> 2、配置文件.babelrc</h4><p>根目录下创建 .babelrc 文件。文件基本格式如下</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、presets" tabindex="-1"><a class="header-anchor" href="#_3、presets" aria-hidden="true">#</a> 3、presets</h4><p>presets 字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ES2015转码规则</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-preset-es2015

<span class="token comment"># react转码规则</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-preset-react

<span class="token comment"># ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-preset-stage-0
<span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-preset-stage-1
<span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-preset-stage-2
<span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-preset-stage-3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、将规则导入-babelrc" tabindex="-1"><a class="header-anchor" href="#_4、将规则导入-babelrc" aria-hidden="true">#</a> 4、将规则导入 .babelrc</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;es2015&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stage-2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、全局安装-babel-cli" tabindex="-1"><a class="header-anchor" href="#_5、全局安装-babel-cli" aria-hidden="true">#</a> 5、全局安装 babel-cli</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--global</span> babel-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6、基本用法如下" tabindex="-1"><a class="header-anchor" href="#_6、基本用法如下" aria-hidden="true">#</a> 6、基本用法如下</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 转码结果输出到标准输出</span>
babel example.js

<span class="token comment"># 转码结果写入一个文件</span>
<span class="token comment"># --out-file 或 -o 参数指定输出文件</span>
babel example.js --out-file compiled.js
<span class="token comment"># 或者</span>
babel example.js <span class="token parameter variable">-o</span> compiled.js

<span class="token comment"># 整个目录转码</span>
<span class="token comment"># --out-dir 或 -d 参数指定输出目录</span>
babel src --out-dir lib
<span class="token comment"># 或者</span>
babel src <span class="token parameter variable">-d</span> lib

<span class="token comment"># -s 参数生成source map文件</span>
$ babel src <span class="token parameter variable">-d</span> lib <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7、全局-babel-cli-缺点" tabindex="-1"><a class="header-anchor" href="#_7、全局-babel-cli-缺点" aria-hidden="true">#</a> 7、全局 babel-cli 缺点</h4><p>上面代码是在全局环境下，进行 Babel 转码。这意味着，如果项目要运行，全局环境必须有 Babel，也就是说项目产生了对环境的依赖。另一方面，这样做也无法支持不同项目使用不同版本的 Babel。</p><p>一个解决办法是将 babel-cli 安装在项目之中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-cli
然后，改写package.json。
<span class="token punctuation">{</span>
  <span class="token string">&quot;devDependencies&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;babel-cli&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^6.0.0&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;babel src -d lib&quot;</span>
  <span class="token punctuation">}</span>,
<span class="token punctuation">}</span>
转码的时候，就执行下面的命令。
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8、babel-polyfill" tabindex="-1"><a class="header-anchor" href="#_8、babel-polyfill" aria-hidden="true">#</a> 8、babel-polyfill</h4><p>Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。</p><p>举例来说，ES6 在 Array 对象上新增了 Array.from 方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用 babel-polyfill，为当前环境提供一个垫片。</p><p>安装命令如下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> babel-polyfill
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>然后，在脚本头部，加入如下一行代码。
<span class="token keyword">import</span> <span class="token string">&#39;babel-polyfill&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;babel-polyfill&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),t=[i];function c(p,d){return s(),a("div",null,t)}const r=n(l,[["render",c],["__file","babel.html.vue"]]);export{r as default};
