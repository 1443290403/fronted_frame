import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export const childrenRouters = []

// 去除路由跳转报错信息
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject) {
		return originalPush.call(this, location, onResolve, onReject)
	}
	return originalPush.call(this, location).catch((err) => err)
}

export const constantRoutes = [{
	path: '/App',
	component: () => import('@/App'),
	hidden: true,
	meta: {
		title: 'home',
		icon: 'app',
		breadcrumb: false,
		requireAuth: false
	},
}, 
]

const createRouter = () => new Router({
	scrollBehavior: () => ({
		y: 0
	}),
	routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
	const newRouter = createRouter()
	// reset router
	router.matcher = newRouter.matcher
}

export default router
