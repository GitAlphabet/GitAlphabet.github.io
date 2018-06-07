# Dialog  对话框
``` html
容器: <div id='dialog'></div> / <div class='dialog'></div>
      let dialog = new Dialog('#dialog') 或者
      let dialog = new Dialog('.dialog')
```
## init
::: tip init(option)
初始化。
:::

使用方法:
``` js
dialog.init(option);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :- | :-: | :-: | 
| option  | Object | 初始化的数据信息 | 
| option.title | String  | 标题信息 | 
| option.width  | Number   | 宽度 | 
| option.height  | Number  | 高度 | 
| option.left | Number  | 左边距离 | 
| option.top  | Number  | 顶部距离 | 
| option.closed  | Boolean   | 是否关闭 | 
| option.modal  | Boolean   | 模态框形式展示 | 
| option.buttons  | Array  | 添加的按钮 | 
| option.buttons.text | String  |  按钮的文字描述 | 
| option.buttons.handler  | Function   |  点击按钮的处理函数 | 

返回值:无。


## close

::: tip close()
关闭对话框。
:::

使用方法:
``` js
dialog.close();
```
 
参数介绍:无。

返回值:无。

## show

::: tip show()
显示对话框。
:::

使用方法:
``` js
dialog.show();
```
 
参数介绍:无。

返回值:无。


## onClose

::: tip onClose(callback)
关闭抛出事件。 callback => 回调函数。
:::

使用方法:
``` js
dialog.onClose(function(){
      // 关闭对话框后的处理逻辑
});
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback | Function| 回调函数 | 


返回值:无。
