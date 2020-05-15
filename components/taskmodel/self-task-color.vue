<template>
	<view v-if="color">
		<view v-if="color=='blue'" class="self_task_color_blue" @click="detailHandle">
			<image class="self_task_color_blue_ig" src="/static/blue.png"></image>
			<view class="self_task_color_blue_text">隔离区发现违规行为，请点击查看！</view>
		</view>
		<view v-if="color!='blue'" :class="[
			'self_task_color',
			color == 'red' ? 'self_task_color_red' : color == 'origin' ? 'self_task_color_origin' : ''
		]">
			<view :class="[
				'self_task_color_info',
				color == 'red' ? 'self_task_color_info_red' : color == 'origin' ? 'self_task_color_info_origin' : ''
			]">
				<view class="self_task_color_info_top">
					<image class="self_task_color_info_ig" :src="color == 'red' ? '/static/red.png' : color == 'origin' ? '/static/origin.png' : '' "></image>
					<text class="self_task_color_info_title">{{ color == "red" ? '红色预警' : color == "origin" ? '橙色预警' : '' }}</text>
				</view>
				<view class="self_task_color_info_content">
					
					{{ color == "red" ? '前花园发现社会人员翻墙入场行为，请立即处理！' : color == "origin" ? '出猪口发现人员违规跨界操作，请立即处理！' : '' }}
				</view>
				<view :class="[
					'self_task_color_see',
					color == 'red' ? 'self_task_color_see_red' : color == 'origin' ? 'self_task_color_see_origin' : ''
				]" @click="detailHandle">立即查看</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 调用方式
	// this.$message.showModel({
	// 	color: 'origin',
	// 	callBack: ()=> {
	// 		uni.navigateTo({
	// 			url: '/pages/mineWarning/index'
	// 		})
	// 	}
	// })
	export default {
		data() {
			return {}
		},
		computed: {
			color() {
				return this.$store.state.color
			}
		},
		methods: {
			detailHandle() {
				this.$store.commit('switchModal', null)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_task_color {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(196,87,100,0.5);
		bottom: 0;
		left: 0;
		z-index: 9999;
		&.self_task_color_red {
			background-color: rgba(196,87,100,0.5);
		}
		&.self_task_color_origin {
			background-color: rgba(199,88,1, .5);
		}
		.self_task_color_info {
			width: 560rpx;
			background:rgba(255,255,255,1);
			border-radius:8rpx;
			border:6rpx solid rgba(208,2,27,1);
			position: absolute;
			left: 50%;
			top: 280rpx;
			transform: translate(-50%, 0%);
			box-sizing: border-box;
			padding-top: 68rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			&.self_task_color_info_red {
				border-color: rgba(208,2,27,1);
			}
			&.self_task_color_info_origin {
				border-color: rgba(236,104,0,1);
			}
			.self_task_color_info_top {
				display: flex;
				align-items: center;
				margin-bottom: 34rpx;
				.self_task_color_info_ig {
					width: 44rpx;
					height: 44rpx;
				}
				.self_task_color_info_title {
					font-size:36rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(0,0,0,1);
					margin-left: 18rpx;
				}
			}
			.self_task_color_info_content {
				width:500rpx;
				font-size:30rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(136,136,136,1);
				text-align: center;
				margin-bottom: 50rpx;
			}
			.self_task_color_see {
				width: 100%;
				height: 112rpx;
				border-top: 1rpx solid #E5E5E5;
				font-size:36rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(208,2,27,1);
				line-height: 112rpx;
				text-align: center;
				&.self_task_color_see_red {
					color:rgba(208,2,27,1);
				}
				&.self_task_color_see_origin {
					color: #EC6800;
				}
			}
		}
	}
	.self_task_color_blue {
		position: fixed;
		width:100%;
		height:100rpx;
		background:rgba(182,230,255,.9);
		box-sizing: border-box;
		z-index: 99;
		top: var(--window-top);
		left: 0;
		display: flex;
		align-items: center;
		padding-left: 35rpx;
		.self_task_color_blue_ig {
			width: 44rpx;
			height: 44rpx;
			margin-right: 24rpx;
		}
		.self_task_color_blue_text {
			font-size:34rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(53,93,198,1);
		}
	}
</style>
