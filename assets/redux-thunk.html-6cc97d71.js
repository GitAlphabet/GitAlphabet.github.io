import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},p=e(`<h3 id="redux-thunk" tabindex="-1"><a class="header-anchor" href="#redux-thunk" aria-hidden="true">#</a> redux-thunk</h3><p>dispatch 一个 action 之后，到达 reducer 之前，进行一些额外的操作，就需要用到 middleware。你可以利用 Redux middleware 来进行日志记录、创建崩溃报告、调用异步接口或者路由等等。 换言之，中间件都是对 <code>store.dispatch()</code> 的增强</p><h4 id="_1、安装" tabindex="-1"><a class="header-anchor" href="#_1、安装" aria-hidden="true">#</a> 1、安装</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> redux-thunk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、引入" tabindex="-1"><a class="header-anchor" href="#_2、引入" aria-hidden="true">#</a> 2、引入</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// store.js</span>
<span class="token comment">// 这里使用中间件，并且可以使用 redux 调试工具</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware<span class="token punctuation">,</span> compose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">&#39;redux-thunk&#39;</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&#39;./reducer&#39;</span>
<span class="token keyword">const</span> composeEnhancers <span class="token operator">=</span> window<span class="token punctuation">.</span>__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ <span class="token operator">||</span> compose
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>
  reducer<span class="token punctuation">,</span>
  <span class="token comment">/* preloadedState, */</span> <span class="token function">composeEnhancers</span><span class="token punctuation">(</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> store
<span class="token comment">// 直接将thunk中间件引入，放在applyMiddleware方法之中，传入createStore方法，就完成了store.dispatch()的功能增强。即可以在reducer中进行一些异步的操作。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、使用" tabindex="-1"><a class="header-anchor" href="#_3、使用" aria-hidden="true">#</a> 3、使用</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// actionsCreators.js</span>
<span class="token comment">// actionTypes.js 定义常量</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> actionTypes <span class="token keyword">from</span> <span class="token string">&#39;./actionTypes&#39;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">firstSetInit</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> actionTypes<span class="token punctuation">.</span><span class="token constant">FIRST_SET_LIST</span><span class="token punctuation">,</span>
  data
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 设置了 redux-thunk 参数是dispatch,如果 action creator 返回的是一个函数，就执行它，如果不是，就按照原来的next(action)执行。正因为这个action creator可以返回一个函数，那么就可以在这个函数中执行一些异步的操作。</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">init</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token parameter">dispatch</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">firstSetInit</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、applymiddleware" tabindex="-1"><a class="header-anchor" href="#_4、applymiddleware" aria-hidden="true">#</a> 4、applyMiddleware()</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 其实applyMiddleware就是Redux的一个原生方法，将所有中间件组成一个数组，依次执行。</span>
<span class="token comment">// 中间件多了可以当做参数依次传进去</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducers<span class="token punctuation">,</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">,</span> logger<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","redux-thunk.html.vue"]]);export{d as default};
