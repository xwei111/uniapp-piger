<template>
	<view class="self_content">
		<slot></slot>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.self_content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 80rpx;
		position: relative;
		z-index: 3;
	}
</style>
