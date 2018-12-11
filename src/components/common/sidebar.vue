<template>
	<el-aside>
		<el-row>
			<el-col :span="24">
				<div class="grid-content logo">
					<img src="/static/logo.png" alt="">
				</div>
			</el-col>
		</el-row>
		<el-menu 
			background-color="#222430" 
			text-color="#fff" 
			active-text-color="#409eff"
			default-active="/home" 
			:unique-opened="true"
			:router="true">
			<el-menu-item index="/home"><i class="el-icon-menu"></i>概览</el-menu-item>
			<el-submenu v-for="menu in menus" :key="menu.id" :index="menu.url">
				<template slot="title">
					<i :class="'el-icon-' + menu.icon"></i>
					{{menu.title}}
				</template>
				<el-menu-item v-for="child in menu.childs" :key="child.id" :index="child.url">{{child.title}}</el-menu-item>
			</el-submenu>
		</el-menu>
	</el-aside>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'sidebar',
	computed: {
		...mapState({
			menus: state => state.sso.admin.resources
		})
	}
}
</script>

<style scoped>
</style>