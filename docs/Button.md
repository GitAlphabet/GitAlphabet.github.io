# Button  按钮
``` html
容器: <button id='btn'></button> / <button class='btn'></button> 或者
      <input type='button' id='btn'> / <input type='button' class='btn'>
      let btn = new Button('#btn') 或者
      let btn = new Button('.btn')
```
## click
::: tip click(callback,active)
点击事件。
:::

使用方法:
``` js
btn.click(function(){
      //点击后处理逻辑代码
},'active');
// active 可选。
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback | Function | 回调函数 | 
| active  | String   | 点击后设置样式 | 

返回值:无。


## hide

::: tip hide()
隐藏。
:::

使用方法:
``` js
btn.hide();
```
 
参数介绍:无。

返回值:无。

## show

::: tip show()
显示。
:::

使用方法:
``` js
btn.show();
```
 
参数介绍:无。

返回值:无。
