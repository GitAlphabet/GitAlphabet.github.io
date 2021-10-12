module.exports = {
  title: '向往飞翔的小蚂蚁',
  description: '个人博客',
  markdown: {
    lineNumbers: true, // 开启代码行号
  },
  // plugins: [['vuepress-plugin-code-copy', true]],
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
  // base:'/blog/',
  themeConfig: {
    nav: [
      {
        text: '基础',
        link: '/home/CSS/less',
      },
      {
        text: '算法',
        link: '/algorithm/Simple/first',
      },
      {
        text: '其他',
        link: '/other/computerBinary',
      },
      {
        text: 'Github',
        link: 'https://github.com/GitAlphabet',
        target: '_blank',
      },
    ],
    sidebarDepth: 2,
    sidebar: {
      '/home/': [
        {
          title: 'CSS',
          children: [
            'CSS/less',
            'CSS/some-css',
            'CSS/mobile-layout',
            'CSS/bfc',
            'CSS/skill',
          ],
        },
        {
          title: 'Javascript',
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
            'Javascript/RegExp',
            'Javascript/call-apply-bind',
            'Javascript/this',
            'Javascript/closure',
            'Javascript/prototype',
            'Javascript/eventLoop',
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
          title: 'TypeScript',
          children: [
            'TypeScript/type-interface',
            'TypeScript/logicalOperators',
            'TypeScript/echart',
          ],
        },
        {
          title: 'Vue',
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
          title: 'React',
          children: [
            'React/cra',
            'React/css-module',
            'React/life-cycle',
            'React/hooks',
            'React/redux-base',
            'React/redux-thunk',
            'React/immutable',
            'React/immer',
            'React/tree-shaking',
          ],
        },
        {
          title: '小程序',
          children: ['Mini/getUserInfo', 'Mini/globalData', 'Mini/attentions'],
        },
        {
          title: 'Node',
          children: ['Node/server', 'Node/update-node'],
        },

        {
          title: 'Webpack',
          children: [
            'Webpack/optimize',
            'Webpack/processEnv',
            'Webpack/handle-css',
            'Webpack/toES6',
            'Webpack/pack-multiple-js',
          ],
        },
        {
          title: 'Git',
          children: ['Git/basic-command'],
        },
        {
          title: 'Nginx',
          children: ['Nginx/install'],
        },
        {
          title: 'Http',
          children: ['Http/tcp', 'Http/https', 'Http/cache'],
        },
        {
          title: 'Eslint',
          children: ['Eslint/eslint-rules', 'Eslint/eslint-repair'],
        },
        {
          title: 'DataBase',
          children: ['DataBase/query-operation'],
        },
        {
          title: '面试题',
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
          title: '简单',
          children: ['Simple/first', 'Simple/second'],
        },
        {
          title: '中等',
          children: ['Middling/triangle-number'],
        },
        {
          title: '困难',
          children: [],
        },
      ],
      '/other/': [
        {
          title: '其他',
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
            'setting-ssh',
            'link-server',
            'npm-error',
          ],
        },
      ],
    },
  },
};
