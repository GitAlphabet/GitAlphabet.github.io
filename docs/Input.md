# Input  简单的输入框
``` html
容器: <input id='input'> / <input class='input'>
      let input = new Input('#input') 或者
      let input = new Input('.input')
```

## setData
::: tip setData(value)
设置数据。  value => 在输入框展示的数据。
:::

``` js
input.setData(value);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| value   |  String / Number | 输入框显示的信息 | 

返回值:无。


## getData

::: tip getData()
获取数据。
:::

``` js
input.getData();   //获取的输入框的数据。
```
 
参数介绍:无。

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| String / Number | 返回该输入框的数据| 


## clearData

::: tip clearData()
清空输入框数据。
:::

``` js
input.clearData();   //清除的输入框的数据。
```
 
参数介绍:无。

返回值:无。



## setDisabledOrNotDisabled

::: tip setDisabledOrNotDisabled(disabled)
设置是否禁用。
:::

``` js
input.setDisabledOrNotDisabled(true);    // 设置禁用
input.setDisabledOrNotDisabled(false);   // 取消禁用
```
 
参数介绍:无。

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| disabled | true:设置禁用;false:取消禁用;| 


## onFocus

::: tip onFocus(callback)
输入框获取焦点事件。
:::

``` js
input.onFocus(function(){
      //聚焦后的逻辑代码。
});
```
 
参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback |  Function | 回调函数 |

返回值:无。


## onBlur

::: tip onBlur(callback)
输入框失去焦点事件。
:::

``` js
input.onBlur(function(){
      //失焦后的逻辑代码。
});
```
 
参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback |  Function | 回调函数 |

返回值:无。


## onKeyUp

::: tip onKeyUp(callback)
输入框按键抬起事件。
:::

``` js
input.onKeyUp(function(){
      //按键抬起的逻辑代码。
});
```
 
参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback |  Function | 回调函数 |

返回值:无。



## hide

::: tip hide()
隐藏。
:::

``` js
input.hide();
```
 
参数介绍:无。

返回值:无。

## show

::: tip show()
显示。
:::

``` js
input.show();
```
 
参数介绍:无。

返回值:无。