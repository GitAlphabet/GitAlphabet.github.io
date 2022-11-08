### 大屏适配

#### 1、React

```js
const handleScreenAuto = () => {
    const designWidth = 1920;//设计稿的宽度
    const designHeight = 960;//设计稿的高度
    //根据屏幕的变化适配的比例
    const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designWidth / designHeight ? (document.documentElement.clientWidth / designWidth) : (document.documentElement.clientHeight / designHeight);
    //缩放比例
    (document.querySelector('#box') as any).style.transform = `scale(${scale}) translate(-50%)`;
} 
useEffect(() => {
    handleScreenAuto();
    window.onresize = () => handleScreenAuto();
    return () => window.onresize = null;
}, [])
```

#### 2、Vue

```js
mounted(){
    //初始化自适应
    handleScreenAuto();
    //绑定自适应函数   ---防止浏览器栏变化后不再适配
    window.onresize = () => handleScreenAuto();
},
deleted(){
    window.onresize = null;
},
methods: {
    //数据大屏自适应函数
    const handleScreenAuto = (): void => {
        const designWidth = 1920;//设计稿的宽度
        const designHeight = 960;//设计稿的高度
        //根据屏幕的变化适配的比例
        const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designWidth / designHeight ?
            (document.documentElement.clientWidth / designWidth) :
            (document.documentElement.clientHeight / designHeight);
        //缩放比例
        (document.querySelector('#screen') as any).style.transform = `scale(${scale}) translate(-50%)`;
    }
}
```
