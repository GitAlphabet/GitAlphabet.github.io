import{_ as e,M as i,p as l,q as t,R as n,t as s,N as c,a1 as p}from"./framework-5866ffd3.js";const o={},r=n("h3",{id:"mac-安装-nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mac-安装-nginx","aria-hidden":"true"},"#"),s(" Mac 安装 Nginx")],-1),d=n("h4",{id:"_1、安装工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1、安装工具","aria-hidden":"true"},"#"),s(" 1、安装工具")],-1),u={href:"https://brew.sh/index_zh-cn.html",target:"_blank",rel:"noopener noreferrer"},v=p(`<h4 id="_2、安装步骤" tabindex="-1"><a class="header-anchor" href="#_2、安装步骤" aria-hidden="true">#</a> 2、安装步骤</h4><ul><li>安装 homebrew</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/bin/ruby <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/master/install<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>更新 homebrew</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew update <span class="token comment"># 结果：Already up-to-date.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装 Nginx</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看 Nginx 安装目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">open</span> /usr/local/etc/nginx/
<span class="token comment"># 成功打开nginx目录，可以看到nginx.conf的配置文件（后面会用到这个配置文件）。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>编辑 nginx.conf</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /usr/local/etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、nginx-命令" tabindex="-1"><a class="header-anchor" href="#_3、nginx-命令" aria-hidden="true">#</a> 3、Nginx 命令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token comment"># 启动 nginx</span>
nginx <span class="token parameter variable">-s</span> reload <span class="token comment"># 修改配置后重新加载生效</span>
nginx <span class="token parameter variable">-s</span> reopen <span class="token comment"># 重新打开日志文件</span>
nginx <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> /path/to/nginx.conf <span class="token comment"># 测试nginx配置文件是否正确</span>
nginx <span class="token parameter variable">-s</span> stop <span class="token comment"># 快速停止nginx </span>
quit <span class="token comment"># 完整有序的停止nginx</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx <span class="token comment"># 查询nginx 进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-QUIT</span> 主进程号 <span class="token comment"># 从容停止Nginx</span>
<span class="token function">kill</span> <span class="token parameter variable">-TERM</span> 主进程号 <span class="token comment"># 快速停止Nginx</span>
<span class="token function">pkill</span> <span class="token parameter variable">-9</span> nginx  <span class="token comment"># 强制停止Nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、配置文件实例" tabindex="-1"><a class="header-anchor" href="#_4、配置文件实例" aria-hidden="true">#</a> 4、配置文件实例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function m(b,k){const a=i("ExternalLinkIcon");return l(),t("div",null,[r,d,n("p",null,[n("a",u,[s("homebrew"),c(a)])]),v])}const g=e(o,[["render",m],["__file","install.html.vue"]]);export{g as default};
