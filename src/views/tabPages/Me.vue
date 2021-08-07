<template>
  <div>
    <page head-slot>
      <div slot="headbar" class="headbar-flex">
        <avatar class="my-avatar" size="32" ></avatar>
        <span class="theme-color-text nickname">大碗牢饭</span>
      </div>
      <div slot="body" class="main">
        <div class="menu z-depth-1" v-for="(item, index) of router" :key="index">
            <div class="collection">
              <a href="#!" @click="goToPage(itm.path)" class="collection-item" v-for="(itm, idx) of router[index].links" :key="idx">
                <span class="font-black">{{itm.name}}</span>

                <span v-if="itm.newMsg != 0" class="new badge">
                  {{itm.newMsg}}
                </span>
                <span v-else class="badge">
                  <i class="material-icons">{{itm.icon}}</i>
                </span>
              </a>
            </div>
        </div>
        <about-us></about-us>
      </div>
    </page>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Page from '@/components/Page' 
import Avatar from '@/components/Avatar'
import AboutUs from '@/components/AboutUs'
export default {
  name: 'me',
  components:{
    Page,
    Avatar,
    AboutUs
  },
  data(){
    return {
      router: {
        user: {
          groupName: 'user',
          // 权限控制字段。
          links: [
            {name:'挂失记录', icon:'keyboard_arrow_right', path:'/index', newMsg: 0},
            {name:'招领记录', icon:'keyboard_arrow_right', path:'/index', newMsg: 0},
            {name:'我的消息', icon:'keyboard_arrow_right', path:'/index', newMsg: 0},
            {name:'个人报告', icon:'keyboard_arrow_right', path:'/index', newMsg: 0},
          ]
        },
        // common: {
        //   groupName: 'common',
        //   links: [
        //     {name:'关于我们', icon:'keyboard_arrow_right', path:'/about-us', newMsg: 0},
        //     {name:'建议反馈', icon:'keyboard_arrow_right', path:'/index', newMsg: 0},
        //   ]
        // },
        admin: {
          groupName: 'admin',
          links: [
            {name:'公告管理', icon:'keyboard_arrow_right', path:'/index', newMsg: 0},
            {name:'物品类型管理', icon:'keyboard_arrow_right', path:'/index', newMsg: 0},
            {name:'用户数据查询', icon:'keyboard_arrow_right', path:'/index', newMsg: 0},
            {name:'举报处理', icon:'keyboard_arrow_right', path:'/index', newMsg: 0},
            {name:'申诉处理', icon:'keyboard_arrow_right', path:'/index', newMsg: 0},
            {name:'建议处理', icon:'keyboard_arrow_right', path:'/index', newMsg: 0},
            {name:'禁言管理', icon:'keyboard_arrow_right', path:'/index', newMsg: 0},
          ]
        }
      }
      // [
      //   {index: 1, text:'首页', icon:'apps', path:'/index', name: 'index', isTab: true},
      //   {index: 2, text:'挂失', icon:'close', path:'/lost', name: 'lost', isTab: true},
      //   {index: 3, text:'发帖', icon:'add_circle', path:'/post', name: 'post', isTab: false},
      //   {index: 4, text:'招领', icon:'check', path:'/found', name: 'found', isTab: true},
      //   {index: 5, text:'我的', icon:'person', path:'/me', name: 'me', isTab: true},
      // ]
    };
  },
  created(){
    this.switchTab(5) // me界面
  },
  methods: {
    ...mapActions(['switchTab']),
    goToPage(route){
      console.log(route);
    }
  }
}
</script>

<style lang="less" scoped>
// .head-block{
//   height: 35px;
//   width: 100%;
//   background-color: var(--theme-color-bg);
//   // border-radius: 0 0 50% 50%;
// }
.headbar-flex{
  display: flex;

  .my-avatar{
    margin-left: 10px;
  }

  .nickname{
    margin-left: 10px;
    font-size: 17px;
    line-height: 32px;
  }
}
.main{
  padding: 8px;
  .menu{
    margin-bottom: 8px;

    .collection .item{
      display: block;
    }
  }
}




// .identity-block{
//   display: flex;
//   height: 100px;
//   background-color: var(--theme-color-bg);


//   .my-nickname{
//     color: var(--theme-color-text);
//     margin-left: 20px;
//     font-size: 18px;
//     line-height: 18px;
//   }
// }

</style>