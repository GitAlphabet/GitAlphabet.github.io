# Select  下拉选择框
``` html
容器: <select id='select'></select> / <select class='select'></select>
      let select = new Select('#select') 或者
      let select = new Select('.select')
```
## init
::: tip init(data)
初始化。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| data   | Array | option的数据 | 

返回值:无


## appendData

::: tip appendData(data)
添加
:::
 
参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| data   | Array | 添加的数据 | 

返回值:无

## setSelected

::: tip setSelected(val)
显示。
:::
 
参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| val   | String  | option 标签的 value 值 | 

返回值:无


## getSelectedData

::: tip getSelectedData()
获取选中的值。
:::

参数介绍:无


返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| string | 选中的值| 


## setDisabledOrNotDisabled

::: tip setDisabledOrNotDisabled(disabled)
设置是否禁用。
:::
 
参数介绍:无

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| disabled | true:设置禁用;false:取消禁用;| 


## change

::: tip change(callback)
改变事件。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback(val)   | Function   | 回调函数 | 
| val   | Function   | 回调函数参数;当前选中的value 的值 | 


返回值:无 
