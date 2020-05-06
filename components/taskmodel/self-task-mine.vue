<template>
	<view>
		<view class="self_task_mine">
			<view class="self_task_mine_tag"></view>
			<view class="self_task_mine_info">
				<image class="self_task_mine_info_logo" :src="dataSource.ig"></image>
				<view >
					<view class="self_task_mine_info_title">{{dataSource.title}}</view>
					<view class="self_task_mine_info_user">发起人: {{dataSource.people}}</view>
				</view>
			</view>
			<view class="self_task_mine_progress">
				<view class="self_task_mine_progress_content">
					<text class="self_task_mine_progress_content_key">当前流程</text>
					<text class="self_task_mine_progress_content_value">{{dataSource.pros}}</text>
				</view>
				<view class="self_task_mine_progress_content">
					<text class="self_task_mine_progress_content_key">车牌号</text>
					<text class="self_task_mine_progress_content_value">{{dataSource.car}}</text>
				</view>
			</view>
			<view class="self_task_mine_oper">
				<view class="self_task_mine_oper_detail" @click="backHandle(dataSource)">退回/终止</view>
				<view class="self_task_mine_oper_detail" @click="detailHandle(dataSource)">查看详情</view>
				<view class="self_task_mine_oper_detail" @click="completeHandle(dataSource)">完成任务</view>
			</view>
		</view>
		<view class="self_task_time">今日 13:42下午</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataSource: {
				type: Object,
				default: {}
			}
		},
		methods: {
			backHandle(e) {
				this.$emit('backHandle', e)
			},
			detailHandle(e) {
				this.$emit('detailHandle', e)
			},
			completeHandle(e) {
				this.$emit('completeHandle', e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_task_mine {
		width: 100%;
		box-sizing: border-box;
		padding: 0 30rpx 24rpx 30rpx;
		background-color: #fff;
		box-shadow:0rpx 2rpx 10rpx 0rpx rgba(215,215,215,0.5);
		border-radius:26rpx;
		margin-bottom: 24rpx;
		.self_task_mine_tag{
			width:108rpx;
			height:7rpx;
			background:rgba(15,187,135,1);
			margin-bottom: 26rpx;
		}
		.self_task_mine_info{
			height: 83rpx;
			display: flex;
			box-sizing: border-box;
			padding: 0 10rpx;
			margin-bottom: 38rpx;
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
		.self_task_mine_progress {
			display: flex;
			box-sizing: border-box;
			padding: 0 10rpx;
			overflow: hidden;
			.self_task_mine_progress_content {
				flex: 1;
				display: flex;
				flex-direction: column;
				.self_task_mine_progress_content_key {
					font-size:28rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(168,168,168,1);
					margin-bottom: 30rpx;
				}
				.self_task_mine_progress_content_value {
					font-size:42rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(34,34,34,1);
					margin-bottom: 50rpx;
				}
			}
		}
		.self_task_mine_oper {
			box-sizing: border-box;
			border-top: 1rpx solid #D1D1D1;
			padding-top: 12rpx;
			display: flex;
			overflow: hidden;
			.self_task_mine_oper_detail {
				height: 52rpx;
				flex: 1;
				font-size:32rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color: #333;
				display: flex;
				align-items: center;
				justify-content: center;
				border-left: 1px solid #D1D1D1;
			}
			.self_task_mine_oper_detail:nth-of-type(1) {
				border: none;
				color: #D0021B;
			}
			.self_task_mine_oper_detail:nth-of-type(3) {
				color: #0B8E69;
			}
		}
	}
	.self_task_time {
		font-size:28rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(168,168,168,1);
		margin-bottom: 24rpx;
	}
</style>
