import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'   //音频组件
const _import = require('./_import_' + process.env.NODE_ENV)
// console.log(_import)
Vue.use(Router)
console.log(process.env.NODE_ENV)
// import Home from '@/view/Home'
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: _import('backstage/Index'),
      children: [
        
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: _import('backstage/Login'),
    },

  ]
})
