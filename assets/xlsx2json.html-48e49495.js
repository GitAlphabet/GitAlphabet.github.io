import{_ as n,p as s,q as a,a1 as t}from"./framework-94826b74.js";const p={},e=t(`<h2 id="xlsx" tabindex="-1"><a class="header-anchor" href="#xlsx" aria-hidden="true">#</a> XLSX</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span>  xlsx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="antd-dom" tabindex="-1"><a class="header-anchor" href="#antd-dom" aria-hidden="true">#</a> antd dom</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>
  <span class="token attr-name">showUploadList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{false}</span>
  <span class="token attr-name">customRequest</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{customReq}</span>
  <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application/vnd.ms-excel,.xls,.xlsx<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>批量导入<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Upload</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义请求" tabindex="-1"><a class="header-anchor" href="#自定义请求" aria-hidden="true">#</a> 自定义请求</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token constant">XLSX</span> <span class="token keyword">from</span> <span class="token string">&#39;xlsx&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> _forEach <span class="token keyword">from</span> <span class="token string">&#39;lodash/forEach&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">enum</span> File2ArrayEnum <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">&#39;材料名称&#39;</span><span class="token punctuation">,</span>
  format <span class="token operator">=</span> <span class="token string">&#39;规格型号&#39;</span><span class="token punctuation">,</span>
  need <span class="token operator">=</span> <span class="token string">&#39;需求量&#39;</span><span class="token punctuation">,</span>
  unit <span class="token operator">=</span> <span class="token string">&#39;单位&#39;</span><span class="token punctuation">,</span>
  level <span class="token operator">=</span> <span class="token string">&#39;档次&#39;</span><span class="token punctuation">,</span>
  brand <span class="token operator">=</span> <span class="token string">&#39;品牌&#39;</span><span class="token punctuation">,</span>
  quotation <span class="token operator">=</span> <span class="token string">&#39;报价数&#39;</span><span class="token punctuation">,</span>
  remark <span class="token operator">=</span> <span class="token string">&#39;备注&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 自定义请求获取excle 数据</span>
<span class="token keyword">const</span> <span class="token function-variable function">customReq</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> f <span class="token operator">=</span> e<span class="token operator">?.</span>file<span class="token punctuation">;</span>
  <span class="token comment">// 使用 FileReader 读取数据</span>
  <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">ev</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 数据读取完成后的回调函数</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>ev<span class="token operator">?.</span>target<span class="token operator">?.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// workbook 是 xlsx 解析 excel 后返回的对象</span>
    <span class="token keyword">const</span> workbook <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;array&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token comment">// 获取第一个 sheet 的名字</span>
    <span class="token keyword">const</span> firstSheetName <span class="token operator">=</span> workbook<span class="token punctuation">.</span>SheetNames<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
    <span class="token comment">// 获取第一个 sheet 的内容</span>
    <span class="token keyword">const</span> worksheet <span class="token operator">=</span> workbook<span class="token punctuation">.</span>Sheets<span class="token punctuation">[</span>firstSheetName<span class="token punctuation">]</span><span class="token punctuation">;</span> 
    <span class="token comment">// 使用 utils 里的方法转换内容为便于使用的数组</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">sheet_to_json</span><span class="token punctuation">(</span>worksheet<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 对数组进行处理</span>
    <span class="token keyword">const</span> tempData <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token function">_forEach</span><span class="token punctuation">(</span>File2ArrayEnum<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        temp <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>temp<span class="token punctuation">,</span> <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> item<span class="token operator">?.</span><span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setList</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token operator">...</span>pre<span class="token punctuation">,</span> <span class="token operator">...</span>tempData<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  reader<span class="token punctuation">.</span><span class="token function">readAsArrayBuffer</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 读取数据</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","xlsx2json.html.vue"]]);export{r as default};