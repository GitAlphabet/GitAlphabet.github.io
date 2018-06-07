# DataGrid  数据列表
``` html
容器: <table id='datagrid'></table> / <table class='datagrid'></table>
      let datagrid = new Datagrid('#datagrid') 或者
      let datagrid = new Datagrid('.datagrid')
```
## init
::: tip init(data,option,ckeckbox,striped)
初始化。
:::

使用方法:
``` js
let data = [{"id": 1,"text": "土建工程","state": "整改中"},{"id": 2,"text": "水利水电","state": "施工中"}]
let option = [{field: "text",title: "名称"},{field: "state",title: "状态"}];
datagrid.init(data,option,false,true);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| data | Array| 树的数据 | 
| option  | Object | 标题的信息 | 
| checkbox | Boolean | 初始化是否有复选框 | 
| striped  | Boolean | 斑马线效果; |

返回值:无。

::: warning 注意
1、option是对象的集合,每个对象里面的必须要有 title(表头的每列的标题描述),field(与数据字段名一一对应)属性,这两个字段名不允许改变就是(title,field);
``` js
eg:[{field: "text",title: "名称"}];
```  

2、如果您需要对某一列数据进行处理,可以使用 formatter 函数;  

``` js
{
      field: "state",
      title: "是否施工",
      formatter: function (value, row, index) {
            if (value == '施工中') {
                  return '√';
            } else {
                  return '×';
            }
      }
}
``` 
:::



## getData

::: tip getData()
获取数据列表的所有数据。
:::

使用方法:
``` js
let arr = datagrid.getData();
console.log(arr);
//[{"id": 1,"text": "土建工程","state": "整改中"},{"id": 2,"text": "水利水电","state": "施工中"}]
```

参数介绍:无。

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Array| 所有的数据| 



## getChecked

::: tip getChecked()
获取已勾选的数据。
:::

使用方法:
``` js
例如值勾选了数据某条:
let arr = datagrid.getChecked();
console.log(arr);
//[{"id": 1,"text": "土建工程","state": "整改中"}]
```
 
 参数介绍:无。

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Array| 勾选的数据| 


## getSelected

::: tip getSelected()
获取选中的数据。
:::

使用方法:
``` js
例如值勾选了数据某条:
let node = datagrid.getSelected();
console.log(node);
//{"id": 1,"text": "土建工程","state": "整改中"}
```

参数介绍:无。

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Object| 选中的数据节点| 


## getRowIndex

::: tip getRowIndex(row)
获取数据索引。 row => 节点数据。
:::

使用方法:
``` js
例如值勾选了数据某条:
let row = {"id": 1,"text": "土建工程","state": "整改中"}; 
let index = datagrid.getRowIndex(row);
console.log(index); // 0 索引从0开始
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| row  | Object| 想要获取索引的数据 | 

返回值:无。


## selectRow

::: tip selectRow(index)
选中某行，并滑动到该行。  index => 数据索引。
:::

使用方法:
``` js
datagrid.selectRow(0);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| index  | Number| 数据的索引 | 

返回值:无。


## refreshRow

::: tip refreshRow(index)
刷新行。   index => 数据索引。
:::

使用方法:
``` js
let newNode = datagrid.refreshRow(0);
console.log(newNode); 
// {"id": 1,"text": "土建工程","state": "整改中"}
```

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
更新数据。 index => 数据索引。 row => 新的数据。
:::

使用方法:
``` js
let row = {"id": 1,"text": "土建工程","state": "停止中"};
datagrid.updateRow(0,row);
//那么第一条数据就变成了 {"id": 1,"text": "土建工程","state": "停止中"}。
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| index  | Number| 数据的索引 |
| row   | Object | 更新的数据 | 

返回值:无。


## appendRow

::: tip appendRow(row)
末尾添加一行数据。  row => 添加的数据。
:::

使用方法:
``` js
let row = {"id": 3,"text": "楼宇","state": "整改中"};
datagrid.appendRow(row);
```


参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| row   | Object | 添加的数据 | 

返回值:无。


## appendRows

::: tip appendRow(rows)
末尾添加多行数据。  rows => 添加多条数据。
:::

使用方法:
``` js
let rows = [{"id": 4,"text": "工程1","state": "施工中"},{"id": 5,"text": "工程2","state": "施工中"}];
datagrid.appendRows(rows);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| rows | Array  | 添加的数据集合 | 

返回值:无。


## insertRow

::: tip insertRow(index,row)
指定位置插入数据。 index => 索引。 row => 插入的数据。
:::

使用方法:
``` js
let row = {"id": 6,"text": "工程3","state": "施工中"};
datagrid.insertRow(0,row);
```

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
删除指定索引数据。  index => 索引。
:::

使用方法:
``` js
datagrid.deleteRow(0);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| index  | Number | 删除数据的索引 |

返回值:无。


## clickRow 

::: tip clickRow(callback)
单击事件。  callback => 回调函数。
:::

使用方法:
``` js
datagrid.clickRow(function(index, row){
      // 处理点击后该条数据的逻辑代码。
});
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback(index,row) | Function| 回调函数 | 
| index  | Number | 该条数据的索引 |
| row   | Object | 该条数据 |

返回值:无。

