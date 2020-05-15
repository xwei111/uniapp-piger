<template>
	<view>
		<self-bg src="/static/bg.png"></self-bg>
		<self-content>
			<self-input label="手机号" placeholder="请输入您的手机号" v-model="phone"></self-input>
			<self-input label="验证码" placeholder="请输入验证码" v-model="smsCode">
				<view :class="['getCode', isBegin != 1 ? 'disCode' : '' ]" slot="suffix" @click="getCodeHandle">{{isBegin == 3 ? `${number}s ` : '获取验证码'}}</view>
			</self-input>
			<self-button text="登录" @handleClick="nextClick" class="nextButton"></self-button>
			<self-checkbox :chekck="chekck" @selectHandle="selectHandle" @agreeHandle="agreeHandle"></self-checkbox>
			<view class="isGuest" @click="toWorkHandle">我是员工</view>
		</self-content>
		<self-agree :isShow="isShow" @closeHandle="closeHandle"></self-agree>
	</view>
</template>

<script>
	import selfBg from '@/components/self-bg.vue';
	import selfContent from '@/components/self-content.vue';
	import selfButton from '@/components/self-button.vue';
	import selfInput from '@/components/self-input.vue';
	import selfCheckbox from '@/components/self-checkbox.vue';
	import selfAgree from '@/components/self-agree.vue';
	import { guestGetTellCode, guestFirst, guestSecond, guestThree, changeGuestThree } from '@/api/login.js';
	import { verTell, verSfz } from '@/utils/ver.js';
	
	export default {
		data() {
			return {
				isBegin: 1,
				phone: '',
				smsCode: '',
				chekck: false,
				isShow: false,
				number: 60,
			}
		},
		components: {
			selfBg,
			selfContent,
			selfButton,
			selfInput,
			selfCheckbox,
			selfAgree,
		},
		methods: {
			getCodeHandle() {
				if(!this.phone) {
					uni.showToast({ title: '请输入手机号', icon: 'none' });
					return
				}
				if(!verTell(this.phone)) {
					uni.showToast({ title: '手机格式错误', icon: 'none' });
					return
				}
				if(this.isBegin != 1) return
				this.isBegin = 2;
				guestGetTellCode({"phone": this.phone}).then(e=> {
					if(e && e.code === 10000) {
						this.isBegin = 3;
						let selfTimer = setInterval(()=>{
							this.number = --this.number
							if(this.number < 0) {
								this.number = 60
								this.isBegin = 1;
								clearInterval(selfTimer)
								selfTimer = null
							}
						}, 1000)
					} else {
						this.isBegin = 1;
						if(!e.success && e.code == 4107) {
							uni.showModal({
							    title: '很抱歉',
							    content: '暂无找到该手机号关联的邀请请联系邀请人核实信息',
								showCancel: false,
								confirmColor: '#02BB00'
							});
						}
					}
					
				})
			},
			selectHandle() {
				this.chekck = !this.chekck
			},
			toWorkHandle() {
				uni.navigateTo({ url: '/pages/workLogin/index' });
			},
			closeHandle() {
				this.isShow = false
			},
			agreeHandle() {
				this.isShow = true
			},
			nextClick() {
				if(!this.phone) {
					uni.showToast({ title: '请输入手机号', icon: 'none' });
					return
				}
				if(!verTell(this.phone)) {
					uni.showToast({ title: '手机格式错误', icon: 'none' });
					return
				}
				if(!this.smsCode) {
					uni.showToast({ title: '请输入验证码', icon: 'none' });
					return
				}
				if(!this.chekck) {
					uni.showToast({ title: '请阅读用户协议', icon: 'none' });
					return
				}
				const { globalData: { userInfo } } = getApp();
				userInfo.phone = this.phone;
				guestFirst({ phone: this.phone, smsCode: this.smsCode }).then(e=>{
					e && e.success && uni.navigateTo({ url: '/pages/guestHome/index' })
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.getCode {
		width: 230rpx;
		height: 100%;
		background-color: red;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size:34rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(255,255,255,1);
		background-color: #0B8E69;
		&.disCode {
			opacity: .4;
		}
	}
	.nextButton {
		margin-top: 70rpx;
		margin-bottom: 30rpx;
	}
	.isGuest {
		font-size:36rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(11,142,105,1);
		margin-top: 70rpx;
		margin-bottom: 280rpx;
	}
</style>
