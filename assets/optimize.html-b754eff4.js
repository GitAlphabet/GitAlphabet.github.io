import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},t=e(`<h3 id="优化构建速度" tabindex="-1"><a class="header-anchor" href="#优化构建速度" aria-hidden="true">#</a> 优化构建速度</h3><h4 id="_1、优化-babel-loader" tabindex="-1"><a class="header-anchor" href="#_1、优化-babel-loader" aria-hidden="true">#</a> 1、优化 babel-loader</h4><p>cacheDirectory：默认值为 false。当有设置时，指定的目录将用来缓存 loader 的执行结果。之后的 Webpack 构建，将会尝试读取缓存，来避免在每次执行时，可能产生的、高性能消耗的 Babel 重新编译过程。设置空值或者 true 的话，使用默认缓存目录</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;babel-loader?cacheDirectory&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 开启缓存</span>
    <span class="token literal-property property">include</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>_dirname<span class="token punctuation">,</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 明确范围</span>
    <span class="token comment">// include 和 exclude 任选其一就行</span>
    <span class="token comment">// exclude:path.resolve(_dirname,&#39;node_modules&#39;), // 明确范围</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、ignoreplugin" tabindex="-1"><a class="header-anchor" href="#_2、ignoreplugin" aria-hidden="true">#</a> 2、IgnorePlugin</h4><p>webpack 的内置插件，作用是忽略第三方包指定目录。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 例如: moment (2.24.0版本) 会将所有本地化内容和核心功能一起打包，我们就可以使用 IgnorePlugin 在打包时忽略本地化内容。</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//忽略 moment 下的 ./locale 目录</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\.\\/locale$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">moment$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用的时候，如果我们需要指定语言，那么需要我们手动的去引入语言包，例如，引入中文语言包:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">&#39;moment&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;moment/locale/zh-cn&#39;</span><span class="token punctuation">;</span><span class="token comment">// 手动引入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、noparse-避免重复打包" tabindex="-1"><a class="header-anchor" href="#_3、noparse-避免重复打包" aria-hidden="true">#</a> 3、noParse 避免重复打包</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// xx.min.js 已经是打过包的</span>
    <span class="token literal-property property">noParse</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">react\\.min\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、happypack-多进程打包" tabindex="-1"><a class="header-anchor" href="#_4、happypack-多进程打包" aria-hidden="true">#</a> 4、happyPack 多进程打包</h4><ul><li>js 单线程，开启多进程打包</li><li>提高构建速度（多个cpu）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token comment">// 把对 .js 的处理转交给 id 为 babel 的 HappyPack 的实例处理</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;haapypack/loader?id=babel&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">include</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>_dirname<span class="token punctuation">,</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 明确范围</span>
    <span class="token comment">// include 和 exclude 任选其一就行</span>
    <span class="token comment">// exclude:path.resolve(_dirname,&#39;node_modules&#39;), // 明确范围</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">HappyPack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&#39;babel&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">loaders</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;babel-loader?cacheDirectory&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、paralleluglifyplugin-多进程压缩-js" tabindex="-1"><a class="header-anchor" href="#_5、paralleluglifyplugin-多进程压缩-js" aria-hidden="true">#</a> 5、ParallelUglifyPlugin 多进程压缩 js</h4><ul><li>webpack 内置 Uglify 工具压缩 js</li><li>js 单线程，开启多进程压缩更快</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">ParallelUglifyPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 传递给 UglifyJS 的参数</span>
      <span class="token comment">// （还是使用 UglifyJS 压缩，只不过帮助开启了多进程）</span>
      <span class="token literal-property property">uglifyJS</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">beautify</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 最紧凑的输出</span>
        <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 删除所有的注释</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 删除所有的 \`console\` 语句，可以兼容ie浏览器</span>
        <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 内嵌定义了但是只用到一次的变量</span>
        <span class="token literal-property property">collapse_vars</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 提取出出现多次但是没有定义成变量去引用的静态值</span>
        <span class="token literal-property property">reduce_vars</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[t];function o(c,i){return s(),a("div",null,l)}const u=n(p,[["render",o],["__file","optimize.html.vue"]]);export{u as default};
