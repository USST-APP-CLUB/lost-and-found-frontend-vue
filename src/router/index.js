import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import IndexPage from '../components/tabbar/IndexPage.vue';
import LostPage from '../components/tabbar/LostPage.vue';
import FoundPage from '../components/tabbar/FoundPage.vue';
import MyPage from '../components/tabbar/MyPage.vue';

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
    component: Home,
    meta: {
      keepAlive: true // 需要被缓存
    },
    // 子路由没调通
    // children: [
    //   {
    //     path: '/first',
    //     name: 'IndexPage',
    //     component: IndexPage 
    //   }
    // ]
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

// 【在main.js中挂载router，此处不用写。】
// const app = new Vue({
//   router
// }).$mount('#app')

// 导航守卫：路由权限控制。【由于加了导航守卫所以new VueRouter和export要分开写。】
// router.beforeEach(async (to, from, next) => {
  // to 代表将要访问的路径
  // from 代表从哪个路径跳转过来
  // next 是一个函数，代表放行 1. next()直接放行 2. next('/login')强制跳转到login页面

  // if (to.path === '/ login') return next()//获取token
  // const tokenstr = window.sessionStorage.getitem( 'token ')
  // if (ltokenStr) return next('/login')
  // next()
// });

export default router;
