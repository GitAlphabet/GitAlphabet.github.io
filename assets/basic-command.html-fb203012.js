import{_ as s,p as a,q as n,a1 as e}from"./framework-94826b74.js";const t={},c=e(`<h2 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h2><h3 id="创建仓库" tabindex="-1"><a class="header-anchor" href="#创建仓库" aria-hidden="true">#</a> 创建仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone address               <span class="token comment"># 克隆远程仓库</span>
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> address   <span class="token comment"># 克隆远程仓库制定分支</span>
<span class="token function">git</span> init                        <span class="token comment"># 初始化本地仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改提交" tabindex="-1"><a class="header-anchor" href="#修改提交" aria-hidden="true">#</a> 修改提交</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status                  <span class="token comment"># 查看状态</span>
<span class="token function">git</span> <span class="token function">diff</span>                    <span class="token comment"># 查看变更内容</span>
<span class="token function">git</span> <span class="token function">add</span> *<span class="token punctuation">(</span>-A<span class="token punctuation">)</span>               <span class="token comment"># 提交所有文件到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>              <span class="token comment"># 查看指定文件到暂存区</span>
<span class="token function">git</span> <span class="token function">mv</span> <span class="token operator">&lt;</span>old<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>new<span class="token operator">&gt;</span>          <span class="token comment"># 文件改名</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>               <span class="token comment"># 删除文件</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>      <span class="token comment"># 停止文件添加到暂存区但不删除</span>
<span class="token function">git</span> commit -m<span class="token string">&#39;描述信息&#39;</span>      <span class="token comment"># 提交文件到工作区</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看提交历史" tabindex="-1"><a class="header-anchor" href="#查看提交历史" aria-hidden="true">#</a> 查看提交历史</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log                     <span class="token comment"># 查看提交历史</span>
<span class="token function">git</span> reflog                  <span class="token comment"># 查看所有提交历史(commit、reset)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销" tabindex="-1"><a class="header-anchor" href="#撤销" aria-hidden="true">#</a> 撤销</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> sha值       <span class="token comment"># 回退到哪个版本，sha值是git log/reflog 得出来的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token punctuation">(</span>-al<span class="token punctuation">)</span>                            <span class="token comment"># 显示本地所有分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>                               <span class="token comment"># 显示远程所有分支</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>                       <span class="token comment"># 切换分支</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>new branch<span class="token operator">&gt;</span>                     <span class="token comment"># 新建分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>                      <span class="token comment"># 删除本地分支</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>           <span class="token comment"># 删除远程分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> 本地分支名 origin/远程分支名    <span class="token comment"># 拉取本地没有的远程分支</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>                          <span class="token comment"># 合并分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">拉取报错处理</p><p>fatal: Cannot update paths and switch to branch &#39;dev2&#39; at the same time. Did you intend to checkout &#39;origin/dev2&#39; which can not be resolved as commit?</p><p>先执行 git fetch<br> 后执行 git checkout -b 本地分支名 origin/远程分支名</p></div><h3 id="标签-tag" tabindex="-1"><a class="header-anchor" href="#标签-tag" aria-hidden="true">#</a> 标签 tag</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>tagName<span class="token operator">&gt;</span> <span class="token parameter variable">-m</span> <span class="token string">&#39;说明&#39;</span>    <span class="token comment"># 创建一个包含说明的标签</span>
<span class="token function">git</span> show <span class="token operator">&lt;</span>tagName<span class="token operator">&gt;</span>               <span class="token comment"># 查看标签的提交信息</span>
<span class="token function">git</span> push origin <span class="token operator">&lt;</span>tagName<span class="token operator">&gt;</span>        <span class="token comment"># 上传标签到远程仓库</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>tagName<span class="token operator">&gt;</span>             <span class="token comment"># 删除本地tag</span>
<span class="token function">git</span> push origin :<span class="token operator">&lt;</span>tagName<span class="token operator">&gt;</span>       <span class="token comment"># 删除本地tag</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token string">&#39;v0.0.*&#39;</span>              <span class="token comment"># 搜索符合模式的标签</span>
<span class="token function">git</span> push origin –tags            <span class="token comment"># 将本地所有标签全部提交到远程仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程操作" tabindex="-1"><a class="header-anchor" href="#远程操作" aria-hidden="true">#</a> 远程操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span>               <span class="token comment"># 查看远程版本库信息</span>
<span class="token function">git</span> pull origin <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>    <span class="token comment"># 拉取代码该分支</span>
<span class="token function">git</span> push origin <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>    <span class="token comment"># 上传代码到该分支</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> origin <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token comment"># 同步到远端仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cherry-pick" tabindex="-1"><a class="header-anchor" href="#cherry-pick" aria-hidden="true">#</a> cherry-pick</h3><p><code>git cherry-pick</code> 命令的作用，就是将指定的提交（<code>commit</code>）应用于其他分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commitHash<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Cherry pick 支持一次转移多个提交。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>HashA<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>HashB<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想要转移一系列的连续提交，可以使用下面的简便语法。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cherry-pick A<span class="token punctuation">..</span>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令可以转移从 A 到 B 的所有提交。它们必须按照正确的顺序放置：提交 A 必须早于提交 B，否则命令将失败，但不会报错。</p><p>注意，使用上面的命令，提交 A 将不会包含在 Cherry pick 中。如果要包含提交 A，可以使用下面的语法。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cherry-pick A^<span class="token punctuation">..</span>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="stash" tabindex="-1"><a class="header-anchor" href="#stash" aria-hidden="true">#</a> stash</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> stash <span class="token comment"># 保存当前未commit的代码</span>
<span class="token function">git</span> stash save <span class="token string">&quot;备注的内容&quot;</span> <span class="token comment"># 保存当前未commit的代码并添加备注</span>
<span class="token function">git</span> stash list <span class="token comment"># 列出stash的所有记录</span>
<span class="token function">git</span> stash <span class="token function">clear</span> <span class="token comment"># 删除stash的所有记录</span>
<span class="token function">git</span> stash apply <span class="token comment"># 应用最近一次的stash</span>
<span class="token function">git</span> stash pop <span class="token comment"># 应用最近一次的stash，随后删除该记录</span>
<span class="token function">git</span> stash drop <span class="token comment"># 删除最近的一次stash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),i=[c];function o(p,l){return a(),n("div",null,i)}const d=s(t,[["render",o],["__file","basic-command.html.vue"]]);export{d as default};