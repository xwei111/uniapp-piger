<template>
	<!-- 申请进场 -->
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
			<self-input label="当前所在地">
				<view slot="fill" class="fill_content">
					<picker @change="whenceChange" :value="whenceIdx" :range="whences">
						<view class="uni-input">{{whences[whenceIdx]}}</view>
					</picker>
				</view>
			</self-input>
			<self-input label="上次接触猪只时间">
				<view slot="fill" class="fill_content">
					<timer
						fields="second"
						start="2010-00-00 00:00:00"
						end="2999-12-30 23:59:59"
						:value="lastTouchTime"
						@change="lastTouchTimeChange"
					></timer>
				</view>
			</self-input>
			<self-input label="上次接触高风险场所日期">
				<view slot="fill" class="fill_content">
					<timer
						fields="second"
						start="2010-00-00 00:00:00"
						end="2999-12-30 23:59:59"
						:value="lastHighRishTime"
						@change="lastHighRishTimeChange"
					></timer>
				</view>
			</self-input>
			<self-higinfo></self-higinfo>
			<self-input label="预计到达时间">
				<view slot="fill" class="fill_content">
					<timer
						fields="second"
						start="2010-00-00 00:00:00"
						end="2999-12-30 23:59:59"
						:value="comeTime"
						@change="comeTimeChange"
					></timer>
				</view>
			</self-input>
			<self-input label="进场事由">
				<view slot="fill" class="fill_content">
					<picker @change="reasonsChange" :value="reasonsIdx" :range="reasons">
						<view class="uni-input">{{reasons[reasonsIdx]}}</view>
					</picker>
				</view>
			</self-input>
			<self-input label="到达隔离点交通方式">
				<view slot="fill" class="fill_content">
					<picker @change="arriveWayChange" :value="arriveWayIdx" :range="arriveWays">
						<view class="uni-input">{{arriveWays[arriveWayIdx]}}</view>
					</picker>
				</view>
			</self-input>
			<view class="otherPeople">
				<view class="otherPeople_title">携带个人物品</view>
				<view v-for="(item, index) in personalEffectList" :key="index" class="personalEffect_box" >
					<self-checkbox :chekck="personalEffects.indexOf(item) > -1" @selectHandle="thingsHandle" :label="item"></self-checkbox>
				</view>
				<self-input v-if="personalEffects.indexOf('其他') > -1" placeholder="请输入其他物品" v-model="otherEffects"></self-input>
			</view>
		</view>
		<self-button text="提交" @handleClick="okClick" class="nextButton"></self-button>
		<selfTaskColor></selfTaskColor>
	</view>
</template>

<script>
	import selfInput from '@/components/self-input.vue';
	import timer from '@/components/timer/index.vue';
	import selfHiginfo from '@/components/self-higinfo.vue';
	import selfCheckbox from '@/components/self-checkbox.vue';
	import GetDate from '@/components/timer/GetDate.js';
	import selfButton from '@/components/self-button.vue';
	
	export default{
		data() {
			return {
				whences: ['杭州', '舟山', '绍兴'],
				whenceIdx: 0,
				lastTouchTime: '',
				lastHighRishTime: '',
				comeTime: '',
				arriveWays: ['打车', '步行', '自驾'],
				arriveWayIdx: 0,
				reasons: ['学习', '打扫'],
				reasonsIdx: 0,
				personalEffectList: ['手机', '眼镜', '其他'],
				otherEffects: '',
				personalEffects: [],
			}
		},
		components: {
			selfInput,
			timer,
			selfButton,
			selfHiginfo,
			selfCheckbox
		},
		onLoad() {
		
		},
		methods: {
			whenceChange(e) {
				this.whenceIdx = e.target.value
			},
			lastTouchTimeChange(e) {
				this.lastTouchTime = e
			},
			lastHighRishTimeChange(e) {
				this.lastHighRishTime = e
			},
			comeTimeChange(e) {
				this.comeTime = e
			},
			arriveWayChange(e) {
				this.arriveWayIdx = e.target.value
			},
			reasonsChange(e) {
				this.reasonsIdx = e.target.value
			},
			thingsHandle(e) {
				let index = this.personalEffects.indexOf(e)
				if( index < 0) {
					this.personalEffects.push(e)
				} else {
					if(e === '其他') {
						this.otherEffects = ''
					}
					this.personalEffects.splice(index, 1);
				}
			},
			okClick() {
				console.log(this.whences[this.whenceIdx], this.lastTouchTime, this.lastHighRishTime, this.comeTime, this.arriveWays[this.arriveWayIdx], this.reasons[this.reasonsIdx], this.personalEffects, this.otherEffects)
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
	.otherPeople {
		padding-top: 35rpx;
		.otherPeople_title {
			font-size:34rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(0,0,0,0.7);
			margin-bottom: 25rpx;
		}
		.personalEffect_box {
			margin-bottom: 15rpx;
		}
	}
	.nextButton {
		margin: 70rpx 0 150rpx 0;
	}
</style>
