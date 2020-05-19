<template>
	<!-- 车辆三洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="姓名" value="李白" disabled></self-input>
				<self-input label="厂区" value="主场A" disabled></self-input>
				<self-input label="记录人" value="王五" disabled></self-input>
			</view>
			<view slot="task">
				<self-button-radio label="车辆外观是否干净" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
				<self-input label="区域">
					<view slot="fill" class="fill_content">
						<picker @change="reansChange" :value="reansindex" :range="reans">
							<view class="uni-input">{{reans[reansindex]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="进入/离开时间">
					<view slot="fill" class="fill_content">
						<timer
							fields="second"
							start="2010-00-00 00:00:00"
							end="2999-12-30 23:59:59"
							:value="startTime"
							@change="startTimeChange"
						></timer>
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
	import selfButton from '@/components/self-button.vue';
	import selfUpLoad from '@/components/self-upLoad.vue';
	import selfButtonRadio from '@/components/self-button-radio.vue';
	import timer from '@/components/timer/index.vue';
	
	export default {
		data() {
			return {
				detail: {},
				startTime: '',
				reans: ["A", "B", "c"],
				reansindex: 0,
				dataSource1: [
					{ id: 1, title: '进' },
					{ id: 2, title: '出' }
				],
				active1: 1,
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButton,
			selfUpLoad,
			selfButtonRadio,
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
			reansChange(e) {
				this.reansindex = e.target.value;
			},
			startTimeChange(e) {
				this.startTime = e
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
