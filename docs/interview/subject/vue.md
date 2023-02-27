### Vue 面试题

#### 1、Proxy 与 Object.defineProperty 优劣对比

Proxy 的优势如下:

```md
Proxy 可以直接监听对象而非属性；
Proxy 可以直接监听数组的变化；
Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；
```

Object.defineProperty 的优势如下:

```md
兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平
```

#### 2、computed 和 watch，methods 的区别

+ computed： **有缓存，data 不变不会重新计算；提高性能**。
+ computed 为什么需要缓存？简单说就是可以提高性能。假设我们有一个性能开销比较大的计算属性A,它需要遍历一个巨大的数组做大量的计算，然后我们可能有其他的属性依赖于A，如果没有缓存，将不可避免的多次执行A 的getter，如果不希望有缓存请用方法代替
+ computed 和 watch的使用场景：如果一个数据需要经过复杂计算就用 computed；如果一个数据需要被监听并且对数据做一些操作就用watch；watch擅长处理的场景：一个数据影响多个数据；computed擅长处理的场景：一个数据受多个数据影响

#### 3、Vue 的性能优化

+ 异步渲染（合并data修改）
+ $nextTick 在DOM更新后触发回调
+ 合理使用 v-if 和 v-show
+ 合理使用 computed、keep-alive
+ v-for 中加 key
+ 自定义事件和DOM事件及时销毁（beforeDestory）
+ 合理使用异步组件（路由、组件懒加载）
+ data 层级不要太深，减少内部递归次数。

#### 4、getCurrentInstance

getCurrentInstance 支持访问内部组件实例，用于高阶用法或库的开发。

+ **getCurrentInstance 只能在 setup 或生命周期钩子中调用。**

```js
import { getCurrentInstance } from 'vue'
const MyComponent = {
  setup() {
    const internalInstance = getCurrentInstance();
    internalInstance.appContext.config.globalProperties // 访问 globalProperties
  }
}
```

#### 5、watch 和 watchEffect

watch

+ 与 watchEffect 比较，watch 允许我们：
  + **惰性地执行副作用**；
  + 更具体地说明应触发侦听器重新运行的状态；
  + 访问被侦听状态的先前值和当前值。

```js
// 侦听一个 getter
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  },{
    immediate?: boolean, // 默认：false,初始化的时候不监听
    deep?: boolean       // 深度监听
  }
)
// 直接侦听一个 ref
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})
```

watchEffect  
在响应式地跟踪其依赖项时立即运行一个函数，**并在更改依赖项时重新运行它(即初始化的时候监听)**。

```js
const count = ref(0)
watchEffect(() => console.log(count.value)) // -> logs 0
setTimeout(() => {
  count.value++ // -> logs 1
}, 100)
```

### 6、vue3.0为什么要用Proxy API替代defineProperty API

响应式优化。

1.**defineProperty API的局限性最大原因是它只针对单例属性做监听** 。vue2.x中的响应式实现是基于defineProperty中的descriptor，对data中的属性遍历+递归，为每个属性设置了getter、setter。这也就是为什么vue只能对data中预定义的属性做出响应的原因，在vue中使用下标的方式直接修改属性的值或者添加一个预先不存在的对象属性是无法做到settter监听的，这是defineProperty的局限性。

2.**Proxy API的监听是针对一个对象的，那么对这个对象的所有操作会进入监听操作，这就完全可以代理所有属性，将会带来很大的性能提升和更优的代码** 。Proxy可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

3.**响应式是惰性的**。在vue2.x中，对于一个深层属性嵌套的对象，要劫持它内部深层次的变化，就需要递归便利这个对象，执行Object.defineProperty把每一层对象数据都变成响应式的，这无疑会有很大的性能消耗。在vue3.0中，使用Proxy API并不能监听到对象内部深层次的属性变化，因此它的处理方式是在getter中去递归响应式，这样的好处是真正访问到的内部属性才会变成响应式，简单可以说是按需实现响应式，减少性能消耗。

#### 7、vue3.0编译做了哪些优化？

1.**生成 Block tree**。vue2.x的数据更新并触发渲染的粒度是组件级的，单个组件内部需要遍历该组件的整个vnode树。**在2.0里，渲染效率的快慢与组件大小成正相关。并且，对于一些静态节点，又无数据更新，这些遍历都是性能浪费。**

