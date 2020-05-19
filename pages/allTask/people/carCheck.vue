<template>
	<!-- 车辆三洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="车牌号" v-model="carNo" disabled></self-input>
				<self-input label="驾驶员" value="李白" disabled></self-input>
				<self-input label="消毒人" value="王五" disabled></self-input>
				<self-input label="消毒方式" value="熏蒸" disabled></self-input>
			</view>
			<view slot="task">
				<self-button-radio label="车辆外观是否干净" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
				<self-input label="靠厂原因">
					<view slot="fill" class="fill_content">
						<picker @change="reansChange" :value="reansindex" :range="reans">
							<view class="uni-input">{{reans[reansindex]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="消毒类型">
					<view slot="fill" class="fill_content">
						<picker @change="reansChange" :value="reansindex" :range="reans">
							<view class="uni-input">{{reans[reansindex]}}</view>
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
							:value="startTime"
							@change="startTimeChange"
						></timer>
					</view>
				</self-input>
				<self-upLoad label="消毒照片" @changeHandle="changeHandle1"></self-upLoad>
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
				carNo: '浙',
				startTime: '',
				reans: ["A", "B", "c"],
				reansindex: 0,
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
