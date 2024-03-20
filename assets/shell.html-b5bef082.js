import{_ as s,p as n,q as a,a1 as e}from"./framework-39b99327.js";const t={},l=e(`<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><ul><li>规则 <ul><li>命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。</li><li><strong>中间不能有空格</strong>，可以使用下划线 _。</li><li>不能使用标点符号。</li><li>不能使用bash里的关键字（可用<code>help</code>命令查看保留关键字）。</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">your_name</span><span class="token operator">=</span><span class="token string">&quot;alpha&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 推荐给所有变量加上花括号,输出字符串的时候会有问题</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$your_name</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${your_name}</span>

<span class="token comment"># 如果变量加花括号，写成echo &quot;my name is $your_name&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;my name is <span class="token variable">\${your_name}</span>&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>只读 readonly</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">myUrl</span><span class="token operator">=</span><span class="token string">&quot;https://www.google.com&quot;</span>
<span class="token builtin class-name">readonly</span> myUrl
<span class="token assign-left variable">myUrl</span><span class="token operator">=</span><span class="token string">&quot;https://www.runoob.com&quot;</span>
<span class="token comment"># /bin/sh: NAME: This variable is read only.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除变量 unset</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">your_name</span><span class="token operator">=</span><span class="token string">&quot;alpha&quot;</span>
<span class="token builtin class-name">unset</span> your_name
<span class="token builtin class-name">echo</span> <span class="token variable">$your_name</span> <span class="token comment"># 无输出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3><ul><li>获取长度</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">string</span><span class="token operator">=</span><span class="token string">&quot;abcd&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>string}</span>   <span class="token comment"># 输出 4</span>

<span class="token comment"># 变量为字符串时，\${#string} 等价于 \${#string[0]}</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>string<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>   <span class="token comment"># 输出 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>提取子字符串</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 从字符串第 2 个字符开始截取 4 个字符</span>
<span class="token assign-left variable">string</span><span class="token operator">=</span><span class="token string">&quot;runoob is a great site&quot;</span>
<span class="token comment"># 第一个字符的索引值为 0</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${string<span class="token operator">:</span>1<span class="token operator">:</span>4}</span> <span class="token comment"># 输出 unoo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查找子字符串</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)</span>
<span class="token assign-left variable">string</span><span class="token operator">=</span><span class="token string">&quot;runoob is a great site&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> index <span class="token string">&quot;<span class="token variable">$string</span>&quot;</span> io<span class="token variable">\`</span></span>  <span class="token comment"># 输出 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><ul><li>定义</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用括号来表示数组，数组元素用&quot;空格&quot;符号分割开</span>
<span class="token assign-left variable">array_name</span><span class="token operator">=</span><span class="token punctuation">(</span>value0 value1 value2 value3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>读取</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${arr<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span> <span class="token comment"># 1</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span> <span class="token comment"># 1 2 3 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>获取数组的长度</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 取得数组元素的个数</span>
<span class="token assign-left variable">length</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>array_name<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token comment"># 或者</span>
<span class="token assign-left variable">length</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>array_name<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
<span class="token comment"># 取得数组单个元素的长度</span>
<span class="token assign-left variable">lengthn</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>array_name<span class="token punctuation">[</span>n<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传递参数" tabindex="-1"><a class="header-anchor" href="#传递参数" aria-hidden="true">#</a> 传递参数</h3><p>我们可以在执行 Shell 脚本时，向脚本传递参数，脚本内获取参数的格式为：$n。n 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推……</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">$#</td><td style="text-align:left;">传递到脚本的参数个数</td></tr><tr><td style="text-align:left;">$*</td><td style="text-align:left;">以一个单字符串显示所有向脚本传递的参数。如&quot;$*&quot;用「&quot;」括起来的情况、以&quot;$1 $2 … $n&quot;的形式输出所有参数。</td></tr><tr><td style="text-align:left;">$$</td><td style="text-align:left;">脚本运行的当前进程ID号</td></tr><tr><td style="text-align:left;">$!</td><td style="text-align:left;">后台运行的最后一个进程的ID号</td></tr><tr><td style="text-align:left;">$@</td><td style="text-align:left;">与$*相同，但是使用时加引号，并在引号中返回每个参数。如&quot;$@&quot;用「&quot;」括起来的情况、以&quot;$1&quot; &quot;$2&quot; … &quot;$n&quot; 的形式输出所有参数。</td></tr><tr><td style="text-align:left;">$-</td><td style="text-align:left;">显示Shell使用的当前选项，与set命令功能相同。</td></tr><tr><td style="text-align:left;">$?</td><td style="text-align:left;">显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误</td></tr></tbody></table><p>test.sh 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Shell 传递参数实例！&quot;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;第一个参数为：<span class="token variable">$1</span>&quot;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;参数个数为：<span class="token variable">$#</span>&quot;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;传递的参数作为一个字符串显示：<span class="token variable">$*</span>&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x test.sh 
<span class="token function">sh</span> test.sh <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
Shell 传递参数实例！
第一个参数为：1
参数个数为：3
传递的参数作为一个字符串显示：1 <span class="token number">2</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h3><p>下表列出了常用的算术运算符，假定变量 a 为 10，变量 b 为 20：</p><table><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">描述</th><th style="text-align:left;">举例</th></tr></thead><tbody><tr><td style="text-align:left;">+</td><td style="text-align:left;">加法</td><td style="text-align:left;"><code>expr $a + $b</code> 结果为 30。</td></tr><tr><td style="text-align:left;">-</td><td style="text-align:left;">减法</td><td style="text-align:left;"><code>expr $a - $b</code> 结果为 -10。</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">乘法</td><td style="text-align:left;"><code>expr $a \\* $b</code> 结果为 200。</td></tr><tr><td style="text-align:left;">/</td><td style="text-align:left;">除法</td><td style="text-align:left;"><code>expr $b / $a</code> 结果为 2。</td></tr><tr><td style="text-align:left;">%</td><td style="text-align:left;">取余</td><td style="text-align:left;"><code>expr $b % $a</code> 结果为 0。</td></tr><tr><td style="text-align:left;">=</td><td style="text-align:left;">赋值</td><td style="text-align:left;">a=$b 把变量 b 的值赋给 a。</td></tr><tr><td style="text-align:left;">==</td><td style="text-align:left;">相等</td><td style="text-align:left;">用于比较两个数字，相同则返回 true.[ $a == $b ] 返回 false。</td></tr><tr><td style="text-align:left;">!=</td><td style="text-align:left;">不相等</td><td style="text-align:left;">用于比较两个数字，不相同则返回 true.[ $a != $b ] 返回 true。</td></tr></tbody></table><h3 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">-eq</td><td style="text-align:left;">等于则为真</td></tr><tr><td style="text-align:left;">-ne</td><td style="text-align:left;">不等于则为真</td></tr><tr><td style="text-align:left;">-gt</td><td style="text-align:left;">大于则为真</td></tr><tr><td style="text-align:left;">-ge</td><td style="text-align:left;">大于等于则为真</td></tr><tr><td style="text-align:left;">-lt</td><td style="text-align:left;">小于则为真</td></tr><tr><td style="text-align:left;">-le</td><td style="text-align:left;">小于等于则为真</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">num1</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token assign-left variable">num2</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">if</span> <span class="token builtin class-name">test</span> $<span class="token punctuation">[</span>num1<span class="token punctuation">]</span> <span class="token parameter variable">-eq</span> $<span class="token punctuation">[</span>num2<span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;两个数相等！&#39;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;两个数不相等！&#39;</span>
<span class="token keyword">fi</span>
<span class="token comment"># 两个数相等！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h3><ul><li>条件语句</li></ul><p><strong>如果 else 分支没有语句执行，就不要写这个 else</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># if 语句语法</span>
<span class="token keyword">if</span> condition
<span class="token keyword">then</span>
    command1 
    <span class="token punctuation">..</span>.
    commandN 
<span class="token keyword">fi</span>

<span class="token comment"># if else 语法格式</span>
<span class="token keyword">if</span> condition
<span class="token keyword">then</span>
    command1 
    <span class="token punctuation">..</span>.
    commandN
<span class="token keyword">else</span>
    <span class="token builtin class-name">command</span>
<span class="token keyword">fi</span>

<span class="token comment"># if else-if else 语法格式</span>
<span class="token keyword">if</span> condition1
<span class="token keyword">then</span>
    command1
<span class="token keyword">elif</span> condition2 
<span class="token keyword">then</span> 
    command2
<span class="token keyword">else</span>
    commandN
<span class="token keyword">fi</span>

<span class="token comment"># if else 的 [...] 判断语句中大于使用 -gt，小于使用 -lt</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> <span class="token parameter variable">-gt</span> <span class="token string">&quot;<span class="token variable">$b</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token punctuation">..</span>.
<span class="token keyword">fi</span>

<span class="token comment"># 如果使用 ((...)) 作为判断语句，大于和小于可以直接使用 &gt; 和 &lt;</span>
<span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> a <span class="token operator">&gt;</span> b <span class="token punctuation">))</span></span>
<span class="token keyword">then</span>
  <span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>for 循环</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> item1 item2 <span class="token punctuation">..</span>. itemN
<span class="token keyword">do</span>
    command1
    <span class="token punctuation">..</span>.
    commandN
<span class="token keyword">done</span>

<span class="token comment"># 写成一行</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> item1 item2 <span class="token punctuation">..</span>. itemN<span class="token punctuation">;</span> <span class="token keyword">do</span> command1<span class="token punctuation">;</span> command2… <span class="token keyword">done</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>while 语句</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> condition
<span class="token keyword">do</span>
    <span class="token builtin class-name">command</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>until 循环 <ul><li>until 循环执行一系列命令直至条件为 true 时停止。</li><li>until 循环与 while 循环在处理方式上刚好相反。</li><li>一般 while 循环优于 until 循环，但在某些时候—也只是极少数情况下，until 循环更加有用。</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">until</span> condition
<span class="token keyword">do</span>
    <span class="token builtin class-name">command</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>case ... esac</li></ul><p>case ... esac 为多选择语句，与其他语言中的 switch ... case 语句类似，是一种多分支选择结构，每个 case 分支用右圆括号开始，用两个分号 ;; 表示 break，即执行结束，跳出整个 case ... esac 语句，esac（就是 case 反过来）作为结束标记。</p><p>可以用 case 语句匹配一个值与一个模式，如果匹配成功，执行相匹配的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;输入 1 到 4 之间的数字:&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;你输入的数字为:&#39;</span>
<span class="token builtin class-name">read</span> aNum
<span class="token keyword">case</span> <span class="token variable">$aNum</span> <span class="token keyword">in</span>
    <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token builtin class-name">echo</span> <span class="token string">&#39;你选择了 1&#39;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token builtin class-name">echo</span> <span class="token string">&#39;你选择了 2&#39;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token builtin class-name">echo</span> <span class="token string">&#39;你选择了 3&#39;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">4</span><span class="token punctuation">)</span>  <span class="token builtin class-name">echo</span> <span class="token string">&#39;你选择了 4&#39;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>  <span class="token builtin class-name">echo</span> <span class="token string">&#39;你没有输入 1 到 4 之间的数字&#39;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function-name function">dosome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">read</span> inp
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;play <span class="token variable">$inp</span>&quot;</span>
<span class="token punctuation">}</span>
dosome
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),i=[l];function c(d,o){return n(),a("div",null,i)}const r=s(t,[["render",c],["__file","shell.html.vue"]]);export{r as default};
