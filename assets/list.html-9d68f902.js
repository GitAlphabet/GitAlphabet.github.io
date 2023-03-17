import{_ as n,p as s,q as a,a1 as p}from"./framework-69837a10.js";const t={},e=p(`<h2 id="list与for" tabindex="-1"><a class="header-anchor" href="#list与for" aria-hidden="true">#</a> list与for</h2><h3 id="list切片" tabindex="-1"><a class="header-anchor" href="#list切片" aria-hidden="true">#</a> list切片</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>L <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># L[0:3]表示，从索引0开始取，直到索引3为止，但不包括索引3。即索引0，1，2，正好是3个元素</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>L<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 如果第一个索引是0，还可以省略</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>L<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 既然Python支持L[-1]取倒数第一个元素</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>L<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 前10个数，每三个取一个</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>L<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 所有数，每5个取一个：</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>L<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 甚至什么都不写，只写[:]就可以原样复制一个list：</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>L<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for循环写在一行" tabindex="-1"><a class="header-anchor" href="#for循环写在一行" aria-hidden="true">#</a> for循环写在一行</h3><p><strong>最前面必须是返回值</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 写列表生成式时，把要生成的元素x * x放到前面，后面跟for循环，就可以把list创建出来，十分有用，多写几次，很快就可以熟悉这种语法。</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">[</span>x <span class="token operator">*</span> x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># for循环后面还可以加上if判断</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">[</span>x <span class="token operator">*</span> x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">if</span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 还可以使用两层循环，可以生成全排列</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">[</span>m <span class="token operator">+</span> n <span class="token keyword">for</span> m <span class="token keyword">in</span> <span class="token string">&#39;ABC&#39;</span> <span class="token keyword">for</span> n <span class="token keyword">in</span> <span class="token string">&#39;XYZ&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># [&#39;AX&#39;, &#39;AY&#39;, &#39;AZ&#39;, &#39;BX&#39;, &#39;BY&#39;, &#39;BZ&#39;, &#39;CX&#39;, &#39;CY&#39;, &#39;CZ&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","list.html.vue"]]);export{r as default};