import{_ as a,c as i,a2 as n,o as p}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"参数","description":"","frontmatter":{},"headers":[],"relativePath":"home/python/fun-params.md","filePath":"home/python/fun-params.md","lastUpdated":1732262625000}'),l={name:"home/python/fun-params.md"};function e(h,s,t,k,r,d){return p(),i("div",null,s[0]||(s[0]=[n(`<h1 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h1><h2 id="函数参数" tabindex="-1">函数参数 <a class="header-anchor" href="#函数参数" aria-label="Permalink to &quot;函数参数&quot;">​</a></h2><div class="language-py vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 仅仅在参数前面加了一个*号。在函数内部，参数numbers接收到的是一个tuple</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> calc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">numbers):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    sum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> numbers:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        sum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sum</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(calc(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这些可变参数在函数调用时自动组装为一个tuple,关键字参数在函数内部自动组装为一个dict</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name, age, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kw):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;age:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, age, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;other:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, kw)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *args是可变参数，args接收的是一个tuple；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># **kw是关键字参数，kw接收的是一个dict。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,3)]))}const g=a(l,[["render",e]]);export{c as __pageData,g as default};