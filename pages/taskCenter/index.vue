<template>
	<!-- 任务中心 -->
	<view class="taskCenter">
		<!-- top -->
		<view class="taskCenter_top">
			<image class="taskCenter_top_ig" src="/static/taskbg.png"></image>
			<view class="taskCenter_top_search">
				<image class="taskCenter_top_search_icon" src="/static/search.png"></image>
				<input class="taskCenter_top_search_input" placeholder="请输入关键字" @input="onInput"  />
			</view>
		</view>
		<!-- apply -->
		<view class="taskCenter_apply">
			<view class="taskCenter_apply_content" @click="comeHandle">
				<image class="taskCenter_apply_content_ig" src="/static/img1.png"></image>
				<view class="taskCenter_apply_content_text">我要进场</view>
				<view class="taskCenter_apply_content_btn taskCenter_apply_btn1">发起申请</view>
			</view>
			<view class="taskCenter_apply_content" @click="leaveHandle">
				<image class="taskCenter_apply_content_ig" src="/static/img2.png"></image>
				<view class="taskCenter_apply_content_text">我要离开</view>
				<view class="taskCenter_apply_content_btn taskCenter_apply_btn2">发起申请</view>
			</view>
		</view>
		
		<view class="taskCenter_scroll">
			
			<self-task-center 
				v-for="(item, index) in dataSource" 
				:key="index" 
				:dataSource="item"
				@cancleSignHandle="cancleSignHandle"
				@signHandle="signHandle"
				@detailHandle="detailHandle"
				@workHandle="workHandle"
			>
			</self-task-center>
		</view>
		<selfTaskColor></selfTaskColor>
	</view>
</template>

