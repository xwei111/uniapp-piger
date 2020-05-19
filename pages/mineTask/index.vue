<template>
	<!-- 我的任务 -->
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
		<selfTaskColor></selfTaskColor>
	</view>
</template>

<script>
	import selfTabs from '@/components/self-tabs.vue';
	import selfSearch from '@/components/self-search.vue';
	import selfTaskMine from '@/components/taskmodel/self-task-mine.vue';
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
					{title: '人员流程', people: '憨憨', pros: '隔离点-消毒', kind: 'region', key: 'peopleDisinfect'},
					{title: '人员流程', people: '憨憨', pros: '隔离点-采样', kind: 'region', key: 'peopleSample'},
					{title: '人员流程', people: '憨憨', pros: '隔离点-采样结果', kind: 'region', key: 'peopleSampleResult'},
					{title: '人员流程', people: '憨憨', pros: '入场申请审核', kind: 'region', key: 'admissionAudit'},
					{title: '人员流程', people: '憨憨', pros: '访客邀请确认', kind: 'region', key: 'guestInviate'},
					{title: '人员流程', people: '憨憨', pros: '采样确认', kind: 'region', key: 'sampleSure'},
					{title: '人员流程', people: '憨憨', pros: '洗澡确认', kind: 'region', key: 'washSure'},
					{title: '人员流程', people: '憨憨', pros: '进入隔离点', kind: 'region', key: 'inDisinfect'},
					{title: '人员流程', people: '憨憨', pros: '隔离点-人员采样结果', kind: 'region', key: 'disPeopkeSample'}
				],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				scrollviewHigh: 0,
				taskUrl: {
					peopleDisinfect: '/pages/allTask/people/disinfect',
					peopleSample: '/pages/allTask/people/sample',
					peopleSampleResult: '/pages/allTask/people/sampleResult',
					admissionAudit: '/pages/allTask/people/admissionAudit',
					guestInviate: '/pages/allTask/people/guestInviate',
					sampleSure: '/pages/allTask/people/sampleSure',
					washSure: '/pages/allTask/people/washSure',
					inDisinfect: '/pages/allTask/people/inDisinfect',
					disPeopkeSample: '/pages/allTask/people/disPeopkeSample',
				}
			}
		},
		components: {
			selfTabs,
			selfSearch,
			selfTaskMine,
			selfEmpty
		},
		onLoad() {
			
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
				uni.navigateTo({ url: `${this.taskUrl[e.key]}?detail=${JSON.stringify(e)}` })
				// uni.navigateTo({ url: `/pages/allTask/guestApproval?detail=${JSON.stringify(e)}` })
			},
			colorDetailHandle(e) {
				
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
