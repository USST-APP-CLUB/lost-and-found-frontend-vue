import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

const state = {
  // statusBarHeight: 0,
  headNevHeight: 0,
  headContentOffset: 0,
  headContentHeight: 0,
  screenWidth: 0,
}


export default {
    namespaced: true,  //多出的一行
    state,
    mutations,
    actions,
    getters
};       