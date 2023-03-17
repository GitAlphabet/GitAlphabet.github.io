import{_ as e,p as a,q as c,a1 as t}from"./framework-69837a10.js";const r={},d=t('<h3 id="垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#垃圾回收机制" aria-hidden="true">#</a> 垃圾回收机制</h3><p><code>javascript</code> 是一门具有自动垃圾收集机制的编程语言，开发人员不必关心内存分配和回收问题。这种垃圾收集机制的原理就是：找出那些不再继续使用的变量，然后释放其占用的内存。 垃圾收集器必须追踪到哪个变量有用哪个变量没用，对于不再有用的变量打上标记，用来以后收回其占用的内存，具体实现到浏览器中，通常有两个策略。</p><h3 id="标记清除" tabindex="-1"><a class="header-anchor" href="#标记清除" aria-hidden="true">#</a> 标记清除</h3><p><code>javascript</code> 中最常用的垃圾收集方式就是标记清除。当变量进入环境时，会标记为&quot;进入环境&quot;，而当变量离开环境时，会标记为&quot;离开环境&quot;。垃圾收集器运行时会给所有存储在内存中的变量都加上标记，然后它会去掉环境中的变量以及被环境中的变量引用的变量的标记。而再次之后在被标记的变量就是被视为准备删除的变量，因为环境中的变量已经无法访问到这些变量了。</p><h3 id="引用计数" tabindex="-1"><a class="header-anchor" href="#引用计数" aria-hidden="true">#</a> 引用计数</h3><p>引用计数的含义是跟踪每个值被引用的次数。当声明了一个变量并将一个引用类型赋值给该变量时，则这个值的引用次数为 1.如果同一个只又被赋给另一个变量，则该值的引用次数加 1。当这个值的引用次数为 0 时，则说明没有办法再访问这个值了，就可以将空间回收。这种垃圾收集策略不常见，因为目前 <code>javascript</code> 引擎不能再使用这种算法；但是在 IE 中访问原声 <code>Javascript</code> 对象时，这种算法可能会出现问题。</p><p>解除变量的引用不仅有助于消除循环引用现象，而且对垃圾收集也有好处。为了确保有效的回收内存，应及时解除不再使用的全局对象、全集对象属性以及循环引用变量的引用。</p>',7),o=[d];function i(s,h){return a(),c("div",null,o)}const p=e(r,[["render",i],["__file","gc.html.vue"]]);export{p as default};
