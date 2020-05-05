<template>
	<view :class="kind == 'default' ? 'self_default_button' : 'self_plain_button'" @click="handleClick">
		{{text}}
	</view>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: '确认'
			},
			kind: {
				type: String,
				default: 'default'
			}
		},
		methods: {
			handleClick() {
				this.$emit('handleClick', this.text)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_default_button {
		width:582rpx;
		height:94rpx;
		background:$primary-color;
		border-radius:10rpx;
		border:2rpx solid rgba(5,5,5,0.08);
		color: #fff;
		line-height: 94rpx;
		text-align: center;
		font-size:36rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
	}
	.self_plain_button {
		width:582rpx;
		height:94rpx;
		border-radius:10rpx;
		border:2rpx solid rgba(11,142,105,1);
		color:rgba(11,142,105,1);
		line-height: 94rpx;
		text-align: center;
		font-size:36rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
	}
</style>
