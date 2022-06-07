### Vuepres 自动部署

#### 1、CI/CD 简介

* 持续集成(CI-Continuous integration)
  * 开发者在开发不同功能代码的过程当中，可以频繁的将代码行合并到一起并互不影响工作
* 持续部署(CD-continuous deployment)
  * 基于某种工具或平台实现代码自动化构建、测试和部署以实现交付高质量的产品
* 持续交付(Continuous Delivery)
  * 基于持续部署的基础之上，将产品交付到线上环境

#### 2、配置 deploy key

* 生成 deploy key

```bash
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
```
<!-- 你会得到两个文件 -->
`gh-pages.pub` is a public key
`gh-pages` is a private key

* 仓库配置
  * `public key` 配置到 Deplay Keys
  * `private key` 配置到 `Secrets`（这里配置私有变量） 并添加自定义名称 `ACTIONS_DEPLOY_KEY`

#### 3、新建部署文件

.github --> wordflows 下新建 `main.yml` 文件

```yml
name: Build and Publish

on:
  push:
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: checkout
        uses: actions/checkout@v1

      - name: Setup Node.js environment # 配置 Node 环境
        uses: actions/setup-node@v3.2.0 # 配置脚本来自 https://github.com/actions/setup-node
        with:
          node-version: "14.x"
    
      - name: install deps
        run: yarn install

      - name: build
        run: yarn docs:build

      - name: deploy
        uses: peaceiris/actions-gh-pages@v3.7.3 # https://github.com/marketplace/actions/github-pages-action
        with:
          deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }} # 仓库配置的私有变量
          # external_repository: GitAlphabet/GitAlphabet.github.io
          # publish_branch: master # 推送的分支
          external_repository: GitAlphabet/blog
          publish_branch: gh-pages
          publish_dir: docs/.vuepress/dist  # 推送的内容
```

#### 4、部署注意点

GitHub 免费计划帐户不能使用私有存储库中的 GitHub 页面。
要将源内容设为私有并使用 GitHub Pages 进行部署，您可以使用此选项将站点从私有存储库部署到公共存储库。

**当您使用 时deploy_key，将您的私钥设置为包含此操作的存储库，并将您的公钥设置为您的外部存储库。**
**vuepress 的配置文件的 base 修改为 /**

```yml
external_repository: GitAlphabet/GitAlphabet.github.io # 外部存储库
```
