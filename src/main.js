import Vue from 'vue';
import App from './App.vue';
import i18n from '@/i18n';
import store from '@/store';
import router from '@/router';
import getLang from './utils/getLang';

import '@/common/css/global.css' //to-delete
import '@/common/css/index.less';
import '@/common/css/global.less';

// [materialize v1.0.2][Document: https://materializecss.com/]
// import '@/assert/css/materialize.min.css';
// import '@/assert/js/materialize.min.js';

// [material design icon] [original site is blocked by GFW] 
// [Document: https://google.github.io/material-design-icons/] [icons mirror: https://joe1900.github.io/MDI/]
import '@/assert/icons/material_icons/icon.css';


import '@/assert/icons/bootstrap_icons/bootstrap-icons.css';

// [material design lite v1.3.0] [Document: https://getmdl.io]
import '@/assert/js/material.min.js';
import '@/assert/css/material.min.css';

// [Bootstrap v5.0.2] [Chinese Document: https://www.bootstrap.cn/doc/read/94.html] 
import '@/assert/js/bootstrap.bundle.min.js';
import '@/assert/css/bootstrap.min.css';

// [Waves v0.7.6] [Document: http://fian.my.id/Waves/]
import '@/assert/css/waves.min.css';
import '@/assert/js/waves.min.js';


async function init(i18n) {
  await Promise.all([
    HWH5.getMenuButtonBoundingClientRect().then((data) => {
      console.log(data);
      store.dispatch('systemInfo/setHeadNavHeight', data.bottom + 10);
      store.dispatch('systemInfo/setHeadContentOffset', data.top);
      store.dispatch('systemInfo/setHeadContentHeight', data.height);
    }),
    HWH5.getAppInfo().then(data => {   
      console.log(data); 
    }).catch(error => {   
      console.log('获取APP信息异常', error); 
    }),
    HWH5.getDeviceInfo().then((data) => {
      console.log('device info',data);
      console.log('screenWidth',data.screenWidth);
      store.dispatch('systemInfo/setScreenWidth', data.screenWidth);
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
