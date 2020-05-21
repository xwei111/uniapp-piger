<template>
	<!-- 车辆三洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="采样人" value="王五" disabled></self-input>
				<self-input label="物资厂" value="物资厂" disabled></self-input>
			</view>
			<view slot="task">
				<self-upLoad label="采样照片" @changeHandle="changeHandle1"></self-upLoad>
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
	import selfButton from '@/components/self-button.vue';
	import timer from '@/components/timer/index.vue';
	import selfUpLoad from '@/components/self-upLoad.vue';
	import selfButtonRadio from '@/components/self-button-radio.vue';
	
	export default {
		data() {
			return {
				detail: {},
				dataSource1: [
					{ id: 1, title: '合格' },
					{ id: 2, title: '不合格' }
				],
				active1: 2,
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButton,
			timer,
			selfUpLoad,
			selfButtonRadio
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
</style>
