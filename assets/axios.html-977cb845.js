import{_ as p,M as e,p as o,q as c,R as n,t as s,N as i,a1 as a}from"./framework-5866ffd3.js";const l={},u=a(`<h3 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h3><h4 id="_1、安装" tabindex="-1"><a class="header-anchor" href="#_1、安装" aria-hidden="true">#</a> 1、安装</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> axios 
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> axios 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装其他插件的时候，可以直接在 main.js 中引入并 Vue.use()，但是 axios 并不能 use，只能每个需要发送请求的组件中即时引入。 为了解决这个问题，有两种开发思路，一是在引入 axios 之后，修改原型链，二是结合 Vuex，封装一个 aciton。这里只说修改原型链的方式 改写原型链。</p><h4 id="_2、引入-axios" tabindex="-1"><a class="header-anchor" href="#_2、引入-axios" aria-hidden="true">#</a> 2、引入 axios</h4><p>main.js 中引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时候如果在其它的组件中，是无法使用 axios 命令的。所以我们将 axios 改写为 Vue 的原型属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>axios <span class="token operator">=</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在其他组件中使用方式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>axios
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、配置" tabindex="-1"><a class="header-anchor" href="#_3、配置" aria-hidden="true">#</a> 3、配置</h4>`,12),r={href:"https://link.jianshu.com?t=https://www.kancloud.cn/yunye/axios/234845",target:"_blank",rel:"noopener noreferrer"},d=a(`<ul><li>对于 get 请求</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;virus&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对于 post 请求</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;virus&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>一次性并发多个请求</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345/permissions&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  axios<span class="token punctuation">.</span><span class="token function">spread</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">acct<span class="token punctuation">,</span> perms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>axios 可以通过配置（config）来发送请求</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//发送一个\`POST\`请求</span>
<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/user/1111&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;virus&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、完整的请求还应当包括-then-和-catch" tabindex="-1"><a class="header-anchor" href="#_4、完整的请求还应当包括-then-和-catch" aria-hidden="true">#</a> 4、完整的请求还应当包括 .then 和 .catch</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当请求成功时，会执行 .then，否则执行 .catch。 这两个回调函数都有各自独立的作用域，如果直接在里面访问 this，无法访问到 Vue 实例,这时只要添加一个 .bind(this) 就能解决这个问题</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、请求方式的别名-这里对所有已经支持的请求方式都提供了方便的别名" tabindex="-1"><a class="header-anchor" href="#_5、请求方式的别名-这里对所有已经支持的请求方式都提供了方便的别名" aria-hidden="true">#</a> 5、请求方式的别名，这里对所有已经支持的请求方式都提供了方便的别名</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span>config<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span>config<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span>config<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span>data<span class="token punctuation">[</span><span class="token punctuation">,</span>config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span>data<span class="token punctuation">[</span><span class="token punctuation">,</span>config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">patch</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span>data<span class="token punctuation">[</span><span class="token punctuation">,</span>config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6、拦截器" tabindex="-1"><a class="header-anchor" href="#_6、拦截器" aria-hidden="true">#</a> 6、拦截器</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 新建js文件,引入axios以及element ui中的loading和message组件</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Loading<span class="token punctuation">,</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
<span class="token comment">// 超时时间</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">5000</span>
<span class="token comment">// http请求拦截器</span>
<span class="token keyword">let</span> loadinginstace
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// element ui Loading方法</span>
    loadinginstace <span class="token operator">=</span> Loading<span class="token punctuation">.</span><span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">fullscreen</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    loadinginstace<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;加载超时&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// http响应拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 响应成功关闭loading</span>
    loadinginstace<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> data
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    loadinginstace<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;加载失败&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// export 之后在main.js文件导入。</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7、另外-补充" tabindex="-1"><a class="header-anchor" href="#_7、另外-补充" aria-hidden="true">#</a> 7、另外，补充</h4><p>vue cli 脚手架前端调后端数据接口时候的本地代理跨域问题，如我在本地 localhost 访问接口 https://api.douban.com/ 是要跨域的，相当于浏览器设置了一到门槛，会报错XMLHTTPRequest can not load https://api.douban.com/ Response to preflight request doesn’t pass access control…. 为什么跨域同源非同源自己去查吧，在 webpack 配置一下 proxyTable 就 OK 了，如下 config/index.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">dev</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    加入以下
    <span class="token literal-property property">proxyTable</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;https://api.douban.com/&#39;</span><span class="token punctuation">,</span><span class="token comment">//设置你调用的接口域名和端口号 别忘了加http</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span>
          <span class="token comment">//这里理解成用‘/api’代替target里面的地址，</span>
          <span class="token comment">//后面组件中我们掉接口时直接用api代替 比如我要调</span>
          <span class="token comment">//用&#39;https://api.douban.com//user/add&#39;，直接写‘/api/user/add’即可</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function k(v,m){const t=e("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[s("实际上只有 url 是必须的，完整的 api 可以参考"),n("a",r,[s("https://www.kancloud.cn/yunye/axios/234845"),i(t)])]),d])}const g=p(l,[["render",k],["__file","axios.html.vue"]]);export{g as default};
