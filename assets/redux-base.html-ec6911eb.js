import{_ as n,p as s,q as a,a1 as e}from"./framework-453091bf.js";const t="/assets/reduxFlow-b36b1336.jpg",p={},o=e('<h2 id="redux基础用法" tabindex="-1"><a class="header-anchor" href="#redux基础用法" aria-hidden="true">#</a> redux基础用法</h2><h3 id="redux工作流程" tabindex="-1"><a class="header-anchor" href="#redux工作流程" aria-hidden="true">#</a> redux工作流程</h3><p><img src="'+t+`" alt="&quot;redux工作流程&quot;" title="redux工作流程"></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>Components:借书的人。
ActionCreators:借书的指令（我要借什么书）。
Store:图书馆的管理员，接收到 Reducer 新信息返回给 Components。
Reducer:收到管理员的指令，然后返回新的信息给管理员。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> react-redux
<span class="token function">yarn</span> <span class="token function">add</span> redux
<span class="token function">yarn</span> <span class="token function">add</span> redux-devtools-extension <span class="token comment"># 调试</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redux文件目录" tabindex="-1"><a class="header-anchor" href="#redux文件目录" aria-hidden="true">#</a> redux文件目录</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>redux
actionTypes<span class="token punctuation">.</span>js       <span class="token comment">// 放置action 常量</span>
actionsCreators<span class="token punctuation">.</span>js   <span class="token comment">// action 函数</span>
loginReducer<span class="token punctuation">.</span>js     <span class="token comment">// 放置reducer,可能多个reducer</span>
rootReducer<span class="token punctuation">.</span>js      <span class="token comment">// 所有reducer 集合</span>
store<span class="token punctuation">.</span>js            <span class="token comment">// 生成 redux 的 store</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="actiontypes-js" tabindex="-1"><a class="header-anchor" href="#actiontypes-js" aria-hidden="true">#</a> actionTypes.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// action 的常量</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LOGIN</span> <span class="token operator">=</span> <span class="token string">&#39;LOGIN&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="actionscreators-js" tabindex="-1"><a class="header-anchor" href="#actionscreators-js" aria-hidden="true">#</a> actionsCreators.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入 actionTypes 常量</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> actionType <span class="token keyword">from</span> <span class="token string">&#39;./actionType&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> actionType<span class="token punctuation">.</span><span class="token constant">LOGIN</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="loginreducer-js" tabindex="-1"><a class="header-anchor" href="#loginreducer-js" aria-hidden="true">#</a> loginReducer.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建 reducer</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> actionType <span class="token keyword">from</span> <span class="token string">&#39;./actionType&#39;</span>
<span class="token keyword">const</span> initialValue <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;alphabet&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">loginReducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialValue<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> actionType<span class="token punctuation">.</span><span class="token constant">LOGIN</span><span class="token operator">:</span>
      <span class="token keyword">return</span> action<span class="token punctuation">.</span>data
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> loginReducer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rootreducer-js" tabindex="-1"><a class="header-anchor" href="#rootreducer-js" aria-hidden="true">#</a> rootReducer.js</h3><p>combineReducers 把多个 reducer 合并成一个 reducer</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> loginReducer <span class="token keyword">from</span> <span class="token string">&#39;./loginReducer&#39;</span>
<span class="token comment">// import hobbyReducer from &#39;./hobbyReducer&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">const</span> rootReducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  loginReducer
  <span class="token comment">// hobbyReducer</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> rootReducer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="store-js" tabindex="-1"><a class="header-anchor" href="#store-js" aria-hidden="true">#</a> store.js</h3><p>createStore 创建 store</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">import</span> rootReducer <span class="token keyword">from</span> <span class="token string">&#39;./rootReducer&#39;</span>
<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>
  rootReducer<span class="token punctuation">,</span>
  window<span class="token punctuation">.</span>__REDUX_DEVTOOLS_EXTENSION__ <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span><span class="token function">__REDUX_DEVTOOLS_EXTENSION__</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="index-js" tabindex="-1"><a class="header-anchor" href="#index-js" aria-hidden="true">#</a> index.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./redux/store&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./components/App&#39;</span>
<span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token comment">// 1、将这个store对象传入 react-redux 提供的 Provider 组件中，然后将它挂载在组件树的根部。</span>
<span class="token comment">// 2、这样做可以保证我们在任何时候通过 react-redux 的 connect 连接到 Redux 时，store 可以在组件中正常使用。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./App.css&#39;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> allActions <span class="token keyword">from</span> <span class="token string">&#39;./redux/action&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> bindActionCreators <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">click</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">userInfoActions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 当用  bindActionCreators(allActions, dispatch)请使用下面的代码。</span>
    <span class="token comment">/* this.props.userInfoActions.login({
      name: &#39;cx&#39;,
      age: 20
    }) */</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>click<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">点击</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// mapStateToProp 将 state 挂到 props 上,this.props 调用</span>
<span class="token comment">// 只要 Redux store 发生改变，mapStateToProps 函数就会被调用,该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并</span>
<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProp</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">userInfo</span><span class="token operator">:</span> state<span class="token punctuation">.</span>userInfo
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// mapDispatchToProps 将 dispatch 挂到 props 上,this.props调用</span>
<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token parameter">dispatch</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function">userInfoActions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> action <span class="token operator">=</span> allActions<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 或者使用 bindActionCreators</span>
  <span class="token comment">// return {</span>
  <span class="token comment">//   userInfoActions: bindActionCreators(allActions, dispatch)</span>
  <span class="token comment">// }</span>
<span class="token punctuation">}</span>
<span class="token comment">// connect 是一个 HOC（高阶组件）,传入上面两个函数后，继续返回抛出函数，暴露App组件</span>
<span class="token comment">// 连接 React 组件与 Redux store。连接操作不会改变原来的组件类。反而返回一个新的已与 Redux store 连接的组件类。</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>
  mapStateToProp<span class="token punctuation">,</span>
  mapDispatchToProps
<span class="token punctuation">)</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bindactioncreators" tabindex="-1"><a class="header-anchor" href="#bindactioncreators" aria-hidden="true">#</a> bindActionCreators</h3><p><strong>bindActionCreators(actionCreators, dispatch) 介绍</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>描述：
1、把 action creators 转成拥有同名 keys 的对象，但使用 dispatch 把每个 action creator 包围起来，这样可以直接调用它们。
2、一般情况下你可以直接在 Store 实例上调用 dispatch。如果你在 React 中使用 Redux，react-redux 会提供 dispatch 。
3、唯一使用 bindActionCreators 的场景是当你需要把 action creator 往下传到一个组件上，却不想让这个组件觉察到 Redux 的存在，而且不希望把 Redux store 或 dispatch 传给它。
4、为方便起见，你可以传入一个函数作为第一个参数，它会返回一个函数。

参数：
<span class="token code-snippet code keyword">\`1、actionCreators\`</span> (Function or Object): 一个 <span class="token code-snippet code keyword">\`action creator\`</span>，或者键值是 <span class="token code-snippet code keyword">\`action creators\`</span> 的对象。
<span class="token code-snippet code keyword">\`2、dispatch\`</span> (Function): 一个 dispatch 函数，由 <span class="token code-snippet code keyword">\`Store\`</span> 实例提供。

返回值：
(Function or Object): 一个与原对象类似的对象，只不过这个对象中的的每个函数值都可以直接 <span class="token code-snippet code keyword">\`dispatch action\`</span>。如果传入的是一个函数，返回的也是一个函数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),c=[o];function i(l,r){return s(),a("div",null,c)}const u=n(p,[["render",i],["__file","redux-base.html.vue"]]);export{u as default};
