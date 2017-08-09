import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import * as types from '../store/mutation-types'
Vue.use(Router)
// 首页路由
const index = resolve => require(['pages/index'], resolve)
// 联盟
const alliance = resolve => require(['pages/alliance/alliance'], resolve)
// user
const mine = resolve => require(['pages/user/mine'], resolve)
// 推广
const article = resolve => require(['pages/article/article'], resolve)
// 培训
const train = resolve => require(['pages/train/train'], resolve)
// 登录
const login = resolve => require(['pages/login'], resolve)
const router = new Router({
	routes: [{
			path: '/',
			component: index,
			meta: {}
		},
		{
			path: '/login',
			component: login
		},
		{
			path: '/alliance',
			component: alliance
		},
		{
			path: '/train',
			component: train
		},
		{
			path: '/article',
			component: article
		},
		{
			path: '/mine',
			component: mine
		}
	]
})
const SetLogin = (data) => {
	store.commit(types.loginInfo, data)
}
//
// let localLogin = JSON.parse(window.localStorage.getItem('loginInfo')) || null
// localLogin && SetLogin(localLogin)
// 进行路有验证是否登录
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(item => item.meta.requireAuth)) {
//     if (store.state.loginInfo && store.state.loginInfo.expire > Date.now()) {
//       next()
//     } else {
//       window.localStorage.removeItem('loginInfo')
//       SetLogin(null)
//       router.replace('/login')
//     }
//   } else {
//     next()
//   }
// })
export default router