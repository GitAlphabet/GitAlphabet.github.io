import{_ as t,M as p,p as e,q as o,R as n,t as s,N as c,a1 as l}from"./framework-39b99327.js";const i={},r=n("h2",{id:"immer",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#immer","aria-hidden":"true"},"#"),s(" Immer")],-1),u=n("code",null,"immer",-1),d={href:"https://immerjs.github.io/immer/update-patterns",target:"_blank",rel:"noopener noreferrer"},k=l(`<h3 id="object-mutations" tabindex="-1"><a class="header-anchor" href="#object-mutations" aria-hidden="true">#</a> Object mutations</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> produce <span class="token keyword">from</span> <span class="token string">&quot;immer&quot;</span>

<span class="token keyword">const</span> todosObj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id1</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;Take out the trash&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id2</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;Check Email&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// add</span>
<span class="token keyword">const</span> addedTodosObj <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>todosObj<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    draft<span class="token punctuation">[</span><span class="token string">&quot;id3&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;Buy bananas&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// delete</span>
<span class="token keyword">const</span> deletedTodosObj <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>todosObj<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">delete</span> draft<span class="token punctuation">[</span><span class="token string">&quot;id1&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// update</span>
<span class="token keyword">const</span> updatedTodosObj <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>todosObj<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    draft<span class="token punctuation">[</span><span class="token string">&quot;id1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>done <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-mutations" tabindex="-1"><a class="header-anchor" href="#array-mutations" aria-hidden="true">#</a> Array mutations</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> produce <span class="token keyword">from</span> <span class="token string">&quot;immer&quot;</span>

<span class="token keyword">const</span> todosArray <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;id1&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;Take out the trash&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;id2&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;Check Email&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// add</span>
<span class="token keyword">const</span> addedTodosArray <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>todosArray<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    draft<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;id3&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;Buy bananas&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// delete by index</span>
<span class="token keyword">const</span> deletedTodosArray <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>todosArray<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    draft<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token comment">/*the index */</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// update by index</span>
<span class="token keyword">const</span> updatedTodosArray <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>todosArray<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    draft<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>done <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// insert at index</span>
<span class="token keyword">const</span> updatedTodosArray <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>todosArray<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    draft<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;id3&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;Buy bananas&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// remove last item</span>
<span class="token keyword">const</span> updatedTodosArray <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>todosArray<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    draft<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// remove first item</span>
<span class="token keyword">const</span> updatedTodosArray <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>todosArray<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    draft<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// add item at the beginning of the array</span>
<span class="token keyword">const</span> addedTodosArray <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>todosArray<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    draft<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;id3&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;Buy bananas&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// delete by id</span>
<span class="token keyword">const</span> deletedTodosArray <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>todosArray<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> draft<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token string">&quot;id1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> draft<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// update by id</span>
<span class="token keyword">const</span> updatedTodosArray <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>todosArray<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> draft<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token string">&quot;id1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> draft<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>done <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// filtering items</span>
<span class="token keyword">const</span> updatedTodosArray <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>todosArray<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// creating a new state is simpler in this example</span>
    <span class="token comment">// (note that we don&#39;t need produce in this case,</span>
    <span class="token comment">// but as shown below, if the filter is not on the top</span>
    <span class="token comment">// level produce is still pretty useful)</span>
    <span class="token keyword">return</span> draft<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>done<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nested-data" tabindex="-1"><a class="header-anchor" href="#nested-data" aria-hidden="true">#</a> Nested data</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> produce <span class="token keyword">from</span> <span class="token string">&quot;immer&quot;</span>

<span class="token comment">// example complex data structure</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Michel&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Get coffee&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// updating something deeply in-an-object-in-an-array-in-a-map-in-an-object:</span>
<span class="token keyword">const</span> nextStore <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    draft<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;17&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>todos<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>done <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// filtering out all unfinished todo&#39;s</span>
<span class="token keyword">const</span> nextStore <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> draft<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;17&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// when filtering, creating a fresh collection is simpler than</span>
    <span class="token comment">// removing irrelvant items</span>
    user<span class="token punctuation">.</span>todos <span class="token operator">=</span> user<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>done<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(v,b){const a=p("ExternalLinkIcon");return e(),o("div",null,[r,n("p",null,[s("本文复制 "),u,s(" 文档，做个记录。 "),n("a",d,[s("immer 使用方法"),c(a)])]),k])}const f=t(i,[["render",m],["__file","immer.html.vue"]]);export{f as default};