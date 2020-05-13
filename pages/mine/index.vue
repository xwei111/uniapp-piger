<template>
	<view>
		<view class="mine_top">
			<image class="mine_top_ig" src="../../static/mineBg.png"></image>
			<view class="mine_top_content">
				<view class="mine_top_content_box">
					<view class="mine_top_content_image">
						<image class="mine_top_content_ig" src="../../static/logo.png"></image>
					</view>
					<view class="mine_top_content_user">
						<view>王五</view>
						<view class="mine_top_content_user_bumen">某某部门</view>
					</view>
				</view>
				<view class="mine_edit_info">编辑资料</view>
			</view>
		</view>
		<view class="mine_content">
			<view :class="[
					'mine_content_warning',
					number > 0 ? 'mine_content_warning_have' : 'mine_content_warning_none'
				]"
				@click="toWarningHandle"
			>
				<view class="mine_content_warning_top">
					<image class="mine_content_warning_ig" src="../../static/red.png"></image>
					<text>报警信息</text>
				</view>
				<view class="mine_content_warning_info">当前共{{number}}条消息待处理</view>
				<text v-if="number > 0" class="mine_content_warning_done">请立即处理！</text>
			</view>
			<view class="mine_content_message">
				<view class="mine_content_message_list" @click="toGuestHandle">
					<image class="mine_content_warning_ig" src="../../static/guest.png"></image>
					<text>访客邀请</text>
				</view>
				<view class="mine_content_border"></view>
				<view class="mine_content_message_list">
					<image class="mine_content_warning_ig" src="../../static/info.png"></image>
					<text>公告通知</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				number: 1
			}
		},
		methods: {
			toWarningHandle() {
				uni.navigateTo({ url: '/pages/mineWarning/index' })
			},
			toGuestHandle() {
				uni.navigateTo({ url: '/pages/invitaGuest/index' })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mine_top {
		width: 100%;
		height: 275rpx;
		position: relative;
		margin-bottom: 40rpx;
		.mine_top_ig {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
		}
		.mine_top_content {
			position: relative;
			z-index: 2;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-sizing: border-box;		
			padding: 0 50rpx;
			.mine_top_content_box {
				display: flex;
				.mine_top_content_image {
					width: 96rpx;
					height: 96rpx;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					overflow: hidden;
					background-color: #FFFFFF;
					margin-right: 30rpx;
					.mine_top_content_ig {
						width: 60rpx;
						height: 60rpx;
					}
				}
				.mine_top_content_user {
					font-size:40rpx;
					font-family:PingFangSC-Medium,PingFang SC;
					font-weight:500;
					color:rgba(255,255,255,1);
					.mine_top_content_user_bumen {
						font-size:28rpx;
						font-weight:400;
						color:rgba(255,255,255,.7);
						margin-top: 7rpx;
					}
				}
			}
			.mine_edit_info {
				width:220rpx;
				height:68rpx;
				border-radius:34rpx;
				border:1rpx solid rgba(255,255,255,1);
				font-size:28rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(255,255,255,.7);
				text-align: center;
				line-height: 68rpx;
			}
		}
	}
	.mine_content {
		display: flex;
		flex-direction: column;
		align-items: center;
		.mine_content_warning {
			width:656rpx;
			height: 153rpx;
			background:rgba(255,255,255,1);
			
			border-radius:26rpx;
			box-sizing: border-box;
			padding-left: 37rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-bottom: 40rpx;
			position: relative;
			&.mine_content_warning_have {
				box-shadow:0rpx 2rpx 10rpx 0rpx rgba(215,215,215,0.5);
				border:5rpx solid rgba(255,189,189,0.53);
			}
			&.mine_content_warning_none {
				box-shadow:0rpx 2rpx 10rpx 0rpx rgba(215,215,215,0.5);
			}
			.mine_content_warning_top {
				font-size:32rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(34,34,34,1);
				margin-bottom: 7px;
				display: flex;
				align-items: center;
			}
			.mine_content_warning_info {
				font-size:28rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(168,168,168,1);
				padding-left: 64rpx;
			}
			.mine_content_warning_done {
				position: absolute;
				top: 33rpx;
				right: 10rpx;
				font-size:28rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(229,33,33,1);
			}
		}
		.mine_content_message {
			width:656rpx;
			height: 217rpx;
			background:rgba(255,255,255,1);
			box-shadow:0rpx 2rpx 10rpx 0rpx rgba(215,215,215,0.5);
			border-radius:26rpx;
			box-sizing: border-box;
			padding:0 37rpx;
			position: relative;
			.mine_content_message_list {
				width: 100%;
				height: 50%;
				font-size:32rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(34,34,34,1);
				display: flex;
				align-items: center;
			}
		}
		.mine_content_warning_ig {
			width: 44rpx;
			height: 44rpx;
			margin-right: 20rpx;
		}
		.mine_content_border {
			width:549rpx;
			height:1rpx;
			background:rgba(229,229,229,1);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>
