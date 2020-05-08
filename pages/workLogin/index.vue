<template>
	<view>
		<self-bg src="/static/bg.png"></self-bg>
		<view v-show="isError" class="error_info">员工号或密码有误，请再试一次</view>
		<self-content>
			<self-input label="员工号" placeholder="请输入您的员工号" :status="status" v-model="staffCode" ></self-input>
			<self-input label="密码" placeholder="请输入密码" :status="status" v-model="password" type="password"></self-input>
			<self-button text="下一步" @handleClick="loginClick" class="nextButton"></self-button>
			<self-checkbox :chekck="chekck" @selectHandle="selectHandle" @agreeHandle="agreeHandle"></self-checkbox>
			<view class="isGuest">
				<text class="address_text" @click="toGuestHandle">我是访客</text>
				<text class="address_text" @click="toRegisterHandle" >忘记密码</text>
			</view>
		</self-content>
		<self-agree :isShow="isShow" @closeHandle="closeHandle"></self-agree>
	</view>
</template>

<script>
	import selfBg from '@/components/self-bg.vue';
	import selfContent from '@/components/self-content.vue';
	import selfInput from '@/components/self-input.vue';
	import selfButton from '@/components/self-button.vue';
	import selfCheckbox from '@/components/self-checkbox.vue';
	import selfAgree from '@/components/self-agree.vue';
	import { workerLogin } from '@/api/login';
	
	export default{
		data() {
			return {
				isError: false,
				status: 'default',
				staffCode: '',
				password: '',
				chekck: false,
				isShow: false,
			}
		},
		components: {
			selfBg,
			selfContent,
			selfInput,
			selfButton,
			selfCheckbox,
			selfAgree
		},
		methods: {
			loginClick() {
				const first = true;
				if(!this.staffCode) {
					uni.showToast({ title: '请输入员工号', icon: 'none' });
					return
				}
				if(!this.password) {
					uni.showToast({ title: '请输入密码', icon: 'none' });
					return
				}
				// {"staffCode":"5","password":"123456"}
				workerLogin({"staffCode": this.staffCode,"password": this.password}).then(e=>{
					if(e) {
						if(e.code == 4103 || e.code == 4105) {
							this.isError = true
							this.status = 'error'
						} else {
							this.isError = false
							this.status = 'default'
							const { data } = e
							if(data.userInfo.firstLogin === 0) {
								uni.navigateTo({ url: '/pages/workerFirst/index' })
							} else if(data.userInfo.firstLogin === 1) {
								uni.switchTab({ url: '/pages/mineTask/index' })
							}
						}
					}
				})
			},
			selectHandle() {
				this.chekck = !this.chekck
			},
			agreeHandle() {
				this.isShow = true
			},
			closeHandle() {
				this.isShow = false
			},
			toGuestHandle() {
				uni.navigateTo({ url: '/pages/guestFirst/index' });
			},
			toRegisterHandle() {
				uni.navigateTo({ url: '/pages/register/index' });
			}
		}
	}
</script>

<style lang="scss" scoped>
	.error_info {
		position: absolute;
		top: 0;
		left: 0;
		width:100%;
		height:66rpx;
		background:rgba(255,215,215,1);
		font-size:34rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(208,2,27,1);
		line-height:66rpx;
		text-align: center;
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
		.address_text {
			margin: 0 30rpx;
		}
	}
</style>
