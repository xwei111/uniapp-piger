<template>
	<view>
		<view class="default_bg"></view>
		<view class="main_content">
			<selfTabs :list="list" :active="active" @selectHandle="selectHandle"></selfTabs>
			<self-search></self-search>
		</view>
	</view>
</template>

<script>
	import selfTabs from '@/components/self-tabs.vue';
	import selfSearch from '@/components/self-search.vue';
	export default {
		data() {
			return {
				list: [
					{ id: 1, title: '待办任务' },
					{ id: 2, title: '我发起的' },
					{ id: 3, title: '已办任务' },
					{ id: 4, title: '已取消' }
				],
				active: 1
			}
		},
		components: {
			selfTabs,
			selfSearch
		},
		methods: {
			selectHandle(e) {
				this.active = e.id
			}
		}
	}
</script>

<style lang="scss" scoped>
	.default_bg {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(245,245,245,1);
	}
	.main_content {
		position: relative;
		z-index: 9;
	}
</style>
