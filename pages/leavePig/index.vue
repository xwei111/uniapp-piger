<template>
	<!-- 离场申请 -->
	<view class="mian_background main_content">
		<view class="come_box">
			<view class="user_box">
				<text>员工姓名</text>
				<view class="user_name">
					<text>王五</text>
					<view class="user_logo">
						<view class="user_logo_box">
							<image class="user_logo_ig" src="../../static/logo.png"></image>
						</view>
						
					</view>
				</view>
			</view>
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
		</view>
		<self-button text="提交" @handleClick="okClick" class="nextButton"></self-button>
		<selfTaskColor></selfTaskColor>
	</view>
</template>

<script>
	import selfInput from '@/components/self-input.vue';
	import timer from '@/components/timer/index.vue';
	import GetDate from '@/components/timer/GetDate.js';
	import selfButton from '@/components/self-button.vue';
	
	export default{
		data() {
			return {
				leaveDate: '',
				reason: ['休班', '离职', '外出'],
				reasonId: 0,
				applyDate: ''
			}
		},
		components: {
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
	.come_box {
		width:656rpx;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 2rpx 10rpx 0rpx rgba(215,215,215,0.5);
		border-radius:26rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40rpx 0;
		.user_box {
			width: 582rpx;
			font-size:34rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(0,0,0,0.7);
			.user_name {
				margin: 35rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.user_logo_box {
					width: 54rpx;
					height: 54rpx;
					background-color: #E7F4EE;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					.user_logo_ig {
						width: 22rpx;
						height: 22rpx;
						border-radius: 50%;
					}
				}
			}
			
		}
	}
	.nextButton {
		margin-top: 70rpx;
	}
</style>
