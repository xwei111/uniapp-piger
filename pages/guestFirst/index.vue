<template>
	<view>
		<self-bg src="/static/bg.png"></self-bg>
		<self-content>
			<self-steps :lists="lists" :active="active"></self-steps>
			<view v-show="active == 1">
				<self-input label="手机号" placeholder="请输入您的手机号" v-model="tell"></self-input>
				<self-input label="验证码" placeholder="请输入验证码" v-model="code">
					<view :class="['getCode', isBegin ? 'disCode' : '' ]" slot="suffix" @click="getCodeHandle">{{isBegin ? `${number}s ` : '获取验证码'}}</view>
				</self-input>
			</view>
			<view v-show="active == 2">
				<self-input label="姓名" placeholder="请输入您的姓名" v-model="user"></self-input>
				<self-input label="身份证号" placeholder="请输入您的身份证号" v-model="sfz"></self-input>
			</view>
			<view v-show="active == 3">
				<view class="people">您是:</view>
				<self-radio :options="options" :active="radioActive" @changeHandle="changeHandle" class="radio" ></self-radio>
				<self-input v-if="radioActive == 2" placeholder="请输入您的企业名" v-model="company"></self-input>
				<self-input label="来访事由">
					<view slot="fill" class="fill_content">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">{{array[index]}}</view>
						</picker>
					</view>
				</self-input>
				<view class="addUser" >
					<text @click="addUserHandle">+ 新增来访人员</text>
					<text v-if="accompanying.length" @click="accShowHandle">{{ accShow ? '隐藏' : '展开' }}</text>
				</view>
				<view v-show="accShow">
					<view style="position: relative;" v-for="(item, index) in accompanying" :key="index">
						<view class="deleteBtn" @click="deleteHandle(item, index)">
							<icon type="clear" size="14"/>
						</view>
						<self-input :label="`随行人员 ${index+1} 姓名`" v-model="item.user"></self-input>
						<self-input :label="`随行人员 ${index+1} 身份证`" v-model="item.sfz"></self-input>
					</view>
				</view>
				
				<self-input label="目的地">
					<view slot="fill" class="fill_content">
						<picker @change="addressChange" :value="idx" :range="address">
							<view class="uni-input">{{address[idx]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="来访时间" placeholder="请输入您的企业名">
					<view slot="fill" class="fill_content">
						<timer
							fields="second"
							start="2010-00-00 00:00:00"
							end="2999-12-30 23:59:59"
							:value="value"
							@change="bindChange"
						></timer>
					</view>
				</self-input>
				
			</view>
			<self-button :text="active == 3 ? '提交' : '下一步' " @handleClick="nextClick" class="nextButton"></self-button>
			<self-checkbox :chekck="chekck" @selectHandle="selectHandle" @agreeHandle="agreeHandle"></self-checkbox>
			<view class="isGuest" @click="toWorkHandle">我是员工</view>
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
	import selfRadio from '@/components/self-radio.vue';
	import timer from '@/components/timer/index.vue';
	import GetDate from '@/components/timer/GetDate.js'
	
	export default{
		data() {
			return {
				lists: [
					{ id: 1, text: '验证手机号' },
					{ id: 2, text: '完善个人信息' },
					{ id: 3, text: '完善来访信息' }
				],
				active: 1,
				chekck: false,
				isShow: false,
				options: [
					{ id: 1, label: '个人访客' },
					{ id: 2, label: '企业访客' }
				],
				radioActive: 1,
				array: ['观摩', '学习', '请教'],
				index: 0,
				address: ['猪场A', '猪场B', '猪场C'],
				idx: 0,
				value: '',
				tell: '',
				code: '',
				user: '',
				sfz: '',
				company: '',
				number: 60,
				isBegin: false,
				accompanying: [],
				accShow: true
			}
		},
		components: {
			selfBg,
			selfContent,
			selfSteps,
			selfButton,
			selfInput,
			selfCheckbox,
			selfAgree,
			selfRadio,
			timer
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
			this.value = GetDate.format(arr);
		},
		methods: {
			nextClick() {
				if(this.active == 1) {
					if(!this.tell) {
						uni.showToast({ title: '请输入手机号', icon: 'none' });
						return
					}
					if(!/^\d{11}$/.test(this.tell)) {
						uni.showToast({ title: '手机格式错误', icon: 'none' });
						return
					}
					if(!this.code) {
						uni.showToast({ title: '请输入验证码', icon: 'none' });
						return
					}
				}
				if(this.active == 2) {
					if(!this.user) {
						uni.showToast({ title: '请输入姓名', icon: 'none' });
						return
					}
					if(!this.sfz) {
						uni.showToast({ title: '请输入身份证', icon: 'none' });
						return
					}
				}
				if(this.active == 3) {
					if(this.radioActive == 2 && !this.company) {
						uni.showToast({ title: '请输入企业名称', icon: 'none' });
						return
					} 
					if(this.accompanying && this.accompanying.length) {
						let isOk = true;
						this.accompanying.map(e=>{
							if(!e.user || !e.sfz) {
								isOk = false
							}
						})
						if(!isOk) {
							uni.showToast({ title: '有随行人员姓名或身份证未填写', icon: 'none' });
							return
						}
					}
					if(!this.chekck) {
						uni.showToast({ title: '请阅读用户协议', icon: 'none' });
						return
					}
					console.log('login', this.tell, this.code, this.user, this.sfz, this.radioActive, this.company, this.accompanying, this.array[this.index], this.address[this.idx], this.value)
					uni.navigateTo({
						url: '/pages/guestInfo/index'
					})
					return
				}
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
			},
			changeHandle(e) {
				this.radioActive = e.id
			},
			bindPickerChange(e) {
				this.index = e.target.value
			},
			addressChange(e) {
				this.idx = e.target.value
			},
			bindChange(e) {
				this.value = e
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
				
				// uni.showModal({
				//     title: '很抱歉',
				//     content: '暂无找到该手机号关联的邀请请联系邀请人核实信息',
				// 	showCancel: false,
				// 	confirmColor: '#02BB00'
				// });
			},
			accShowHandle() {
				this.accShow = !this.accShow
			},
			addUserHandle() {
				this.accShow = true
				this.accompanying.push({user:'', sfz: ''})
			},
			deleteHandle(e, index) {
				let accompanying = this.accompanying
				this.accompanying.splice(index, 1);
			},
			toWorkHandle() {
				uni.navigateTo({ url: '/pages/workLogin/index' });
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
	.people {
		padding-top: 50rpx;
		padding-bottom: 50rpx;
	}
	.radio {
		padding: 30rpx 0;
	}
	.fill_content{
		width: 100%;
		height:94rpx;
		position: absolute;
		top: 0;
		left: 0;
		background: #fff;
		font-size:34rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(178,178,178,1);
		box-sizing: border-box;
		padding-left: 30rpx;
		line-height: 94rpx;
		z-index: 9;
	}
	
	.addUser {
		font-size:34rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(15,187,135,1);
		padding: 30rpx 0 0 0;
		display: flex;
		justify-content: space-between;
	}
	.deleteBtn {
		font-size:34rpx;
		position: absolute;
		top: 30rpx;
		right: 0;
		color: #999;
	}
</style>
