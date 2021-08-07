import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

const state = {
  bigMoreTitleFontSize: 0,  //	特大标题
  bigTitleFontSize: 0,  //	大标题
  titleFontSize: 0,  //	标题
  subTitleFontSize: 0,  //	副标题
  auxiliaryArtFontSize: 0,  //	辅助文
  promptInfoFontSize: 0,  //	提示性辅助文
  contentFontSize: 0,  //	正文段落
  bigMoreAvatarSize: 0,  //	特大头像
  listAvatarSize: 0,  //	列表头像
  contentAvatarSize: 0,  //	内容头像
  navigationAvatarSize: 0,  //	导航栏头像
  auxiliaryAvatarSize: 0,  //	辅助头像
  fontPercent: 0,  //	字体倍率（包括头像）

}


export default {
    namespaced: true,  //多出的一行
    state,
    mutations,
    actions,
    getters
};       