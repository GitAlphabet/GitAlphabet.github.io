### pm2

让 Node 服务在退出 ssh 客户端后继续运行服务。

#### 安装及使用

```bash
npm install forever -g   # 在服务器安装
forever start app.js     # 启动应用
forever stop app.js      # 关闭应用
forever restart app.js   # 重启应用
forever stopall          # 关闭所有应用
forever restartall       # 重启所有应用
forever list             # 显示所有运行的应用
```