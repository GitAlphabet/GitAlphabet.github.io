module.exports = {
    title: '向往飞翔的小蚂蚁',
    description: '个人博客',
    //base:'/dist/',
    themeConfig: {
        nav: [{
            text: '首页',
            link: '/'
        }],
        sidebarDepth: 1,
        sidebar: [
            {
                title: 'CSS',
                children: [
                    'css/less'
                ]
            },
            {
                title: 'Javascript',
                children: [
                    'javascript/Ajax封装',
                    'javascript/ES6数组的扩展',
                    'javascript/ES6数值',
                    'javascript/babel入门',
                ]
            },
            {
                title: 'Vue',
                children: [
                    'Vue/vuex',
                    'Vue/fastclick使用',
                    'Vue/组件间通讯',
                    'Vue/axios',
                    'Vue/路由懒加载',
                    'Vue/px2rem'
                ]
            }, 
            {
                title: 'React',
                children: [
                    'React/react'
                ]
            },
            {
                title: 'Node',
                children: [
                    'node/编写接口'
                ]
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
                children: [
                    'git/git指令'
                ]
            },
            {
                title: '其他',
                children: [
                    'others/vuepress部署'
                ]
            }

        ]
    },

}