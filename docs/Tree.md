# Tree   树


## init
::: tip init(data,checkbox,lindes)
初始化。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| data | Array| 树的数据 | 
| checkbox | Boolean | 初始化是否有复选框 | 
| lindes | Boolean | 层级关系线条展示 |

返回值:无



## selectNode

::: tip selectNode(id)
设置选中项,并滚动到此节点。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| id  | Number| 选中的节点的 ID值 | 

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Object| 选中的节点| 


## getSelectNode

::: tip getSelectNode()
获取选中的节点。
:::

参数介绍:无

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Object| 选中的节点| 


## expend

::: tip expend(id)
选中并展开此节点。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| id  | Number| 展开的节点的 ID值 | 

返回值:无 


## collapse

::: tip collapse(id)
选中并折叠此节点。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| id  | Number| 折叠的节点的 ID值 | 

返回值:无


## appendNode

::: tip appendNode(data)
添加子节点。
:::

参数介绍: 
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| data  | Array| 子节点数据集合 | 

返回值:无


## updateNode

::: tip updateNode(id)
添加子节点。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| id  | Number| 更新节点的 ID值 | 

返回值:无


## removeNode

::: tip removeNode(id)
移除节点。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| id  | Number| 选中的节点的 ID值 | 

返回值:无


## getRoot

::: tip getRoot()
获取根节点。
:::

参数介绍:无

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Object| 根节点| 



## singleClick

::: tip selectNode(callback)
单击事件。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback(node)  | Function| 回调函数 | 
| node  | Object| 回调函数里面参数;当前点击节点 | 

返回值:无


## checkOrUnCheck 

::: tip checkOrUnCheck (callback,callback1)
勾选/取消勾选。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback(node)  | Function| 回调函数 | 
| callback1(node)  | Function| 回调函数 | 
| node  | Object| 回调函数里面参数;当前勾选/取消勾选节点 | 

返回值:无

