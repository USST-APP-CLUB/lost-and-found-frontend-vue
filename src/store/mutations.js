// 提交 mutations是更改Vuex状态的唯一合法方法
export const updateTabIndex = (state, tabIndex) => {
    state.tabIndex = tabIndex
}

// export const updateStatusBarHeight = (state, statusBarHeight) => {
//     state.statusBarHeight = statusBarHeight
// }

// export const modifyAName = (state, name) => { // A组件点击更改餐馆名称为 A餐馆
//     state.resturantName = name // 把方法传递过来的参数，赋值给state中的resturantName
// }
// export const modifyBName = (state, name) => { // B组件点击更改餐馆名称为 B餐馆
//     state.resturantName = name
// }
// export const setToken = (state, token) => { // 
//     state.token = token
// }

// export const setNickname = (state, nickname) => { // 
//     state.nickname = nickname
// }

// export const setAvatar = (state, avatarUrl) => { // 
//     state.avatarUrl = avatarUrl
// }

// export const setAdmin = (state, isAdmin) => { // 
//     state.isAdmin = isAdmin
// }

// export const updateUserInfo = (state, nickname, avatarUrl, isAdmin) => {
//     state.nickname = nickname;
//     state.avatarUrl = avatarUrl;
//     state.isAdmin = isAdmin;
// }