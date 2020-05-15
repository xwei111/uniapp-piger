<template>
	<!-- 我-警报信息 -->
	<view class="main_box">
		<self-tabs class="mine_tabs" :list="tags" :active="active" @selectHandle="selectHandle" style="width: 100%;"></self-tabs>
		<scroll-view class="scroll_task" scroll-y="true" :scroll-top="scrollTop" @scroll="scroll" :style="{height:scrollviewHigh +'px'}">
			<view class="task_content" v-if="list&&list.length">
				<self-warning-box 
					v-for="(item, index) in list" 
					:key="index" 
					:dataSource="item"
					@upgradeHandle="upgradeHandle"
					@detailHandle="detailHandle"
					@completeHandle="completeHandle"
				>
				</self-warning-box>
			</view>
			<self-empty v-if="!list.length"></self-empty>
		</scroll-view>
		<selfTaskColor></selfTaskColor>
	</view>
</template>

<script>
	import selfTabs from '@/components/self-tabs.vue';
	import selfWarningBox from '@/components/self-warning-box.vue';
	import selfEmpty from '@/components/self-empty.vue';
	
	const list1 = [
		{title: '司机下车', detail: '销售淘汰猪', people: '张三', type: 'red', tell: '13776767676', status: 1},
		{title: '垃圾回落', detail: '垃圾处理', people: '王五', type: 'blue', tell: '13776767676', status: 1},
		{title: '垃圾回落', detail: '垃圾处理', people: '黄六', type: 'origin', tell: '13776767676', status: 1}
	]
	const list2 = [
		{title: '司机下车', detail: '销售淘汰猪', people: '张三', type: 'red', tell: '13776767676', status: 2, kind: '采样消毒'},
		{title: '垃圾回落', detail: '垃圾处理', people: '王五', type: 'blue', tell: '13776767676', status: 2, kind: '采样消毒'},
		{title: '垃圾回落', detail: '垃圾处理', people: '黄六', type: 'origin', tell: '13776767676', status: 2, kind: '采样消毒'}
	]
	
	export default {
		data() {
			return {
				tags: [
					{ id: 1, title: '待处理', num: 1 },
					{ id: 2, title: '已处理', num: 20 },
				],
				active: 1,
				list: list1,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				scrollviewHigh: 0
			}
		},
		components: {
			selfTabs,
			selfWarningBox,
			selfEmpty
		},
		methods: {
			selectHandle(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				this.active = e.id
				this.list = e.id == 1 ? list1 : list2
			},
			upgradeHandle(e) {
				console.log('e', e)
			},
			detailHandle(e) {
				console.log('e', e)
				uni.navigateTo({ url: '/pages/warningDetail/index' })
			},
			completeHandle(e) {
				uni.navigateTo({ url: `/pages/dowarning/index?detail=${JSON.stringify(e)}` })
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
					let view = uni.createSelectorQuery().select(".mine_tabs")
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
	.scroll_task {
		.task_content {
			width: 100%;
			box-sizing: border-box;
			padding: 24rpx 44rpx;
		}
	}
</style>
