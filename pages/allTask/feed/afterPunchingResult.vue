<template>
	<!-- 车辆三洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="车牌号" v-model="currentPro" disabled></self-input>
				<self-input label="司机" v-model="carNo" disabled></self-input>
				<self-input label="采样地点" value="前花园" disabled></self-input>
				<self-input label="采样时间" value="2020-01-02" disabled></self-input>
				<view class="self_title">采样图片</view>
				<image class="self_ig" src="../../../static/blue.png"></image>
				<self-input label="录入人" value="小白" disabled></self-input>
			</view>
			<view slot="task">
				<self-button-radio label="采样结果" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
			</view>
		</self-task-box>
		<self-button text="提交" @handleClick="okClick" class="nextButton"></self-button>
		<selfTaskColor></selfTaskColor>
	</view>
</template>

<script>
	import selfTaskBox from '@/components/self-task-box.vue';
	import selfInput from '@/components/self-input.vue';
	import selfButtonRadio from '@/components/self-button-radio.vue';
	import selfButton from '@/components/self-button.vue';
	import timer from '@/components/timer/index.vue';
	
	export default {
		data() {
			return {
				detail: {},
				currentPro: '张三',
				carNo: '白宫',
				dataSource1: [
					{ id: 1, title: '合格' },
					{ id: 2, title: '不合格' }
				],
				active1: 1,
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButtonRadio,
			selfButton,
			timer
		},
		onLoad(options) {
			const { detail } = options;
			if(detail) {
				this.detail = JSON.parse(detail);
				console.log('-----', this.detail)
			}
		},
		methods: {
			selectHandle1(e) {
				this.active1 = e.id
			},
			okClick() {
				alert('a')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nextButton {
		margin: 70rpx 0 150rpx 0;
	}
	.self_title {
		display: block;
		height: 48rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.7);
		line-height: 48rpx;
		margin: 24rpx 0 0 0;
		padding: 50rpx 0 50rpx 20rpx;
	}
	.self_ig {
		width: 80rpx;
		height:80rpx;
	}
</style>
