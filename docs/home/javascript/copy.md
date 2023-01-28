### 浅拷贝与深拷贝

#### Object.assign()

```js
Object.assign() // 只能浅拷贝。
let obj1 = {a:1}
let obj2 = Object.assign({},obj1)
obj2.a = 10;
console.log(obj1,obj2); // 打印: obj1:{a:1}  obj2:{a:10}

let obj1 = {a:1,b:{c:1}}
let obj2 = Object.assign({},obj1)
obj2.b.c = 10;
console.log(obj1,obj2);
// 打印: obj1:{a:1,b:{c:10}} {a:1,b:{c:10}}
// 里面继续传址的，所以一者修改另外也修改了，这里只能使用深拷贝。
```

#### 深拷贝

**这种方法虽然可以实现数组或对象深拷贝,但不能处理函数和正则**因为这两者基于 `JSON.stringify` 和 `JSON.parse` 处理后，得到的正则就变为空对象，得到的函数就变为 `null` ;

```js
let obj1 = { a: 1, b: { c: 1 } }
let obj2 = JSON.parse(JSON.stringify(obj1))
obj2.b.c = 10
console.log(obj1, obj2)
// 打印: obj1:{a:1,b:{c:1}}  {a:1,b:{c:10}}
// 此方法是将要进行深拷贝的对象用 JSON.stringify() 字符串化，然后用 JSON.parse() 解析
```

用递归去复制所有层级属性

```js
function deepCopyTwo(obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj == 'object') {
        for (const key in obj) {
            //判断obj子元素是否为对象，如果是，递归复制
            if (obj[key] && typeof obj[key] === "object") {
                objClone[key] = deepCopyTwo(obj[key]);
            } else {
                //如果不是，简单复制
                objClone[key] = obj[key];
            }
        }
    }
    return objClone;
}
```
