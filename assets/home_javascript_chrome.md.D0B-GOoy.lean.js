import{_ as a,c as i,a2 as e,o as l}from"./chunks/framework.BQmytedh.js";const k=JSON.parse('{"title":"Chrome DevTools","description":"","frontmatter":{},"headers":[],"relativePath":"home/javascript/chrome.md","filePath":"home/javascript/chrome.md","lastUpdated":1732262625000}'),n={name:"home/javascript/chrome.md"};function t(h,s,r,o,p,d){return l(),i("div",null,s[0]||(s[0]=[e(`<h1 id="chrome-devtools" tabindex="-1">Chrome DevTools <a class="header-anchor" href="#chrome-devtools" aria-label="Permalink to &quot;Chrome DevTools&quot;">​</a></h1><h2 id="显示标尺" tabindex="-1">显示标尺 <a class="header-anchor" href="#显示标尺" aria-label="Permalink to &quot;显示标尺&quot;">​</a></h2><p>通过以下两种方式之一启用标尺：</p><ul><li>按<code>Control+ Shift+P</code>或<code>Command+ Shift+ P(Mac)</code> 打开命令菜单，键入<code>Show rulers on hover</code>，然后按Enter。</li><li>检查设置“设置” &gt; “首选项” &gt; “元素” &gt; “悬停时显示标尺”。</li></ul><h2 id="隐藏元素" tabindex="-1">隐藏元素 <a class="header-anchor" href="#隐藏元素" aria-label="Permalink to &quot;隐藏元素&quot;">​</a></h2><p>选中节点，按 H 键即隐藏，再次点击显示。</p><h2 id="删除元素" tabindex="-1">删除元素 <a class="header-anchor" href="#删除元素" aria-label="Permalink to &quot;删除元素&quot;">​</a></h2><p>选中节点，按 <code>Delete</code> 键即删除</p><h2 id="查看元素属性" tabindex="-1">查看元素属性 <a class="header-anchor" href="#查看元素属性" aria-label="Permalink to &quot;查看元素属性&quot;">​</a></h2><p>选中节点，选择 <code>Properties</code></p><h2 id="css颜色" tabindex="-1">css颜色 <a class="header-anchor" href="#css颜色" aria-label="Permalink to &quot;css颜色&quot;">​</a></h2><p>选中节点，颜色选择器color提供了用于更改和声明的GUI ，让您只需单击*-color即可创建、转换（shift + click）和调试(click)非高清和高清颜色。</p><h2 id="条件断点" tabindex="-1">条件断点 <a class="header-anchor" href="#条件断点" aria-label="Permalink to &quot;条件断点&quot;">​</a></h2><p>设置条件代码行断点：</p><ul><li>打开“来源”选项卡。</li><li>打开包含要中断的代码行的文件。</li><li>转到代码行。</li><li>代码行的左侧是行号列。<strong>右键单击它</strong>。</li><li>选择添加条件断点。代码行下方会显示一个对话框。</li><li>在对话框中输入您的条件。</li><li>按Enter激活断点。带问号的橙色图标出现在行号列的顶部。</li></ul><h2 id="函数断点" tabindex="-1">函数断点 <a class="header-anchor" href="#函数断点" aria-label="Permalink to &quot;函数断点&quot;">​</a></h2><p>Call <code>debug(functionName)</code>，当<code>functionName</code>您想要在调用特定函数时暂停时，您要调试的函数在哪里。您可以插入<code>debug()</code>代码（如<code>console.log()</code>语句）或从 DevTools 控制台调用它。<code>debug()</code>相当于在函数的第一行设置代码行断点。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// DevTools pauses on this line.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sum); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Pass the function object, not a string.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,18)]))}const u=a(n,[["render",t]]);export{k as __pageData,u as default};
