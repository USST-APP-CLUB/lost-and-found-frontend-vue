import Vue from 'vue';
import Vuex from 'vuex';



// import user from './modules/user'
// import global from './global';
import home from './modules/Home';

Vue.use(Vuex);

const state = {
  token: '', // jwt_token
  baseUrl: 'http://localhost:8081', //基本路径
  loginUrl: '/welink/login', // 登录url
  userInfoUrl: '/api/user/basicInfo',  // 获取用户基本信息的url

  storageTokenKey: 'lost_and_found_token', // 本地jwt_token的缓存key
  tokenErrorCode: 4001, // jwt_token校验错误码

  nickname: '',
  avatarUrl: '',
  isAdmin: false,
  
  // id: xxx  如果还有全局状态也可以在这里添加
  // name:xxx
}

// 注册上面引入的各大模块
const store = new Vuex.Store({
  state,    // 共同维护的一个状态，state里面可以是很多个全局状态
  getters,  // 获取数据并渲染
  actions,  // 数据的异步操作
  mutations,  // 处理数据的唯一途径，state的改变或赋值只能在这里
  modules: {
    home
  }
})


export default store  // 导出store并在 main.js中引用注册。
