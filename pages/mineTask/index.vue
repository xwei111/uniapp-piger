<template>
	<view class="main_box">
		<view class="main_box_content">
			<view class="default_bg"></view>
			<view class="main_content">
				<self-tabs :list="tags" :active="active" @selectHandle="selectHandle" style="width: 100%;"></self-tabs>
				<self-search v-if="list&&list.length" @searchHandle="searchHandle"></self-search>
			</view>
		</view>
		<scroll-view class="scroll_task" scroll-y="true" :scroll-top="scrollTop" @scroll="scroll" :style="{height:scrollviewHigh +'px'}">
			<view class="task_content" v-if="list&&list.length">
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
					{title: '车辆洗消', people: '吴小军', pros: '一洗-采样', kind: 'car'},
					{title: '区域任务', people: '黄小仙', pros: '一洗-采样', kind: 'region'},
					{title: '区域任务', people: '黄小仙', pros: '一洗-采样', kind: 'piger'}
				],
				color: null,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				scrollviewHigh: 0
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
				this.color = 'red'
				this.color != 'blue' && uni.hideTabBar()
			}, 1000)
		},
		onHide() {
			this.active = 1;
		},
		methods: {
			selectHandle(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
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
				uni.navigateTo({ url: `/pages/allTask/guestApproval?detail=${JSON.stringify(e)}` })
			},
			colorDetailHandle(e) {
				this.color != 'blue' && uni.showTabBar()
				this.color = null
			},
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			}
		},
		onReady() {
			let _this = this
			uni.getSystemInfo({
				success(res) {
					_this.phoneHeight = res.windowHeight
					console.log(res.windowHeight)
					// 计算组件的高度
					let view = uni.createSelectorQuery().select(".main_box_content")
					console.log('view', view.style)
					view.boundingClientRect(data => {
						_this.navHeight = data.height
						console.log(_this.navHeight)
						_this.scrollviewHigh = _this.phoneHeight - _this.navHeight
					}).exec()
				}
			})
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
		overflow: hidden;
	}
	.scroll_task {
		.task_content {
			width: 100%;
			box-sizing: border-box;
			padding: 24rpx 44rpx;
		}
	}
	
</style>
