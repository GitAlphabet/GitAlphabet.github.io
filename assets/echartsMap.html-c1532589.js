import{_ as n,p as s,q as a,a1 as t}from"./framework-cd67069b.js";const p={},e=t(`<h2 id="echart-map" tabindex="-1"><a class="header-anchor" href="#echart-map" aria-hidden="true">#</a> Echart Map</h2><h3 id="导入的库" tabindex="-1"><a class="header-anchor" href="#导入的库" aria-hidden="true">#</a> 导入的库</h3><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactECharts <span class="token keyword">from</span> <span class="token string">&#39;echarts-for-react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Echarts <span class="token keyword">from</span> <span class="token string">&#39;echarts&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> dataJson <span class="token keyword">from</span> <span class="token string">&#39;./TX.js&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 地图 json 数据</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&#39;./gmap.module.less&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举和type" tabindex="-1"><a class="header-anchor" href="#枚举和type" aria-hidden="true">#</a> 枚举和type</h3><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">MapProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  projectList<span class="token operator">:</span> <span class="token punctuation">{</span>
    lng<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    lat<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    projectId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    projectName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    county<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    fxdj<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    countyDistribution<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">enum</span> ColorEnum <span class="token punctuation">{</span> 
  <span class="token string">&#39;红色预警&#39;</span><span class="token operator">=</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;黄色预警&#39;</span><span class="token operator">=</span><span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react组件" tabindex="-1"><a class="header-anchor" href="#react组件" aria-hidden="true">#</a> React组件</h3><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> Index<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>MapProps<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> projectList <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> commonStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
      areaColor<span class="token operator">:</span> <span class="token string">&#39;#6BA6F9&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  Echarts<span class="token punctuation">.</span><span class="token function">registerMap</span><span class="token punctuation">(</span><span class="token string">&#39;TX&#39;</span><span class="token punctuation">,</span> dataJson<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token punctuation">{</span>
      top<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
      text<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      subtext<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      x<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">&#39;#ccc&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
      trigger<span class="token operator">:</span> <span class="token string">&#39;item&#39;</span><span class="token punctuation">,</span>
      backgroundColor<span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,17,0.80)&#39;</span><span class="token punctuation">,</span>
      borderWidth<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisPointer<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;shadow&#39;</span><span class="token punctuation">,</span>
        crossStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">&#39;#999&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">.</span>data<span class="token punctuation">.</span>projectName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    geo<span class="token operator">:</span> <span class="token punctuation">{</span>
      map<span class="token operator">:</span> <span class="token string">&#39;TX&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 需要和 registerMap 名字一致</span>
      label<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        align<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        verticalAlign<span class="token operator">:</span> <span class="token string">&#39;middle&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        areaColor<span class="token operator">:</span> <span class="token string">&#39;#2C64AE&#39;</span><span class="token punctuation">,</span>
        borderColor<span class="token operator">:</span> <span class="token string">&#39;#A0CDFF&#39;</span><span class="token punctuation">,</span>
        borderWidth<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          areaColor<span class="token operator">:</span> <span class="token string">&#39;#6BA6F9&#39;</span><span class="token punctuation">,</span>
          borderColor<span class="token operator">:</span> <span class="token string">&#39;#A0CDFF&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      bottom<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      top<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 标点</span>
      <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;effectScatter&#39;</span><span class="token punctuation">,</span>
        coordinateSystem<span class="token operator">:</span> <span class="token string">&#39;geo&#39;</span><span class="token punctuation">,</span>
        showEffectOn<span class="token operator">:</span> <span class="token string">&#39;render&#39;</span><span class="token punctuation">,</span>
        rippleEffect<span class="token operator">:</span> <span class="token punctuation">{</span>
          period<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          scale<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          brushType<span class="token operator">:</span> <span class="token string">&#39;fill&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        hoverAnimation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          normal<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;rgb(28,63,220)&#39;</span><span class="token punctuation">,</span>
            shadowBlur<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            shadowColor<span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        data<span class="token operator">:</span> <span class="token punctuation">(</span>projectList <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token punctuation">[</span>d<span class="token punctuation">.</span>lng<span class="token punctuation">,</span> d<span class="token punctuation">.</span>lat<span class="token punctuation">]</span><span class="token punctuation">,</span>
            projectName<span class="token operator">:</span> d<span class="token punctuation">.</span>projectName<span class="token punctuation">,</span>
            county<span class="token operator">:</span> d<span class="token punctuation">.</span>county<span class="token punctuation">,</span>
            countyDistribution<span class="token operator">:</span> d<span class="token punctuation">.</span>countyDistribution<span class="token punctuation">,</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              normal<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> d<span class="token punctuation">.</span>fxdj <span class="token operator">?</span> ColorEnum<span class="token punctuation">[</span>d<span class="token punctuation">.</span>fxdj<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span>
                shadowBlur<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                shadowColor<span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 地图</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;tongxiang&#39;</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;scatter&#39;</span><span class="token punctuation">,</span>
        coordinateSystem<span class="token operator">:</span> <span class="token string">&#39;geo&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;大麻镇&#39;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>commonStyle<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;高桥街道&#39;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>commonStyle<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;崇福镇&#39;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>commonStyle<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;屠甸镇&#39;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>commonStyle<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;凤鸣街道&#39;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>commonStyle<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;洲泉镇&#39;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>commonStyle<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;河山镇&#39;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>commonStyle<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;石门镇&#39;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>commonStyle<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;梧桐街道&#39;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>commonStyle<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;濮院镇&#39;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>commonStyle<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;乌镇镇&#39;</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>commonStyle<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>wrapper<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ReactECharts</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token number">546</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">option</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
      <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>legend<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>red<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">红色预警项目</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>yellow<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">黄色预警项目</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>green<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">未预警项目</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Index<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","echartsMap.html.vue"]]);export{r as default};
