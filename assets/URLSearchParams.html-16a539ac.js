import{_ as t,p as a,q as e,a1 as s}from"./framework-cd67069b.js";const n={},l=s(`<h2 id="urlsearchparams" tabindex="-1"><a class="header-anchor" href="#urlsearchparams" aria-hidden="true">#</a> URLSearchParams()</h2><p><code>URLSearchParams()</code> 构造函数创建并返回一个新的 <code>URLSearchParams</code> 对象。</p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>可以是以下之一：</p><ul><li>一个字符串，这个字符串从 <code>application/x-www-form-urlencoded</code> 的格式解析而来。开头的 &#39;?&#39; 字符会被忽略。</li><li>一系列基于字面量的字符串键值对，或者任何对象（例如 <code>FormData</code> 对象），能提供一系列字符串对的迭代器对象。需要注意，<code>File</code> 将被序列化为 <code>[object File]</code>，而不是它们的文件名（就像 <code>application/x-www-form-urlencoded</code> 格式中的那样）。</li><li>一个由字符串键和字符串值组成的键值对对象。请注意，不支持嵌套。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;https://example.com?foo=1&amp;bar=2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> params1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> params2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 以上 toString 后结果都为 &#39;foo=1&amp;bar=2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3><table><thead><tr><th style="text-align:center;">方法</th><th style="text-align:left;">描述</th><th style="text-align:left;">语法</th></tr></thead><tbody><tr><td style="text-align:center;">append()</td><td style="text-align:left;">插入一个新搜索参数</td><td style="text-align:left;">URLSearchParams.append(name, value)</td></tr><tr><td style="text-align:center;">delete()</td><td style="text-align:left;">删除指定名称的所有搜索参数</td><td style="text-align:left;">URLSearchParams.delete(name)</td></tr><tr><td style="text-align:center;">entries()</td><td style="text-align:left;">返回一个迭代器，允许遍历该对象中包含的所有键/值对。迭代器返回键/值对，其顺序与它们在查询字符串中出现的顺序相同。每一组键和值都是字符串对象。</td><td style="text-align:left;">searchParams.entries(name)</td></tr><tr><td style="text-align:center;">forEach()</td><td style="text-align:left;">通过回调函数来遍历 URLSearchParams 实例对象上的键值对</td><td style="text-align:left;">searchParams.forEach(callback(value,key,searchParams))</td></tr><tr><td style="text-align:center;">get()</td><td style="text-align:left;">返回第一个与搜索参数对应的值</td><td style="text-align:left;">URLSearchParams.get(name)</td></tr><tr><td style="text-align:center;">getAll()</td><td style="text-align:left;">以数组的形式返回与指定搜索参数对应的所有值</td><td style="text-align:left;">URLSearchParams.getAll(name)</td></tr><tr><td style="text-align:center;">has()</td><td style="text-align:left;">方法返回一个布尔值，表示一个指定的键名对应的值是否存在</td><td style="text-align:left;">URLSearchParams.has(name)</td></tr><tr><td style="text-align:center;">keys()</td><td style="text-align:left;">遍历器允许遍历对象中包含的所有键。这些键都是字符串对象</td><td style="text-align:left;">searchParams.keys()</td></tr><tr><td style="text-align:center;">set()</td><td style="text-align:left;">设置和搜索参数相关联的值。如果设置前已经存在匹配的值，该方法会删除多余的，如果将要设置的值不存在，则创建它。</td><td style="text-align:left;">URLSearchParams.set(name, value)</td></tr><tr><td style="text-align:center;">sort()</td><td style="text-align:left;">对包含在此对象中的所有键/值对进行排序，并返回 <code>undefined</code>。排序顺序是根据键的 <code>Unicode</code> 代码点。该方法使用稳定的排序算法 (即，将保留具有相等键的键/值对之间的相对顺序)</td><td style="text-align:left;">searchParams.set(name, value)</td></tr><tr><td style="text-align:center;">toString()</td><td style="text-align:left;">返回适用在 URL 中的查询字符串</td><td style="text-align:left;">URLSearchParams.toString()</td></tr><tr><td style="text-align:center;">values()</td><td style="text-align:left;">该遍历器允许遍历对象中包含的所有值。这些值都是<code>USVString</code>对象</td><td style="text-align:left;">searchParams.values()</td></tr></tbody></table>`,8),r=[l];function c(o,p){return a(),e("div",null,r)}const i=t(n,[["render",c],["__file","URLSearchParams.html.vue"]]);export{i as default};
