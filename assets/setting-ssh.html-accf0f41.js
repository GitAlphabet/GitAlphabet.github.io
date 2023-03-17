import{_ as a,p as e,q as s,a1 as n}from"./framework-69837a10.js";const i={},r=n(`<h2 id="配置ssh" tabindex="-1"><a class="header-anchor" href="#配置ssh" aria-hidden="true">#</a> 配置ssh</h2><h3 id="查看" tabindex="-1"><a class="header-anchor" href="#查看" aria-hidden="true">#</a> 查看</h3><p><strong>本地是有已经生成 ssh</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> -al~ / .ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#替换您的GitHub电子邮件地址。</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> -C<span class="token string">&#39;your_email@example.com&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打开id-rsa-pub" tabindex="-1"><a class="header-anchor" href="#打开id-rsa-pub" aria-hidden="true">#</a> 打开id_rsa.pub</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">open</span> ~/.ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),d=[r];function t(l,c){return e(),s("div",null,d)}const o=a(i,[["render",t],["__file","setting-ssh.html.vue"]]);export{o as default};
