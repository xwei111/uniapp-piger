<template>
	<!-- 离场申请 -->
	<view>
		<self-bg src="/static/bg.png"></self-bg>
		<self-content>
			<self-input label="姓名" v-model="name" placeholder="请输入姓名"></self-input>
			<self-input label="离场时间">
				<view slot="fill" class="fill_content">
					<timer
						fields="second"
						start="2010-00-00 00:00:00"
						end="2999-12-30 23:59:59"
						:value="leaveDate"
						@change="leaveChange"
					></timer>
				</view>
			</self-input>
			<self-input label="离场原因">
				<view slot="fill" class="fill_content">
					<picker @change="reasonChange" :value="reasonId" :range="reason">
						<view class="uni-input">{{reason[reasonId]}}</view>
					</picker>
				</view>
			</self-input>
			<self-input label="申请时间">
				<view slot="fill" class="fill_content">
					<timer
						fields="second"
						start="2010-00-00 00:00:00"
						end="2999-12-30 23:59:59"
						:value="applyDate"
						@change="applyChange"
					></timer>
				</view>
			</self-input>
			<self-button text="提交" @handleClick="okClick" class="nextButton"></self-button>
		</self-content>
		<selfTaskColor></selfTaskColor>
	</view>
</template>

<script>
	import selfBg from '@/components/self-bg.vue';
	import selfContent from '@/components/self-content.vue';
	import selfInput from '@/components/self-input.vue';
	import timer from '@/components/timer/index.vue';
	import GetDate from '@/components/timer/GetDate.js';
	import selfButton from '@/components/self-button.vue';
	
	export default{
		data() {
			return {
				name: '张三',
				leaveDate: '',
				reason: ['休班', '离职', '外出'],
				reasonId: 0,
				applyDate: ''
			}
		},
		components: {
			selfBg,
			selfContent,
			selfInput,
			timer,
			selfButton
		},
		onLoad() {
			let time = GetDate.getCurrentTimes();
			let arr = [];
			for (let key in time.detail) {
				arr.push(time.detail[key]);
				if(key === this.fields){
					break;
				}
			}
			this.leaveDate = GetDate.format(arr);
			this.applyDate = GetDate.format(arr);
		},
		methods: {
			leaveChange(e) {
				this.leaveDate = e
			},
			applyChange(e) {
				this.applyDate = e
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nextButton {
		margin-top: 70rpx;
	}
</style>
