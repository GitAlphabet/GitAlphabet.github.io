const { defaultTheme } = require('vuepress');
module.exports = {
  title: '向往飞翔的小蚂蚁',
  description: '个人博客',
  markdown: {
    lineNumbers: true, // 开启代码行号
  },
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: `/favicon.ico`,
      },
    ],
  ],
  base: '/blog/',
  theme: defaultTheme({
    repo: 'https://github.com/GitAlphabet',
    repoLabel: 'Github',
    sidebarDepth: 2,
    editLink: false,
    contributors: false,
    lastUpdatedText: '最新更新时间',
    // 默认主题配置
    navbar: [
      {
        text: '基础',
        link: '/home/CSS/less',
        activeMatch: '/home',
      },
      {
        text: '面试',
        link: '/interview/Subject/css',
        activeMatch: '/interview',
      },
      {
        text: '算法',
        link: '/algorithm/Simple/first',
        activeMatch: '/hoalgorithmme',
      },
      {
        text: '其他',
        link: '/other/Mac/setting-ssh',
        activeMatch: '/other',
      },
    ],
    sidebar: {
      '/home/': [
        {
          text: 'CSS',
          collapsible: true,
          children: [
            {
              text: 'Less',
              link: '/home/CSS/less',
            },
            {
              text: 'CSS 部分属性',
              link: '/home/CSS/some-css',
            },
            {
              text: '布局',
              link: '/home/CSS/mobile-layout',
            },
            {
              text: 'BFC(块格式化上下文)',
              link: '/home/CSS/bfc',
            },
            {
              text: 'CSS常见技巧',
              link: '/home/CSS/skill',
            },
            {
              text: '滚动条样式',
              link: '/home/CSS/scroll',
            },
          ],
        },
        {
          text: 'Javascript',
          collapsible: true,
          children: [
            {
              text: '原生 ajax',
              link: '/home/Javascript/ajax',
            },
            {
              text: 'ES6(数组的扩展)',
              link: '/home/Javascript/array',
            },
            {
              text: 'Arguments对象',
              link: '/home/Javascript/arguments',
            },
            {
              text: 'async 函数',
              link: '/home/Javascript/async',
            },
            {
              text: 'Promise',
              link: '/home/Javascript/promise',
            },
            {
              text: 'ES6 数值',
              link: '/home/Javascript/number',
            },
            {
              text: '浅拷贝与深拷贝',
              link: '/home/Javascript/copy',
            },
            {
              text: 'Base64',
              link: '/home/Javascript/base64',
            },
            {
              text: '访问图片返回403',
              link: '/home/Javascript/img',
            },
            {
              text: 'RegExp',
              link: '/home/Javascript/RegExp',
            },
            {
              text: 'call、apply、bind 详解',
              link: '/home/Javascript/call-apply-bind',
            },
            {
              text: 'this 指向',
              link: '/home/Javascript/this',
            },
            {
              text: '闭包',
              link: '/home/Javascript/closure',
            },
            {
              text: '原型链',
              link: '/home/Javascript/prototype',
            },
            {
              text: '事件循环(Event Loop)',
              link: '/home/Javascript/eventLoop',
            },
            {
              text: 'CryptoJS AES 加密',
              link: '/home/Javascript/encryt',
            },
            {
              text: '垃圾回收机制',
              link: '/home/Javascript/gc',
            },
            {
              text: '数组的排序',
              link: '/home/Javascript/array-sort',
            },
            {
              text: '自定义事件',
              link: '/home/Javascript/custom-events',
            },
            {
              text: '全屏API',
              link: '/home/Javascript/fullScreen',
            },
            {
              text: 'valueOf和toString',
              link: '/home/Javascript/type-change',
            },
            {
              text: '函数的防抖与节流',
              link: '/home/Javascript/debounce-and-throttle',
            },
            {
              text: '十种经典排序',
              link: '/home/Javascript/sort',
            },
            {
              text: '虚拟滚动',
              link: '/home/Javascript/virtual-scroll',
            },
          ],
        },

        {
          text: 'Vue',
          collapsible: true,
          children: [
            {
              text: '代码风格指南',
              link: '/home/Vue/standard',
            },

            {
              text: 'px2rem',
              link: '/home/Vue/px2rem',
            },
            {
              text: 'px2vw',
              link: '/home/Vue/px2vw',
            },

            {
              text: '修改 UI 库的样式',
              link: '/home/Vue/revise-style',
            },
            {
              text: '组件间通讯',
              link: '/home/Vue/component-communication',
            },
            {
              text: 'nextTick 和 set',
              link: '/home/Vue/nextTick-set',
            },
            {
              text: 'watch 注意点',
              link: '/home/Vue/watch',
            },

            {
              text: '路由懒加载',
              link: '/home/Vue/lazy-router',
            },

            {
              text: '路由传参',
              link: '/home/Vue/route-params',
            },
            {
              text: '路由模式',
              link: '/home/Vue/router-type',
            },
            {
              text: 'Vuex 简介',
              link: '/home/Vue/vuex',
            },
            {
              text: 'vuex-persistedstate',
              link: '/home/Vue/persistedstate',
            },
            {
              text: 'fastclick',
              link: '/home/Vue/fastclick',
            },
            {
              text: 'better-scroll 封装',
              link: '/home/Vue/better-scroll',
            },
            {
              text: 'Axios',
              link: '/home/Vue/axios',
            },
          ],
        },
        {
          text: 'React',
          collapsible: true,
          children: [
            {
              text: 'react-create-app',
              link: '/home/React/cra',
            },
            {
              text: ' CSS Module',
              link: '/home/React/css-module',
            },
            {
              text: '生命周期',
              link: '/home/React/life-cycle',
            },
            {
              text: 'Hooks',
              link: '/home/React/hooks',
            },
            {
              text: 'redux 基础用法',
              link: '/home/React/redux-base',
            },
            {
              text: 'redux-thunk',
              link: '/home/React/redux-thunk',
            },
            {
              text: 'redux 中间件原理',
              link: '/home/React/redux-middleware',
            },
            {
              text: 'Immer',
              link: '/home/React/immer',
            },
            {
              text: 'XLSX',
              link: '/home/React/xlsx2json',
            },
            {
              text: 'umi 兼容 IE11',
              link: '/home/React/uim-ie11',
            },
            {
              text: 'Echart Map',
              link: '/home/React/echartsMap',
            },
          ],
        },
        {
          text: 'TypeScript',
          collapsible: true,
          children: [
            {
              text: 'type 和 interface 区别',
              link: '/home/TypeScript/type-interface',
            },
            {
              text: '逻辑运算符',
              link: '/home/TypeScript/logical-operators',
            },
            {
              text: 'Echart 的 option',
              link: '/home/TypeScript/echart',
            },
          ],
        },
        {
          text: 'Node',
          collapsible: true,
          children: [
            {
              text: 'Node 连接 Mysql',
              link: '/home/Node/mysql',
            },
            {
              text: '开发 API',
              link: '/home/Node/server',
            },
            {
              text: 'pm2',
              link: '/home/Node/pm2',
            },
            {
              text: '更新 Node',
              link: '/home/Node/update-node',
            },
            {
              text: 'Express 解析请求参数',
              link: '/home/Node/get-params',
            },
          ],
        },

        {
          text: 'Http',
          collapsible: true,
          children: [
            {
              text: 'TCP 协议',
              link: '/home/Http/tcp',
            },
            {
              text: 'Https',
              link: '/home/Http/https',
            },
            {
              text: '缓存',
              link: '/home/Http/cache',
            },
          ],
        },
        {
          text: 'Webpack',
          collapsible: true,
          children: [
            {
              text: 'Babel(入门)',
              link: '/home/Webpack/babel',
            },
            {
              text: '优化构建速度',
              link: '/home/Webpack/optimize',
            },
            {
              text: '环境变量',
              link: '/home/Webpack/processEnv',
            },
            {
              text: '处理 css/less/sass',
              link: '/home/Webpack/handle-css',
            },
            {
              text: 'babel-loader 转换 ES6',
              link: '/home/Webpack/toES6',
            },
            {
              text: '打包开启 gzip',
              link: '/home/Webpack/start-gzip',
            },
            {
              text: '多入口',
              link: '/home/Webpack/pack-multiple-js',
            },
            {
              text: 'Loader 和 Plugin',
              link: '/home/Webpack/loader-plugin',
            },
            {
              text: 'Tree-shaking',
              link: '/home/Webpack/tree-shaking',
            },
          ],
        },
        {
          text: 'Python',
          collapsible: true,
          children: [
            {
              text: 'list 与 for',
              link: '/home/Python/list',
            },
            {
              text: '参数',
              link: '/home/Python/fun-params',
            },
          ],
        },
        {
          text: 'MiniApp',
          collapsible: true,
          children: [
            {
              text: '获取用户信息',
              link: '/home/Mini/getUserInfo',
            },
            {
              text: 'globalData',
              link: '/home/Mini/globalData',
            },
            {
              text: '小程序注意点',
              link: '/home/Mini/attentions',
            },
          ],
        },
        {
          text: 'Nginx',
          collapsible: true,
          children: [
            {
              text: 'Mac 安装 Nginx',
              link: '/home/Nginx/install',
            },
          ],
        },
        {
          text: 'Git',
          collapsible: true,
          children: [
            {
              text: '命令行',
              link: '/home/Git/basic-command',
            },
          ],
        },
        {
          text: 'DataBase',
          collapsible: true,
          children: [
            {
              text: 'SQL 语句',
              link: '/home/DataBase/sql',
            },
            {
              text: '安装问题',
              link: '/home/DataBase/faq',
            },
            {
              text: 'Mac 操作',
              link: '/home/DataBase/mysql',
            },
          ],
        },
        {
          text: 'Eslint',
          collapsible: true,
          children: [
            {
              text: '规则',
              link: '/home/Eslint/rules',
            },
            {
              text: '自动修复',
              link: '/home/Eslint/repair',
            },
          ],
        },
      ],
      '/interview/': [
        {
          text: '面试题',
          collapsible: false,
          children: [
            {
              text: 'CSS 面试题',
              link: '/interview/Subject/css',
            },
            {
              text: 'js 面试题',
              link: '/interview/Subject/js',
            },
            {
              text: 'React 面试题',
              link: '/interview/Subject/react',
            },
            {
              text: 'Vue 面试题',
              link: '/interview/Subject/vue',
            },
          ],
        },
      ],
      '/algorithm/': [
        {
          text: '简单',
          collapsible: false,
          children: [
            {
              text: '买卖股票的最佳时机',
              link: '/algorithm/Simple/first',
            },
            {
              text: '两数之和',
              link: '/algorithm/Simple/second',
            },
          ],
        },
        {
          text: '中等',
          collapsible: true,
          children: [
            {
              text: '有效三角形的个数',
              link: '/algorithm/Middling/triangle-number',
            },
          ],
        },
        {
          text: '困难',
          collapsible: true,
          children: [],
        },
      ],
      '/other/': [
        {
          text: 'Mac',
          collapsible: false,
          children: [
            {
              text: '配置 ssh',
              link: '/other/Mac/setting-ssh',
            },
            {
              text: '上传至服务器',
              link: '/other/Mac/link-server',
            },
            {
              text: 'xxx.app 打不开',
              link: '/other/Mac/canNotOpen',
            },
          ],
        },
        {
          text: '其他',
          collapsible: true,
          children: [
            {
              text: '原码、补码、反码详解',
              link: '/other/computer-binary',
            },
            {
              text: '更新 yarn',
              link: '/other/yarn-update',
            },
            {
              text: 'npm 和 yarn 部分命令',
              link: '/other/npm',
            },
            {
              text: 'npm 发包',
              link: '/other/publish-npm',
            },
            {
              text: 'SourceTree',
              link: '/other/refresh-origin',
            },
            {
              text: 'whistle',
              link: '/other/whistle',
            },
            {
              text: 'Markdown 基础语法',
              link: '/other/markdown',
            },
            {
              text: 'Vuepress 部署',
              link: '/other/vuepress-deploy',
            },
            {
              text: '简单的脚本并配置',
              link: '/other/script',
            },
            {
              text: 'npm ERR! code ELIFECYCLE',
              link: '/other/npm-error',
            },
          ],
        },
      ],
    },
  }),
};
