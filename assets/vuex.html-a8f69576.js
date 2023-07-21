import{_ as n,p as s,q as a,Q as t,a1 as e}from"./framework-453091bf.js";const p={},o=e(`<h2 id="vuex-简介" tabindex="-1"><a class="header-anchor" href="#vuex-简介" aria-hidden="true">#</a> Vuex 简介</h2><ul><li>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。</li><li>它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</li></ul><h2 id="项目目录" tabindex="-1"><a class="header-anchor" href="#项目目录" aria-hidden="true">#</a> 项目目录</h2><p>src 文件夹下创建 store 文件夹及子目录如下：</p><ul><li>store <ul><li><code>state.js </code>数据存储状态的容器</li><li><code>mutations-type.js</code>常量对应 <code>mutations.js</code> 里面方法的名称</li><li><code>mutations.js</code>提交改变 <code>state</code> 里面的状态的方法</li><li><code>actions.js</code><ul><li><code>Action</code> 提交的是 <code>mutation</code>，而不是直接变更状态</li><li><code>Action</code> 可以包含任意异步操- 作。</li></ul></li><li><code>getters.js</code>从 <code>store</code> 中的 <code>state</code> 中派生出一些状态</li><li><code>index.js</code> 以上全部导入 <code>index.js</code> 文件里面引入到 <code>Vuex.Store</code></li></ul></li></ul><h3 id="state-js" tabindex="-1"><a class="header-anchor" href="#state-js" aria-hidden="true">#</a> state.js</h3><ul><li>Vuex 使用单一状态树，用一个对象就包含了全部的应用层级状态。</li><li>至此它便作为一个“唯一数据源 (SSOT:Single_source_of_truth)”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。</li><li>单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">1</span>，
  <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> state
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getters-js" tabindex="-1"><a class="header-anchor" href="#getters-js" aria-hidden="true">#</a> getters.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>有时候我们需要从 store 中的 state 中派生出一些状态。同样在别处应用时也需要使用：
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> getters <span class="token keyword">from</span> <span class="token string">&#39;./getters&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">count</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">num</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> state<span class="token punctuation">.</span>num <span class="token operator">-</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mutations-type-js" tabindex="-1"><a class="header-anchor" href="#mutations-type-js" aria-hidden="true">#</a> mutations-type.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//这里定义常量作为 mutations.js 里面的事件类型；</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SET_COUNT</span> <span class="token operator">=</span> <span class="token string">&#39;SET_COUNT &#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SET_NUM</span> <span class="token operator">=</span> <span class="token string">&#39;SET_NUM &#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SET_MULTIPLE</span> <span class="token operator">=</span> <span class="token string">&#39;SET_MULTIPLE &#39;</span>
<span class="token comment">//因为这里需要暴露多个常量，在其他文件引入需要使用ES6的：</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> types <span class="token keyword">from</span> <span class="token string">&#39;./mutations-type&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mutations-js" tabindex="-1"><a class="header-anchor" href="#mutations-js" aria-hidden="true">#</a> mutations.js</h3><ul><li>更改 <code>Vuex</code> 的 <code>store</code> 中的状态的唯一方法是提交 <code>mutation</code></li><li><code>Vuex</code> 中的 <code>mutation</code> 非常类似于事件：每个 <code>mutation</code> 都有一个字符串 事件类型(<code>type</code>)和一个回调函数 (<code>handler</code>)。</li><li>这个回调函数就是我们实际进行状态更改的地方，并且它会接受 <code>state</code> 作为第一个参数：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//此处就是引入 mutations-type.js。</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> types <span class="token keyword">from</span> <span class="token string">&#39;./mutations-type&#39;</span>
<span class="token comment">//mutations  里面的 types.SET_COUNT  就相当于 mutations-type.js 里面的 SET_COUNT</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>types<span class="token punctuation">.</span><span class="token constant">SET_COUNT</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>count <span class="token operator">=</span> count
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>types<span class="token punctuation">.</span><span class="token constant">SET_NUM</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>num <span class="token operator">=</span> num
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> mutations
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="actions-js" tabindex="-1"><a class="header-anchor" href="#actions-js" aria-hidden="true">#</a> actions.js</h3><ul><li><code>Action</code> 类似于 <code>mutation</code>,不同在于: <ul><li><code>Action</code> 提交的是 <code>mutation</code>,而不是直接变更状态。</li><li><code>Action</code> 可以包含任意异步操作。</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 处理异步</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> types <span class="token keyword">from</span> <span class="token string">&#39;./mutations-type&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>types<span class="token punctuation">.</span><span class="token constant">SET_COUNT</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>params</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;SET_COUNT&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> params<span class="token punctuation">.</span>count
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
可以看到，<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Action</span><span class="token template-punctuation string">\`</span></span> 函数接受一个 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">context</span><span class="token template-punctuation string">\`</span></span> 参数，注意，这个参数可不一般，它与 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">store</span><span class="token template-punctuation string">\`</span></span> 实例有着相同的方法和属性，但是他们并不是同一个实例。
<span class="token comment">// 处理多个提交</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>type<span class="token punctuation">.</span><span class="token constant">SET_MULTIPLE</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit<span class="token punctuation">,</span> state <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> num <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">commit</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token constant">SET_COUNT</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
    <span class="token function">commit</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token constant">SET_NUM</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="index-js" tabindex="-1"><a class="header-anchor" href="#index-js" aria-hidden="true">#</a> index.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>引入 vue、vuex、state<span class="token punctuation">.</span>js、getters<span class="token punctuation">.</span>js、mutations<span class="token punctuation">.</span>js、actions<span class="token punctuation">.</span>js。
使用 Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> actions <span class="token keyword">from</span> <span class="token string">&#39;./actions&#39;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> getters <span class="token keyword">from</span> <span class="token string">&#39;./getters&#39;</span>
<span class="token keyword">import</span> state <span class="token keyword">from</span> <span class="token string">&#39;./state&#39;</span>
<span class="token keyword">import</span> mutations <span class="token keyword">from</span> <span class="token string">&#39;./mutations&#39;</span>
<span class="token keyword">import</span> createLogger <span class="token keyword">from</span> <span class="token string">&#39;vuex/dist/logger&#39;</span> <span class="token comment">//自带的日志</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
<span class="token comment">//const debug = p<wbr>rocess.env.NODE_ENV != &#39;production&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  actions<span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>
  state<span class="token punctuation">,</span>
  mutations
  <span class="token comment">//strict:debug,</span>
  <span class="token comment">// plugins: debug ? [createLogger()]:[]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="main-js" tabindex="-1"><a class="header-anchor" href="#main-js" aria-hidden="true">#</a> main.js</h3><p>引入并注册到 Vue 实例里面</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    App
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;App/&gt;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题  mapState, mapGetters,  mapMutations, mapActions这些辅助函数</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapGetters<span class="token punctuation">,</span> mapMutations<span class="token punctuation">,</span> mapActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、state：
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">count</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token comment">// 映射 this.count 为 store.state.count</span>
  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;num&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token number">2</span>、getters：
<span class="token comment">// 映射 this.count 为 store.getters.count</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;num&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
如果你想将一个 getter 属性另取一个名字，使用对象形式：
<span class="token comment">// 映射 this.doneCount 为 store.getters.count</span>
<span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">doneCount</span><span class="token operator">:</span> <span class="token string">&#39;count&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token number">3</span><span class="token literal-property property">、mutations</span><span class="token operator">:</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token comment">// 将 this.SET_COUNT() 映射为 this.$store.commit(&#39;SET_COUNT&#39;,params)</span>
    <span class="token string">&#39;SET_COUNT&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// mapMutations 也支持载荷：</span>
    <span class="token comment">// 将 this.SET_NUM(params) 映射为 this.$store.commit(&#39;SET_NUM&#39;, params)</span>
    <span class="token string">&#39;SET_NUM&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 将 this.add() 映射为 this.$store.commit(&#39;SET_COUNT&#39;,params)</span>
  <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">add</span><span class="token operator">:</span> <span class="token string">&#39;SET_COUNT&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token number">4</span><span class="token literal-property property">、actions</span><span class="token operator">:</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token comment">// 将 this.SET_COUNT() 映射为 this.$store.dispatch(&#39;SET_COUNT&#39;,params)</span>
    <span class="token string">&#39;SET_COUNT&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// mapActions 也支持载荷：</span>
    <span class="token comment">// 将 this.SET_MULTIPLE(params) 映射为 this.$store.commit(&#39;SET_MULTIPLE&#39;, params)</span>
    <span class="token string">&#39;SET_MULTIPLE&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 将 this.add() 映射为 this.$store.dispatch(&#39;SET_COUNT&#39;,params)</span>
    <span class="token literal-property property">add</span><span class="token operator">:</span> <span class="token string">&#39;SET_COUNT&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 将 this.multiple() 映射为 \`this.$store.commit(&#39;SET_MULTIPLE&#39;,params)</span>
    <span class="token literal-property property">multiple</span><span class="token operator">:</span> <span class="token string">&#39;SET_MULTIPLE&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function c(i,l){return s(),a("div",null,[o,t(` :::tip
 因为 state，getter 为返回为某个状态值，所以使用计算属性。mutations，actions 需要放在方法里面
::: `)])}const r=n(p,[["render",c],["__file","vuex.html.vue"]]);export{r as default};
