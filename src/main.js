import Vue from 'vue';
import App from './App.vue';
import i18n from '@/i18n';
import store from '@/store';
import router from '@/router';
import getLang from './utils/getLang';
import '@/assert/css/materialize.min.css'
import '@/assert/css/icon.css'
import '@/assert/js/materialize.min.js'
import '@/common/css/global.css' //to-delete
import '@/common/css/index.less';
import '@/common/css/global.less';




async function init(i18n) {
  // await HWH5.getDeviceInfo().then((data) => {
  //   store.dispatch('pageHeader/setStatusBarHeight', data.statusBarHeight)
  // })
  // HWH5.addEventListener({
  //   type: 'back',
  //   func: () => {
  //     HWH5.close().catch(error => {
  //       console.log('关闭webview异常', error);
  //     });
  //     return false;
  //   }
  // }).catch(error => {
  //   console.log('监听事件发生异常', error);
  // });
  await Promise.all([
    HWH5.getMenuButtonBoundingClientRect().then((data) => {
      console.log(data);
      store.dispatch('pageHeader/setHeadNavHeight', data.bottom + 10);
      store.dispatch('pageHeader/setHeadContentOffset', data.top);
      store.dispatch('pageHeader/setHeadContentHeight', data.height);
    }),
    HWH5.getAppInfo().then(data => {   
      console.log(data); 
      
    }).catch(error => {   
      console.log('获取APP信息异常', error); 
    })
  ])
  // console.log(less);
  return new Vue({
    el: '#app',
    i18n,
    store,
    router,
    render: h => h(App)
  });
}

// 获取当前app语言参数，并初始化国际化和渲染页面。开发时，mock数据默认返回中文。
getLang()
  .then(language => {
    i18n.locale = language === 'zh' ? 'zhCN' : 'enUS';
    // i18n.locale = 'enUS';
    init(i18n);
  })
  .catch(() => {
    init();
  });
