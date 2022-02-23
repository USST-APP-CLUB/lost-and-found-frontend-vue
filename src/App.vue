<template>
  <div id="app">
    <!-- 通过@/router查看子路由对应的组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'app',
  data() {
    return {};
  },
  methods: {
    // ...mapActions('systemInfo' ,['setStatusBarHeight', 'setHeadNavHeight', 'setHeadContentHeight']),
    ...mapActions(['switchTab']),
    // ...mapActions('StatusBar' ,['setStatusBarHeight']),
  },
  created() {
    this.switchTab(1);
  }
};
</script>
