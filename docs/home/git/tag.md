### git 的 tag

#### 1、与branch的区别

tag的指针位置是固定的，在给指定提交打好标签以后，它就固定于此位置；
branch的指针位置会不断变动的，随着分支的向前推移或者向后回滚，都在不断变化;

#### 2、命令行

```bash
git tag 标签名字                     # 简易打标命令
git tag -a 标签名字 -m "注释说明"     # 带注释打标命令  
git tag                            # 列出已有 tag
git push origin 标签名字            # 查看 tag 的具体提交信息，按q可以退出
git push origin 标签名字            # 推送 tag
git checkout 标签名字               # 切换tag
git tag -d 标签名字                 # 本地tag删除
git push origin :refs/tags/标签名字 # 远端tag删除
```
