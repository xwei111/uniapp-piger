<template>
	<view>
		<self-bg src="/static/bg.png"></self-bg>
		<self-content>
			<view class="info_box">
				<view class="info_top"></view>
				<view class="info_content">
					<image class="success_ig" src="/static/success.png"></image>
					<text class="info_ok">
						{{ status == 'success' ? '审核已通过，欢迎您！' : '您的信息已提交，请等待审核！'}}
					</text>
					<!-- 申请通过 -->
					<view style="width: 100%;" v-if="status == 'success'">
						<view class="info_title">
							<text class="info_title_text">来访须知</text>
							<view class="info_title_border"></view>
						</view>
						<view class="info_list">
							<view class="info_list_label">
								<view>隔离点</view>
							</view>
							<view class="info_people_list">
								<view>{{detail.isolation}}</view>
								<view class="info_people_card">成都市天城区万里路34号</view>
							</view>
						</view>
						<view class="opentime">
							<text class="opentime_label">开放时间</text>
							<text class="opentime_date">{{detail.openTime}}</text>
						</view>
						<view class="seeDetail">查看详细《来访须知》</view>
					</view>
					<!-- 访客信息 -->
					<view class="info_title">
						<text class="info_title_text">访客信息</text>
						<view class="info_title_border"></view>
						<text v-if="status == 'success'" class="isEx" @click="expendClick">{{isShow ? '关闭' : '展开'}}</text>
					</view>
					<view style="width: 100%;" v-show="isShow">
						<view class="info_list">
							<view class="info_list_label">
								<view>来访人</view>
								<view class="info_people_num">{{detail.allVisitors.length}}人</view>
							</view>
							<view class="info_people_list">
								<view v-for="(item, index) in detail.allVisitors" :key="index">
									<view>{{item.name}}</view>
									<view class="info_people_card">{{item.idNo}}</view>
								</view>
							</view>
						</view>
						<view class="info_list">
							<view class="info_list_label">
								<view>访客类型</view>
							</view>
							<view class="info_people_list">
								<view>{{detail.visitorType == 1 ? '个人' : '企业 | '}}  {{detail.companyName}}</view>
							</view>
						</view>
						<view class="info_list">
							<view class="info_list_label">
								<view>来访事由</view>
							</view>
							<view class="info_people_list">
								<view>{{detail.reason}}</view>
							</view>
						</view>
						<view class="info_list">
							<view class="info_list_label">
								<view>目的地</view>
							</view>
							<view class="info_people_list">
								<view>{{detail.targetLocation}}</view>
							</view>
						</view>
						<view class="info_list info_last">
							<view class="info_list_label">
								<view>来访时间</view>
							</view>
							<view class="info_people_list">
								<view>{{detail.visitDate}}</view>
							</view>
						</view>
					</view>
					<self-button v-if="status !== 'success'" text="修改信息" @handleClick="changeClick" class="nextButton"></self-button>
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
		data() {
			return {
				status: 'change',
				isShow: true,
				detail: {}
			}
		},
		components: {
			selfBg,
			selfContent,
			selfButton
		},
		onLoad(options) {
			this.detail = JSON.parse(options.detail)
			this.detail.allVisitors = [ ...this.detail.mainVisitors, ...this.detail.visitors ]
			this.status = this.detail.checkStatus && this.detail.checkStatus == 2 ? 'success' : 'change';
			this.isShow = this.status == 'success' ? false : true
		},
		methods: {
			expendClick() {
				this.isShow = !this.isShow
			},
			changeClick() {
				uni.navigateTo({
					url: `/pages/guestFirst/index?detail=${JSON.stringify({...this.detail, type: 'change'})}`
				})
			}
		}
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
		margin-bottom: 280rpx;
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
				font-size:34rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(0,0,0,0.7);
				.info_title_text {
					margin-right: 30rpx;
					width: 136rpx;
					text-align: right;
				}
				.info_title_border {
					flex: 1;
					height: 1px;
					background-color: #979797;
				}
				.isEx {
					width: 96rpx;
					text-align: right;
				}
			}
			.info_list {
				width: 100%;
				display: flex;
				overflow: hidden;
				margin-bottom: 20rpx;
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
			.opentime {
				width:calc(100% + 60rpx);
				margin-left: -30rpx;
				height:66rpx;
				background:rgba(228,242,238,1);
				margin-bottom: 40rpx;
				font-size:34rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(11,142,105,1);
				line-height: 66rpx;
				.opentime_label {
					display: inline-block;
					width: 166rpx;
					text-align: right;
					margin-right: 30rpx;
				}
			}
			.seeDetail {
				width:100%;
				height:40rpx;
				font-size:28rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(65,114,255,1);
				line-height:40rpx;
				text-align: center;
				margin-bottom: 60rpx;
			}
		}
		
	}
</style>
