<template>
	<view class="self_task">
		<view class="self_task_mine_tag" :style="{'background-color': tasktype[detail.kind] ? tasktype[detail.kind].color : ''}"></view>
		<view class="self_task_mine_info">
			<image class="self_task_mine_info_logo" :src="tasktype[detail.kind] ? tasktype[detail.kind].ig : ''"></image>
			<view >
				<view class="self_task_mine_info_title">{{detail.pros}}</view>
				<view class="self_task_mine_info_user">发起人: {{detail.people}}</view>
			</view>
		</view>
		<!-- 基本信息 -->
		<view class="self_task_basic" v-if="$slots.basic">基本信息</view>
		<view v-if="isShow">
			<slot name="basic"></slot>
		</view>
		<view class="self_isExpend" @click="expendHandle" v-if="$slots.basic">
			<image
				:class="[
					'self_isExpend_ig',
					isShow ? '' : 'self_isExpend_close'
				]" 
				src="../static/isExpend.png"
			>
			</image>
			{{ isShow ? '收起' : '展开' }}
		</view>
		<!-- 任务处理 -->
		<view class="self_task_basic" v-if="$slots.task">任务处理</view>
		<slot name="task"></slot>
		<slot></slot>
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
			expendHandle() {
				this.isShow = !this.isShow
			}
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
			margin-bottom: 38rpx;
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
		}
		.self_isExpend {
			width: 100%;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size:32rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(51,51,51,1);
			border-bottom: 1px solid #D1D1D1;
			margin-bottom: 40rpx;
			.self_isExpend_ig {
				width: 26rpx;
				height: 16rpx;
				margin-right: 20rpx;
				&.self_isExpend_close {
					transform: rotate(180deg);
				}
			}
		}
	}
	
</style>
