module.exports = {
    title: '向往飞翔的小蚂蚁',
    description: '个人博客',
    //base:'/dist/',
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            }
        ],
        sidebarDepth: 1,
        sidebar: [

             {
                 title: 'Group 1',
                 collapsable: false,
                 children: [
                     'Tree',
                     'ComboTree',
                 ]
             }, {
                 title: 'Group 2',
                 children: ['DataGrid',
                     'EditDataGrid',
                 ]
             }
            
        ]
    },

}