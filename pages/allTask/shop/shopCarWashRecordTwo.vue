<template>
	<!-- 车辆二洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="日期" value="2020-01-02" disabled></self-input>
				<self-input label="车牌号" v-model="carNo" disabled></self-input>
				<self-input label="驾驶员" v-model="carUser" disabled></self-input>
				<self-input label="车辆用途" value="中转" disabled></self-input>
				<self-input label="操作人" value="黄四" disabled></self-input>
				<self-input label="开始时间" value="2020-01-01" disabled></self-input>
				<self-input label="结束时间" value="2020-01-01" disabled></self-input>
			</view>
			<view slot="task">
				<self-button-radio label="车辆驾驶室内" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
				<self-input placeholder="请输入备注" v-model="remarks"></self-input>
				<self-button-radio label="车头及其与车厢连接处" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
				<self-input placeholder="请输入备注" v-model="remarks"></self-input>
				<self-button-radio label="车厢外侧孔隙及车门衔接处" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
				<self-input placeholder="请输入备注" v-model="remarks"></self-input>
				<self-button-radio label="车厢内部及衔接缝隙处" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
				<self-input placeholder="请输入备注" v-model="remarks"></self-input>
				<self-button-radio label="轮胎丶轮毅内外侧及挡泥板处" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
				<self-input placeholder="请输入备注" v-model="remarks"></self-input>
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
				carUse: '人员中转',
				dataSource1: [
					{ id: 1, title: '干净' },
					{ id: 2, title: '不干净' }
				],
				active1: 2,
				remarks: ''
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
