module.exports = {
  title: '向往飞翔的小蚂蚁',
  description: '个人博客',
  head: [
     ['link', {
       rel: 'icon',
       href: './favicon.ico'
     }]
  ],
  //base:'/dist/',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      }
    ],   
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'CSS',
        children: ['CSS/less', 'CSS/布局技巧']
      },
      {
        title: 'Javascript',
        children: [
          'Javascript/Ajax封装',
          'Javascript/ES6数组的扩展',
          'Javascript/ES6数值',
          'Javascript/babel入门',
          'Javascript/浅拷贝与深拷贝',
          'Javascript/Base64',
          'Javascript/RegularExpression'
        ]
      },
      {
        title: 'Vue',
        children: [
          'Vue/vuex',
          'Vue/vuex-persistedstate',
          'Vue/fastclick使用',
          'Vue/组件间通讯',
          'Vue/axios',
          'Vue/axios-element拦截器',
          'Vue/路由懒加载',
          'Vue/px2rem',
          'Vue/better-scroll封装',
          'Vue/eslint修复'
        ]
      },
      {
        title: 'React',
        children: ['React/react']
      },
      {
        title: 'Node',
        children: ['Node/编写接口']
      },
      {
        title: 'Webpack',
        children: [
          'Webpack/处理css',
          'Webpack/babel-loader转换ES6',
          'Webpack/打包多个页面以及js文件'
        ]
      },
      {
        title: 'Git',
        children: ['Git/git指令']
      },
      {
        title: '其他',
        children: ['Others/whistle', 'Others/vuepress部署', 'Others/vpn', 'Others/Mac配置ssh']
      }
    ]
  }
}
