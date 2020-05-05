<template>
	<view class="self_check_box" @click="selectHandle">
		<view class="self_check">
			<image v-show="chekck" class="self_check_ig" src="/static/check.png"></image>
			<image v-show="!chekck" class="self_check_ig" src="/static/nock.png"></image>
		</view>
		<view class="self_check_agree">
			我已阅读并同意
			<text class="self_check_agree_text" @click.stop="agreeHandle">《用户协议》</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			chekck: {
				type: Boolean,
				default: false
			}
		},
		methods:{
			selectHandle() {
				this.$emit('selectHandle')
			},
			agreeHandle() {
				this.$emit(('agreeHandle'))
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_check_box {
		height: 50rpx;
		width:582rpx;
		display: flex;
		align-items: center;
		.self_check {
			width: 30rpx;
			height: 30rpx;
			margin-right: 20rpx;
			display: flex;
			align-items: center;
			.self_check_ig {
				width: 100%;
				height: 100%;
			}
		}
		.self_check_agree {
			font-size:28rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(0,0,0,0.7);
			display: flex;
			align-items: center;
			.self_check_agree_text {
				color: #409EFF;
			}
		}
	}
</style>
