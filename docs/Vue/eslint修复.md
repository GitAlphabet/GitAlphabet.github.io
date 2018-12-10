### eslint自动修复

#### 使用 npm 安装 eslint自动修复的依赖的插件。

```  js
npm i eslint-plugin-html -D
```

#### package.json配置信息。

``` js
"lint": "eslint --ext .js --ext .jsx --ext .vue src/",
"lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue src/"
```

#### 运行命令修复。

``` js
// 检查错误
npm run lint
// 自动修复
npm run lint-fix
```
