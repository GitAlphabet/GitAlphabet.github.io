import{_ as e,p as a,q as s,a1 as n}from"./framework-ebd9a7c2.js";const d={},r=n(`<h2 id="上传至服务器" tabindex="-1"><a class="header-anchor" href="#上传至服务器" aria-hidden="true">#</a> 上传至服务器</h2><h3 id="mac连接" tabindex="-1"><a class="header-anchor" href="#mac连接" aria-hidden="true">#</a> mac连接</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> root@192.168.101.203 password
<span class="token comment"># password  =&gt; 需要填写密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上传" tabindex="-1"><a class="header-anchor" href="#上传" aria-hidden="true">#</a> 上传</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 不要连接服务器，是本地上传</span>
<span class="token function">scp</span> localAddr root@129.28.133.151:serverAddr
put 文件地址
<span class="token comment"># localAddr  =&gt; 本地文件路径</span>
<span class="token comment"># serverAddr =&gt; 需要上传到服务器的路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[r];function c(l,t){return a(),s("div",null,i)}const h=e(d,[["render",c],["__file","link-server.html.vue"]]);export{h as default};
