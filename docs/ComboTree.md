# ComboTree   下拉树
``` html
容器: <input id='comboTree'> / <input class='comboTree'>
      let comboTree = new ComboTree('#comboTree') 或者
      let comboTree = new ComboTree('.comboTree')
```
## init
::: tip init(data)
初始化。 data => 树的数据, eg:[{"id": 1,"text": "父节点","children": [{"id": 11,"text": "子节点"}]}] 描述需用 text,子节点需要用 children。
:::

使用方法: 
``` js
let data = [{"id": 1,"text": "父节点","children": [{"id": 11,"text": "子节点"}]}]
comboTree.init(data);
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| data | Array| 下拉树的数据 |

返回值:无。


## select

::: tip select(callback)
选中事件。
:::

使用方法: 
``` js
let data = [{"id": 1,"text": "父节点","children": [{"id": 11,"text": "子节点"}]}]
comboTree.select(function(node){
      //node 是选中节点的值; eg:{"id": 11,"text": "子节点"}
      //放置处理逻辑代码；
      console.log(node)
});
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :-: | :-: | :-: | 
| callback(node)  | Function| 选中后的回调函数 | 
| node  | Object| 回调函数里面参数;选中的节点 | 

返回值:无。
