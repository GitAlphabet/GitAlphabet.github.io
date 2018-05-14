# EditDataGrid  可编辑的数据列表
``` html
容器: <table id='datagrid'></table> / <table class='datagrid'></table>
      let datagrid = new EditDataGrid('#datagrid') 或者
      let datagrid = new EditDataGrid('.datagrid')
```
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
| striped  | Boolean | 斑马线效果 |

::: warning 注意
option里面的{key:value},key必须与数据里面的key一致，value:标题的文字
:::

返回值:无

## getData

::: tip getData()
获取数据列表的所有数据
:::

参数介绍:无

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Array| 所有的数据| 
