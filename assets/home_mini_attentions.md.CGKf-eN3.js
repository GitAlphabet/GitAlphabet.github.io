import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.D5qxx6u8.js";const g=JSON.parse('{"title":"小程序注意点","description":"","frontmatter":{},"headers":[],"relativePath":"home/mini/attentions.md","filePath":"home/mini/attentions.md","lastUpdated":1717944999000}'),n={name:"home/mini/attentions.md"},e=t(`<h1 id="小程序注意点" tabindex="-1">小程序注意点 <a class="header-anchor" href="#小程序注意点" aria-label="Permalink to &quot;小程序注意点&quot;">​</a></h1><h2 id="事件绑定传参" tabindex="-1">事件绑定传参 <a class="header-anchor" href="#事件绑定传参" aria-label="Permalink to &quot;事件绑定传参&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> wx:for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{list}}&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> wx:key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;id&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bindtap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;toDetail&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> data-id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{item.id}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>获取参数</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toDetail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.currentTarget.dataset.id;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,5),l=[e];function h(p,k,r,d,o,c){return a(),i("div",null,l)}const u=s(n,[["render",h]]);export{g as __pageData,u as default};