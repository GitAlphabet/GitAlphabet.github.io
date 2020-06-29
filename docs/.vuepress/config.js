module.exports = {
  title: '向往飞翔的小蚂蚁',
  description: '个人博客',
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
        text: '首页',
        link: '/',
      },
    ],
    sidebarDepth: 2,
    sidebar: [
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
          'Javascript/RegExp',
          'Javascript/closure',
          'Javascript/prototype',
          'Javascript/eventLoop',
          'Javascript/gc',
          'Javascript/arraySort',
          'Javascript/customEvents',
          'Javascript/typeChange',
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
      {
        title: 'Others',
        children: [
          'Others/yarnUpdate',
          'Others/npm',
          'Others/refreshOrigin',
          'Others/whistle',
          'Others/Markdown',
          'Others/vuepressDeploy',
          'Others/script',
          'Others/settingSSH',
          'Others/linkServer',
        ],
      },
    ],
  },
}