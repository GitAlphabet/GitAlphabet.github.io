const { defaultTheme } = require('vuepress');
module.exports = {
  title: '向往飞翔的小蚂蚁',
  description: '个人博客',
  markdown: {
    lineNumbers: true, // 开启代码行号
  },
  plugins: [['vuepress-plugin-code-copy', true]],
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
    // 默认主题配置
    navbar: [
      {
        text: '基础',
        link: '/home/CSS/less',
      },
      {
        text: '面试',
        link: '/interview/Subject/css',
      },
      {
        text: '算法',
        link: '/algorithm/Simple/first',
      },
      {
        text: '其他',
        link: '/other/Mac/setting-ssh',
      },
      // {
      //   text: 'Github',
      //   link: 'https://github.com/GitAlphabet',
      //   target: '_blank',
      // },
    ],
    repo: 'https://github.com/GitAlphabet',
    repoLabel:'Github',
    sidebarDepth: 2,
    sidebar: {
      '/home/CSS/': [
        {
          text: 'CSS',
          collapsible: false,
          children: [
            '/home/CSS/less',
            '/home/CSS/some-css',
            '/home/CSS/mobile-layout',
            '/home/CSS/bfc',
            '/home/CSS/skill',
            '/home/CSS/scroll',
          ],
        },
        {
          text: 'Javascript',
          collapsible: true,
          children: [
            'Javascript/ajax',
            'Javascript/array',
            'Javascript/arguments',
            'Javascript/async',
            'Javascript/promise',
            'Javascript/number',
            'Javascript/babel',
            'Javascript/copy',
            'Javascript/base64',
            'Javascript/base64-to-file',
            'Javascript/img',
            'Javascript/RegExp',
            'Javascript/call-apply-bind',
            'Javascript/this',
            'Javascript/closure',
            'Javascript/prototype',
            'Javascript/eventLoop',
            'Javascript/encryt',
            'Javascript/gc',
            'Javascript/array-sort',
            'Javascript/custom-events',
            'Javascript/fullScreen',
            'Javascript/type-change',
            'Javascript/debounce-and-throttle',
            'Javascript/sort',
            'Javascript/virtual-scroll',
          ],
        },

        {
          text: 'Vue',
          collapsible: true,
          children: [
            'Vue/standard',
            'Vue/persistedstate',
            'Vue/fastclick',
            'Vue/px2rem',
            'Vue/px2vw',
            'Vue/better-scroll',
            'Vue/revise-style',
            'Vue/component-communication',
            'Vue/nextTick-set',
            'Vue/watch',
            'Vue/axios',
            'Vue/interceptor',
            'Vue/lazy-router',
            'Vue/vuex',
            'Vue/route-params',
            'Vue/router',
          ],
        },
        {
          text: 'React',
          collapsible: true,
          children: [
            'React/cra',
            'React/css-module',
            'React/life-cycle',
            'React/hooks',
            'React/redux-base',
            'React/redux-thunk',
            'React/immutable',
            'React/immer',
            'React/xlsx2json',
            'React/uim-ie11',
            'React/echartsMap',
          ],
        },
        {
          text: 'TypeScript',
          collapsible: true,
          children: [
            'TypeScript/type-interface',
            'TypeScript/logical-operators',
            'TypeScript/echart',
          ],
        },
        {
          text: 'Node',
          collapsible: true,
          children: [
            'Node/mysql',
            'Node/server',
            'Node/pm2',
            'Node/update-node',
            'Node/get-params',
          ],
        },

        {
          text: 'Http',
          collapsible: true,
          children: ['Http/tcp', 'Http/https', 'Http/cache'],
        },
        {
          text: 'Webpack',
          collapsible: true,
          children: [
            'Webpack/optimize',
            'Webpack/processEnv',
            'Webpack/handle-css',
            'Webpack/toES6',
            'Webpack/start-gzip',
            'Webpack/pack-multiple-js',
            'Webpack/loader-plugin',
            'Webpack/tree-shaking',
          ],
        },
        {
          text: 'Python',
          collapsible: true,
          children: ['Python/list', 'Python/fun-params'],
        },
        {
          text: 'MiniApp',
          collapsible: true,
          children: ['Mini/getUserInfo', 'Mini/globalData', 'Mini/attentions'],
        },
        {
          text: 'Nginx',
          collapsible: true,
          children: ['Nginx/install'],
        },
        {
          text: 'Git',
          collapsible: true,
          children: ['Git/basic-command'],
        },
        {
          text: 'DataBase',
          collapsible: true,
          children: ['DataBase/sql', 'DataBase/faq', 'DataBase/mysql'],
        },
        {
          text: 'Eslint',
          collapsible: true,
          children: ['Eslint/eslint-rules', 'Eslint/eslint-repair'],
        },
      ],
      '/interview/': [
        {
          text: '面试题',
          collapsible: false,
          children: [
            'Subject/css',
            'Subject/js',
            'Subject/react',
            'Subject/vue',
          ],
        },
      ],
      '/algorithm/': [
        {
          text: '简单',
          collapsible: false,
          children: ['Simple/first', 'Simple/second'],
        },
        {
          text: '中等',
          collapsible: true,
          children: ['Middling/triangle-number'],
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
          children: ['Mac/setting-ssh', 'Mac/link-server', 'Mac/canNotOpen'],
        },
        {
          text: '其他',
          collapsible: true,
          children: [
            'computer-binary',
            'yarn-update',
            'npm',
            'publish-npm',
            'refresh-origin',
            'whistle',
            'markdown',
            'vuepress-deploy',
            'script',
            'npm-error',
          ],
        },
      ],
    },
  }),
};
