import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},p=e(`<h3 id="react-create-app" tabindex="-1"><a class="header-anchor" href="#react-create-app" aria-hidden="true">#</a> react-create-app</h3><h4 id="_1、安装依赖" tabindex="-1"><a class="header-anchor" href="#_1、安装依赖" aria-hidden="true">#</a> 1、安装依赖</h4><table><thead><tr><th style="text-align:left;">插件名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">react-router</td><td style="text-align:left;">React 路由</td></tr><tr><td style="text-align:left;">axios</td><td style="text-align:left;">Ajax 请求</td></tr><tr><td style="text-align:left;">less</td><td style="text-align:left;">CSS 样式</td></tr><tr><td style="text-align:left;">less-loader</td><td style="text-align:left;">转换 Less</td></tr><tr><td style="text-align:left;">antd</td><td style="text-align:left;">React UI 插件</td></tr><tr><td style="text-align:left;">babel-plugin-import</td><td style="text-align:left;">antd 样式按需加载</td></tr></tbody></table><h4 id="_2、暴露配置" tabindex="-1"><a class="header-anchor" href="#_2、暴露配置" aria-hidden="true">#</a> 2、暴露配置</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run <span class="token function">eject</span> <span class="token comment"># 暴露原有的webpack配置文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、修改-webpack-config-js-文件" tabindex="-1"><a class="header-anchor" href="#_3、修改-webpack-config-js-文件" aria-hidden="true">#</a> 3、修改 webpack.config.js 文件</h4><ul><li>定义 less 文件匹配规则</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// style files regexes 样式匹配规则</span>
<span class="token keyword">const</span> cssRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">const</span> cssModuleRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.module\\.css$</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">const</span> sassRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(scss|sass)$</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">const</span> sassModuleRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.module\\.(scss|sass)$</span><span class="token regex-delimiter">/</span></span>

<span class="token comment">// 新加less匹配项</span>
<span class="token keyword">const</span> lessRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">const</span> lessModuleRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.module\\.less$</span><span class="token regex-delimiter">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 sass 的配置下新增 less 配置</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> lessRegex<span class="token punctuation">,</span>
    <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> lessModuleRegex<span class="token punctuation">,</span>
    <span class="token property">&quot;use&quot;</span><span class="token operator">:</span> getStyleLoaders(<span class="token punctuation">{</span>
    <span class="token property">&quot;importLoaders&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> &#39;less-loader&#39;)<span class="token punctuation">,</span> <span class="token comment">// 注意第二个参数</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> lessModuleRegex<span class="token punctuation">,</span>
    <span class="token property">&quot;use&quot;</span><span class="token operator">:</span> getStyleLoaders(<span class="token punctuation">{</span>
        <span class="token property">&quot;importLoaders&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;getLocalIdent&quot;</span><span class="token operator">:</span> getCSSModuleLocalIdent<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    &#39;less-loader&#39; <span class="token comment">// 注意第二个参数</span>
    )<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>getStyleLoaders 替换之前的方法，配置可修改的主题。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 之前的方法
if (preProcessor) {
    loaders.push({
    loader: require.resolve(preProcessor),
    options: {
        sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
    },
    });
}
*/</span>
<span class="token comment">// 修改后的方法，&#39;primary-color&#39; 指定主题颜色</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>preProcessor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>preProcessor <span class="token operator">===</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 为less-loader添加配置项，启动javascript</span>
    loaders<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>preProcessor<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> isEnvProduction <span class="token operator">&amp;&amp;</span> shouldUseSourceMap<span class="token punctuation">,</span>
        <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 解决上文报错</span>
        <span class="token literal-property property">modifyVars</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 修改主题颜色</span>
          <span class="token string-property property">&#39;primary-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#000000&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    loaders<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>preProcessor<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> isEnvProduction <span class="token operator">&amp;&amp;</span> shouldUseSourceMap
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、在-package-json-中或者-babelrc-中配置按需导入的组件库规则" tabindex="-1"><a class="header-anchor" href="#_4、在-package-json-中或者-babelrc-中配置按需导入的组件库规则" aria-hidden="true">#</a> 4、在 package.json 中或者.babelrc 中配置按需导入的组件库规则</h4><ul><li>package.json 配置</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;babel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;react-app&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token string">&quot;import&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;libraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;antd&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>babelrc 中配置</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;import&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;libraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;antd&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[p];function l(i,c){return n(),a("div",null,o)}const u=s(t,[["render",l],["__file","cra.html.vue"]]);export{u as default};
