<template>
	<!-- 车辆三洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="采样人" v-model="currentPro" disabled></self-input>
				<self-input label="采样地点" v-model="carNo" disabled></self-input>
				<self-input label="采样时间" v-model="time" disabled></self-input>
				<self-input label="记录人" v-model="record" disabled></self-input>
			</view>
			<view slot="task">
				<self-input label="采样结果">
					<view slot="fill" class="fill_content">
						<picker @change="disinfectChange" :value="disinfectIdx" :range="disinfects">
							<view class="uni-input">{{disinfects[disinfectIdx]}}</view>
						</picker>
					</view>
				</self-input>
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
	
	export default {
		data() {
			return {
				detail: {},
				currentPro: '张三',
				carNo: '白宫',
				time: '2020',
				record: '王五',
				disinfects: ['合格', '不合格'],
				disinfectIdx: 0
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButtonRadio,
			selfButton,
		},
		onLoad(options) {
			const { detail } = options;
			if(detail) {
				this.detail = JSON.parse(detail);
				console.log('-----', this.detail)
			}
		},
		methods: {
			disinfectChange(e) {
				this.disinfectIdx = e.target.value
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
