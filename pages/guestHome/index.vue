<template>
	<view class="taskCenter">
		<!-- top -->
		<view class="taskCenter_top">
			<image class="taskCenter_top_ig" src="/static/taskbg.png"></image>
		</view>
		<!-- apply -->
		<view class="taskCenter_apply">
			<view class="taskCenter_apply_content" @click="comeHandle">
				<image class="taskCenter_apply_content_ig" src="/static/img1.png"></image>
				<view class="taskCenter_apply_content_text">我要进场</view>
				<view class="taskCenter_apply_content_btn taskCenter_apply_btn1">
					{{ checkStatus == 0 ? '我要进场' : checkStatus == 1 ? '我要进场' : checkStatus == 2 ? '我已进场' : checkStatus == 3 ? '我要进场' : ''   }}
				</view>
			</view>
			<view class="taskCenter_apply_content" @click="leaveHandle">
				<image class="taskCenter_apply_content_ig" src="/static/img2.png"></image>
				<view class="taskCenter_apply_content_text">我要离开</view>
				<view :class="[
					'taskCenter_apply_content_btn',
					checkStatus !=2 ? 'taskCenter_apply_btn1' : 'taskCenter_apply_btn2'
				]">发起申请</view>
			</view>
		</view>
		<view class="centerList">
			<view class="centerList_child">
				<view class="self_task_mine_tag" :style="{'background-color': '#7AE78E'}"></view>
				<view class="self_task_mine_info">
					<image class="self_task_mine_info_logo" src="/static/img1.png"></image>
					<view >
						<view class="self_task_mine_info_title">
							{{ checkStatus == 0 ? '入场信息填写' : checkStatus == 1 ? '等待入场审核' : checkStatus == 2 ? '欢迎入场' : checkStatus == 3 ? '拒绝入场' : ''   }}
						</view>
					</view>
				</view>
				<view class="centerList_info">
					<view class="centerList_info_child">
						<text class="centerList_info_child_title">目的地</text>
						<text>猪场A</text>
					</view>
					<view class="centerList_info_child">
						<text class="centerList_info_child_title">接待人</text>
						<text>王五</text>
					</view>
				</view>
				<view class="centerList_seeDetail" @click="seeHandle">
					{{ checkStatus == 0 ? '填写详情' : checkStatus == 1 ? '修改详情' : checkStatus == 2 ? '查看详情' : checkStatus == 3 ? '修改详情' : ''   }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import selfTaskCenter from '@/components/taskmodel/self-task-center.vue';
	import { getGuestInfo } from '@/api/login.js';
	
	// checkStatus: 0-未提交申请  1-已提交，未审批 2-审批通过 3-审核拒绝
	export default {
		data() {
			return {
				checkStatus: 0,
				detail: {}
			}
		},
		components: {
			selfTaskCenter
		},
		onLoad() {
			this.detail = {
				visitorType: 2,
				visitors: [{name: '小明', idNo: '410999999999999999'}],
				reason: '学习',
				companyName: '浙江科技',
				visitDate: '2020-10-11 10:01:02',
				targetLocation: '猪场C',
				phone: '17687878787',
				whence: '绍兴',
				lastTouchTime: '2020-10-11 10:01:02',
				lastHighRishTime: '2020-10-11 10:01:02',
				arriveWay: '打车',
				personalEffects: ['手机', '眼镜', '其他'],
				otherEffects: '毛衣毛裤',
				mainVisitors: [{
					name: '校尉',
					idNo: '410999999191919191'
				}],
				checkStatus: this.checkStatus,
				isolation: '测试地址',
				openTime: '2020-01-01 10：09：08'
			};
			// getGuestInfo().then(e=> {
			// 	if(e.success) {
			// 		const { data } = e;
			// 		if(data.checkStatus != 0) {
			// 			this.detail = {
			// 				visitorType: data.visitorType,
			// 				visitors: data.visitors,
			// 				reason: data.reason,
			// 				companyName: data.companyName,
			// 				visitDate: data.visitDate,
			// 				targetLocation: data.targetLocation,
			// 				phone: data.phone,
			// 				whence: data.whence,
			// 				lastTouchTime: data.lastTouchTime,
			// 				lastHighRishTime: data.lastHighRishTime,
			// 				arriveWay: data.arriveWay,
			// 				personalEffects: data.personalEffects,
			// 				otherEffects: data.otherEffects,
			// 				mainVisitors: [{
			// 					name: data.name,
			// 					idNo: data.idNo
			// 				}],
			// 				checkStatus: data.checkStatus,
			// 				isolation: data.isolation ? data.isolation : '',
			// 				openTime: data.openTime ? data.openTime : ''
			// 			};
			// 			this.checkStatus = data.checkStatus;
			// 		}
			// 	}
			// })
		},
		methods: {
			comeHandle() {
				return
				// 已入场不能在入场
				// uni.navigateTo({
				// 	url: '/pages/comePig/index'
				// })
			},
			leaveHandle() {
				// 已离场不能在离场
				this.checkStatus == 2 && uni.navigateTo({
					url: '/pages/guestLeave/index'
				})
			},
			seeHandle() {
				if(this.checkStatus == 0) {
					uni.navigateTo({ url: `/pages/guestFirst/index` })
				}else if(this.checkStatus == 1 || this.checkStatus == 3) {
					uni.navigateTo({ url: `/pages/guestFirst/index?detail=${JSON.stringify({...this.detail, type: 'change'})}` })
				}else if(this.checkStatus == 2) {
					uni.navigateTo({ url: `/pages/guestInfo/index?detail=${JSON.stringify(this.detail)}` })
				}
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
					background:rgba(242,242,242,1);
					color: #B0B0B0;
				}
				.taskCenter_apply_btn2 {
					background:rgba(233,244,255,1);
					border:1px solid rgba(11,91,142,1);
					color: rgba(11,91,142,1);
				}
			}
		}
		.centerList {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.centerList_child {
				width:656rpx;
				background:rgba(255,255,255,1);
				box-shadow:0rpx 2rpx 10rpx 0rpx rgba(215,215,215,0.5);
				border-radius:26rpx;
				box-sizing: border-box;
				padding: 0 30rpx;
				.self_task_mine_tag{
					width:108rpx;
					height:7rpx;
					background:rgba(15,187,135,1);
					margin-bottom: 26rpx;
				}
				.self_task_mine_info{
					height: 163rpx;
					display: flex;
					box-sizing: border-box;
					padding: 0 10rpx;
					align-items: center;
					padding-bottom: 32rpx;
					.self_task_mine_info_logo {
						height: 83rpx;
						width: 83rpx;
						margin-right: 26rpx;
					}
					.self_task_mine_info_title {
						font-size:32rpx;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(34,34,34,1);
						margin-bottom: 4rpx;
					}
					.self_task_mine_info_user {
						font-size:28rpx;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(168,168,168,1);
					}
				}
				.centerList_info {
					display: flex;
					margin-bottom: 50rpx;
					.centerList_info_child {
						flex: 1;
						display: flex;
						flex-direction: column;
						font-size:42rpx;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(34,34,34,1);
						.centerList_info_child_title {
							font-size:28rpx;
							font-family:PingFangSC-Regular,PingFang SC;
							font-weight:400;
							color:rgba(168,168,168,1);
							margin-bottom: 30rpx;
						}
					}
				}
				.centerList_seeDetail {
					width: 100%;
					height: 90rpx;
					box-sizing: border-box;
					line-height: 90rpx;
					text-align: center;
					border-top: 1px solid #D1D1D1;
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(51,51,51,1);
				}
			}
		}
	}
</style>
