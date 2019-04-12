### vuex

```text
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
```

#### 项目目录

```js
src 文件夹下创建 store 文件夹及子目录如下：
     store
        state.js           // 数据存储状态的容器
        mutations-type.js  // 该 js 里面的常量对应 mutations.js 里面方法的名称
        mutations.js       // 提交改变 state 里面的状态的方法
        actions.js         // 1.Action 提交的是 mutation，而不是直接变更状态2.Action 可以包含任意异步操作。
        getters.js         //从 store 中的 state 中派生出一些状态
        index.js           // 以上全部倒入 index.js 文件里面y引入到 Vuex.Store()
```

#### state.js

```text
Vuex 使用单一状态树，用一个对象就包含了全部的应用层级状态。
至此它便作为一个“唯一数据源 (SSOT:Single_source_of_truth)”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。
单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
```

```js
const state = {
  count:1，
  num:1
}
export default state
```

#### mutations-type.js

```js
export const SET_COUNT = 'SET_COUNT '
export const SET_NUM = 'SET_NUM '
//这里定义常量作为 mutations.js 里面的事件类型；
//因为这里需要暴露多个常量，在其他文件引入需要使用ES6的：
import * as types from './mutations-type'
```

#### mutations.js

```text
更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
```

```js
import * as types from './mutations-type'
//此处就是引入 mutations-type.js。
//mutations  里面的 types.SET_COUNT  就相当于 mutations-type.js 里面的 SET_COUNT
const mutations = {
  [types.SET_COUNT](state, count) {
    state.count = count
  },
  [types.SET_NUM](state, num) {
    state.num = num
  }
}
export default mutations
```

#### getters.js

```js
有时候我们需要从 store 中的 state 中派生出一些状态。同样在别处应用时也需要使用：
import * as getters from './getters'
```

```js
export const count = state => {
  return state.count + 3
}
export const num = state => {
  return state.num - 5
}
```

#### actions.js

```text
Action 类似于 mutation，不同在于：
1.Action 提交的是 mutation，而不是直接变更状态。
2.Action 可以包含任意异步操作。
```

```js
import * as types from './mutations-type'
export const setDatas = ({ commit, state }, { count, num }) => {
  commit(types.SET_COUNT, count)
  commit(ttypes.SET_NUM, num)
}
```

#### index.js

```js
引入 vue、vuex、state.js、getters.js、mutations.js、actions.js。
使用 Vue.use(Vuex);
new Vuex.Store();
```

```js
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger' //自带的日志

Vue.use(Vuex)
//const debug = process.env.NODE_ENV != 'production'
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
  //strict:debug,
  // plugins: debug ? [createLogger()]:[]
})
```

#### main.js

引入并注册到 Vue 实例里面

```js
import store from './store'
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
```

#### 使用

```js
//当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题  mapState, mapGetters,  mapMutations, mapActions这些辅助函数
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
```

```js
1、state：
computed: {
  count () {
    return store.state.count
  }
}
computed:{
  // 映射 this.count 为 store.state.count
  ...mapGetters(['count','num'])
}

2、getters：
computed:{
  // 映射 `this.count` 为 `store.getters.count`
  ...mapGetters(['count','num'])
}
如果你想将一个 getter 属性另取一个名字，使用对象形式：

...mapGetters({
  // 映射 `this.doneCount` 为 `store.getters.count`
  doneCount: 'count'
})

3、mutations:
methods: {
  ...mapMutations([
    // 将 `this.SET_COUNT()` 映射为 `this.$store.commit('SET_COUNT')`
    'SET_COUNT',

    // `mapMutations` 也支持载荷：
    // 将 `this.SET_COUNT(amount)` 映射为 `this.$store.commit('SET_COUNT', amount)`
    'SET_COUNT'
  ]),
  ...mapMutations({
    add: 'SET_COUNT' // 将 `this.add()` 映射为 `this.$store.commit('SET_COUNT')`
  })
}

4、actions:
methods: {
  ...mapActions([
      // 将 `this.SET_COUNT()` 映射为 `this.$store.dispatch('SET_COUNT')`
    'SET_COUNT',

    // `mapActions` 也支持载荷：
    // 将 `this.SET_COUNT(amount)` 映射为 `this.$store.dispatch('SET_COUNT', amount)`
    'SET_COUNT'
  ]),
  ...mapActions({
    // 将 `this.add()` 映射为 `this.$store.dispatch('SET_COUNT')`
    add: 'SET_COUNT'
  })
}
```

#### 因为 state，getter 为返回为某个状态值，所以使用计算属性。mutations，actions 需要放在方法里面。
