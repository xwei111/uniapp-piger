<template>
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="当前流程" v-model="currentPro" disabled></self-input>
				<self-input label="车牌号" v-model="carNo" disabled></self-input>
				<self-input label="驾驶员" v-model="carUser" disabled></self-input>
				<self-input label="车辆用途" v-model="carUse" disabled></self-input>
			</view>
			<view slot="task">
				<self-button-radio label="车头及其与车厢连接处" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
				<self-button-radio label="车厢内部及衔接缝隙处" :dataSource="dataSource1" :active="active2" @selectHandle="selectHandle2"></self-button-radio>
				<self-input placeholder="请填写备注" v-model="remarks"></self-input>
			</view>
		</self-task-box>
		<self-button text="提交" @handleClick="okClick" class="nextButton"></self-button>
	</view>
</template>

<script>
	import selfTaskBox from '@/components/self-task-box.vue';
	import selfInput from '@/components/self-input.vue';
	import selfButtonRadio from '@/components/self-button-radio.vue';
	import selfButton from '@/components/self-button.vue';
	
	export default {
		data() {
			return {
				detail: {},
				currentPro: '车辆二洗',
				carNo: '浙A 123',
				carUser: '王五',
				carUse: '人员中转',
				dataSource1: [
					{ id: 1, title: '干净' },
					{ id: 2, title: '不干净' }
				],
				active1: 2,
				active2: 1,
				remarks: ''
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButtonRadio,
			selfButton
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
			selectHandle2(e) {
				this.active2 = e.id
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
