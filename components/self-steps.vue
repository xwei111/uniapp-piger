<template>
	<view class="self_steps">
		<view class="self_steps_box" v-for="(list, index) in lists" :key="index">
			<view class="self_step" >
				<image v-show="list.id < active" class="self_step_ig" src="/static/ok.png"></image>
				<text v-show="list.id >= active" :class="[list.id == active ? 'self_active' : '', 'self_step_num']">{{list.id}}</text>
				<text class="self_step_text">{{list.text}}</text>
			</view>
			<view v-show="index < lists.length - 1" :class="[list.id < active ? 'self_step_border_active' : '' ,'self_step_border']"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			lists: {
				type: Array,
				default: []
			},
			active: {
				type: Number,
				default: 1
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.self_steps {
		display: flex;
		.self_steps_box {
			display: flex;
			.self_step {
				display: flex;
				flex-direction: column;
				font-family:PingFangSC-Regular,PingFang SC;
				align-items: center;
				.self_step_ig {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					margin-bottom: 10rpx;
				}
				.self_step_num {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					background-color: #B4BFBC;
					color: #fff;
					line-height: 50rpx;
					text-align: center;
					font-size:34rpx;
					margin-bottom: 10rpx;
				}
				.self_active {
					background-color: $primary-color;
				}
				.self_step_text {
					font-size:28rpx;
					font-weight:400;
					color:rgba(0,0,0,0.7);
				}
			}
			.self_step_border {
				width:85rpx;
				height:1rpx;
				background-color: #979797;
				margin-top: 22rpx;
			}
			.self_step_border_active {
				background-color: $primary-color;
			}
		}
	}
</style>
