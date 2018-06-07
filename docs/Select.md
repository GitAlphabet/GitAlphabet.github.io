# Select  下拉选择框
``` html
容器: <select id='select'></select> / <select class='select'></select>
      let select = new Select('#select') 或者
      let select = new Select('.select')
```
## init
::: tip init(data)
初始化。  data => 数据。
:::

使用方法:
``` js
let data = [{value:1,text:1},{value:2,text:2}];
select.init(data);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| data   | Array | option的数据 | 

返回值:无。


## appendData

::: tip appendData(data)
添加。 data => 添加的数据。
:::

使用方法:
``` js
let data = [{value:3,text:3},{value:4,text:4}];
select.appendData(data);
```
 
参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| data   | Array | 添加的数据 | 

返回值:无。

## setSelected

::: tip setSelected(val)
设置选中。   val => value 的值。
:::

使用方法:
``` js
select.setSelected(3);
```
 
参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| val   | String  | option 标签的 value 值 | 

返回值:无。


## getSelectedData

::: tip getSelectedData()
获取选中 value 的值。
:::

使用方法:
``` js
select.getSelectedData();
```

参数介绍:无。


返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| string | 选中的值| 


## getSelectedHtml

::: tip getSelectedHtml()
获取选中的 text 值(描述信息)。
:::

使用方法:
``` js
select.getSelectedHtml();
```

参数介绍:无。


返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| string | 选中的值| 

## clearData

::: tip clearData()
清除数据。
:::

使用方法:
``` js
select.clearData();
```

参数介绍:无。

返回值:无。


## setDisabledOrNotDisabled

::: tip setDisabledOrNotDisabled(disabled)
设置是否禁用。
:::

``` js
select.setDisabledOrNotDisabled(true);//禁用
select.setDisabledOrNotDisabled(false);//取消禁用
```
 
参数介绍:无。

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| disabled | true:设置禁用;false:取消禁用;| 


## change

::: tip change(callback)
改变事件。  callback => 回调函数。
:::

``` js
select.change(function(val){
      //val 是选中的 value 值
      //处理逻辑代码
});
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback(val)   | Function   | 回调函数 | 
| val   | Function   | 回调函数参数;当前选中的value 的值 | 

返回值:无 。
