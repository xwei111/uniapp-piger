<template>
	<view>
		<self-bg src="/static/bg.png"></self-bg>
		<self-content>
			<view class="info_box">
				<view class="info_top"></view>
				<view class="info_content">
					<image class="success_ig" src="/static/success.png"></image>
					<text class="info_ok">您的信息已提交，请等待审核！</text>
					<view class="info_title">
						<text class="info_title_text">访客信息</text>
						<view class="info_title_border"></view>
					</view>
					<view class="info_list">
						<view class="info_list_label">
							<view>来访人</view>
							<view class="info_people_num">2人</view>
						</view>
						<view class="info_people_list">
							<view>李雨珊</view>
							<view class="info_people_card">330108****0294877</view>
							<view>张宇</view>
							<view class="info_people_card">330108****0294877</view>
						</view>
					</view>
					<view class="info_list">
						<view class="info_list_label">
							<view>访客类型</view>
						</view>
						<view class="info_people_list">
							<view>企业 | 浙江天恒科技公司</view>
						</view>
					</view>
					<view class="info_list">
						<view class="info_list_label">
							<view>来访事由</view>
						</view>
						<view class="info_people_list">
							<view>维修</view>
						</view>
					</view>
					<view class="info_list">
						<view class="info_list_label">
							<view>目的地</view>
						</view>
						<view class="info_people_list">
							<view>猪场A</view>
						</view>
					</view>
					<view class="info_list info_last">
						<view class="info_list_label">
							<view>来访时间</view>
						</view>
						<view class="info_people_list">
							<view>2020-05-09 10：00 </view>
						</view>
					</view>
					<self-button text="修改信息" @handleClick="changeClickClick" class="nextButton"></self-button>
				</view>
			</view>
		</self-content>
		
	</view>
</template>

<script>
	import selfBg from '@/components/self-bg.vue';
	import selfContent from '@/components/self-content.vue';
	import selfButton from '@/components/self-button.vue';
	
	export default {
		components: {
			selfBg,
			selfContent,
			selfButton
		},
	}
</script>

<style lang="scss" scoped>
	.info_box {
		width:628rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 2rpx 18rpx 0rpx rgba(214,239,232,1);
		border-radius:28rpx;
		overflow: hidden;
		padding-bottom: 30rpx;
		.info_top {
			height: 14rpx;
			width: 100%;
			background-color: $primary-color;
			margin-bottom: 50rpx;
		}
		.info_content {
			display: flex;
			flex-direction: column;
			align-items: center;
			box-sizing: border-box;
			padding: 0 30rpx;
			.success_ig {
				width: 80rpx;
				height: 80rpx;
				margin-bottom: 30rpx;
			}
			.info_ok {
				font-size:38rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(0,0,0,1);
				margin-bottom: 60rpx;
			}
			.info_title {
				width: 100%;
				display: flex;
				overflow: hidden;
				align-items: center;
				margin-bottom: 30rpx;
				.info_title_text {
					font-size:34rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(0,0,0,0.7);
					margin-right: 30rpx;
					width: 136rpx;
					text-align: right;
				}
				.info_title_border {
					flex: 1;
					height: 1px;
					background-color: #979797;
				}
			}
			.info_list {
				width: 100%;
				display: flex;
				overflow: hidden;
				.info_list_label {
					font-size:34rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(92,92,92,0.7);
					width: 136rpx;
					text-align: right;
					margin-right: 30rpx;
					.info_people_num {
						color: $primary-color;
					}
				}
				.info_people_list {
					font-size:34rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					
					.info_people_card {
						color:rgba(0,0,0,0.5);
						margin-bottom: 20rpx;
					}
				}
			}
			.info_last{
				margin-bottom: 50rpx;
			}
		}
		
	}
</style>
