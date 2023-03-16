import{_ as p,M as c,p as l,q as i,R as s,t as e,N as t,a1 as n}from"./framework-5866ffd3.js";const o={},r=n(`<h3 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> Less</h3><h4 id="_1、安装-less" tabindex="-1"><a class="header-anchor" href="#_1、安装-less" aria-hidden="true">#</a> 1、安装 less</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>  <span class="token function">less</span> <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、安装-less-plugin-clean-css" tabindex="-1"><a class="header-anchor" href="#_2、安装-less-plugin-clean-css" aria-hidden="true">#</a> 2、安装 less-plugin-clean-css</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> less-plugin-clean-css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、压缩" tabindex="-1"><a class="header-anchor" href="#_3、压缩" aria-hidden="true">#</a> 3、压缩</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lessc <span class="token parameter variable">-x</span>
lessc <span class="token parameter variable">--compress</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、编译-less" tabindex="-1"><a class="header-anchor" href="#_4、编译-less" aria-hidden="true">#</a> 4、编译 less</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lessc a.less a.css      <span class="token comment"># 不压缩</span>
lessc <span class="token parameter variable">-x</span> a.less a.css   <span class="token comment"># 压缩                                            </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),u={id:"_5、混入",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#_5、混入","aria-hidden":"true"},"#",-1),v={href:"http://lesscss.cn/features/#features-overview-feature-mixins",target:"_blank",rel:"noopener noreferrer"},k=n(`<p>混合是一种将一组属性从一个规则集合（另一个规则集合）（“混入”）的方式。所以说我们有以下班级：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们希望在其他规则集内使用这些属性。那么，我们只需要放下我们想要属性的类的名称，如下所示：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  .bordered<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  .bordered<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b={id:"_6、嵌套规则",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#_6、嵌套规则","aria-hidden":"true"},"#",-1),h={href:"http://lesscss.cn/features/#features-overview-feature-nested-rules",target:"_blank",rel:"noopener noreferrer"},g=n(`<p>Less 使您能够使用嵌套代替或与级联结合使用。假设我们有以下 CSS：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .navigation</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .logo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在更少的情况下，我们也可以这样写：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector">.navigation</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.logo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成的代码更简洁，并模仿 HTML 的结构。</p><p>您也可以使用此方法将伪选择器与您的 mixin 捆绑在一起。这里是经典的 clearfix hack，重写为 mixin（<code>&amp;</code>代表当前选择器父代）：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7、拼接字符" tabindex="-1"><a class="header-anchor" href="#_7、拼接字符" aria-hidden="true">#</a> 7、拼接字符</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>.<span class="token function">bg-img</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@url</span><span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;../../components/@{url}@2x.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),_={id:"_8、概观",tabindex:"-1"},f=s("a",{class:"header-anchor",href:"#_8、概观","aria-hidden":"true"},"#",-1),x={href:"http://lesscss.cn/features/#variables-feature-overview",target:"_blank",rel:"noopener noreferrer"},y=n(`<p>在您的样式表中看到相同的值重复数十次（*如果不是几百次）*并不罕见：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a,
.link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #428bca<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #428bca<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量通过为您提供从单个位置控制这些值的方式使您的代码更易于维护：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* Variables */</span>
<span class="token atrule"><span class="token rule">@link-color</span><span class="token punctuation">:</span> #428bca<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@link-color-hover</span><span class="token punctuation">:</span> <span class="token function">darken</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@link-color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>
<span class="token selector">a,
.link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@link-color</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@link-color-hover</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
<span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@link-color</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),w={id:"_9、网址",tabindex:"-1"},V=s("a",{class:"header-anchor",href:"#_9、网址","aria-hidden":"true"},"#",-1),q={href:"http://lesscss.cn/features/#variables-feature-urls",target:"_blank",rel:"noopener noreferrer"},L=n(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Variables */</span>
<span class="token atrule"><span class="token rule">@images</span><span class="token punctuation">:</span> <span class="token string">&quot;../img&quot;</span><span class="token punctuation">;</span></span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;@{images}/white-sand.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function N(z,B){const a=c("ExternalLinkIcon");return l(),i("div",null,[r,s("h4",u,[d,e(" 5、混入"),s("a",v,[t(a)])]),k,s("h4",b,[m,e(" 6、嵌套规则"),s("a",h,[t(a)])]),g,s("h4",_,[f,e(" 8、概观"),s("a",x,[t(a)])]),y,s("h4",w,[V,e(" 9、网址"),s("a",q,[t(a)])]),L])}const S=p(o,[["render",N],["__file","less.html.vue"]]);export{S as default};