vue3.0做到了通过编译阶段对静态模版的分析，编译生成了 Block tree。**Block tree是一个将模版基于动态节点指令切割的嵌套区块**，每个区域内部的节点结构是固定的，每个区块只需要追踪自身包含的动态节点。所以，**在3.0里，渲染效率不再与模版大小成正相关，而是与模版中动态节点的数量成正相关。**

2.**slot编译优化**。在vue2.x中，如果一个组件传入了slot，那么每次父组件更新的时候，会强制使子组件uplate，造成性能浪费。

vue3.0优化了slot的生成，使得非动态slot中属性的更新只会触发子组件的更新。动态slot指的是在slot上面使用v-if，v-for，动态slot名字等会导致slot产生运行时动态变化但是又无法被子组件track的操作。

3.diff算法优化。

#### 8、vue3 和 vue2 的区别？

Vue 3 和 Vue 2 有许多显著的区别，其中一些包括：

+ 更快的性能:
  + Vue 3 的响应式系统使用了 `Proxy`，而 Vue 2 使用的是 `Object.defineProperty`。由于 `Proxy` 比 `Object.defineProperty` 更加强大，因此 Vue 3 的响应式系统可以处理更复杂的数据结构，并且在某些情况下比 Vue 2 更快。
  + Vue 3 的编译器采用了全新的静态渲染器，可以生成更快的渲染函数。在某些情况下，Vue 3 的渲染速度可以比 Vue 2 快 2-4 倍。
  + Vue 3 在内部进行了大量的优化，可以更好地利用现代构建工具中的 `Tree-shaking` 技术，使得最终打包出来的文件更小。
+ 更小的包: 
  + Vue 3 的内部代码被拆分为多个包，可以更好地利用现代构建工具中的 `Tree-shaking` 技术，从而使得最终打包出来的文件更小。
  + Vue 3 中的代码被拆分为多个模块，可以更好地支持懒加载，从而减少初始加载时的文件大小。
+ 更好的 `TypeScript` 支持: 
  + Vue 3 中对 `TypeScript` 的支持进行了改进，可以更好地支持 `TypeScript`。例如，Vue 3 中可以使用 ref 和 reactive 这些 API 来声明响应式变量，并且可以使用 defineComponent 来声明组件。
  + Vue 3 中的响应式系统使用了 `Proxy`，可以更好地支持 `TypeScript`。由于 `Proxy` 比 `Object.defineProperty` 更加强大，因此可以更好地处理复杂的数据结构，并且在某些情况下比 Vue 2 更快。
  + Vue 3 中对 IDE 支持进行了改进，可以更好地支持自动补全和错误检测。
+ 更好的组合式 API:
  + Vue 3 引入了组合式 API，可以更灵活地组织代码，并且可以更好地重用代码逻辑。组合式 API 可以帮助开发人员更好地组织代码，避免过度嵌套和代码重复。
  + 组合式 API 支持更多的 `React Hooks` 风格的 API，例如 `useSetup`、`useComputed` 等，可以更好地组织代码。
  + 组合式 API 还可以通过 `provide` 和 `inject` API 来传递数据，可以更好地解决组件之间的通信问题。
+ 更好的响应式系统:
  + Vue 3 的响应式系统使用了 `Proxy`，可以更好地处理复杂的数据结构，并且在某些情况下比 Vue 2 更快。
  + Vue 3 的响应式系统支持多个根响应式变量，可以更好地组织数据。
+ 更好的事件处理:
  + Vue 3 中引入了全新的事件处理 API，可以更好地处理事件。
  + Vue 3 中的事件处理 API 支持多个事件处理函数，可以更好地组织事件处理逻辑。
  + Vue 3 中的事件处理 API 支持事件修饰符和按键修饰符，可以更好地处理特殊事件。
+ 更好的虚拟 DOM:
  + Vue 3 中的虚拟 DOM 使用了全新的算法，可以更好地处理大型应用和大量数据。
  + Vue 3 中的虚拟 DOM 支持了 `Fragments`，可以更好地组织组件结构。
  + Vue 3 中的虚拟 DOM 支持了 `Teleport`，可以更好地处理 `Portal` 和 `Modal`。
+ 更好的工具链:
  + Vue 3 中的工具链得到了改进，可以更好地支持开发和调试。
  + Vue 3 中的 Vue CLI 工具得到了改进，可以更好地支持项目配置和构建。
  + Vue 3 中的 devtools 工具得到了改进，可以更好地支持开发和调试。

总的来说，Vue 3 引入了许多新功能和性能改进，使得其在性能、可维护性和开发效率方面都比 Vue 2 更好。
