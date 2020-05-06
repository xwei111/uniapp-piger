<template>
	<view>
		<view class="default_bg"></view>
		<view class="main_content">
			<selfTabs :list="tags" :active="active" @selectHandle="selectHandle"></selfTabs>
			<self-search @searchHandle="searchHandle"></self-search>
			<scroll-view class="scroll_task" scroll-y="true">
				<view class="task_content" v-if="list.length">
					<self-task-mine 
						v-for="(item, index) in list" 
						:key="index" 
						:dataSource="item"
						@backHandle="backHandle"
						@detailHandle="detailHandle"
						@completeHandle="completeHandle"
					>
					</self-task-mine>
				</view>
				<self-empty v-if="!list.length"></self-empty>
			</scroll-view>
		</view>
		<self-task-color v-if="color" :color="color" @detailHandle="colorDetailHandle"></self-task-color>
	</view>
</template>

<script>
	import selfTabs from '@/components/self-tabs.vue';
	import selfSearch from '@/components/self-search.vue';
	import selfTaskMine from '@/components/taskmodel/self-task-mine.vue';
	import selfTaskColor from '@/components/taskmodel/self-task-color.vue'
	import selfEmpty from '@/components/self-empty.vue';
	
	export default {
		data() {
			return {
				tags: [
					{ id: 1, title: '待办任务', num: 1 },
					{ id: 2, title: '我发起的', num: 20 },
					{ id: 3, title: '已办任务' },
					{ id: 4, title: '已取消' }
				],
				active: 1,
				list: [
					{title: '车辆洗消', people: '吴小军', pros: '一洗-采样', car: "浙A099JK", ig: '/static/img3.png'},
					{title: '区域任务', people: '黄小仙', pros: '一洗-采样', car: "华东区", ig: '/static/img4.png'}
				],
				color: null
			}
		},
		components: {
			selfTabs,
			selfSearch,
			selfTaskMine,
			selfEmpty,
			selfTaskColor
		},
		onLoad() {
			setTimeout(()=> {
				this.color = 'blue'
				this.color != 'blue' && uni.hideTabBar()
			}, 1000)
		},
		methods: {
			selectHandle(e) {
				this.active = e.id
			},
			searchHandle(val){
				console.log('val', val)
			},
			backHandle(e) {
				console.log('e', e)
			},
			detailHandle(e) {
				console.log('e', e)
			},
			completeHandle(e) {
				console.log('e', e)
			},
			colorDetailHandle(e) {
				console.log('e', e)
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
	.scroll_task {
		width: 100%;
		height: 900rpx;
		.task_content {
			width: 100%;
			box-sizing: border-box;
			padding: 24rpx 44rpx 0 44rpx;
		}
	}
	
</style>
