<template>
	<!-- 访客邀请 -->
	<view class="mian_background main_content" >
		<view class="dowar_box">
			<self-input label="访客姓名" v-model="name"></self-input>
			<self-input label="访客手机号" v-model="phone"></self-input>
			<self-input label="目的地">
				<view slot="fill" class="fill_content">
					<picker @change="addressChange" :value="idx" :range="address">
						<view class="uni-input">{{address[idx]}}</view>
					</picker>
				</view>
			</self-input>
			<self-input label="隔离点" v-model="quarantine"></self-input>
			<self-input label="来访时间">
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
			<self-input label="来访事由">
				<view slot="fill" class="fill_content">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</self-input>
			<self-input label="接待人姓名" v-model="acceptName"></self-input>
			<self-input label="接待人手机号" v-model="acceptPhone"></self-input>
		</view>
		<self-button text="提交" @handleClick="okClick" class="nextButton"></self-button>
		<selfTaskColor></selfTaskColor>
	</view>
</template>

<script>
	import selfInput from '@/components/self-input.vue';
	import selfButton from '@/components/self-button.vue';
	import timer from '@/components/timer/index.vue';
	import GetDate from '@/components/timer/GetDate.js';
	
	export default {
		data() {
			return {
				name: '',
				phone: '',
				address: ['猪场A', '猪场B', '猪场C'],
				idx: 0,
				quarantine: '',
				visitDate: '',
				array: ['观摩', '学习', '请教'],
				index: 0,
				acceptName: '王五',
				acceptPhone: '17681818181'
			}
		},
		components: {
			selfInput,
			selfButton,
			timer
		},
		onLoad(options) {
			let time = GetDate.getCurrentTimes();
			let arr = [];
			for (let key in time.detail) {
				arr.push(time.detail[key]);
				if(key === this.fields){
					break;
				}
			}
			this.visitDate = GetDate.format(arr);
		},
		methods: {
			addressChange(e) {
				this.idx = e.target.value
			},
			bindChange(e) {
				this.visitDate = e
			},
			bindPickerChange(e) {
				this.index = e.target.value
			},
		}
	}
</script>

<style lang="scss" scoped>
	.dowar_box {
		position: relative;
		width:656rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 2rpx 10rpx 0rpx rgba(215,215,215,0.5);
		border-radius:26rpx;
		padding:0 30rpx 40rpx 30rpx;
		box-sizing: border-box;
	}
	.nextButton {
		margin: 70rpx 0 150rpx 0;
	}
</style>
