import{_ as s,p as a,q as n,a1 as e}from"./framework-69837a10.js";const l={},i=e(`<h2 id="安装问题" tabindex="-1"><a class="header-anchor" href="#安装问题" aria-hidden="true">#</a> 安装问题</h2><h3 id="权限问题" tabindex="-1"><a class="header-anchor" href="#权限问题" aria-hidden="true">#</a> 权限问题</h3><p><strong>刚安装的mysql无法启动，提示没有权限</strong><strong>The innodb_system data file &#39;ibdata1&#39; must be writable</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>2021-11-25T05:52:43.397230Z 1 <span class="token url">[<span class="token content">ERROR</span>] [<span class="token variable">MY-012271</span>]</span> [InnoDB] The innodb_system data file &#39;ibdata1&#39; must be writable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>修改权限</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找权限文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> ibdata1
<span class="token comment"># /var/lib/mysql/ibdata1</span>

<span class="token comment"># 修改权限为 777</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /var/lib/mysql

<span class="token comment"># linux 里面为了给/usr/local/mysql这个文件夹赋予mysql用户的执行权限</span>
<span class="token function">chown</span> mysql:mysql <span class="token parameter variable">-R</span> /var/lib/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本8-x修改密码" tabindex="-1"><a class="header-anchor" href="#版本8-x修改密码" aria-hidden="true">#</a> 版本8.x修改密码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
use mysql<span class="token punctuation">;</span>
update user <span class="token builtin class-name">set</span> <span class="token function">host</span> <span class="token operator">=</span> <span class="token string">&#39;%&#39;</span> where user <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> host, user from user<span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span> <span class="token comment"># 必须加上； 重新加载权限表; 更新权限;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),t=[i];function r(c,d){return a(),n("div",null,t)}const p=s(l,[["render",r],["__file","faq.html.vue"]]);export{p as default};
