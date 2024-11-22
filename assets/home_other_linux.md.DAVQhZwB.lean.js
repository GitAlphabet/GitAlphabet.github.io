import{_ as i,c as a,a2 as e,o as l}from"./chunks/framework.BQmytedh.js";const n="/assets/auth.CYZYhfMP.png",u=JSON.parse('{"title":"基础","description":"","frontmatter":{},"headers":[],"relativePath":"home/other/linux.md","filePath":"home/other/linux.md","lastUpdated":1732262625000}'),t={name:"home/other/linux.md"};function d(r,s,o,h,p,c){return l(),a("div",null,s[0]||(s[0]=[e('<h1 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h1><h2 id="chown" tabindex="-1">chown <a class="header-anchor" href="#chown" aria-label="Permalink to &quot;chown&quot;">​</a></h2><p>chown (change owner) ： 修改所属用户与组。</p><h2 id="chmod" tabindex="-1">chmod <a class="header-anchor" href="#chmod" aria-label="Permalink to &quot;chmod&quot;">​</a></h2><p><img src="'+n+`" alt="&quot;auth&quot;" title="auth"></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (change </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) ： 修改用户的权限。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 777</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>文件的权限字符为： <code>-rwxrwxrwx</code>,这九个权限是三个一组的！使用数字来代表各个权限，各权限的分数对照表如下:</p><ul><li>r:4</li><li>w:2</li><li>x:1</li></ul><h2 id="ls" tabindex="-1">ls <a class="header-anchor" href="#ls" aria-label="Permalink to &quot;ls&quot;">​</a></h2><ul><li>-a ：全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)</li><li>-d ：仅列出目录本身，而不是列出目录内的文件数据(常用)</li><li>-l ：长数据串列出，包含文件的属性与权限等等数据；(常用)</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将目录下的所有文件列出来(含属性与隐藏档)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -al</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="cd" tabindex="-1">cd <a class="header-anchor" href="#cd" aria-label="Permalink to &quot;cd&quot;">​</a></h2><p><strong>切换目录</strong></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 表示回到自己的家目录，亦即是 /root 这个目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 表示去到目前的上一级目录，亦即是 /root 的上一级目录的意思；</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ..</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="pwd" tabindex="-1">pwd <a class="header-anchor" href="#pwd" aria-label="Permalink to &quot;pwd&quot;">​</a></h2><p><strong>显示目前所在的目录</strong></p><ul><li>-P ：显示出确实的路径，而非使用链接 (<code>link</code>) 路径</li></ul><h2 id="mkdir" tabindex="-1">mkdir <a class="header-anchor" href="#mkdir" aria-label="Permalink to &quot;mkdir&quot;">​</a></h2><p><strong>创建新目录</strong></p><ul><li>-m ：配置文件的权限喔！直接配置，不需要看默认权限 (<code>umask</code>) 的脸色～</li><li>-p ：帮助你直接将所需要的目录(包含上一级目录)递归创建起来</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 777</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="rmdir" tabindex="-1">rmdir <a class="header-anchor" href="#rmdir" aria-label="Permalink to &quot;rmdir&quot;">​</a></h2><p><strong>删除空的目录</strong></p><ul><li>-p ：从该目录起，一次删除多级空目录</li></ul><h2 id="cp" tabindex="-1">cp <a class="header-anchor" href="#cp" aria-label="Permalink to &quot;cp&quot;">​</a></h2><p><strong>复制文件或目录</strong></p><ul><li>-a：相当於 <code>-pdr</code> 的意思，至於 <code>pdr</code> 请参考下列说明；(常用)</li><li>-d：若来源档为链接档的属性(<code>link file</code>)，则复制链接档属性而非文件本身；</li><li>-f：<strong>为强制(<code>force</code>)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次</strong>；</li><li>-i：若目标档(<code>destination</code>)已经存在时，在覆盖时会先询问动作的进行(常用)</li><li>-l：进行硬式链接(<code>hard link</code>)的链接档创建，而非复制文件本身；</li><li>-p：连同文件的属性一起复制过去，而非使用默认属性(备份常用)；</li><li>-r：<strong>递归持续复制，用於目录的复制行为；(常用)</strong></li><li>-s：复制成为符号链接档 (<code>symbolic link</code>)，亦即『捷径』文件；</li><li>-u：若 <code>destination</code> 比 <code>source</code> 旧才升级 <code>destination</code> ！</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-adfilprsu] 来源档(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 目标档(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [options] source1 source2 source3 .... directory</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="rm" tabindex="-1">rm <a class="header-anchor" href="#rm" aria-label="Permalink to &quot;rm&quot;">​</a></h2><p><strong>移除文件或目录</strong></p><ul><li>-f ：就是 <code>force</code> 的意思，忽略不存在的文件，不会出现警告信息；</li><li>-i ：<strong>互动模式</strong>，在删除前会询问使用者是否动作</li><li>-r ：递归删除,最常用在目录的删除了！这是非常危险的选项！！！</li></ul><h2 id="mv" tabindex="-1">mv <a class="header-anchor" href="#mv" aria-label="Permalink to &quot;mv&quot;">​</a></h2><p><strong>移动文件与目录，或修改名称</strong></p><ul><li>-f ：<code>force</code> 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；</li><li>-i ：若目标文件 (<code>destination</code>) 已经存在时，就会询问是否覆盖！</li><li>-u ：若目标文件已经存在，且 <code>source</code> 比较新，才会升级 (<code>update</code>)</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更名为 mvtest2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mvtest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mvtest2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="内容查看" tabindex="-1">内容查看 <a class="header-anchor" href="#内容查看" aria-label="Permalink to &quot;内容查看&quot;">​</a></h2><ul><li><code>cat</code> 由第一行开始显示文件内容</li><li><code>tac</code> 从最后一行开始显示，可以看出 <code>tac</code> 是 <code>cat</code> 的倒着写！</li><li><code>nl</code> 显示的时候，顺道输出行号！</li><li><code>more</code> 一页一页的显示文件内容</li><li><code>less</code> 与 <code>more</code> 类似，但是比 <code>more</code> 更好的是，他可以往前翻页！</li><li><code>head</code> 只看头几行</li><li><code>tail</code> 只看尾巴几行</li></ul>`,37)]))}const m=i(t,[["render",d]]);export{u as __pageData,m as default};