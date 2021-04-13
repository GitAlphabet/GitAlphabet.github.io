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
            'CSS/someCss',
            'CSS/mobileLayout',
            'CSS/BFC',
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
            'Javascript/base64ToFile',
            'Javascript/RegExp',
            'Javascript/call-apply-bind',
            'Javascript/this',
            'Javascript/closure',
            'Javascript/prototype',
            'Javascript/eventLoop',
            'Javascript/gc',
            'Javascript/arraySort',
            'Javascript/customEvents',
            'Javascript/fullScreen',
            'Javascript/typeChange',
            'Javascript/debounceAndThrottle',
            'Javascript/sort',
            'Javascript/type-interface',
          ],
        },
        {
          title: 'Vue',
          children: [
            'Vue/vueCodeStandard',
            'Vue/persistedstate',
            'Vue/fastclick',
            'Vue/px2rem',
            'Vue/px2vw',
            'Vue/betterScroll',
            'Vue/reviseStyle',
            'Vue/componentCommunication',
            'Vue/nextTickAndset',
            'Vue/watch',
            'Vue/axios',
            'Vue/interceptor',
            'Vue/lazyRouter',
            'Vue/vuex',
            'Vue/routeParams',
            'Vue/route',
          ],
        },
        {
          title: 'React',
          children: [
            'React/reactCreateApp',
            'React/cssModule',
            'React/lifeCycle',
            // 'React/hooks',
            'React/reduxBase',
            'React/reduxThunk',
            'React/immutable',
          ],
        },
        {
          title: '小程序',
          children: ['Mini/getUserInfo', 'Mini/globalData', 'Mini/attentions'],
        },
        {
          title: 'Node',
          children: ['Node/server', 'Node/updateNode'],
        },

        {
          title: 'Webpack',
          children: [
            'Webpack/processEnv',
            'Webpack/handleCss',
            'Webpack/toES6',
            'Webpack/packMultipleJs',
          ],
        },
        {
          title: 'Git',
          children: ['Git/basicCommand'],
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
          children: ['Eslint/oftenUse', 'Eslint/eslintRepair'],
        },
        {
          title: 'DataBase',
          children: ['DataBase/queryOperation'],
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
          children: ['Middling/triangleNumber'],
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
            'computerBinary',
            'yarnUpdate',
            'npm',
            'publish-npm',
            'refreshOrigin',
            'whistle',
            'Markdown',
            'vuepressDeploy',
            'script',
            'settingSSH',
            'linkServer',
          ],
        },
      ],
    },
  },
}
