import{_ as e,p as a,q as d,a1 as n}from"./framework-347dbdeb.js";const i={},s=n(`<h2 id="原码、补码、反码" tabindex="-1"><a class="header-anchor" href="#原码、补码、反码" aria-hidden="true">#</a> 原码、补码、反码</h2><h3 id="机器数和真值" tabindex="-1"><a class="header-anchor" href="#机器数和真值" aria-hidden="true">#</a> 机器数和真值</h3><p>1、机器数:一个数在计算机中的二进制表示形式, 叫做这个数的机器数。机器数是带符号的，在计算机用一个数的最高位存放符号, 正数为0, 负数为1.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>+1 &gt;&gt;&gt;&gt;&gt; 0000 0001
-1 &gt;&gt;&gt;&gt;&gt; 1000 0001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、真值:将带符号位的机器数对应的真正数值称为机器数的真值。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>0000 0001 的真值 = +000 0001 = +1
1000 0001 的真值 = –000 0001 = –1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="概念和计算方法" tabindex="-1"><a class="header-anchor" href="#概念和计算方法" aria-hidden="true">#</a> 概念和计算方法</h3><p>1、原码:原码就是符号位加上真值的绝对值, 即用第一位表示符号, 其余位表示值.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>比如是8位二进制:
[+1]（原码） = 0000 0001
[-1]（原码） = 1000 0001
[1111 1111 , 0111 1111] 原码 = [-127 , 127]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、反码:正数的反码是其本身，负数的反码是在其原码的基础上, 符号位不变，其余各个位取反.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>[+1] = [00000001]（原码）= [00000001]（反码）
[-1] = [10000001]（原码）= [11111110]（反码）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、补码:正数的补码就是其本身，负数的补码是在其原码的基础上, 符号位不变, 其余各位取反, 最后+1. (即在反码的基础上+1)</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>[+1] = [00000001]（原码） = [00000001]（反码） = [00000001]（补码）
[-1] = [10000001]（原码） = [11111110]（反码） = [11111111]（补码）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原码-反码-补码" tabindex="-1"><a class="header-anchor" href="#原码-反码-补码" aria-hidden="true">#</a> 原码,反码,补码</h3><p>1、原码:原码就是符号位加上真值的绝对值, 即用第一位表示符号, 其余位表示值.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>比如是8位二进制:
[+1]（原码） = 0000 0001
[-1]（原码） = 1000 0001
[1111 1111 , 0111 1111] 原码 = [-127 , 127]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、反码:正数的反码是其本身，负数的反码是在其原码的基础上, 符号位不变，其余各个位取反.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>[+1] = [00000001]（原码）= [00000001]（反码）
[-1] = [10000001]（原码）= [11111110]（反码）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,18),r=[s];function l(c,m){return a(),d("div",null,r)}const u=e(i,[["render",l],["__file","computer-binary.html.vue"]]);export{u as default};
