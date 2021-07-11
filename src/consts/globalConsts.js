const loginUrl = 'http://localhost:8081/welink/login'


// const baseURL = 'www.baidu.com'
// const status = {
//   tentative: 0, finish: 1, revise: 2
// }
 
// let local = {
//     say() {
//         console.log(‘我是插件里面自定义的方法‘)
//     }
// }

 
export default {
    install: function(Vue) {
        Vue.prototype.$loginUrl = loginUrl
        // Vue.prototype.$status = status
        // Vue.prototype.$local = local
    }

}