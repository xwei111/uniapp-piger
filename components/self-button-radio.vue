<template>
	<view class="self_button_radio_box">
		<text class="self_input_label" v-if="label">{{label}}</text>
		<view class="self_button_radios">
			<view 
				:class="[
					'self_button_radio',
					active === item.id ? 'self_button_radio_active' : ''
				]" 
				v-for="(item, index) in dataSource" 
				:key="index"
				@click="selectHandle(item)"
			>
				{{item.title}}
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
	.self_button_radio_box {
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
			margin: 24rpx 0;
			padding-left: 20rpx;
		}
		.self_button_radios {
			width: 582rpx;
			height: 99rpx;
			display: flex;
			overflow: hidden;
			box-sizing: border-box;
			border: 2px solid #0FBB87;
			border-radius:10rpx;
			.self_button_radio {
				flex: 1;
				display: flex;
				overflow: hidden;
				align-items: center;
				justify-content: center;
				font-size:34rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color: #333;
				background-color: #fff;
				&.self_button_radio_active {
					background: #0FBB87;
					color: #fff;
				}
			}
		}
	}
</style>
