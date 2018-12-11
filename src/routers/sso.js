const sso = {
	path: '/sso/signin',
	name: 'signin',
	component(resolve) {
		require.ensure(['@/components/sso/signin'], () => {
			resolve(require('@/components/sso/signin'))
		})
	},
	meta: {
		title: '登录'
	}
}

export default sso