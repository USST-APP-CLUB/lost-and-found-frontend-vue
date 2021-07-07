<template>
  <div id="app">
    <!-- 通过@/router查看子路由对应的组件 -->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style>
  @import "/colorui/main.css";
  @import "/colorui/icon.css";
  /* @import "app.css"; 你的项目css */
</style>

<script>
export default {
  name: 'app',
  data() {
    return {};
  },
  created() {  
  }
};
</script>
