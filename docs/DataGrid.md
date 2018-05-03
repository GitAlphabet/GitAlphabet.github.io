# DataGrid  数据列表

## init
::: tip init(data,option,ckeckbox,striped)
初始化。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| data | Array| 树的数据 | 
| option  | Object | 标题的信息 | 
| checkbox | Boolean | 初始化是否有复选框 | 
| striped  | Boolean | 斑马线效果; |

::: warning 注意
option里面的{key:value},key必须与数据里面的key一致，value:标题的文字
:::

返回值:无



## getChecked

::: tip getChecked()
获取已勾选的数据。
:::
 
 参数介绍:无

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Array| 勾选的数据| 


## getSelected

::: tip getSelected()
获取选中的数据。
:::

参数介绍:无

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Object| 选中的数据节点| 


## getRowIndex

::: tip getRowIndex(row)
获取数据索引。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| row  | Object| 想要获取索引的数据 | 

返回值:无 


## selectRow

::: tip selectRow(index)
获取索引。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| index  | Number| 数据的索引 | 

返回值:无


## refreshRow

::: tip refreshRow(index)
刷新行。
:::

参数介绍: 
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| index  | Number| 数据的索引 | 

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Object|刷新后的数据| 


## updateRow

::: tip updateRow(index,row)
更新数据。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| index  | Number| 数据的索引 |
| row   | Object | 更新的数据 | 

返回值:无


## appendRow

::: tip appendRow(row)
末尾添加一行数据。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| row   | Object | 添加的数据 | 

返回值:无


## appendRows

::: tip appendRow(rows)
末尾添加多行数据。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| rows | Array  | 添加的数据集合 | 

返回值:无


## insertRow

::: tip insertRow(index,row)
指定位置插入数据。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| index  | Number| 插入的位置，索引 |
| row   | Object | 插入的数据 | 

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Object| 根节点| 



## deleteRow

::: tip deleteRow(index)
删除指定索引数据。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| index  | Number | 删除数据的索引 |

返回值:无


## clickRow 

::: tip clickRow(callback)
单击事件。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback(index,row) | Function| 回调函数 | 
| index  | Number | 该条数据的索引 |
| row   | Object | 该条数据 |

返回值:无

