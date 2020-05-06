<template>
	<view class="self_empty">
		<image class="self_empty_img"  src="/static/empty.png"></image>
		目前没有任务！
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.self_empty {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size:28rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(128,128,128,1);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		overflow: hidden;
		.self_empty_img {
			width: 200rpx;
			height: 200rpx;
			margin-bottom: 80rpx;
		}
	}
</style>
