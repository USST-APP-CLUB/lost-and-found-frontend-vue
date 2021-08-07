<template>
  <div class="App">

    <main class="body">
      <!-- 123456 -->
      <router-view></router-view>
    </main>
    <footer class="page-footer navbar">
      <div 
        class="tab waves-effect waves-light" 
        v-for="tab of tabbar" 
        :key="tab.index" 
        :class="{'tab-active': tab.isTab===true && getTabIndex === tab.index}"
        @click="tabClick(tab)"
      >
          <i class="material-icons">{{tab.icon}}</i>
          <span class="tab-text">{{tab.text}}</span>
      </div>
    </footer> 
  </div>
  
</template>

<script>
import '@/common/css/index.less';
import { mapState, mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      tabbar: [
        {index: 1, text:'首页', icon:'apps', path:'/index', name: 'index', isTab: true},
        {index: 2, text:'挂失', icon:'close', path:'/lost', name: 'lost', isTab: true},
        {index: 3, text:'发帖', icon:'add_circle', path:'/post', name: 'post', isTab: false},
        {index: 4, text:'招领', icon:'check', path:'/found', name: 'found', isTab: true},
        {index: 5, text:'我的', icon:'person', path:'/me', name: 'me', isTab: true},
      ]
    };
  },
  created() {
    window.HWH5.navTitle({ title: this.$i18n.t('common.title') });
    // this.getDeviceInfo();
  },
  computed: {
    ...mapGetters(['getTabIndex'])
  },
  methods: {
    ...mapActions(['switchTab']),
    tabClick(tab){
      this.$router.push({name: tab.name, params:{setid:111222}});
      if (tab.index === 3 || tab.index === this.getTabIndex) {
        console.log('nothing');
        return;
      }
      // this.switchTab(tab.index);
    }
  }
};
</script>


<style lang="less" scoped>
// @import '../common/css/index.less';
// @black: black;
.App {
  // padding: 10px;
  .body{
    margin-bottom: 55px;
  }

  .navbar{
    position: fixed;
    padding: 0px !important;
    height: 55px;
    width: 100%;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;

    .tab{
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column; 
      align-items: center;
      justify-content: center;
      background-color: var(--theme-color-bg);
      color: var(--theme-color-text);
      
      .tab-text{
        font-size: x-small;
      }
    }
    .tab-active{
      background-color: var(--theme-color-deepened);
    }
  }
  // .App-logo {
  //   margin: 20px 0;
  //   text-align: center;
  // }

  // .App-header {
  //   height: 90px;
  //   text-align: center;
  // }

  // .App-title {
  //   margin-bottom: 30px;
  //   font-size: 1.5em;
  //   text-align: center;
  // }

  // .App-intro {
  //   margin-bottom: 10px;
  //   // font-size: large;
  //   text-align: center;
  // }

  // .desc-link {
  //   display: block;
  //   line-height: 2.2em;
  //   margin: 0 auto;

  //   color: #2b88e6;
  //   font-size: 14px;
  //   text-align: center;
  // }
  // code {
  //   padding: 2px 4px;
  //   color: #c0341d;
  //   background-color: #fbe5e1;
  //   border-radius: 4px;
  // }

  // .develop-doc {
  //   h3 {
  //     margin-bottom: 5px;
  //   }

  //   ul {
  //     list-style: circle;
  //     padding-left: 30px;
  //   }

  //   li {
  //     margin-bottom: 5px;
  //     color: #2b88e6;
  //     cursor: pointer;
  //   }
  // }


}


</style>
