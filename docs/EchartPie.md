# EchartPie   饼图
``` html
容器: <div id='pie'></div> / <div class='pie'></div>
      let pie = new EchartPie('#pie') 或者
      let pie = new EchartPie('.pie')
```
## init
::: tip init(params,data)
初始化。
:::

使用方法:
``` js
pie.init(params,data);
// params:设置图表的样式等信息。
// data: 图表的数据。
```

参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :- | :- | :- | 
| params  | Object | 标题/饼图/图例/| 
| params.title | String  | 标题描述 | 
| params.titlePos   | String    | 标题位置(left/center/right,默认center) | 
| params.radius   | String   | 饼图半径大小(eg:'50%') | 
| params.pieX  | String   | 饼图圆心的 X轴位置(eg:'50%'/50,50表示50px) | 
| params.pieY   | Number  | 饼图圆心的 Y轴位置(eg:'50%'/50,50表示50px) | 
| params.legendOrient   | String    | 图例的水平/垂直排序(vertical/horizontal) | 
| params.legendLeft   | String    | 图例在 X 轴的位置(left/center/right 默认left) | 
| params.legendTop  | String  | 图例在Y轴位置 (top/middle/bottom 默认top) | 
| data  | Array   |  饼图数据 | 
| data.value   | Number    |  数据值 | 
| data.name    | String     |  数据项名称 | 
| data.itemStyle| Object |配置饼图颜色(不配置,会启用认样式eg:{color:'red'})| 

::: warning 自定义饼图颜色
``` js
// data 每条数据里面可以设置
{
      name: '销售'，
      value: 8,
      itemStyle: {
            color: 'green'
      }
}
```
:::

返回值:无。


## pieClick

::: tip pieClick(callback)
点击事件。 callback => 回调函数。
:::

使用方法:
``` js
pie.pieClick(function(params){
      // 处理点击饼图某块区域,处理逻辑代码
      // params => 点击的区域的数据信息
});
```
 
参数介绍:
| 参数名 | 参数类型 | 参数描述 | 
| :- | :- | :- | 
| callback(params)  | Function| 回调函数 | 
| params   | Object | 当前点击的模块的参数 | 

返回值:无。
