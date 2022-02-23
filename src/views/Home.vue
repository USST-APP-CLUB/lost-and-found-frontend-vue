<template>
  <div class="App">

    <main id="body">
      <!-- 导航子页面显示在这里 -->
      <router-view></router-view>
    </main>
    <!-- 空div用于平衡footer的高度 -->
    <div :style="{height:'55px'}"></div>
    <footer 
      class="position-fixed bottom-0 d-flex w-100 align-items-center justify-content-center theme-color-bg text-white" 
      :style="{height: '55px'}"
    >
    <!--  waves-effect waves-light -->
      <div 
        class="d-flex flex-column align-items-center justify-content-center wave"
        :style="{width: '20%', height:'100%'}" 
        v-for="tab of tabbar" 
        :key="tab.index" 
        :class="{'theme-color-deepen': tab.isTab===true && getTabIndex === tab.index}"
        @click="tabClick(tab)"
      >
          <i class="material-icons">{{tab.icon}}</i>
          <span class="fs-6">{{tab.text}}</span>
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
    console.log(Waves);
    Waves.attach('.wave', ['waves-block'])
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


</style>
