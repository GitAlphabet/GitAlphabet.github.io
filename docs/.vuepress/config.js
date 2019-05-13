module.exports = {
  title: '向往飞翔的小蚂蚁',
  description: '个人博客',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  //base:'/dist/',
  themeConfig: {
    nav: [{
      text: '首页',
      link: '/'
    }],
    sidebarDepth: 2,
    sidebar: [{
        title: 'CSS',
        children: [
          'CSS/less',
          'CSS/mobileLayout'
        ]
      },
      {
        title: 'Javascript',
        children: [
          'Javascript/ajax',
          'Javascript/array',
          'Javascript/async',
          'Javascript/number',
          'Javascript/babel',
          'Javascript/copy',
          'Javascript/base64',
          'Javascript/RegExp',
          'Javascript/closure',
          'Javascript/eventLoop',
          'Javascript/arraySort',
        ]
      },
      {
        title: 'Vue',
        children: [
          'Vue/vueCodeStandard',
          'Vue/persistedstate',
          'Vue/fastclick',
          'Vue/px2rem',
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
        ]
      },
      {
        title: 'React',
        children: [
          'React/reactCreateApp',
          'React/reduxBase',
        ]
      },
      {
        title: 'Node',
        children: ['Node/server']
      },
      {
        title: 'Nginx',
        children: ['Nginx/install']
      },
      {
        title: 'Webpack',
        children: [
          'Webpack/handleCss',
          'Webpack/toES6',
          'Webpack/packMultipleJs'
        ]
      },
      {
        title: 'Git',
        children: ['Git/basicCommand']
      },
      {
        title: 'Others',
        children: [
          'Others/whistle',
          'Others/Markdown',
          'Others/vuepressDeploy',
          'Others/script',
          'Others/settingSSH',
          'Others/linkServer',
          'Others/vpn',
        ]
      }
    ]
  }
}