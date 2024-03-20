import{_ as e,M as i,p as l,q as t,R as n,t as s,N as c,a1 as o}from"./framework-39b99327.js";const p={},r=n("h2",{id:"mac安装nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mac安装nginx","aria-hidden":"true"},"#"),s(" Mac安装Nginx")],-1),d=n("h3",{id:"安装工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装工具","aria-hidden":"true"},"#"),s(" 安装工具")],-1),u={href:"https://brew.sh/index_zh-cn.html",target:"_blank",rel:"noopener noreferrer"},v=o(`<h3 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤" aria-hidden="true">#</a> 安装步骤</h3><ul><li>安装 <code>homebrew</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/bin/ruby <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/master/install<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>更新 <code>homebrew</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew update <span class="token comment"># 结果：Already up-to-date.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装 <code>Nginx</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看 <code>Nginx</code> 目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">open</span> /usr/local/etc/nginx/
<span class="token comment"># 成功打开nginx目录，可以看到nginx.conf的配置文件（后面会用到这个配置文件）。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>编辑 <code>nginx.conf</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /usr/local/etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nginx命令" tabindex="-1"><a class="header-anchor" href="#nginx命令" aria-hidden="true">#</a> Nginx命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token comment"># 启动 nginx</span>
nginx <span class="token parameter variable">-s</span> reload <span class="token comment"># 修改配置后重新加载生效</span>
nginx <span class="token parameter variable">-s</span> reopen <span class="token comment"># 重新打开日志文件</span>
nginx <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> /path/to/nginx.conf <span class="token comment"># 测试nginx配置文件是否正确</span>
nginx <span class="token parameter variable">-s</span> stop <span class="token comment"># 快速停止nginx </span>
quit <span class="token comment"># 完整有序的停止nginx</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx <span class="token comment"># 查询nginx 进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-QUIT</span> 主进程号 <span class="token comment"># 从容停止Nginx</span>
<span class="token function">kill</span> <span class="token parameter variable">-TERM</span> 主进程号 <span class="token comment"># 快速停止Nginx</span>
<span class="token function">pkill</span> <span class="token parameter variable">-9</span> nginx  <span class="token comment"># 强制停止Nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件实例" tabindex="-1"><a class="header-anchor" href="#配置文件实例" aria-hidden="true">#</a> 配置文件实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>
events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
http <span class="token punctuation">{</span>
    client_max_body_size 5m<span class="token punctuation">;</span>
    include mime.types<span class="token punctuation">;</span>
    default_type application/octet-stream<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span>
        listen <span class="token number">9999</span><span class="token punctuation">;</span>        <span class="token comment"># the port nginx is listening on</span>
        <span class="token comment">#server_name     &#39;http://192.168.1.64&#39;;    # setup your domain here</span>
        <span class="token function">gzip</span>            on<span class="token punctuation">;</span>
        gzip_types      text/plain application/xml text/css application/javascript<span class="token punctuation">;</span>
        gzip_min_length <span class="token number">1000</span><span class="token punctuation">;</span>
        include mime.types<span class="token punctuation">;</span>
        default_type application/octet-stream<span class="token punctuation">;</span>
        location /uc/ <span class="token punctuation">{</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            proxy_set_header REMOTE-HOST <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$uri</span> ~* <span class="token string">&quot;^/uc/.*?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                proxy_pass   http://192.168.1.64:7001<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            index  index.html index.htm<span class="token punctuation">;</span>

            client_max_body_size    50m<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        location /ucManage/ <span class="token punctuation">{</span>
            proxy_pass   http://192.168.4.43:6300<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function m(b,k){const a=i("ExternalLinkIcon");return l(),t("div",null,[r,d,n("p",null,[n("a",u,[s("homebrew"),c(a)])]),v])}const g=e(p,[["render",m],["__file","install.html.vue"]]);export{g as default};
