import{_ as a,p as s,q as n,a1 as e}from"./framework-ebd9a7c2.js";const p={},t=e(`<h2 id="pm2" tabindex="-1"><a class="header-anchor" href="#pm2" aria-hidden="true">#</a> pm2</h2><p>让 <code>Node</code> 服务在退出 <code>ssh</code> 客户端后继续运行服务。</p><h3 id="安装及使用" tabindex="-1"><a class="header-anchor" href="#安装及使用" aria-hidden="true">#</a> 安装及使用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pm2 <span class="token parameter variable">-g</span>     <span class="token comment"># 命令行安装 pm2</span>
pm2 start app.js <span class="token parameter variable">-i</span> <span class="token number">4</span> <span class="token comment">#后台运行pm2，启动4个app.js</span>
                            <span class="token comment"># 也可以把&#39;max&#39; 参数传递给 start</span>
                            <span class="token comment"># 正确的进程数目依赖于Cpu的核心数目</span>
pm2 start app.js <span class="token parameter variable">--name</span> my-api <span class="token comment"># 命名进程</span>
pm2 list               <span class="token comment"># 显示所有进程状态</span>
pm2 monit              <span class="token comment"># 监视所有进程</span>
pm2 logs               <span class="token comment">#  显示所有进程日志</span>
pm2 stop all           <span class="token comment"># 停止所有进程</span>
pm2 restart all        <span class="token comment"># 重启所有进程</span>
pm2 reload all         <span class="token comment"># 0秒停机重载进程 (用于 NETWORKED 进程)</span>
pm2 stop <span class="token number">0</span>             <span class="token comment"># 停止指定的进程</span>
pm2 restart <span class="token number">0</span>          <span class="token comment"># 重启指定的进程</span>
pm2 startup            <span class="token comment"># 产生 init 脚本 保持进程活着</span>
pm2 web                <span class="token comment"># 运行健壮的 computer API endpoint (http://localhost:9615)</span>
pm2 delete <span class="token number">0</span>           <span class="token comment"># 杀死指定的进程</span>
pm2 delete all         <span class="token comment"># 杀死全部进程</span>

pm2 start app.js <span class="token parameter variable">-i</span> max             <span class="token comment"># 根据有效CPU数目启动最大进程数目</span>
pm2 start app.js <span class="token parameter variable">-i</span> <span class="token number">3</span>               <span class="token comment"># 启动3个进程</span>
pm2 start app.js <span class="token parameter variable">-x</span>                 <span class="token comment"># 用fork模式启动 app.js 而不是使用 cluster</span>
pm2 start app.js <span class="token parameter variable">-x</span> -- <span class="token parameter variable">-a</span> <span class="token number">23</span>        <span class="token comment"># 用fork模式启动 app.js 并且传递参数 (-a 23)</span>
pm2 start app.js <span class="token parameter variable">--name</span> serverone   <span class="token comment"># 启动一个进程并把它命名为 serverone</span>
pm2 stop serverone                  <span class="token comment"># 停止 serverone 进程</span>
pm2 start app.json                  <span class="token comment"># 启动进程, 在 app.json里设置选项</span>
pm2 start app.js <span class="token parameter variable">-i</span> max -- <span class="token parameter variable">-a</span> <span class="token number">23</span>    <span class="token comment"># 在--之后给 app.js 传递参数</span>
pm2 start app.js <span class="token parameter variable">-i</span> max <span class="token parameter variable">-e</span> err.log <span class="token parameter variable">-o</span> out.log  <span class="token comment"># 启动 并 生成一个配置文件</span>
<span class="token comment"># 你也可以执行用其他语言编写的app  ( fork 模式):</span>
pm2 start my-bash-script.sh    <span class="token parameter variable">-x</span> <span class="token parameter variable">--interpreter</span> <span class="token function">bash</span>
pm2 start my-python-script.py <span class="token parameter variable">-x</span> <span class="token parameter variable">--interpreter</span> python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[t];function m(r,i){return s(),n("div",null,l)}const o=a(p,[["render",m],["__file","pm2.html.vue"]]);export{o as default};