<script>
	import selfTaskCenter from '@/components/taskmodel/self-task-center.vue';
	
	export default {
		data() {
			return {
				dataSource: [
					{ title: '人员中转任务', sign: false, kind: 'region', key: 'peopleTrans'  },
					{ title: '隔离点日常任务', sign: false, kind: 'material', key: 'quarantineDaily'  },
					{ title: '车辆日常任务', sign: false, kind: 'car', key: 'carDaily'  },
					{ title: '人员日常采样任务', sign: false, kind: 'material', key: 'samplingDaily'  },
					{ title: '物资厂采样', sign: false, kind: 'material', key: 'materSialampling' },
					{ title: '非中转物资', sign: false, kind: 'material', key: 'notMater' },
					{ title: '引种猪任务', sign: false, kind: 'piger', key: 'breedingPig' },
					{ title: '车辆洗消', sign: true, kind: 'car', key: 'carWash' },
					{ title: '断奶猪', sign: true, kind: 'piger', key: 'weaningPig' },
					{ title: '商品淘汰猪', sign: true, kind: 'piger', key: 'eliminatePig' },
					{ title: '粪肥任务', sign: false, kind: 'fertilizer', key: 'fertilizer' },
					{ title: '饲料厂采样', sign: false, kind: 'feed', key: 'feedSample' },
					{ title: '打料任务', sign: false, kind: 'feed', key: 'punching' },
					{ title: '发起食材到货', sign: false, kind: 'food', key: 'food' },
					{ title: '食材中转', sign: false, kind: 'food', key: 'foodTrans' },
					{ title: '中转物资到货发起', sign: false, kind: 'material', key: 'transMater' },
					{ title: '中转物资入场', sign: false, kind: 'material', key: 'comTransMater' },
					{ title: '物资入库任务', sign: false, kind: 'material', key: 'materCom' },
				],
				taskUrl: {
					peopleTrans: '/pages/startTask/peopleTrans',
					quarantineDaily: '/pages/startTask/quarantineDaily',
					carDaily: '/pages/startTask/carDaily',
					samplingDaily: '/pages/startTask/samplingDaily',
					materSialampling: '/pages/startTask/materSialampling',
					notMater: '/pages/startTask/notMater',
					breedingPig: '/pages/startTask/breedingPig',
					carWash: '/pages/startTask/carWash',
					weaningPig: '/pages/startTask/weaningPig',
					eliminatePig: '/pages/startTask/eliminatePig',
					fertilizer: '/pages/startTask/fertilizer',
					feedSample: '/pages/startTask/feedSample',
					punching: '/pages/startTask/punching',
					food: '/pages/startTask/food',
					foodTrans: '/pages/startTask/foodTrans',
					transMater: '/pages/startTask/transMater',
					comTransMater: '/pages/startTask/comTransMater',
					materCom: '/pages/startTask/materCom'
				},
				
			}
		},
		components: {
			selfTaskCenter
		},
		methods: {
			onInput(e) {
				console.log('e', e.target.value)
			},
			cancleSignHandle(e) {
				if(!e.sign) return
				e.sign = false;
				this.dataSource = this._sort(this.dataSource);
			},
			signHandle(e) {
				if(e.sign) return
				e.sign = true;
				this.dataSource = this._sort(this.dataSource);
			},
			_sort(data) {
				let arr1 = [];
				let arr2 = [];
				data.map(e=>{
					if(e.sign) {
						arr1.push(e)
					} else {
						arr2.push(e)
					}
				})
				return [...arr1, ...arr2]
			},
			detailHandle(e) {
				console.log('e', e)
			},
			workHandle(e) {
				console.log('e', e)
				uni.navigateTo({ url: `${this.taskUrl[e.key]}?detail=${JSON.stringify(e)}` })
			},
			comeHandle() {
				// 已入场不能在入场
				uni.navigateTo({
					url: '/pages/comePig/index'
				})
			},
			leaveHandle() {
				// 已离场不能在离场
				uni.navigateTo({
					url: '/pages/leavePig/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.taskCenter {
		width: 100%;
		background-color: #F5F5F5;
		.taskCenter_top {
			width: 100%;
			height: 365rpx;
			position: relative;
			display: flex;
			justify-content: center;
			box-sizing: border-box;
			padding-top: 216rpx;
			.taskCenter_top_ig {
				width: 100%;
				position: absolute;
				left: 0;
				bottom: 0;
			}
			.taskCenter_top_search {
				width:571rpx;
				height:68rpx;
				background:rgba(255,255,255,1);
				border-radius:34rpx;
				position: relative;
				z-index: 2;
				display: flex;
				overflow: hidden;
				align-items: center;
				.taskCenter_top_search_icon {
					width: 28rpx;
					height: 28rpx;
					margin: 0 26rpx;
				}
				.taskCenter_top_search_input {
					flex: 1;
					height: 100%;
					margin-right: 26rpx;
				}
			}
		}
		.taskCenter_apply {
			display: flex;
			overflow: hidden;
			margin-top: -40rpx;
			margin-bottom: 16rpx;
			width: 100%;
			justify-content: center;
			position: relative;
			z-index: 2;
			.taskCenter_apply_content {
				width:325rpx;
				height:308rpx;
				background:rgba(255,255,255,1);
				box-shadow:0rpx 2rpx 10rpx 0rpx rgba(215,215,215,0.5);
				border-radius:26rpx;
				margin: 0 10rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				box-sizing: border-box;
				overflow: hidden;
				padding-top: 24rpx;
				.taskCenter_apply_content_ig {
					width: 84rpx;
					height: 84rpx;
					margin-bottom: 20rpx;
				}
				.taskCenter_apply_content_text {
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(34,34,34,1);
					margin-bottom: 33rpx;
				}
				.taskCenter_apply_content_btn {
					width:228rpx;
					height:60rpx;
					border-radius:30rpx;
					text-align: center;
					line-height: 60rpx;
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
				}
				.taskCenter_apply_btn1 {
					background:rgba(238,249,245,1);
					border:1rpx solid rgba(11,142,105,1);
					color:rgba(11,142,105,1);
				}
				.taskCenter_apply_btn2 {
					background:rgba(233,244,255,1);
					border:1px solid rgba(11,91,142,1);
					color: rgba(11,91,142,1);
				}
			}
		}
		.taskCenter_scroll {
			width: 100%;
			min-height: 600rpx;
			box-sizing: border-box;
			padding: 0 40rpx 1rpx 40rpx;
		}
	}
</style>
