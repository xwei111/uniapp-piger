<template>
	<!-- 车辆二洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="日期" value="2020-01-02" disabled></self-input>
				<self-input label="车牌号" v-model="carNo" disabled></self-input>
				<self-input label="驾驶员" v-model="carUser" disabled></self-input>
				<self-input label="车辆用途" value="饲料车" disabled></self-input>
				<self-input label="操作人" value="黄四" disabled></self-input>
				<self-input label="开始时间" value="2020-01-01" disabled></self-input>
				<self-input label="结束时间" value="2020-01-01" disabled></self-input>
				<self-input label="检查人" value="黄四" disabled></self-input>
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
				carUser: '王五',
				carUse: '人员中转'
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
