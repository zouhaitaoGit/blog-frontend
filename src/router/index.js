
export const constantRouterMap = [

    {
        path: '/',
        meta: {
            type: "user",
            icon: 'el-icon-star-off',
            title: '最新动态'
        },
        children: [
            {
                path: 'main',
                meta: { title: '最新动态' }
            }
        ]
    },
    {
        path: '/blogs',
        meta: {
            type: "user",
            icon: 'el-icon-edit-outline',
            title: '博客列表'
        }
    },
    // {
    //     path: '/user/project',
    //     redirect: '/user/project/main',
    //     component: Layout,
    //     meta: {
    //         type: "user",
    //         icon: 'el-icon-service',
    //         title: '开源项目'
    //     },
    //     children: [
    //         {
    //             path: 'main',
    //             component: ProjectMain,
    //             meta: { title: '项目列表' }
    //         },
    //         // {
    //         //     path: 'details/:name',
    //         //     component: ProjectDetails,
    //         //     meta: { title: '项目详情' }
    //         // }
    //     ]
    // },
    // // {
    // //     path: '/user/helper',
    // //     redirect: '/user/helper/main',
    // //     component: Layout,
    // //     meta: {
    // //         type: "user",
    // //         icon: 'el-icon-printer',
    // //         title: '使用帮助',
    // //         mini: true
    // //     },
    // //     children: [
    // //         {
    // //             path: 'main',
    // //             component: HelperMain,
    // //             meta: { title: '使用帮助' }
    // //         }
    // //     ]
    // // },
    // {
    //     path: '/user/readme',
    //     redirect: '/user/readme/main',
    //     component: Layout,
    //     meta: {
    //         type: "user",
    //         icon: 'el-icon-document',
    //         title: 'README.md'
    //     },
    //     children: [
    //         {
    //             path: 'main',
    //             component: ReadmeMain,
    //             meta: { title: 'README.md' }
    //         }
    //     ]
    // },
    // // {
    // //     path: '/user/configure',
    // //     redirect: '/user/configure/main',
    // //     component: Layout,
    // //     meta: {
    // //         type: "user",
    // //         icon: 'el-icon-setting',
    // //         title: '系统配置',
    // //         LoginRequired: true
    // //     },
    // //     children: [
    // //         {
    // //             path: 'main',
    // //             component: ConfigureMain,
    // //             meta: { title: '系统配置' }
    // //         }
    // //     ]
    // // },

    // // {
    // //     path: "/404",
    // //     component: Error404
    // // },
    // {
    //     path: "*",
    //     redirect: "/404"
    // },   
]

// const router = new Router({
//   mode: 'history',
//   routes: constantRouterMap,
    // scrollBehavior(to, from, savedPosition) {
    //     if (to.meta.scrollTop) {
    //         return { x: 0, y: 0 }
    //     }
    // }
// })

// export default router