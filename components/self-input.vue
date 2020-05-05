<template>
	<view class="self_input_box">
		<text class="self_input_label" v-show="label">{{label}}</text>
		<view class="self_inputs">
			<slot name="prefix"></slot>
			<input class="self_input" :placeholder="placeholder" />
			<slot name="suffix"></slot>
			<slot name="fill"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				default: ''
			},
			placeholder: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_input_box {
		display: flex;
		flex-direction: column;
		.self_input_label {
			display: block;
			height:48rpx;
			font-size:34rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(0,0,0,0.7);
			line-height:48rpx;
			margin: 24rpx 0;
		}
		.self_inputs {
			display: flex;
			width:582rpx;
			height:94rpx;
			background:rgba(255,255,255,1);
			border-radius:10rpx;
			border:2rpx solid rgba(11,142,105,1);
			padding-left: 23rpx;
			box-sizing: border-box;
			overflow: hidden;
			align-items: center;
			justify-content: center;
			position: relative;
			.self_input {
				flex: 1;
				height: 100%;
			}
		}
		
	}
</style>
