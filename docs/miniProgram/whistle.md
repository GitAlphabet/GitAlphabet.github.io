### whistle

#### 1、安装/启动

``` js
// 安装
$ sudo npm install -g whistle

// 查看帮助
$ w2 help

// 启动
$ w2 start

// 重启whsitle:
$ w2 restart

// 停止whistle:
$ w2 stop

// 调试模式启动whistle(主要用于查看whistle的异常及插件开发)
$ w2 run
```

#### 2、访问Whistle

```
地址：127.0.0.1:8899
```

#### 3、配置代理
::: tip 注意
127.0.0.1:3000是自己用node启动的服务(node章节有文章)
:::

```
1、打开whistle网页（127.0.0.1:8899）。
2、在Rules规则中有一个默认的Default窗口，在此可以配置转发请求。
    www.myselfurl.com 127.0.0.1:3000 https://www.myselfurl.com
3、然后小程序管理后台设置请求合法域名。小程序开发工具清除缓存重新编译即可。
```