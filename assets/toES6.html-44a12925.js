import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},t=e(`<h3 id="babel-loader-转换-es6" tabindex="-1"><a class="header-anchor" href="#babel-loader-转换-es6" aria-hidden="true">#</a> babel-loader 转换 ES6</h3><h4 id="_1、初始化" tabindex="-1"><a class="header-anchor" href="#_1、初始化" aria-hidden="true">#</a> 1、初始化</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、项目目录安装-webpack" tabindex="-1"><a class="header-anchor" href="#_2、项目目录安装-webpack" aria-hidden="true">#</a> 2、项目目录安装 webpack</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、安装-html-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#_3、安装-html-webpack-plugin" aria-hidden="true">#</a> 3、安装 html-webpack-plugin</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i --save-dev html-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4、安装-babel-loader、babel-core、babel-preset-env" tabindex="-1"><a class="header-anchor" href="#_4、安装-babel-loader、babel-core、babel-preset-env" aria-hidden="true">#</a> 4、安装 babel-loader、babel-core、babel-preset-env</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-loader babel-core
<span class="token function">npm</span> <span class="token function">install</span> babel-preset-env --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、webpack-config-js-配置如下" tabindex="-1"><a class="header-anchor" href="#_5、webpack-config-js-配置如下" aria-hidden="true">#</a> 5、webpack.config.js 配置如下</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> htmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> __dirname<span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/utils.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;/dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name].js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">src</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;env&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">htmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;a.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token string">&#39;body&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[t];function o(r,i){return s(),a("div",null,l)}const d=n(p,[["render",o],["__file","toES6.html.vue"]]);export{d as default};
