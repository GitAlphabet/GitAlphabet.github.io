### eslint 自动修复

#### 使用 npm 安装 eslint 自动修复的依赖的插件。

```js
npm install eslint-config-standard
npm install eslint-plugin-standard
npm install eslint-plugin-promise
npm install eslint-plugin-import
npm install eslint-plugin-node
npm install eslint-plugin-promise
npm install eslint-plugin-html
npm install eslint-plugin-html
```

#### package.json 配置信息。

```js
"lint": "eslint --ext .js --ext .jsx --ext .vue src/",
"lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue src/"
```

#### .eslintrc 配置

```js
{
  "extends": "standard",
  "plugins": [
    "html"
  ]
}
```

#### 运行命令修复。

```js
// 检查错误
npm run lint
// 自动修复
npm run lint-fix
```
