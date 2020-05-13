<template>
	<view>
		<view class="self_task_mine">
			<view :class="[
				'self_task_mine_war',
				dataSource.type == 'red' ? 'self_task_mine_war_red' : dataSource.type == 'blue' ? 'self_task_mine_war_blue' : dataSource.type == 'origin' ? 'self_task_mine_war_origin' : ''
			]">
				{{ dataSource.type == 'red' ? '红色预警' : dataSource.type == 'blue' ? '蓝色预警' : dataSource.type == 'origin' ? '橙色预警' : '' }}
			</view>
			<view :class="[
				'self_task_mine_tag',
				dataSource.type == 'red' ? 'self_task_mine_tag_red' : dataSource.type == 'blue' ? 'self_task_mine_tag_blue' : dataSource.type == 'origin' ? 'self_task_mine_tag_origin' : ''
			]"></view>
			<view class="self_task_mine_info">
				<image class="self_task_mine_info_logo" :src="dataSource.type == 'red' ? '/static/red.png' : dataSource.type == 'blue' ? '/static/blue.png' : dataSource.type == 'origin' ? '/static/origin.png' : ''"></image>
				<view>
					<view class="self_task_mine_info_title">{{dataSource.title}}</view>
					<view class="self_task_mine_info_user">{{dataSource.detail}}</view>
				</view>
			</view>
			<view class="self_task_mine_progress">
				<view class="self_task_mine_progress_content">
					<text class="self_task_mine_progress_content_key">处理人员</text>
					<text class="self_task_mine_progress_content_value">{{dataSource.people}}</text>
				</view>
				<view class="self_task_mine_progress_content" v-if="dataSource.status === 2">
					<text class="self_task_mine_progress_content_key">处理方式</text>
					<text class="self_task_mine_progress_content_value">{{dataSource.kind}}</text>
				</view>
				<view class="self_task_mine_progress_content" v-else>
					<view class="self_task_mine_progress_content_tell" @click="callHandle">
						<image class="self_task_mine_progress_content_phone" src='/static/phone.png'></image>
						<text class="self_task_mine_progress_content_call">联系他</text>
					</view>
				</view>
			</view>
			<view class="self_task_mine_oper">
				<view v-if="dataSource.status === 1" class="self_task_mine_oper_detail_up" @click="upgradeHandle(dataSource)">报警升级</view>
				<view class="self_task_mine_oper_detail" @click="detailHandle(dataSource)">查看详情</view>
				<view v-if="dataSource.status === 1" class="self_task_mine_oper_detail_com" @click="completeHandle(dataSource)">处理任务</view>
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
			upgradeHandle(e) {
				this.$emit('upgradeHandle', e)
			},
			detailHandle(e) {
				this.$emit('detailHandle', e)
			},
			completeHandle(e) {
				this.$emit('completeHandle', e)
			},
			callHandle() {
				uni.makePhoneCall({
				    phoneNumber: this.dataSource.tell //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_task_mine {
		position: relative;
		width: 100%;
		box-sizing: border-box;
		padding: 0 30rpx 24rpx 30rpx;
		background-color: #fff;
		box-shadow:0rpx 2rpx 10rpx 0rpx rgba(215,215,215,0.5);
		border-radius:26rpx;
		margin-bottom: 24rpx;
		.self_task_mine_war {
			position: absolute;
			top: 30rpx;
			right: 30rpx;
			font-size:28rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			&.self_task_mine_war_red {
				color: #EC2A00;
			}
			&.self_task_mine_war_blue {
				color: #355DC6;
			}
			&.self_task_mine_war_origin {
				color: #EC6800;
			}
		}
		.self_task_mine_tag{
			width:108rpx;
			height:7rpx;
			margin-bottom: 26rpx;
			&.self_task_mine_tag_red {
				background-color: #EC2A00;
			}
			&.self_task_mine_tag_blue {
				background-color: #355DC6;
			}
			&.self_task_mine_tag_origin {
				background-color: #EC6800;
			}
		}
		.self_task_mine_info{
			height: 83rpx;
			display: flex;
			box-sizing: border-box;
			padding: 0 10rpx;
			margin-bottom: 38rpx;
			align-items: center;
			.self_task_mine_info_logo {
				height: 44rpx;
				width: 44rpx;
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
				.self_task_mine_progress_content_tell {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					padding-right: 20rpx;
					padding-top: 65rpx;
					.self_task_mine_progress_content_phone {
						width: 57rpx;
						height: 57rpx;
						margin-right: 20rpx;
					}
					.self_task_mine_progress_content_call {
						font-size:32rpx;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(11,142,105,1);
					}
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
				
			}
			.self_task_mine_oper_detail_up {
				height: 52rpx;
				flex: 1;
				font-size:32rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color: #333;
				display: flex;
				align-items: center;
				justify-content: center;
				border-right: 1px solid #D1D1D1;
				color: #D0021B;
			}
			.self_task_mine_oper_detail_com {
				height: 52rpx;
				flex: 1;
				font-size:32rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color: #333;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #0B8E69;
				border-left: 1px solid #D1D1D1;
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
