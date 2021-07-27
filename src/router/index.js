import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import Index from '@/views/tabPages/Index.vue';
import Lost from '@/views/tabPages/Lost.vue';
import Found from '@/views/tabPages/Found.vue';
import Me from '@/views/tabPages/Me.vue';
import PostPage from '@/views/Post.vue';


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
    redirect: '/index',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index,
      },
      {
        path: '/lost',
        name: 'lost',
        component: Lost 
      },
      {
        path: '/found',
        name: 'found',
        component: Found 
      },
      {
        path: '/me',
        name: 'me',
        component: Me 
      },
    ]
  },
  {
    path: '/post',
    name: 'post',
    component: PostPage,
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
