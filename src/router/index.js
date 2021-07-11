import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import LostPage from '@/components/tabbar/LostPage.vue'
import FoundPage from '@/components/tabbar/FoundPage.vue'
import MyPage from '@/components/tabbar/MyPage.vue'
import FirstPage from '@/components/tabbar/FirstPage.vue'
import globalConsts from '@/consts/globalConsts.js'

Vue.use(globalConsts)
Vue.use(VueRouter);

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
function view(name) {
  name = !name.startsWith('/') ? '/' + name : name;
  return function(resolve) {
    require(['@/views' + name], resolve);
  };
}

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    redirect: '/first',
    component: Home,
    // meta: {
    //   keepAlive: true // 需要被缓存
    // },
    children: [
      {
        path: '/first',
        name: 'FirstPage',
        component: FirstPage 
      },
      {
        path: '/lost',
        name: 'LostPage',
        component: LostPage 
      },
      {
        path: '/found',
        name: 'FoundPage',
        component: FoundPage 
      },
      {
        path: '/me',
        name: 'MyPage',
        component: MyPage 
      }
    ]
  },
  {
    path: '/vueTemplateIntro',
    component: view('/VueTemplateIntro.vue')
  }
];

const router = new VueRouter({
  // 不要用history模式，有兼容性问题
  mode: 'hash',
  // base: Cfg.BaseUrl,
  routes
});

// router.beforeEach(async (to, from, next) => {
//   // 全局路由钩子
// });

export default router;
