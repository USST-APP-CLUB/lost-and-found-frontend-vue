// import axios from 'axios'
// import axiosIntercceptor from '@/utils/axiosInterceptors'
// axiosIntercceptor();

export const switchTab = ({commit}, tabIndex) => {
    commit('updateTabIndex', tabIndex);
}

// export const setStatusBarHeight = ({commit}, statusBarHeight) => {
//     commit('updateStatusBarHeight', statusBarHeight);
// }

// export function setNewNickname({commit}, nickname) {
//     return commit ('setNickname', nickname)
// }

// export function setNewAvatar({commit}, avatarUrl) {
//     return commit ('setAvatar', avatarUrl)
// }

// export function setAdmin({commit}, isAdmin) {
//     return commit ('setAdmin', isAdmin)
// }

// export function setToken({commit}, token) {
//     return commit ('setToken', token)
// }

// export async function getTokenFromWelink({commit}) {
//     // console.log(11111);
//     let code = await HWH5.getAuthCode();
//     let _headers = { 
//         'Content-Type': 'application/json'
//     }; 
//     let _params = {
//         'code': code.code
//     };
//     return HWH5.fetchInternet(this.getters.loginUrl, { method: 'post', body: JSON.stringify(_params), headers: _headers, timeout: 6000 })
//     .then(res => {
//         // console.log('t',res)
//         let token = res.headers.authorization;
//         console.log(1, token);
//         console.log(typeof token);
//         if(token == null || token == '') return ('setToken', '1');
//         HWH5.setStorage({
//             key: this.state.storageTokenKey,
//             data: token,
//             isolation: 1
//         }).catch(error => {
//             console.log('设置缓存异常', error);
//         });
//         return commit ('setToken', token);
//     })
// }

// export async function getTokenFromStorage({commit}) { // 从手机缓存设置token
//     // console.log('缓存命中');
//     let res = await HWH5.getStorage({
//         // 尝试从手机存储获取token
//         key: this.state.storageTokenKey,
//         isolation: 1
//     })
//     if (res == null || res == '') {
//         console.log('最开始');
//         return this.dispatch('getTokenFromWelink')
//     }
//     console.log('缓存命中');
//     return commit ('setToken', res)
// }

// export async function getUserInfo({commit}) {
//     // let url = this.getters.userInfoUrl;

//     // let _headers = { 
//     //     'Authorization': this.state.token
//     // }; 
//     // await HWH5.fetchInternet(this.getters.userInfoUrl, { method: 'get', headers: _headers, timeout: 6000 })
//     // .then(res => {
//     //     return res.json();
//     // })
//     axios.get(this.getters.userInfoUrl)
//     .then(async res => {
//         console.log(res.data); 
//         await HWH5.downloadFile({
//             url: res.data.avatarUrl,
//             headers: {'Content-Type': 'image/svg+xml'},
//             filePath: '/static/img' + res.data.avatarUrl.substr(27)
//         }).then(result => {
//             console.log(result);
//         }).catch(error => {
//             console.log('下载异常', error);
//         });
//         return commit ('updateUserInfo', res.data.nickname, res.data.avatarUrl, res.data.isAdmin);
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }
// ES6精简写法
// export const modifyAName = ({commit},name) => commit('modifyAName', name)