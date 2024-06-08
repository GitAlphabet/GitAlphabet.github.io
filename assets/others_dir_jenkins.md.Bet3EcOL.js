import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.D5qxx6u8.js";const e="/assets/Jenkins1.EPavlTb8.jpg",l="/assets/Jenkins3.xa2rz3QV.jpg",t="/assets/Jenkins0.ZqUL0Vf1.jpg",p="/assets/Jenkins2.BJGTgHZo.jpg",y=JSON.parse('{"title":"Jenkins","description":"","frontmatter":{},"headers":[],"relativePath":"others/dir/jenkins.md","filePath":"others/dir/jenkins.md","lastUpdated":1717857570000}'),h={name:"others/dir/jenkins.md"},r=n('<h1 id="jenkins" tabindex="-1">Jenkins <a class="header-anchor" href="#jenkins" aria-label="Permalink to &quot;Jenkins&quot;">​</a></h1><h2 id="配置服务器" tabindex="-1">配置服务器 <a class="header-anchor" href="#配置服务器" aria-label="Permalink to &quot;配置服务器&quot;">​</a></h2><p>Jenkins 系统设置里配置服务器地址 <img src="'+e+'" alt="&quot;配置服务器&quot;" title="配置服务器"></p><h2 id="项目配置" tabindex="-1">项目配置 <a class="header-anchor" href="#项目配置" aria-label="Permalink to &quot;项目配置&quot;">​</a></h2><p>配置项目的仓库地址</p><p>每个项目对应的配置 <img src="'+l+`" alt="&quot;项目配置&quot;" title="项目配置"></p><h2 id="项目脚本" tabindex="-1">项目脚本 <a class="header-anchor" href="#项目脚本" aria-label="Permalink to &quot;项目脚本&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $WORKSPACE</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dist</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#首次加载</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ \${updateDependencies} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clear</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --legacy-peer-deps</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#更新依赖</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ \${isFirstLoad} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --legacy-peer-deps</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BUILD_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dontKillMe</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="jenkins-plugin" tabindex="-1">Jenkins plugin <a class="header-anchor" href="#jenkins-plugin" aria-label="Permalink to &quot;Jenkins plugin&quot;">​</a></h2><p><code>Git Parameter</code> 选择分支发布 <img src="`+t+'" alt="&quot;Git Parameter&quot;" title="Git Parameter"></p><h2 id="jenkins报错" tabindex="-1">Jenkins报错 <a class="header-anchor" href="#jenkins报错" aria-label="Permalink to &quot;Jenkins报错&quot;">​</a></h2><ul><li>解决Jenkins报错Failed to connect and initialize SSH connection问题 <img src="'+p+'" alt="&quot;Failed to connect and initialize SSH connection&quot;" title="Failed to connect and initialize SSH connection"></li></ul>',12),k=[r];function d(c,o,F,g,u,m){return a(),i("div",null,k)}const E=s(h,[["render",d]]);export{y as __pageData,E as default};
