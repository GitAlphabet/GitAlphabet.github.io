# ComboTree   下拉树
``` html
容器: <input id='comboTree'> / <input class='comboTree'>
      let comboTree = new ComboTree('#comboTree') 或者
      let comboTree = new ComboTree('.comboTree')
```
## init
::: tip init(data)
初始化。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| data | Array| 下拉树的数据 |

返回值:无


## select

::: tip select(callback)
选中事件。
:::

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback(node)  | Function| 选中后的回调函数 | 
| node  | Object| 回调函数里面参数;选中的节点 | 

返回值:无
