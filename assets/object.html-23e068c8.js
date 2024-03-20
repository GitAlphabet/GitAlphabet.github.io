import{_ as n,p as s,q as a,a1 as t}from"./framework-39b99327.js";const p={},o=t(`<h2 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h2><h3 id="object-is" tabindex="-1"><a class="header-anchor" href="#object-is" aria-hidden="true">#</a> Object.is()</h3><ul><li>用法</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>参数</p><p><strong>Object.is(value1, value2)</strong></p><ul><li>value1:要比较的第一个值。</li><li>value2:要比较的第二个值。</li><li>返回值:一个布尔值，指示两个参数是否为相同的值。</li></ul></li><li><p>描述</p><p><code>Object.is()</code> 确定两个值是否为相同值。如果以下其中一项成立，则两个值相同：</p><ul><li>都是 <code>undefined</code></li><li>都是 <code>null</code></li><li>都是 <code>true</code> 或者都是 <code>false</code></li><li>都是长度相同、字符相同、顺序相同的字符串</li><li>都是相同的对象（意味着两个值都引用了内存中的同一对象）</li><li>都是 <code>BigInt</code> 且具有相同的数值</li><li>都是 <code>symbol</code> 且引用相同的 <code>symbol</code> 值</li><li>都是数字且 <ul><li>都是 <code>+0</code></li><li>都是 <code>-0</code></li><li>都是 <code>NaN</code></li><li>都有相同的值，非零且都不是 <code>NaN</code></li></ul></li></ul></li></ul><p><strong><code>Object.is()</code> 与 == 运算符并不等价。</strong>== 运算符在测试相等性之前，会对两个操作数进行类型转换（如果它们不是相同的类型），这可能会导致一些非预期的行为，例如 &quot;&quot; == <code>false</code> 的结果是 <code>true</code>，但是 <code>Object.is()</code> 不会对其操作数进行类型转换。</p><p><strong><code>Object.is()</code> 也不等价于 === 运算符。</strong><code>Object.is()</code> 和 === 之间的唯一区别在于它们处理带符号的 0 和 <code>NaN</code> 值的时候。=== 运算符（和 == 运算符）将数值 -0 和 +0 视为相等，但是会将 NaN 视为彼此不相等。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 案例 1：评估结果和使用 === 相同</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sameFoo <span class="token operator">=</span> foo<span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> sameFoo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token comment">// 案例 2: 带符号的 0</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token comment">// 案例 3: NaN</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> Number<span class="token punctuation">.</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","object.html.vue"]]);export{k as default};