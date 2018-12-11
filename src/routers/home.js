const home = {
	path: '/',
	name: 'index',
	redirect: { name: 'home' },
	component(resolve) {
		require.ensure(['@/components/common/layout'], () => {
			resolve(require('@/components/common/layout'))
		})
	},
	meta: {
		requiresAuth: true
	},
	children:[
		{
			path: 'home',
			name: 'home',
			component(resolve) {
				require.ensure(['@/components/home/index'], () => {
					resolve(require('@/components/home/index'))
				})
			},
			meta: {
				title: '首页',
				requiresAuth: true
			}
		},
		{
			path: 'profile/password',
			name: 'password',
			component(resolve) {
				require.ensure(['@/components/profile/password'], () => {
					resolve(require('@/components/profile/password'))
				})
			},
			meta: {
				title: '修改密码',
				requiresAuth: true
			}
		}
	]
}

export default home