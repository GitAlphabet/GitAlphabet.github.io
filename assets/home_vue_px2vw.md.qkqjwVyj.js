import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.D5qxx6u8.js";const u=JSON.parse('{"title":"px2vw","description":"","frontmatter":{},"headers":[],"relativePath":"home/vue/px2vw.md","filePath":"home/vue/px2vw.md","lastUpdated":1717857570000}'),l={name:"home/vue/px2vw.md"},e=n(`<h1 id="px2vw" tabindex="-1">px2vw <a class="header-anchor" href="#px2vw" aria-label="Permalink to &quot;px2vw&quot;">​</a></h1><h2 id="rem对比vw优缺点" tabindex="-1">rem对比vw优缺点 <a class="header-anchor" href="#rem对比vw优缺点" aria-label="Permalink to &quot;rem对比vw优缺点&quot;">​</a></h2><ul><li><p><code>rem</code>:</p><ul><li>和根元素<code>font-size</code>值强耦合，系统字体放大或缩小时，会导致布局错乱；</li><li>html文件头部需插入一段js代码</li></ul></li><li><p><code>vw</code>:</p><ul><li>vw单位兼容性比<code>rem</code>稍差，ios8、安卓4.4及以上才完全支持。</li></ul></li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># npm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postcss-px-to-viewport</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postcss-px-to-viewport</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  unitToConvert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  viewportWidth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">320</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  unitPrecision</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  propList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  viewportUnit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fontViewportUnit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  selectorBlackList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  minPixelValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  mediaQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  exclude</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  landscape</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  landscapeUnit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  landscapeWidth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">568</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li><code>unitToConvert</code> (String) 需要转换的单位，默认为&quot;px&quot;</li><li><code>viewportWidth</code> (Number) 设计稿的视口宽度</li><li><code>unitPrecision</code> (Number) 单位转换后保留的精度</li><li><code>propList</code> (Array) 能转化为vw的属性列表 <ul><li>传入特定的CSS属性；</li><li>可以传入通配符&quot;&quot;去匹配所有属性，例如：[&#39;&#39;]；</li><li>在属性的前或后添加&quot;*&quot;,可以匹配特定的属性. (例如[&#39;position&#39;] 会匹配 background-position-y)</li><li>在特定属性前加 &quot;!&quot;，将不转换该属性的单位 . 例如: [&#39;*&#39;, &#39;!letter-spacing&#39;]，将不转换letter-spacing</li><li>&quot;!&quot; 和 &quot;&quot;可以组合使用， 例如: [&#39;&#39;, &#39;!font*&#39;]，将不转换font-size以及font-weight等属性</li></ul></li><li><code>viewportUnit</code> (String) 希望使用的视口单位</li><li><code>fontViewportUnit</code> (String) 字体使用的视口单位</li><li><code>selectorBlackList</code> (Array) 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。 <ul><li>如果传入的值为字符串的话，只要选择器中含有传入值就会被匹配 <ul><li>例如 selectorBlackList 为 [&#39;body&#39;] 的话， 那么 .body-class 就会被忽略</li></ul></li><li>如果传入的值为正则表达式的话，那么就会依据CSS选择器是否匹配该正则 <ul><li>例如 selectorBlackList 为 [/^body$/] , 那么 body 会被忽略，而 .body 不会</li></ul></li></ul></li><li><code>minPixelValue</code> (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换</li><li><code>mediaQuery</code> (Boolean) 媒体查询里的单位是否需要转换单位</li><li><code>replace</code> (Boolean) 是否直接更换属性值，而不添加备用属性</li><li><code>exclude</code> (Array or Regexp) 忽略某些文件夹下的文件或特定文件，例如 &#39;node_modules&#39; 下的文件 <ul><li>如果值是一个正则表达式，那么匹配这个正则的文件会被忽略</li><li>如果传入的值是一个数组，那么数组里的值必须为正则</li></ul></li><li><code>landscape</code> (Boolean) 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)</li><li><code>landscapeUnit</code> (String) 横屏时使用的单位</li><li><code>landscapeWidth</code> (Number) 横屏时使用的视口宽度</li></ul><h2 id="postcss-config-js" tabindex="-1">postcss.config.js <a class="header-anchor" href="#postcss-config-js" aria-label="Permalink to &quot;postcss.config.js&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;postcss-px-to-viewport&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // options</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,10),p=[e];function t(h,r,k,d,o,c){return a(),i("div",null,p)}const g=s(l,[["render",t]]);export{u as __pageData,g as default};
