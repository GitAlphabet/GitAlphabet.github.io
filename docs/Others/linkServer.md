### Mac上传至服务器

#### 1、mac 连接服务器

``` js
ssh root@192.168.101.203 password
// password  => 需要填写密码
```

#### 2、上传文件至服务器

``` js
scp localAddr root@129.28.133.151:serverAddr
// localAddr  => 本地文件路径
// serverAddr => 需要上传到服务器的路径
```
