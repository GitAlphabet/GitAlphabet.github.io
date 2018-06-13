# git指令

### 创建仓库/初始化
``` js
git clone 仓库地址         //克隆远程仓库
git init                  //初始化本地仓库
```

### 修改、提交
``` js
git status                  //查看状态
git diff                    //查看变更内容
git add *(-A)               //提交所有文件到暂存区
git add <file>              //查看指定文件到暂存区
git mv <old> <new>          //文件改名
git rm <file>               //删除文件
git rm --cached <file>      //停止文件添加到暂存区但不删除
git commit -m'描述信息'      //提交文件到工作区
```
### 查看提交历史
``` js
git log                     //查看提交历史
git reflog                  //查看所有提交历史(commit、reset)
```

### 撤销
``` js
git reset --hard sha值       //回退到哪个版本，sha值是git log 得出来的
```

### 分支
``` js
git branch (-al)             //显示本地所有分支
git checkout <branch>        //切换分支
git branch <new branch>      //新建分支
git branch -d <branch>       //删除分支
git merge <branch>           //合并分支
```

### 远程操作
``` js
git remote -v               //查看远程版本库信息
git pull origin <branch>    //拉取代码该分支
git push origin <branch>    //上传代码到该分支
```
