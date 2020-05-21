<template>
	<!-- 车辆二洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="车牌号" v-model="carNo" disabled></self-input>
				<self-input label="操作人" value="黄四" disabled></self-input>
				<self-input label="采样地点" value="消洗中心" disabled></self-input>
				<self-input label="采样时间" value="2020-01-01" disabled></self-input>
				<self-input label="记录人" value="王五" disabled></self-input>
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
	import selfButton from '@/components/self-button.vue';
	import selfButtonRadio from '@/components/self-button-radio.vue';
	
	export default {
		data() {
			return {
				detail: {},
				carNo: '浙A 123',
				carUse: '人员中转',
				lastHighRishTime: '',
				dataSource1: [
					{ id: 1, title: '通过' },
					{ id: 2, title: '不通过' }
				],
				active1: 1,
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButton,
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
