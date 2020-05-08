<template>
	<view>
		<self-bg src="/static/bg.png"></self-bg>
		<self-content>
			<self-steps :lists="lists" :active="active"></self-steps>
			<view v-show="active == 1">
				<self-input label="手机号" placeholder="请输入您的手机号" v-model="phone"></self-input>
				<self-input label="验证码" placeholder="请输入验证码" v-model="smsCode">
					<view :class="['getCode', isBegin ? 'disCode' : '' ]" slot="suffix" @click="getCodeHandle">{{isBegin ? `${number}s ` : '获取验证码'}}</view>
				</self-input>
			</view>
			<view v-show="active == 2">
				<self-input label="员工号" placeholder="请输入您的员工号" v-model="staffCode"></self-input>
				<self-input label="初始密码（身份证后6位）" placeholder="请输入您的身份证后6位" v-model="password" type="password"></self-input>
			</view>
			<view v-show="active == 3">
				<self-input label="新密码" placeholder="请输入新密码" v-model="newPassword" type="password"></self-input>
				<self-input label="确认密码" placeholder="再次输入密码" v-model="confirmNewPassword" type="password"></self-input>
			</view>
			<self-button :text="active == 3 ? '立即登录' : '下一步' " @handleClick="nextClick" class="nextButton"></self-button>
			<self-checkbox :chekck="chekck" @selectHandle="selectHandle" @agreeHandle="agreeHandle"></self-checkbox>
			<view class="isGuest" @click="toGuestHandle">我是访客</view>
		</self-content>
		<self-agree :isShow="isShow" @closeHandle="closeHandle"></self-agree>
	</view>
</template>

<script>
	import selfBg from '@/components/self-bg.vue';
	import selfContent from '@/components/self-content.vue';
	import selfSteps from '@/components/self-steps.vue';
	import selfButton from '@/components/self-button.vue';
	import selfInput from '@/components/self-input.vue';
	import selfCheckbox from '@/components/self-checkbox.vue';
	import selfAgree from '@/components/self-agree.vue';
	import { getTellCode, workFirst, workSecond, workThree } from '@/api/login';
	
	export default{
		data() {
			return {
				lists: [
					{ id: 1, text: '验证手机号' },
					{ id: 2, text: '验证员工号' },
					{ id: 3, text: '设置密码' }
				],
				active: 1,
				chekck: false,
				isShow: false,
				phone: '',
				smsCode: '',
				staffCode: '',
				password: '',
				newPassword: '',
				confirmNewPassword: '',
				number: 60,
				isBegin: false
			}
		},
		components: {
			selfBg,
			selfContent,
			selfSteps,
			selfButton,
			selfInput,
			selfCheckbox,
			selfAgree
		},
		methods: {
			nextClick() {
				if(this.active == 1) {
					if(!this.phone) {
						uni.showToast({ title: '请输入手机号', icon: 'none' });
						return
					}
					if(!/^\d{11}$/.test(this.phone)) {
						uni.showToast({ title: '手机格式错误', icon: 'none' });
						return
					}
					if(!this.smsCode) {
						uni.showToast({ title: '请输入验证码', icon: 'none' });
						return
					}
					// {"phone":"13738050006","smsCode":"1234"}
					workFirst({"phone": this.phone, "smsCode": this.smsCode}).then(e=> {
						if(e.success) {
							this.active = ++this.active
						}
					})
				}
				if(this.active == 2) {
					if(!this.staffCode) {
						uni.showToast({ title: '请输入员工号', icon: 'none' });
						return
					}
					if(!this.password) {
						uni.showToast({ title: '请输入初始密码', icon: 'none' });
						return
					}
					workSecond({ staffCode: this.staffCode, password: this.password }).then(e=> {
						if(e.success) {
							this.active = ++this.active
						}
					})
				}
				if(this.active == 3) {
					if(!this.newPassword) {
						uni.showToast({ title: '请输入新密码', icon: 'none' });
						return
					}
					if(!this.confirmNewPassword) {
						uni.showToast({ title: '请再次输入密码', icon: 'none' });
						return
					}
					if(this.newPassword !== this.confirmNewPassword) {
						uni.showToast({ title: '两次输入密码不一致', icon: 'none' });
						return
					}
					if(!this.chekck) {
						uni.showToast({ title: '请阅读用户协议', icon: 'none' });
						return
					}
					// {"staffCode":"5","newPassword":"123456","confirmNewPassword":"123456"}
					workThree({"staffCode": this.staffCode,"newPassword": this.newPassword,"confirmNewPassword": this.confirmNewPassword}).then(e=> {
						uni.switchTab({ url: '/pages/mineTask/index' })
					})
					console.log('verf', this.phone, this.smsCode, this.staffCode, this.password, this.newPassword, this.confirmNewPassword, this.chekck )
					
					return
				}
				
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
			getCodeHandle() {
				if(this.isBegin) return
				this.isBegin = true;
				setInterval(()=>{
					this.number = --this.number
					if(this.number < 0) {
						this.number = 60
						this.isBegin = false;
					}
				}, 1000)
				// {"phone":"13738050004"}
				getTellCode({"phone": this.phone})
			},
			toGuestHandle() {
				uni.navigateTo({ url: '/pages/guestFirst/index' });
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
	}
</style>
