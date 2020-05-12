<template>
	<view>
		<self-bg src="/static/bg.png"></self-bg>
		<self-content>
			<self-input label="姓名" v-model="name" placeholder="请输入姓名"></self-input>
			<self-input label="从哪里来" v-model="fromAddress"></self-input>
			<self-input label="上次接触猪只时间">
				<view slot="fill" class="fill_content">
					<timer
						fields="second"
						start="2010-00-00 00:00:00"
						end="2999-12-30 23:59:59"
						:value="visitDate"
						@change="bindChange"
					></timer>
				</view>
			</self-input>
			<self-input label="上次接触高风险场所日期">
				<view slot="fill" class="fill_content">
					<timer
						fields="second"
						start="2010-00-00 00:00:00"
						end="2999-12-30 23:59:59"
						:value="lastDate"
						@change="lastChange"
					></timer>
				</view>
			</self-input>
			<self-input label="来访原因">
				<view slot="fill" class="fill_content">
					<picker @change="reasonChange" :value="reasonId" :range="reason">
						<view class="uni-input">{{reason[reasonId]}}</view>
					</picker>
				</view>
			</self-input>
			<self-input label="预计到达时间">
				<view slot="fill" class="fill_content">
					<timer
						fields="second"
						start="2010-00-00 00:00:00"
						end="2999-12-30 23:59:59"
						:value="comeDate"
						@change="comeChange"
					></timer>
				</view>
			</self-input>
			<self-input label="携带个人物品" v-model="takeThings"></self-input>
			<self-input label="到达隔离点交通方式" v-model="traffic"></self-input>
			<self-button text="提交" @handleClick="okClick" class="nextButton"></self-button>
		</self-content>
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
				reason: ['观摩', '学习', '请教'],
				reasonId: 0,
				name: '',
				fromAddress: '',
				visitDate: '',
				lastDate: '',
				comeDate: '',
				takeThings: '',
				traffic: ''
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
			this.visitDate = GetDate.format(arr);
			this.lastDate = GetDate.format(arr);
			this.comeDate = GetDate.format(arr);
		},
		methods: {
			bindChange(e) {
				this.visitDate = e
			},
			lastChange(e) {
				this.lastDate = e
			},
			comeChange(e) {
				this.comeDate = e
			},
			okClick() {
				console.log('eeeeeeeeeeeeeeeeeeeee')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nextButton {
		margin: 70rpx 0 300rpx 0;
	}
</style>
