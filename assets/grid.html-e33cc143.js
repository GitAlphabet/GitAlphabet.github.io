import{_ as e,M as t,p,q as c,R as n,t as s,N as i,a1 as o}from"./framework-94826b74.js";const l="/assets/grid1-e3502446.png",d="/assets/grid2-b7a7a3ac.png",r={},u=n("h2",{id:"grid",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grid","aria-hidden":"true"},"#"),s(" Grid")],-1),m=n("h3",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout",target:"_blank",rel:"noopener noreferrer"},k=o('<p>CSS Gird布局也叫二维网格布局系统，可用于布局页面主要的区域布局或小型组件。网格是一组相交的水平线和垂直线，它定义了网格的列和行。我们可以指定将网格元素放置在与这些行和列相关的位置上。</p><h3 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h3><p><strong>像流布局和Flex布局，他们都是一维布局</strong>。一维布局一次只能处理一个维度上的元素布局，一行或者一列。回想一下，流布局和Flex布局的兄弟节点，是不是都是按照行或者列来显示的。</p><p>而<strong>网格布局是二维布局，可以同时处理行和列上的布局</strong>。使用网格布局，兄弟节点可以被指定布局到网格的某个位置。 所以，网格布局相对流布局Flex布局更加的灵活。</p><p>下图就是展示了一维布局和二维布局的不同。可以看出，如果布局复杂，一维布局需要增加节点来解决；而二维布局，则不需要，这也是网格布局强大而复杂的原因。</p><p><img src="'+l+`" alt="&quot;grid布局&quot;" title="grid布局"></p><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>父元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span>
  <span class="token comment">/* 设置为网格布局 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>

  <span class="token comment">/* 指定当前容器的行和列后，这里的行和列就是网格轨道。 */</span>
  <span class="token comment">/* 页面的内容不确定性，内容可能会超过指定的网格轨道个数，网格将会在隐式网格中创建行和列 */</span>
  <span class="token comment">/* 按照默认，这些轨道将自动定义尺寸，所以会根据它里面的内容改变尺寸。 */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr 1fr<span class="token punctuation">;</span> 
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 1fr 1fr 1fr 1fr<span class="token punctuation">;</span>

  <span class="token comment">/* 多行多列的时候我们可以通过 repeat 函数来设置。*/</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span>1fr<span class="token punctuation">)</span> <span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* 可以设置隐式网格的样式，设置完隐式的，其他就是显示的平分 */</span>
  <span class="token property">grid-auto-rows</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">grid-auto-columns</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>

 
     
  <span class="token comment">/* 父容器的尺寸是不确定时，我们需要把子元素往父容器中逐个填充，auto-fill */</span>
  <span class="token comment">/* 下面表示，每一列都是50px，但是具体有几列，需要根据子元素填充的情况来定。*/</span>
  <span class="token comment">/* 能放下8列，就放8列，不够9列的部分空白。 */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* 如果不希望后面有空白，就需要子节点有适当的宽度适配。*/</span>
  <span class="token comment">/* 子节点不再是固定宽度，而是通过minmax函数指定最小值。*/</span>
  <span class="token comment">/* 如果容器的行不够整数，那么就按照1:1的比例去适当增宽子节点。*/</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>50px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐式网格线" tabindex="-1"><a class="header-anchor" href="#隐式网格线" aria-hidden="true">#</a> 隐式网格线</h3><p><img src="`+d+`" alt="&quot;Grid隐式网格线&quot;" title="Grid隐式网格线"></p><p>有了网格线，我们可以通过网格线指定跨轨道的网格元素，从而实现网格元素占多行多列的效果。子元素通过<code>grid-column-start</code>，<code>grid-column-end</code>，<code>grid-row-start</code>，<code>grid-row-end</code>或者<code>grid-column</code>和<code>grid-row</code>，或者通过<code>grid-area</code>这一个属性来设置来指定元素占据的网格轨道。 这里的属性值不仅可以指定网格线，还可以指定span xx 这个的意思是占据多少网格轨道。这个更符合我们的思维习惯。</p><p>子元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span> 
  <span class="token comment">/* 如果只占一行或一列，grid-xx-end属性可以不用写 */</span>
  <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">grid-row-end</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">grid-column-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span> 

  <span class="token comment">/* 顺序：row-start / column-start / row-end / column-end  */</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> 1 / 1 / 2 / 4<span class="token punctuation">;</span>
 
  <span class="token comment">/* grid-row-start 和 grid-row-end 缩写 */</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 2 / 4<span class="token punctuation">;</span>

  <span class="token comment">/* span表示占据几行，这里表示从2开始，占据2行，也就是网格线2到4  */</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 2 / span 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网格单元和网格间距" tabindex="-1"><a class="header-anchor" href="#网格单元和网格间距" aria-hidden="true">#</a> 网格单元和网格间距</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span>
  <span class="token comment">/* gap 顺序是 row-gap column-gap */</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 10px 10px<span class="token punctuation">;</span>

  <span class="token property">grid-column-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">grid-row-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网格项目重叠" tabindex="-1"><a class="header-anchor" href="#网格项目重叠" aria-hidden="true">#</a> 网格项目重叠</h3><p>上面讲到，每一个网格项目都可以指定占据的网格单元。如果多个网格项目占据同一个网格单元，按照先后顺序，默认情况是后面的DOM节点盖住前面的DOM节点。不过我们可以通过设置z-index来改变覆盖顺序。</p><h3 id="元素的对齐" tabindex="-1"><a class="header-anchor" href="#元素的对齐" aria-hidden="true">#</a> 元素的对齐</h3><p>Grid布局有以下容器属性用于对齐：</p><p><code>justify-content</code>，<code>justify-item</code>，<code>align-content</code>，<code>align-item</code></p><p>另外，Grid还增加了<code>place-content</code>和 <code>place-item</code>用于缩写。</p><p>子元素对齐属性：<code>justify-self</code>，<code>align-self</code>，<code>place-self</code>。</p><ul><li><code>justify</code>是在垂直方向对齐方式</li><li><code>align</code>是水平方向对齐对齐</li><li><code>place</code>是前面两个属性的缩写，先<code>align</code>再<code>justify</code></li><li><code>content</code>是容器子元素的对齐</li><li><code>item</code>是子元素所在自己空间的对齐</li><li><code>self</code>是子元素的属性，用于覆盖父容器对应的<code>item</code>样式</li></ul>`,24);function b(g,h){const a=t("ExternalLinkIcon");return p(),c("div",null,[u,m,n("p",null,[n("a",v,[s("Grid MDN"),i(a)])]),k])}const x=e(r,[["render",b],["__file","grid.html.vue"]]);export{x as default};
