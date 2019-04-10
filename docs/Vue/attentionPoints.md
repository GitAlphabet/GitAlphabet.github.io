### iviewUI 注意点

#### 1、标签 Switch 和 Circle

在没有 iview-loader 的情况下，只能使用 i-switch 和 i-circle

#### 2、表单标签 Form

Form 的 resetField 方法会重置所有设置了的 prop 属性的 FormItem。(没有设置的不会清空)

#### 3、额外传参数

```js
<Input v-model="value" type="textarea" @on-change="change(1, $event)"></Input>
// 默认参数凡在后面使用 $event 替代，自定义参数放在前面即可，方法接受参数一致。
change(id, event){
  console.log(id, event);
}
```
