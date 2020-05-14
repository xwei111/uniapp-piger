<template>
	<view class="self_task_center">
		<view class="self_task_center_border" :style="{'background-color': tasktype[dataSource.kind] ? tasktype[dataSource.kind].color : ''}"></view>
		<view class="self_task_center_content">
			<view class="self_task_center_content_left">
				<image class="self_task_center_content_left_ig" :src="tasktype[dataSource.kind] ? tasktype[dataSource.kind].ig : ''"></image>
				<text>{{dataSource.title}}</text>
			</view>
			<view class="self_task_center_content_right">
				<view v-if="dataSource.sign" class="self_task_center_content_right_sign" @click="cancleSignHandle">
					<image class="self_task_center_content_right_sign_ig" src="../../static/xing.png"></image>
					取消置顶
				</view>
				<view v-else @click="signHandle">
					置顶任务
				</view>
			</view>
		</view>
		<view class="self_task_center_buttons">
			<view class="self_task_center_button" @click="detailHandle">查看详情</view>
			<view class="self_task_center_button" @click="workHandle">发起任务</view>
		</view>
	</view>
</template>

<script>
	import { tasktype } from '@/utils/consts.js';
	
	export default {
		props: {
			dataSource: {
				type: Object,
				default: () => ({})
			}
		},
		data() {
			return {
				tasktype: tasktype
			}
		},
		methods: {
			cancleSignHandle() {
				this.$emit('cancleSignHandle', this.dataSource)
			},
			signHandle() {
				this.$emit('signHandle', this.dataSource)
			},
			detailHandle() {
				this.$emit('detailHandle', this.dataSource)
			},
			workHandle() {
				this.$emit('workHandle', this.dataSource)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_task_center {
		width:100%;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 2rpx 10rpx 0rpx rgba(215,215,215,0.5);
		border-radius:26rpx;
		padding: 0 40rpx;
		box-sizing: border-box;
		margin-bottom: 16rpx;
		.self_task_center_border {
			width:108rpx;
			height:7rpx;
		}
		.self_task_center_content {
			box-sizing: border-box;
			padding: 34rpx 0;
			display: flex;
			overflow: hidden;
			justify-content: space-between;
			align-items: center;
			.self_task_center_content_left {
				font-size:32rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(34,34,34,1);
				display: flex;
				align-items: center;
				.self_task_center_content_left_ig {
					width: 84rpx;
					height: 84rpx;
					margin-right: 26rpx;
				}
			}
			.self_task_center_content_right {
				font-size:28rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(65,114,255,1);
				.self_task_center_content_right_sign {
					color: #A8A8A8;
					display: flex;
					align-items: center;
					.self_task_center_content_right_sign_ig {
						width: 32rpx;
						height: 29rpx;
						margin-right: 10rpx;
					}
				}
			}
		}
		.self_task_center_buttons {
			width: 100%;
			border-top: 1px solid #D1D1D1;
			padding: 18rpx 0;
			display: flex;
			.self_task_center_button {
				flex: 1;
				height: 52rpx;
				line-height: 52rpx;
				text-align: center;
				font-size:32rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color: rgba(51,51,51,1);
			}
			.self_task_center_button:nth-of-type(2) {
				box-sizing: border-box;
				border-left: 1px solid #D1D1D1;
				color: #0B8E69;
			}
		}
	}
</style>
