<template>
	<!-- 车辆三洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="当前流程" v-model="currentPro" disabled></self-input>
				<self-input label="车牌号" v-model="carNo" disabled></self-input>
				<self-input label="驾驶员" v-model="carUser" disabled></self-input>
			</view>
			<view slot="task">
				<self-button-radio label="车辆外观是否干净" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
				<self-input label="消毒方式">
					<view slot="fill" class="fill_content">
						<picker @change="disinfectChange" :value="disinfectIdx" :range="disinfects">
							<view class="uni-input">{{disinfects[disinfectIdx]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="消毒类型">
					<view slot="fill" class="fill_content">
						<picker @change="kindChange" :value="kindIdx" :range="kinds">
							<view class="uni-input">{{kinds[kindIdx]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="开始时间">
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
				<self-input label="结束时间">
					<view slot="fill" class="fill_content">
						<timer
							fields="second"
							start="2010-00-00 00:00:00"
							end="2999-12-30 23:59:59"
							:value="endTime"
							@change="endTimeChange"
						></timer>
					</view>
				</self-input>
				<self-upLoad label="添加照片" @changeHandle="changeHandle"></self-upLoad>
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
	import selfUpLoad from '@/components/self-upLoad.vue';
	
	export default {
		data() {
			return {
				detail: {},
				currentPro: '车辆三洗',
				carNo: '浙A 123',
				carUser: '王五',
				dataSource1: [
					{ id: 1, title: '干净' },
					{ id: 2, title: '不干净' }
				],
				active1: 2,
				disinfects: ["A", "B"],
				disinfectIdx: 0,
				kinds: ["A", "B"],
				kindIdx: 0,
				startTime: '',
				endTime: '',
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButtonRadio,
			selfButton,
			timer,
			selfUpLoad
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
			disinfectChange(e) {
				this.disinfectIdx = e.target.value
			},
			kindChange(e) {
				this.kindIdx = e.target.value
			},
			startTimeChange(e) {
				this.startTime = e
			},
			endTimeChange(e) {
				this.endTime = e
			},
			changeHandle(imgs) {
				console.log('imgs', imgs)
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
