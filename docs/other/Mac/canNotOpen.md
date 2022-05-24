### Mac xxx.app 打不开

#### 检查 SIP 状态

```bash
csrutil status  # 查看状态
csrutil disable # 关闭
csrutil enable  # 打开
```

#### 2、查看包内容

在application文件夹中找到你打不开的应用程序>右键显示包内容>MacOS文件夹>找到你打不开的app；
正常情况下应该是黑色图标Unix可执行文件，提示打不开的话就像下面那个图标一样是白色的

#### 3、增加权限

打开终端，输入下面命令（x后面有空格），然后把上图那个文件拉进来再回车，会要求输入系统密码，输入再回车即可。

```bash
sudo chmod +x 
```
