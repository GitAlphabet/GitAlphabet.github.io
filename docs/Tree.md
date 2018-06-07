# Tree   树
``` html
容器: <ul id='tree'> 或者 <ul class='tree'>
      let tree = new Tree('#tree') 或者  let tree = new Tree('.tree')
```

## init
::: tip init(data,checkbox,lindes)
初始化。
:::

使用方法:
``` js
let data = [{"id": 1,"text": "父节点","children": [{"id": 11,"text": "子节点"}]}]
tree.init(data,true,true);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| data | Array| 树的数据 | 
| checkbox | Boolean | 初始化是否有复选框 | 
| lindes | Boolean | 层级关系线条展示 |

返回值:无。


## selectNode

::: tip selectNode(id)
设置选中项,并滚动到此节点。id => 设置选中节点的 id 值。
:::

使用方法:
``` js
tree.selectNode(1);
```


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

使用方法:
``` js
tree.getSelectNode();
```

参数介绍:无。

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Object| 选中的节点| 


## expend

::: tip expend(id)
展开并选中此节点。 id => 展开节点的 id 值。
:::

使用方法:
``` js
tree.expend(1);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| id  | Number| 展开的节点的 ID值 | 

返回值:无。


## collapse

::: tip collapse(id)
折叠并选中此节点。    id => 折叠节点的 id 值。
:::

使用方法:
``` js
tree.collapse(1);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| id  | Number| 折叠的节点的 ID值 | 

返回值:无。


## appendNode

::: tip appendNode(data)
添加子节点。    data => 子节点的数据:[{"id": 12,"text": "子节点2"}]
:::

使用方法:
``` js
tree.appendNode([{"id": 12,"text": "子节点2"}]);
```

参数介绍: 
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| data  | Array| 子节点数据集合 | 

返回值:无。


## updateNode

::: tip updateNode(id)
更新节点。    id => 更新节点的id。
:::

使用方法:
``` js
tree.updateNode(1);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| id  | Number| 更新节点的 ID值 | 

返回值:无。


## removeNode

::: tip removeNode(id)
移除节点(包括子节点)。    id => 移除节点的id。
:::

使用方法: 
``` js
tree.removeNode(1);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| id  | Number| 选中的节点的 ID值 | 

返回值:无。


## getRoots

::: tip getRoots()
获取所有根节点组成的数组。 
:::

使用方法: 
``` js
tree.getRoots();
返回的值为 eg: [{"id": 1,"text": "父节点","children": [{"id": 11,"text": "子节点"}]}]
```

参数介绍:无。

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Object| 根节点| 

## getParent

::: tip getParent(node)
获取父节点。 没有就返回 null.
:::

使用方法: 
``` js
tree.getParent(node);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| node  | Object| node 为该节点 | 

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Object| 父节点,没有就返回 null。| 

## getChildren

::: tip getChildren(node)
获取子节点(所有子节点组成的数组)。 没有就返回空数组 [].
:::

使用方法: 
``` js
tree.getChildren(node);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| node  | Object| node 为该节点 | 

返回值:
| 返回值类型 | 返回值描述 | 
| :-: | :-: | 
| Array| 所有子节点组成的数组,没有就返回空数组 [ ]。|



## singleClick

::: tip selectNode(callback)
单击事件。    callback => 回调函数，处理点击节点的函数。
:::

使用方法: 
``` js
tree.singleClick(function(node){
      //此处是放置处理该节点的逻辑代码。
      console.log(node);
});
node 的值 eg: {"id": 11,"text": "子节点"}
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback(node)  | Function| 回调函数 | 
| node  | Object| 回调函数里面参数;当前点击节点 | 

返回值:无。


## checkOrUnCheck 

::: tip checkOrUnCheck (checkCallback,uncheckCallback)
勾选/取消勾选。    checkCallback => 处理节点选中的函数。  uncheckCallback => 处理节点未选中的函数。
:::

使用方法: 
``` js
tree.checkOrUnCheck(function(node){
      //此处是放置节点选中的逻辑代码。
      console.log(node + '节点选中！');
},function(node){
      //此处是放置节点未选中的逻辑代码。
      console.log(node + '节点未选中！');
});
node 的值 eg: {"id": 11,"text": "子节点"}
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| checkCallback(node)  | Function| 回调函数 | 
| uncheckCallback(node)  | Function| 回调函数 | 
| node  | Object| 回调函数里面参数;当前勾选/取消勾选节点 | 

返回值:无。

