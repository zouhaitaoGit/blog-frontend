// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vuex from 'vuex'
import store from './store'
import util from './utils/util'
import router from './router'

import DefaultLayout from '~/layouts/Default.vue'
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt()

export default function (Vue, { appOptions }) {
  Vue.use(Vuex)
  Vue.use(ElementUI)
  Vue.prototype.$util = util
  Vue.prototype.$markdown = function (value) {
    return md.render(value)
  }
  Vue.prototype.$share = function (message) {
    if (!message) {
        message = window.location
    } else {
        let arr = (window.location + "").split("#")
        message = arr[0] + "#" + message
    }
    if (util.copy(message)) {
        Vue.prototype.$confirm('链接已复制,去分享给好友吧!!', '分享', {
            showCancelButton: false,
            showClose: false,
            type: 'success'
        })
    } else {
        Vue.prototype.$confirm('链接复制失败,可能因为浏览器不兼容', '分享', {
            showCancelButton: false,
            showClose: false,
            type: 'warning'
        })
    }
  }
  Vue.filter('timeFileter', function (value) {
    return util.utcToLocal(value)
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  console.log(appOptions)
  console.log(store)
  console.log(appOptions.router)
  appOptions.store = store

}
