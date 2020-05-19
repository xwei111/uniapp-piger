<template>
	<!-- 车辆三洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="操作员" v-model="currentPro" disabled></self-input>
			</view>
			<view slot="task">
				<view class="people">人员选择:</view>
				<self-radio :options="options" :active="visitorType" @changeHandle="changeHandle" class="radio" ></self-radio>
				<self-checkbox :chekck="chekck" @selectHandle="selectHandle" label="测试人员"></self-checkbox>
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
	import selfRadio from '@/components/self-radio.vue';
	import selfCheckbox from '@/components/self-checkbox.vue';
	
	export default {
		data() {
			return {
				detail: {},
				currentPro: '张三',
				options: [
					{ id: 1, label: '全选' },
					{ id: 2, label: '取消' }
				],
				visitorType: 1,
				chekck: false
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButtonRadio,
			selfButton,
			timer,
			selfRadio,
			selfCheckbox
		},
		onLoad(options) {
			const { detail } = options;
			if(detail) {
				this.detail = JSON.parse(detail);
				console.log('-----', this.detail)
			}
		},
		methods: {
			selectHandle() {
				this.chekck = !this.chekck
			},
			changeHandle(e) {
				this.visitorType = e.id
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
	.people {
		display: block;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.7);
		line-height: 48rpx;
		margin: 24rpx 0 0 0;
		padding: 20rpx 0 30rpx 20rpx;
	}
	.radio {
		margin-bottom: 20rpx;
	}
</style>
