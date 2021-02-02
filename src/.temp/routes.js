const c1 = () => import(/* webpackChunkName: "page--src--pages--blogs--index-vue" */ "/Users/zouhaitao/Documents/learn/大前端训练营/homeWork/fed-e-task-03-04/code/zht-blog-with-gridsome/src/pages/blogs/index.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--blog-vue" */ "/Users/zouhaitao/Documents/learn/大前端训练营/homeWork/fed-e-task-03-04/code/zht-blog-with-gridsome/src/templates/Blog.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/zouhaitao/Documents/learn/大前端训练营/homeWork/fed-e-task-03-04/code/zht-blog-with-gridsome/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/zouhaitao/Documents/learn/大前端训练营/homeWork/fed-e-task-03-04/code/zht-blog-with-gridsome/src/pages/Index.vue")

export default [
  {
    path: "/blogs/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/blog/:id/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
