<template>
	<view class="self_mater">
		<text class="self_input_label" v-if="label">{{label}}</text>
		<view class="self_mater_list">
			<view class="self_mater_list_child" v-for="(item, index) in dataSource" :key="index">
				<view class="self_mater_list_child_top">
					<text>{{item.title}}</text>
					<text>{{item.number}}</text>
				</view>
				<view class="self_mater_list_child_bottom">
					批次: {{item.idno}}
				</view>
			</view>
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
			dataSource: {
				type: Array,
				default: ()=>[]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_mater {
		display: flex;
		flex-direction: column;
		.self_input_label {
			display: block;
			height: 48rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.7);
			line-height: 48rpx;
			margin: 24rpx 0 0 0;
			padding-left: 20rpx;
		}
		.self_mater_list {
			display: flex;
			flex-direction: column;
			width: 582rpx;
			box-sizing: border-box;
			padding-left: 50rpx;
			background-color: #F5F5F5;
			.self_mater_list_child {
				height: 149rpx;
				width: 100%;
				border-bottom: 1px solid #979797;
				display: flex;
				flex-direction: column;
				justify-content: center;
				.self_mater_list_child_top {
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(51,51,51,1);
					margin-bottom: 5rpx;
					display: flex;
					justify-content: space-between;
					padding-right: 30rpx;
				}
				.self_mater_list_child_bottom {
					font-size:28rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color: #999;
				}
			}
			.self_mater_list_child:last-child {
				border: none;
			}
		}
	}
</style>
