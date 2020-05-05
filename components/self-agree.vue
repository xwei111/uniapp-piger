<template>
	<view class="self_agree" v-if="isShow">
		<view class="self_agree_content">
			<view class="self_agree_title">用户协议</view>
			<view class="self_agree_text">
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
				我安山东爱山东我按时打算看了大克里斯丁卡受打击了喀什东路卡萨丁就离开埃里克森的骄傲莱克斯顿敬老卡数据的
			</view>
			<view class="self_default_button" @click="closeHandle">
				我已阅读
			</view>
		</view>
	</view>
</template>

<script>
	import selfButton from '@/components/self-button.vue';
	export default {
		props: {
			isShow: {
				type: Boolean,
				default: false
			}
		},
		components: {
			selfButton,
		},
		methods: {
			closeHandle() {
				this.$emit("closeHandle", false)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_agree {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 9;
		.self_agree_content {
			width: 585rpx;
			height: 996rpx;
			background-color: #fff;
			border:1rpx solid rgba(151,151,151,1);
			border-radius: 5rpx;
			position: absolute;
			left: 50%;
			top: 120rpx;
			transform: translate(-50%, 0);
			box-sizing: border-box;
			padding: 38rpx 42rpx;
			.self_agree_title {
				width:100%;
				height:88rpx;
				font-size:34rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:500;
				color:rgba(0,0,0,0.7);
				line-height:88rpx;
				text-align: center;
				border-bottom: 1rpx solid #979797;
			}
			.self_default_button {
				width: 494rpx;
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
			.self_agree_text {
				height: 650rpx;
				margin: 30rpx 0;
				overflow: scroll;
			}
		}
	}
</style>
