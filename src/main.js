import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import routes from './routes'

NProgress.configure({ showSpinner: false })
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(require('vue-moment'))
Vue.use(BaiduMap, {
  ak: 'OcGhM2vkWGZ4l9rPwCQV76HtrKjgaChv'
})

Vue.directive('layout', {
	inserted: function (el, binding) {
		document.body.setAttribute('class',el.dataset.bg)
	}
})
const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
	window.scrollTo(0,0)
	NProgress.start()
	if(to.matched.some( route => route.meta.requiresAuth)){
		if (!store.state.sso.admin) {
			next({
				name: 'signin'
			})
		} else {
			if (to.path === '/sso/signin') {
				next({
					name: 'index'
				})
			} else {
				next()
			}
		}
	} else {
		next()
	}
})
router.afterEach((to, from, next) => {
	NProgress.done()
	if(to.meta.title){
		document.title = to.meta.title
	}
	console.log('APP、微信、小程序开发 - 西安梦想魔方网络科技有限公司 http://www.dreamscube.cn 欢迎致电：18629091980')
})

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})