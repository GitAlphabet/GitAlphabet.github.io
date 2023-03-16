
import { defaultTheme } from 'vuepress';

export default {
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
  // base: '/blog/', // 发不到 blog gh-pages 下需要配置
  theme: defaultTheme({
    repo: 'https://github.com/GitAlphabet',
    repoLabel: 'Github',
    sidebarDepth: 3,
    editLink: false,
    // contributors: false,
    lastUpdatedText: '上次更新',
    prevLinks: true,
    nextLinks: true,
    smoothScroll: true,
    contributorsText: '贡献者',
    backToHome: '返回首页',
    toggleSidebar: '切换侧边栏',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    navbar: [
      {
        text: '基础',
        link: '/home/css/less',
        activeMatch: '/home',
      },
      {
        text: '面试',
        link: '/interview/subject/css',
        activeMatch: '/interview',
      },
      {
        text: '算法',
        link: '/algorithm/simple/first',
        activeMatch: '/hoalgorithmme',
      },
      {
        text: '其他',
        link: '/other/mac/setting-ssh',
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
              link: '/home/css/less',
            },
            {
              text: 'CSS 部分属性',
              link: '/home/css/some-css',
            },
            {
              text: '布局',
              link: '/home/css/mobile-layout',
            },
            {
              text: 'BFC(块格式化上下文)',
              link: '/home/css/bfc',
            },
            {
              text: 'CSS常见技巧',
              link: '/home/css/skill',
            },
            {
              text: '滚动条样式',
              link: '/home/css/scroll',
            },
            {
              text: 'Grid',
              link: '/home/css/grid',
            },
          ],
        },
        {
          text: 'Javascript',
          collapsible: true,
          children: [
            {
              text: '原生 ajax',
              link: '/home/javascript/ajax',
            },
            {
              text: 'ES6(数组的扩展)',
              link: '/home/javascript/array',
            },
            {
              text: 'Arguments对象',
              link: '/home/javascript/arguments',
            },
            {
              text: 'async 函数',
              link: '/home/javascript/async',
            },
            {
              text: 'Promise',
              link: '/home/javascript/promise',
            },
            {
              text: 'ES6 数值',
              link: '/home/javascript/number',
            },
            {
              text: '浅拷贝与深拷贝',
              link: '/home/javascript/copy',
            },
            {
              text: 'Base64',
              link: '/home/javascript/base64',
            },
            {
              text: '访问图片返回403',
              link: '/home/javascript/img',
            },
            {
              text: 'RegExp',
              link: '/home/javascript/RegExp',
            },
            {
              text: 'call、apply、bind 详解',
              link: '/home/javascript/call-apply-bind',
            },
            {
              text: 'this 指向',
              link: '/home/javascript/this',
            },
            {
              text: '闭包',
              link: '/home/javascript/closure',
            },
            {
              text: '原型链',
              link: '/home/javascript/prototype',
            },
            {
              text: '事件循环(Event Loop)',
              link: '/home/javascript/eventLoop',
            },
            {
              text: 'CryptoJS AES 加密',
              link: '/home/javascript/encryt',
            },
            {
              text: '垃圾回收机制',
              link: '/home/javascript/gc',
            },
            {
              text: 'V8 的垃圾回收机制',
              link: '/home/javascript/v8',
            },
            {
              text: '数组的排序',
              link: '/home/javascript/array-sort',
            },
            {
              text: '自定义事件',
              link: '/home/javascript/custom-events',
            },
            {
              text: '全屏API',
              link: '/home/javascript/fullScreen',
            },
            {
              text: 'valueOf和toString',
              link: '/home/javascript/type-change',
            },
            {
              text: '函数的防抖与节流',
              link: '/home/javascript/debounce-and-throttle',
            },
            {
              text: '大屏自适应',
              link: '/home/javascript/screen',
            },
            {
              text: '十种经典排序',
              link: '/home/javascript/sort',
            },
            {
              text: '虚拟滚动',
              link: '/home/javascript/virtual-scroll',
            },
          ],
        },

        {
          text: 'Vue',
          collapsible: true,
          children: [
            {
              text: '代码风格指南',
              link: '/home/vue/standard',
            },

            {
              text: 'px2rem',
              link: '/home/vue/px2rem',
            },
            {
              text: 'px2vw',
              link: '/home/vue/px2vw',
            },

            {
              text: '修改 UI 库的样式',
              link: '/home/vue/revise-style',
            },
            {
              text: '组件间通讯',
              link: '/home/vue/component-communication',
            },
            {
              text: 'nextTick 和 set',
              link: '/home/vue/nextTick-set',
            },
            {
              text: 'watch 注意点',
              link: '/home/vue/watch',
            },

            {
              text: '路由懒加载',
              link: '/home/vue/lazy-router',
            },

            {
              text: '路由传参',
              link: '/home/vue/route-params',
            },
            {
              text: '路由模式',
              link: '/home/vue/router-type',
            },
            {
              text: 'Vuex 简介',
              link: '/home/vue/vuex',
            },
            {
              text: 'vuex-persistedstate',
              link: '/home/vue/persistedstate',
            },
            {
              text: 'fastclick',
              link: '/home/vue/fastclick',
            },
            {
              text: 'better-scroll 封装',
              link: '/home/vue/better-scroll',
            },
            {
              text: 'Axios',
              link: '/home/vue/axios',
            },
            {
              text: 'vuepress 自动部署',
              link: '/home/vue/cicd',
            },
          ],
        },
        {
          text: 'React',
          collapsible: true,
          children: [
            {
              text: 'react-create-app',
              link: '/home/react/cra',
            },
            {
              text: ' CSS Module',
              link: '/home/react/css-module',
            },
            {
              text: '生命周期',
              link: '/home/react/life-cycle',
            },
            {
              text: 'Hooks',
              link: '/home/react/hooks',
            },
            {
              text: 'redux 基础用法',
              link: '/home/react/redux-base',
            },
            {
              text: 'redux-thunk',
              link: '/home/react/redux-thunk',
            },
            {
              text: 'redux 中间件原理',
              link: '/home/react/redux-middleware',
            },
            {
              text: 'Immer',
              link: '/home/react/immer',
            },
            {
              text: 'XLSX',
              link: '/home/react/xlsx2json',
            },
            {
              text: 'umi 兼容 IE11',
              link: '/home/react/uim-ie11',
            },
            {
              text: 'Echart Map',
              link: '/home/react/echartsMap',
            },
          ],
        },
        {
          text: 'TypeScript',
          collapsible: true,
          children: [
            {
              text: 'type 和 interface 区别',
              link: '/home/typeScript/type-interface',
            },
            {
              text: '逻辑运算符',
              link: '/home/typeScript/logical-operators',
            },
            {
              text: 'Echart 的 option',
              link: '/home/typeScript/echart',
            },
          ],
        },
        {
          text: 'Node',
          collapsible: true,
          children: [
            {
              text: 'Node 连接 Mysql',
              link: '/home/node/mysql',
            },
            {
              text: '开发 API',
              link: '/home/node/server',
            },
            {
              text: 'pm2',
              link: '/home/node/pm2',
            },
            {
              text: '更新 Node',
              link: '/home/node/update-node',
            },
            {
              text: 'Express 解析请求参数',
              link: '/home/node/get-params',
            },
          ],
        },

        {
          text: 'Http',
          collapsible: true,
          children: [
            {
              text: 'TCP 协议',
              link: '/home/http/tcp',
            },
            {
              text: 'Https',
              link: '/home/http/https',
            },
            {
              text: '缓存',
              link: '/home/http/cache',
            },
          ],
        },
        {
          text: 'Webpack',
          collapsible: true,
          children: [
            {
              text: 'Babel(入门)',
              link: '/home/webpack/babel',
            },
            {
              text: '优化构建速度',
              link: '/home/webpack/optimize',
            },
            {
              text: '环境变量',
              link: '/home/webpack/processEnv',
            },
            {
              text: '处理 css/less/sass',
              link: '/home/webpack/handle-css',
            },
            {
              text: 'babel-loader 转换 ES6',
              link: '/home/webpack/toES6',
            },
            {
              text: '打包开启 gzip',
              link: '/home/webpack/start-gzip',
            },
            {
              text: '多入口',
              link: '/home/webpack/pack-multiple-js',
            },
            {
              text: 'Loader 和 Plugin',
              link: '/home/webpack/loader-plugin',
            },
            {
              text: 'Tree-shaking',
              link: '/home/webpack/tree-shaking',
            },
          ],
        },
        {
          text: 'Python',
          collapsible: true,
          children: [
            {
              text: 'list 与 for',
              link: '/home/python/list',
            },
            {
              text: '参数',
              link: '/home/python/fun-params',
            },
          ],
        },
        {
          text: 'MiniApp',
          collapsible: true,
          children: [
            {
              text: '获取用户信息',
              link: '/home/mini/getUserInfo',
            },
            {
              text: 'globalData',
              link: '/home/mini/globalData',
            },
            {
              text: '小程序注意点',
              link: '/home/mini/attentions',
            },
          ],
        },
        {
          text: 'Nginx',
          collapsible: true,
          children: [
            {
              text: 'Mac 安装 Nginx',
              link: '/home/nginx/install',
            },
          ],
        },
        {
          text: 'Git',
          collapsible: true,
          children: [
            {
              text: '基础命令',
              link: '/home/git/basic-command',
            },
            {
              text: 'Tag',
              link: '/home/git/tag',
            },
          ],
        },
        {
          text: 'DataBase',
          collapsible: true,
          children: [
            {
              text: 'SQL 语句',
              link: '/home/dataBase/sql',
            },
            {
              text: '安装问题',
              link: '/home/dataBase/faq',
            },
            {
              text: 'Mac 操作',
              link: '/home/dataBase/mysql',
            },
          ],
        },
        {
          text: 'Eslint',
          collapsible: true,
          children: [
            {
              text: '规则',
              link: '/home/eslint/rules',
            },
            {
              text: '自动修复',
              link: '/home/eslint/repair',
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
              link: '/interview/subject/css',
            },
            {
              text: 'js 面试题',
              link: '/interview/subject/js',
            },
            {
              text: 'React 面试题',
              link: '/interview/subject/react',
            },
            {
              text: 'Vue 面试题',
              link: '/interview/subject/vue',
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
              link: '/algorithm/simple/first',
            },
            {
              text: '两数之和',
              link: '/algorithm/simple/second',
            },
          ],
        },
        {
          text: '中等',
          collapsible: true,
          children: [
            {
              text: '有效三角形的个数',
              link: '/algorithm/middling/triangle-number',
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
              link: '/other/mac/setting-ssh',
            },
            {
              text: '上传至服务器',
              link: '/other/mac/link-server',
            },
            {
              text: 'xxx.app 打不开',
              link: '/other/mac/canNotOpen',
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
