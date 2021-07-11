<template>
  <div class="App" >
    <!-- <page ref="element">
      <router-view slot="body" style="height: 90vh;"></router-view>
      <aui-tabbar slot="footer"  class="tabbar" v-model="activeName" fixed route active-color="blue" inactive-color="gray">
        <aui-tabbar-item v-for="item in list" :key='item.title' :icon="item.ico" @click="tab(item.title)" :to="{ path: item.path }" replace>
          {{item.title}}
        </aui-tabbar-item>
      </aui-tabbar>
    </page> -->


      <router-view></router-view>
      <aui-tabbar  ref="element" id="tab-bar" class="tabbar" v-model="activeName" fixed route active-color="blue" inactive-color="gray">
        <aui-tabbar-item v-for="item in list" :key='item.title' :icon="item.ico" @click="tab(item.title)" :to="{ path: item.path }" replace>
          {{item.title}}
        </aui-tabbar-item>
      </aui-tabbar>
      
    
  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex';
// import $ from 'jquery'
import Page from '../components/Page'
import LostPage from '../components/tabbar/LostPage';
import FoundPage from '../components/tabbar/FoundPage';
import MyPage from '../components/tabbar/MyPage';
import { IconDialog, IconEmailAdd, IconGroup, IconSetting, IconAdministrator } from '@aurora/vue-icon'


export default {
  name: 'home',
  components: {
    // Page
  },
  data() {
    return {
      // selectedTabIndex: 1,
      tabBarHeight: 0,
      activeName: 0,
      IconDialog: IconDialog(),
      IconEmailAdd: IconEmailAdd(),
      IconGroup: IconGroup(),
      IconSetting: IconSetting(),
      IconAdministrator: IconAdministrator(),
      pagename: '',
      list: [
        { title: '首页', ico: IconDialog() , path:'/first'}, 
        { title: '挂失', ico: IconEmailAdd(), path:'/lost' }, 
        // { title: '添加', ico: IconSetting() }, 
        { title: '招领', ico: IconGroup(),path:'/found' }, 
        { title: '我的', ico: IconAdministrator(), path:'/me' }
      ],
    };
  },
  created() {
    window.HWH5.navTitle({ title: '寻物' });
      HWH5.getAuthCode().then(data => {
        console.log(11111,data.code);
        const _headers = { 
          'Content-Type': 'application/json'
        };
        const _params = {
          'code': data.code
        };
        console.log(this.$loginUrl)
        return HWH5.fetchInternet(this.$loginUrl, { method: 'post', body: JSON.stringify(_params), headers: _headers, timeout: 6000 })
        // console.log(this.$loginUrl);
      })
      .then(async res => {
        // console.log(res)
        console.log(res.headers.authorization)
        // this.$root.token = res.headers.authorization;
        console.log(token)
        console.log('服务端返回: ', await res.json());
      })
      .catch(error => {
        console.log('获取异常', error);
      });
      
    // this.getDeviceInfo();
  },
  computed: {
    ...mapState(['token'])
    // ...mapState(['token'])
  },
  methods: {
    ...mapActions(['setNewToken']),
    // ...mapActions(['getDeviceInfo'])
    tab(name) {
      console.log(this.activeName);
      console.log(this.$refs.element.$el.offsetHeight);
    }
  }
};
</script>

<style lang="less" scoped>
.App {
  padding: 10px;
}
#tab-bar{
  position: fixed;
  width: calc(100% - 20px);
  bottom: 0;
}
</style>
