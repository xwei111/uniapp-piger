<template>
	<view class="self_radios">
		<view class="self_radio" v-for="(item, index) in options" :key="index" @click="selectHandle(item)">
			<view :class="[item.id == selfActive ? 'self_radio_circle_active' : '', 'self_radio_circle']">
				<view v-show="item.id == selfActive" class="self_radio_round"></view>
			</view>
			<text>{{item.label}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			options: {
				type: Array,
				default: () => []
			},
			active: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				selfActive: this.active
			}
		}, 
		methods: {
			selectHandle(e) {
				this.selfActive = e.id
				this.$emit('changeHandle', e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_radios {
		display: flex;
		.self_radio {
			display: flex;
			align-items: center;
			font-size:34rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(0,0,0,0.7);
			margin-right: 50rpx;
			.self_radio_circle {
				width: 35rpx;
				height: 35rpx;
				border-radius: 50%;
				border: 1px solid #ccc;
				margin-right: 24rpx;
				box-sizing: border-box;
				position: relative;
				.self_radio_round {
					width: 20rpx;
					height: 20rpx;
					background-color: $primary-color;
					border-radius: 50%;
					position: absolute;
					left: 50%;
					top: 50%;
					margin-left: -10rpx;
					margin-top: -10rpx;
				}
			}
			.self_radio_circle_active {
				border-color: $primary-color;
			}
		}
	}
</style>
