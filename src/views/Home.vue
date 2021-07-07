<template>
  <div  class="App">
    <div class="App-header"></div>
    <h1 class="App-title">{{ $t('common.appTitle') }}</h1>
    <p class="App-intro">
      {{ $t('home.edit') }}
      <code>/src/views/Home.vue</code>
      {{ $t('home.saveReload') }}
    </p>
    <router-link to="/vueTemplateIntro" class="desc-link">{{
      $t('home.wlkVueTemplateIntro')
    }}</router-link> 
    <!-- <div >{{ deviceInfo }}</div> -->

    <!-- 【1】↓↓↓本应该用嵌套子路由实现tabbar对页签的切换，但迟迟调不通，所以只能暂时这样写 -->
    <found-page v-show="true"/>
    <lost-page v-show="false"/>
    <my-page v-show="false"/>
    <!-- 【1】↑↑↑本应该用嵌套子路由实现tabbar对页签的切换，但迟迟调不通，所以只能暂时这样写 -->
    <tab-bar />
  </div>
  
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TabBar from '../components/tabbar/Tabbar';
import LostPage from '../components/tabbar/LostPage';
import FoundPage from '../components/tabbar/FoundPage';
import MyPage from '../components/tabbar/MyPage';
// import IndexPage from '../components/tabbar/IndexPage';

export default {
  name: 'home',
  components: {
    TabBar,
    LostPage,
    FoundPage,
    MyPage,
  },
  data() {
    return {};
  },
  created() {
    window.HWH5.navTitle({ title: this.$i18n.t('common.title') });
    this.getDeviceInfo();
  },
  computed: {
    ...mapState(['deviceInfo'])
  },
  methods: {
    ...mapActions(['getDeviceInfo'])
  }
};
</script>

<style lang="less" scoped>
.App {
  padding: 10px;
  display: flex;
  flex-direction: column;
  // [1] 下面代码实现了导航栏固定在底部的效果 https://blog.csdn.net/hb9278/article/details/96433386
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;

  .App-tab-bar{
    justify-self: flex-end;
  }
  // [1] ends

  .App-logo {
    margin: 20px 0;
    text-align: center;
  }

  .App-header {
    height: 90px;
    text-align: center;
  }

  .App-title {
    margin-bottom: 30px;
    font-size: 1.5em;
    text-align: center;
  }

  .App-intro {
    margin-bottom: 10px;
    // font-size: large;
    text-align: center;
  }

  .desc-link {
    display: block;
    line-height: 2.2em;
    margin: 0 auto;

    color: #2b88e6;
    font-size: 14px;
    text-align: center;
  }
  code {
    padding: 2px 4px;
    color: #c0341d;
    background-color: #fbe5e1;
    border-radius: 4px;
  }

  .develop-doc {
    h3 {
      margin-bottom: 5px;
    }

    ul {
      list-style: circle;
      padding-left: 30px;
    }

    li {
      margin-bottom: 5px;
      color: #2b88e6;
      cursor: pointer;
    }
  }
}
</style>
