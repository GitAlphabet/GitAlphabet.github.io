### 多入口

#### 1、初始化

```bash
npm init -y
```

#### 2、安装 webpack

```bash
npm install --save-dev webpack
```

#### 3、安装 html-webpack-plugin

```bash
npm i --save-dev html-webpack-plugin
```

#### 4、新建 webpack.config.js

```js
let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  //context:'', 上下文为根目录
  entry: {
    main: './src/script/index.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
    c: './src/script/c.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name]-[chunkhash].js'
    //publicPath:'http://cdn.com/'           // 上线的路径
  },
  plugins: [
    new htmlWebpackPlugin({
      //filename:'index-[hash].html',          // 指定打包后的名称
      filename: 'a.html', // 指定打包后的名称
      template: 'index.html', // 打包的模板页面
      inject: 'body', // 指定脚本放在哪个位置。此处放在头部
      title: 'a', //在 html 引用 <title><%= htmlWebpackPlugin.options.title%></title>
      chunks: ['main', 'a'] // 指定当前的 HTML 里面包含的 chunks
      //excludeChunks:["b","c"]                // 解决多个 chunks ,除了这些 chunks 其他都加载
      /*  minify:{
            removeComments:true,                        //删除注释
            collapseInlineTagWhitespace:true,
            collapseWhitespace:true,                    //删除空格
            removeScriptTypeAttributes: true,           //移除 script 标签上的 type="text/javascript"
            removeStyleLinkTypeAttributes: true,        //移除 link 标签上的type="text/css"
        } */
    }),
    new htmlWebpackPlugin({
      //filename:'index-[hash].html',
      filename: 'b.html',
      template: 'index.html',
      inject: 'body',
      title: 'b',
      chunks: ['b']
      /*  minify: {
            removeComments: true,
            //collapseInlineTagWhitespace:true,
            collapseWhitespace: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
        } */
    }),
    new htmlWebpackPlugin({
      //filename:'index-[hash].html',
      filename: 'c.html',
      template: 'index.html',
      inject: 'body',
      title: 'c',
      chunks: ['c']
      /*  minify: {
            removeComments: true,
            //collapseInlineTagWhitespace:true,
            collapseWhitespace: true, 
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true, 
        } */
    })
  ]
}
```

#### 5、打包运行

```bash
命令行输入 webpack
```
