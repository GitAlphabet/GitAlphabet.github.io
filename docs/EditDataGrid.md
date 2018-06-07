# EditDataGrid  可编辑的数据列表
``` html
容器: <table id='datagrid'></table> / <table class='datagrid'></table>
      let editDatagrid = new EditDataGrid('#editDatagrid') 或者
      let editDatagrid = new EditDataGrid('.editDatagrid')
```
## init
::: tip init(data,option,ckeckbox,striped)
初始化。
:::

使用方法:
``` js
//先进行简单的编辑:
let data = [{"id": 1,"text": "土建工程","state": "整改中"},{"id": 2,"text": "水利水电","state": "施工中"}]
let option = [{field: "text",title: "名称",editor: 'text'},{field: "state",title: "状态",editor: 'text'}];
editDatagrid.init(data,option,false,true);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| data | Array| 树的数据 | 
| option  | Object | 标题的信息 | 
| checkbox | Boolean | 初始化是否有复选框 | 
| striped  | Boolean | 斑马线效果 |

返回值:无。

::: warning 注意
1、option是对象的集合,每个对象里面的必须要有 title(表头的每列的标题描述),field(与数据字段名一一对应)属性,这两个字段名不允许改变就是(title,field);
``` js
// [{field: "text",title: "名称"}];
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

3、如果您需要编辑:  
``` js
a)文本编辑模式: 
{field: "text",title: "名称",editor: 'text'};

b)数字编辑模式:
{field: "count",title: "名称",editor: 'numberbox'};
      
c)下拉框模式:
{
      field: "text",
      title: "名称",
      editor: {
            type: 'combobox',
            options: {
                  valueField: 'value',
                  textField: 'text',
                  data: [{
                        "value": 1,
                        "text": 1
                        },
                        {
                        "value": 2,
                        "text": 2
                        }
                  ],
                  required: true
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
```

参数介绍:无。

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Array| 所有的数据| 


## cell

::: tip cell()
获取数据列表的所有数据。
:::

``` js
let cell = datagrid.cell();
// {index:0,field:'text'}
```

参数介绍:无。

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Object| 返回词条数据的索引和列名 eg:{index: 0, field: "text"}|
