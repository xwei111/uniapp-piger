<template>
	<view>
		<self-bg src="/static/bg.png"></self-bg>
		<self-content>
			<self-steps :lists="lists" :active="active"></self-steps>
			<view v-show="active == 1">
				<self-input label="手机号" placeholder="请输入您的手机号"></self-input>
				<self-input label="验证码" placeholder="请输入验证码">
					<view class="getCode" slot="suffix">获取验证码</view>
				</self-input>
			</view>
			<view v-show="active == 2">
				<self-input label="员工号" placeholder="请输入您的员工号"></self-input>
				<self-input label="初始密码（身份证后6位）" placeholder="请输入您的身份证后6位"></self-input>
			</view>
			<view v-show="active == 3">
				<self-input label="新密码" placeholder="请输入新密码"></self-input>
				<self-input label="确认密码" placeholder="再次输入密码"></self-input>
			</view>
			<self-button :text="active == 3 ? '立即登录' : '下一步' " @handleClick="nextClick" class="nextButton"></self-button>
			<self-checkbox :chekck="chekck" @selectHandle="selectHandle" @agreeHandle="agreeHandle"></self-checkbox>
			<view class="isGuest">我是访客</view>
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
				isShow: false
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
				this.active = ++this.active
			},
			selectHandle() {
				this.chekck = !this.chekck
			},
			agreeHandle() {
				this.isShow = true
			},
			closeHandle() {
				this.isShow = false
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
