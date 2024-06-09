import{_ as s,c as a,o as i,a3 as e}from"./chunks/framework.D5qxx6u8.js";const u=JSON.parse('{"title":"React面试题","description":"","frontmatter":{},"headers":[],"relativePath":"interview/subject/react.md","filePath":"interview/subject/react.md","lastUpdated":1717944999000}'),t={name:"interview/subject/react.md"},n=e(`<h1 id="react面试题" tabindex="-1">React面试题 <a class="header-anchor" href="#react面试题" aria-label="Permalink to &quot;React面试题&quot;">​</a></h1><h2 id="super-props" tabindex="-1">super(props) <a class="header-anchor" href="#super-props" aria-label="Permalink to &quot;super(props)&quot;">​</a></h2><p><strong>在构造函数调用 super 并将 props 作为参数传入的作用是啥？</strong></p><ul><li>在调用 <code>super()</code> 方法之前，子类构造函数无法使用this引用，<code>ES6</code> 子类也是如此。</li><li>将 <code>props</code> 参数传递给 <code>super()</code> 调用的主要原因是在子构造函数中能够通过<code>this.props</code>来获取传入的 <code>props</code>。</li></ul><h2 id="setstate" tabindex="-1">setState <a class="header-anchor" href="#setstate" aria-label="Permalink to &quot;setState&quot;">​</a></h2><p><strong>传入 setState 函数的第二个参数的作用是什么？</strong></p><blockquote><p><strong>该函数会在 setState 函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成：</strong></p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;setState has finished and the component has re-rendered.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">prevState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    streak: prevState.streak </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> props.count</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="高阶组件" tabindex="-1">高阶组件 <a class="header-anchor" href="#高阶组件" aria-label="Permalink to &quot;高阶组件&quot;">​</a></h2><blockquote><p><strong>高阶组件(HOC)是接受一个组件并返回一个新组件的函数。基本上，这是一个模式，是从 React 的组合特性中衍生出来的，称其为纯组件，因为它们可以接受任何动态提供的子组件，但不会修改或复制输入组件中的任何行为。</strong></p></blockquote><ul><li>代码重用、逻辑和引导抽象</li><li>渲染劫持</li><li><code>state</code> 抽象和操作</li><li><code>props</code> 处理</li></ul><h2 id="react-render" tabindex="-1">React-render <a class="header-anchor" href="#react-render" aria-label="Permalink to &quot;React-render&quot;">​</a></h2><p><strong>当调用setState时，React render 是如何工作的？</strong></p><p>可以将&quot;render&quot;分为两个步骤：</p><ul><li>虚拟 DOM 渲染:当render方法被调用时，它返回一个新的组件的虚拟 DOM 结构。当调用setState()时，render会被再次调用，<strong>因为默认情况下shouldComponentUpdate总是返回true，所以默认情况下 React 是没有优化的</strong>。</li><li>原生 DOM 渲染:React 只会在虚拟DOM中修改真实DOM节点，而且修改的次数非常少——这是很棒的React特性，它优化了真实DOM的变化，使React变得更快。</li></ul>`,15),l=[n];function r(p,h,k,o,d,c){return i(),a("div",null,l)}const g=s(t,[["render",r]]);export{u as __pageData,g as default};