import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { actions } from './action'
import { getters } from './getters'
Vue.use(Vuex)
const state = {
  // 此处为state的默认值
  loginInfo:null
}
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', //修改state必须通过commit触发，否则将会抛出error
  state,
  actions,
  getters,
  mutations
})