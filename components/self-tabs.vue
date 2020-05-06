<template>
	<view class="self_tabs">
		<view class="self_tab" v-for="(item, index) in list" :key="index" @click="selectHandle(item)">
			<text>
				{{item.title}}
				<text class="self_tab_num">{{item.num ? item.num > 99 ? '99+' : item.num : ''}}</text>
			</text>
			<view v-show="item.id == active" class="self_tab_border"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: ()=> []
			},
			active: {
				type: Number,
				default: 1
			}
		},
		methods: {
			selectHandle(e) {
				this.$emit('selectHandle', e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_tabs {
		width: 100%;
		height:110rpx;
		background:rgba(255,255,255,1);
		display: flex;
		overflow: hidden;
		margin-bottom: 6rpx;
		.self_tab {
			position: relative;
			height: 100%;
			flex: 1;
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size:30rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(34,34,34,1);
			.self_tab_num {
				color: #0FBB87;
			}
			.self_tab_border {
				width: 108rpx;
				height: 7rpx;
				background: #0FBB87;
				position: absolute;
				bottom: 0;
				left: 50%;
				margin-left: -54rpx;
			}
		}
	}
</style>
