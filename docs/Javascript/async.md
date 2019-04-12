### async 函数

#### 基本用法

async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。当函数执行的时候，一旦遇到 await 就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。(解决异步回调地狱问题)

```js
// 第一种写法
// 获取列表
getList() {
    return new Promise((resolve, reject) => {
        axios.get('/user/list',params:{}).then(res=>{
            console.log(response);
            }).catch(err=> {
                console.log(error);
            })
        })
    })
}

// 获取列表第一个详情
getInfo(id) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: '/user/info',
            data: {
                id
            }
        }).then(res=>{
            console.log(res);
        }).catch(err=> {
            console.log(err);
        })
    })
}

async renderData(){
    let id = ''
    // 下面 await 执行完之后再接着执行函数体内后面的语句
    let list = await this.getList();
    list().then(res => {
        id = res.data.list[0].id
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    // 下面 await 执行完之后再接着执行函数体内后面的语句
    let info =  await this.getInfo(id)
    info().then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

// 第二种写法
async renderData(){
    let id = ''
    // 下面 await 执行完之后再接着执行函数体内后面的语句
    let list = await axios.get('/user/list',params:{})
    list().then(res => {
        id = res.data.id
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    // 下面 await 执行完之后再接着执行函数体内后面的语句
    let info = await  axios({
        method: 'post',
        url: '/user/info',
        data: {
            id
        }
    })
    info().then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}
```
