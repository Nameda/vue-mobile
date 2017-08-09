// mution有多个，以* as xxx 引入
import * as types from './mutation-types'
// 用法
export const mutations = {
  [types.loginInfo](state, data) {
    state.loginInfo = data
  }
}