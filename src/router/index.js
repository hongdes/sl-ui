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
      redirect: '/ui/dashboard',
      children: [
        {
          path: '/ui/dashboard',
          name: 'Dashboard',
          component:_import('backstage/pages/Dashboard'),
        },
        {
          path: '/ui/container',
          name: 'Container',
          component:_import('backstage/pages/Container'),
        },
        
        {
          path: '/ui/Voice',
          name: 'Voice',
          component:_import('backstage/pages/Voice'),
        },
        {
          path: '/ui/mtEditor',
          name: 'mtEditor',
          component:_import('backstage/pages/mtEditor'),
        },
        {
          path: '/ui/progress',
          name: 'progress',
          component:_import('backstage/pages/Progress'),
        },
        {
          path: '/ui/tag',
          name: 'protaggress',
          component:_import('backstage/pages/Tag'),
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: _import('backstage/Login'),
    },

  ]
})
