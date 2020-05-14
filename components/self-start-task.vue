<template>
	<view class="self_task">
		<view class="self_task_mine_tag" :style="{'background-color': tasktype[detail.kind] ? tasktype[detail.kind].color : ''}"></view>
		<view class="self_task_mine_info">
			<image class="self_task_mine_info_logo" :src="tasktype[detail.kind] ? tasktype[detail.kind].ig : ''"></image>
			<view >
				<view class="self_task_mine_info_title">{{detail.title}}</view>
			</view>
		</view>
		<!-- 基本信息 -->
		<view class="self_task_basic">任务概要</view>
		<slot name="task"></slot>
		<!-- 任务处理 -->
		<view class="self_task_basic self_task_basic_car">车辆资源</view>
		<slot name="car"></slot>
	</view>
</template>

<script>
	import { tasktype } from '@/utils/consts.js';
	
	export default {
		props: {
			detail: {
				type: Object,
				default: ()=>({})
			}
		},
		data() {
			return {
				tasktype: tasktype,
				isShow: true
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.self_task {
		position: relative;
		width:656rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 2rpx 10rpx 0rpx rgba(215,215,215,0.5);
		border-radius:26rpx;
		padding:0 30rpx 40rpx 30rpx;
		box-sizing: border-box;
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
			border-bottom: 1px solid #D1D1D1;
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
		.self_task_basic {
			font-size:32rpx;
			font-family:PingFangSC-Medium,PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
			padding-top: 30rpx;
		}
		.self_task_basic_car {
			margin-top: 40rpx;
			border-top: 1px solid #D1D1D1;
		}
	}
	
</style>
