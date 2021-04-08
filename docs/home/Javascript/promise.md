### Promise 

#### 状态

```md
pending    // 进行中
fulfilled  // 已成功
rejected   // 已失败
```

**一旦状态改变，就不会再变**，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：**从pending变为fulfilled和从pending变为rejected**。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。

then 和 catch 改变状态

+ **then 正常返回 resolved,里面有报错就返回 rejected。resolved 会继续触发 then 的回调。**
+ **catch 正常返回 resolved,里面有报错就返回 rejected。rejected 会继续触发 catch 的回调。**

```js
Promise.resolve().then(() => { 
    console.log(1) // 1
}).catch(() => { 
    console.log(2) // 不打印
}).then(() => {
    console.log(3) // 2
})
```

```js
Promise.resolve().then(() => { 
    console.log(1) // 1
    throw Error('Error')
}).catch(() => {
    console.log(2) // 2
}).then(() => {
    console.log(3) // 3
})
```

```js
Promise.resolve().then(() => { // rejected 触发 catch 回调
    console.log(1) // 1
    throw Error('Error')
}).catch(() => { // resolved 触发 then 回调
    console.log(2) // 2
}).catch(() => {
    console.log(3) // 不打印
})
```