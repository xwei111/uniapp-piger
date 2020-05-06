<template>
	<view class="self_search">
		<view class="self_search_left">
			<icon class="self_search_icon" type="search" size="16"/>
			<input  class="self_search_input" placeholder="搜索任务名称" @input="onInput" />
		</view>
		<view class="self_search_right" @click="searchHandle">筛选</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: undefined
			}
		},
		methods: {
			searchHandle() {
				this.$emit('searchHandle', this.value)
			},
			onInput(e) {
				this.value = e.target.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_search {
		width: 100%;
		height:110rpx;
		background:rgba(255,255,255,1);
		display: flex;
		overflow: hidden;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;
		justify-content: space-between;
		.self_search_left {
			width: 596rpx;
			height: 72rpx;
			border: none;
			border-radius: 20rpx;
			background:rgba(142,142,147,0.12);
			display: flex;
			align-items: center;
			.self_search_icon {
				margin: 0 24rpx 0 30rpx;
			}
			.self_search_input {
				flex: 1;
				border: none;
				height: 100%;
				margin-right: 30rpx;
			}
		}
		.self_search_right {
			font-size:30rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(34,34,34,1);
		}
	}
</style>
