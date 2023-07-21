import{_ as n,p as s,q as a,a1 as e}from"./framework-453091bf.js";const t={},p=e(`<h2 id="多入口" tabindex="-1"><a class="header-anchor" href="#多入口" aria-hidden="true">#</a> 多入口</h2><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装webpack" tabindex="-1"><a class="header-anchor" href="#安装webpack" aria-hidden="true">#</a> 安装webpack</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装html-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#安装html-webpack-plugin" aria-hidden="true">#</a> 安装html-webpack-plugin</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i --save-dev html-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="webpack-config-js" tabindex="-1"><a class="header-anchor" href="#webpack-config-js" aria-hidden="true">#</a> webpack.config.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> htmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//context:&#39;&#39;, 上下文为根目录</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./src/script/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;./src/script/a.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">&#39;./src/script/b.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;./src/script/c.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name]-[chunkhash].js&#39;</span>
    <span class="token comment">//publicPath:&#39;http://cdn.com/&#39;           // 上线的路径</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">htmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">//filename:&#39;index-[hash].html&#39;,          // 指定打包后的名称</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;a.html&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定打包后的名称</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 打包的模板页面</span>
      <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token string">&#39;body&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定脚本放在哪个位置。此处放在头部</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token comment">//在 html 引用 &lt;title&gt;&lt;%= htmlWebpackPlugin.options.title%&gt;&lt;/title&gt;</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 指定当前的 HTML 里面包含的 chunks</span>
      <span class="token comment">//excludeChunks:[&quot;b&quot;,&quot;c&quot;]                // 解决多个 chunks ,除了这些 chunks 其他都加载</span>
      <span class="token comment">/*  minify:{
            removeComments:true,                        //删除注释
            collapseInlineTagWhitespace:true,
            collapseWhitespace:true,                    //删除空格
            removeScriptTypeAttributes: true,           //移除 script 标签上的 type=&quot;text/javascript&quot;
            removeStyleLinkTypeAttributes: true,        //移除 link 标签上的type=&quot;text/css&quot;
        } */</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">htmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">//filename:&#39;index-[hash].html&#39;,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;b.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token string">&#39;body&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span>
      <span class="token comment">/*  minify: {
            removeComments: true,
            //collapseInlineTagWhitespace:true,
            collapseWhitespace: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
        } */</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">htmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">//filename:&#39;index-[hash].html&#39;,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;c.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token string">&#39;body&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
      <span class="token comment">/*  minify: {
            removeComments: true,
            //collapseInlineTagWhitespace:true,
            collapseWhitespace: true, 
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true, 
        } */</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包运行" tabindex="-1"><a class="header-anchor" href="#打包运行" aria-hidden="true">#</a> 打包运行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>命令行输入 webpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),l=[p];function i(c,o){return s(),a("div",null,l)}const u=n(t,[["render",i],["__file","pack-multiple-js.html.vue"]]);export{u as default};
