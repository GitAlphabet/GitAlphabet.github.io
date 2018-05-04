# 首页

## 介绍

为了加快开发效率。 utils.js 的 API 是基于 jQuery / EasyUI / Echart 进行封装的。

1、树，下拉树，数据列表，对话框是基于EasyUI进行封装的，在使用之前需要引入 jQuery.js, EasyUi.css, EasyUi.js，再引入此时封装的 utils.js。 eg:

 ``` css
<link rel='stylesheet'  href = 'easyui.css'> 
``` 
```  js
<script	src='jquery.js'></script> 
<script	src='easyui.js'></script> 
<script	src='utils.js'></script>
```

2、饼图是基于 echart 的，同理需要引入
```  js
<script	src='jquery.js'></script> 
<script	src='echarts.js'></script> 
<script	src='utils.js'></script> 
```

3、input、select 是基于 jQuery 封装的。所以需要引入 jQuery.js、utils.js
```  js
<script	src='jquery.js'></script> 
<script	src='utils.js'></script> 
```

## 使用方法：(eg:Tree)
``` 
a)	首先你需要一个容器 eg: <ul id='tree'> 或者 <ul class='tree'>
b)	然后使用new命令。
    eg: let tree = new Tree('#' + id) 或者 
        let tree = new Tree('.' + class)。 此参数必需;
c)	再初始化数据。调用方法都是: [实例.方法] eg: tree.close();
    tree.init(data);  调用init()方法，data 为树的数据,如果是 json数据需要自己拼接成树的数据形式。
```
