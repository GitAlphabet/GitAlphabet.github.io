module.exports = {
    title: 'API文档',
    description: '基于 jQuery,Easyui封装。',
    base:'/dist/',
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: 'Github',
                link: ''
            },
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