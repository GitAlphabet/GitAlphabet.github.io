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
  //base:'/dist/',
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
            'CSS/textOverflow',
          ],
        },
        {
          title: 'Javascript',
          children: [
            'Javascript/ajax',
            'Javascript/array',
            'Javascript/arguments',
            'Javascript/async',
            'Javascript/number',
            'Javascript/babel',
            'Javascript/copy',
            'Javascript/base64',
            'Javascript/base64ToFile',
            'Javascript/RegExp',
            'Javascript/closure',
            'Javascript/prototype',
            'Javascript/eventLoop',
            'Javascript/gc',
            'Javascript/arraySort',
            'Javascript/customEvents',
            'Javascript/typeChange',
            'Javascript/fullScreen',
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
            'Vue/eslintRepair',
            'Vue/reviseStyle',
            'Vue/componentCommunication',
            'Vue/nextTickAndset',
            'Vue/watch',
            'Vue/attentionPoints',
            'Vue/axios',
            'Vue/interceptor',
            'Vue/lazyRouter',
            'Vue/vuex',
          ],
        },
        {
          title: 'React',
          children: [
            'React/reactCreateApp',
            'React/cssModule',
            'React/hooks',
            'React/reduxBase',
            'React/reduxThunk',
            'React/immutable',
          ],
        },
        {
          title: 'Node',
          children: ['Node/server', 'Node/updateNode'],
        },
        {
          title: 'Nginx',
          children: ['Nginx/install'],
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
          title: 'Eslint',
          children: ['Eslint/oftenUse'],
        },
      ],
      '/algorithm/': [
        {
          title: '简单',
          children: ['Simple/first', 'Simple/second'],
        },
        {
          title: '中等',
          children: [],
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
