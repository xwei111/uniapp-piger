<template>
	<view>
		<self-bg src="/static/bg.png"></self-bg>
		<self-content>
			<self-steps :lists="lists" :active="active"></self-steps>
			<view v-show="active == 2">
				<self-input label="姓名" placeholder="请输入您的姓名" v-model="name"></self-input>
				<self-input label="身份证号" placeholder="请输入您的身份证号" v-model="idNo"></self-input>
			</view>
			<view v-show="active == 3">
				<view class="people">您是:</view>
				<self-radio :options="options" :active="visitorType" @changeHandle="changeHandle" class="radio" ></self-radio>
				<self-input v-if="visitorType == 2" placeholder="请输入您的企业名" v-model="companyName"></self-input>
				<self-input label="来访事由">
					<view slot="fill" class="fill_content">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">{{array[index]}}</view>
						</picker>
					</view>
				</self-input>
				<view v-if="accompanying.length" class="otherPeople">
					<view class="otherPeople_title">其他访客</view>
					<view v-for="(item, index) in accompanying" :key="index" class="otherPeople_box" >
						<view class="otherPeople_box_list">
							<text class="otherPeople_box_list_name">姓名</text>
							<text class="otherPeople_box_list_sfz">{{item.name}}</text>
						</view>
						<view class="otherPeople_box_list">
							<text class="otherPeople_box_list_name">身份证号</text>
							<text class="otherPeople_box_list_sfz">{{item.idNo}}</text>
						</view>
						<view class="otherPeople_box_delete" @click="deleteHandle(item, index)">
							<view class="otherPeople_box_delete_icon"></view>
						</view>
					</view>
				</view>
				<view class="addUser" v-if="!accShow" >
					<text @click="addUserHandle">+ 新增来访人员</text>
				</view>
				<view v-if="accShow">
					<self-input label=" 姓名" v-model="othserUser"></self-input>
					<self-input label="身份证号" v-model="othserSfz"></self-input>
				</view>
				<view class="addUser" v-if="accShow"  >
					<text @click="addHandle">加入该访客</text>
					<text @click="cancleHandle">取消</text>
				</view>
				
				<self-input label="目的地">
					<view slot="fill" class="fill_content">
						<picker @change="addressChange" :value="idx" :range="address">
							<view class="uni-input">{{address[idx]}}</view>
						</picker>
					</view>
				</self-input>
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
			<self-button :text="active == 3 ? '提交' : '下一步' " @handleClick="nextClick" class="nextButton"></self-button>
			<self-checkbox v-if="active === 1" :chekck="chekck" @selectHandle="selectHandle" @agreeHandle="agreeHandle"></self-checkbox>
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
	import selfHiginfo from '@/components/self-higinfo.vue';
	import timer from '@/components/timer/index.vue';
	import GetDate from '@/components/timer/GetDate.js';
	import { guestGetTellCode, guestFirst, guestSecond, guestThree, changeGuestThree } from '@/api/login.js';
	import { verTell, verSfz } from '@/utils/ver.js';
	
	
	export default{
		data() {
			return {
				lists: [
					{ id: 2, text: '完善个人信息' },
					{ id: 3, text: '完善来访信息' }
				],
				active: 2,
				chekck: false,
				isShow: false,
				options: [
					{ id: 1, label: '个人访客' },
					{ id: 2, label: '企业访客' }
				],
				visitorType: 1,
				array: ['观摩', '学习', '请教'],
				index: 0,
				address: ['猪场A', '猪场B', '猪场C'],
				idx: 0,
				whences: ['杭州', '舟山', '绍兴'],
				whenceIdx: 0,
				arriveWays: ['打车', '步行', '自驾'],
				arriveWayIdx: 0,
				visitDate: '',
				lastTouchTime: '',
				lastHighRishTime: '',
				personalEffectList: ['手机', '眼镜', '其他'],
				otherEffects: '',
				personalEffects: [],
				phone: '',
				name: '',
				idNo: '',
				companyName: '',
				number: 60,
				isBegin: 1,
				accompanying: [],
				accShow: false,
				othserUser: '',
				othserSfz: '',
				type: null
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
			timer,
			selfHiginfo
		},
		onLoad(options) {
			const { globalData: { userInfo:{ phone } } } = getApp();
			this.phone = phone
			if(options && options.detail) {
				let detail = JSON.parse(options.detail)
				const { type, visitorType, visitors, reason, companyName, visitDate, targetLocation, phone, mainVisitors, whence, lastTouchTime, lastHighRishTime, arriveWay, personalEffects, otherEffects } = detail
				this.type = type
				if(type && type == 'change') {
					this.active = 3;
					this.visitorType = visitorType ? visitorType : 1;
					this.accompanying = visitors ? visitors : []
					this.index = this.array.findIndex(e=>e === reason);
					this.companyName = companyName;
					this.visitDate = visitDate ? visitDate : '';
					this.idx = this.address.findIndex(e=>e === targetLocation);
					this.whenceIdx = this.whences.findIndex(e=>e === whence);
					this.arriveWayIdx = this.arriveWays.findIndex(e=>e === arriveWay)
					this.lastTouchTime = lastTouchTime ? lastTouchTime : '';
					this.lastHighRishTime = lastHighRishTime ? lastHighRishTime : '';
					this.personalEffects = personalEffects ? JSON.parse(personalEffects) : [],
					this.otherEffects = otherEffects;
					this.phone = phone;
					this.name = mainVisitors ? mainVisitors[0].name : '';
					this.idNo = mainVisitors ? mainVisitors[0].idNo : '';
					return
				}
			}
			
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
			nextClick() {
				if(this.active == 2) {
					if(!this.name) {
						uni.showToast({ title: '请输入姓名', icon: 'none' });
						return
					}
					if(!this.idNo) {
						uni.showToast({ title: '请输入身份证', icon: 'none' });
						return
					}
					if(!verSfz(this.idNo)) {
						uni.showToast({ title: '身份证格式错误', icon: 'none' });
						return
					}
					guestSecond({ phone: this.phone, idNo: this.idNo, name: this.name }).then(e=>{
						if(e.success) {
							this.active = ++this.active
						}
					})
				}
				if(this.active == 3) {
					if(this.visitorType == 2 && !this.companyName) {
						uni.showToast({ title: '请输入企业名称', icon: 'none' });
						return
					}
					if(this.personalEffects.indexOf('其他') > -1 && !this.otherEffects) {
						uni.showToast({ title: '请输入其他物品', icon: 'none' });
						return
					}
					const detail = {
						visitorType: this.visitorType,
						visitors: this.accompanying,
						reason: this.array[this.index],
						companyName: this.companyName,
						visitDate: this.visitDate,
						targetLocation: this.address[this.idx],
						phone: this.phone,
						whence: this.whences[this.whenceIdx],
						lastTouchTime: this.lastTouchTime,
						lastHighRishTime: this.lastHighRishTime,
						arriveWay: this.arriveWays[this.arriveWayIdx],
						personalEffects: JSON.stringify(this.personalEffects),
						otherEffects: this.otherEffects
					}
					this.type !== 'change' && guestThree(detail).then(e=> {
						detail.mainVisitors = [{
							name: this.name,
							idNo: this.idNo
						}]
						e.success && uni.navigateTo({
							url: `/pages/guestInfo/index?detail=${JSON.stringify(detail)}`
						})
					})
					this.type === 'change' && changeGuestThree(detail).then(e=> {
						detail.mainVisitors = [{
							name: this.name,
							idNo: this.idNo
						}]
						e.success && uni.navigateTo({
							url: `/pages/guestInfo/index?detail=${JSON.stringify(detail)}`
						})
					}) 
				}
			},
			selectHandle() {
				this.chekck = !this.chekck
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
			agreeHandle() {
				this.isShow = true
			},
			closeHandle() {
				this.isShow = false
			},
			changeHandle(e) {
				this.visitorType = e.id
				this.companyName = ''
			},
			bindPickerChange(e) {
				this.index = e.target.value
			},
			addressChange(e) {
				this.idx = e.target.value
			},
			whenceChange(e) {
				this.whenceIdx = e.target.value
			},
			arriveWayChange(e) {
				this.arriveWayIdx = e.target.value
			},
			bindChange(e) {
				this.visitDate = e
			},
			lastTouchTimeChange(e) {
				this.lastTouchTime = e
			},
			lastHighRishTimeChange(e) {
				this.lastHighRishTime = e
			},
			addUserHandle() {
				this.accShow = true
			},
			addHandle() {
				if(!this.othserUser) {
					uni.showToast({ title: '请输入姓名', icon: 'none' });
					return
				}
				if(!this.othserSfz) {
					uni.showToast({ title: '请输入身份证', icon: 'none' });
					return
				}
				if(!verSfz(this.othserSfz)) {
					uni.showToast({ title: '身份证格式错误', icon: 'none' });
					return
				}
				this.accompanying.push({name: this.othserUser, idNo: this.othserSfz})
				this.othserUser = '';
				this.othserSfz = '';
				this.accShow = false
			},
			cancleHandle() {
				this.othserUser = '';
				this.othserSfz = '';
				this.accShow = false
			},
			deleteHandle(e, index) {
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
	.otherPeople {
		padding-top: 35rpx;
		.otherPeople_title {
			font-size:34rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(0,0,0,0.7);
			margin-bottom: 25rpx;
		}
		.otherPeople_box {
			width: 582rpx;
			height: 194rpx;
			background-color: rgba(216,216,216,0.2);
			margin-bottom: 35rpx;
			position: relative;
			.otherPeople_box_list {
				width: 100%;
				height: 50%;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding-left: 23rpx;
				font-size:30rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(76,76,76,1);
				.otherPeople_box_list_name {
					width: 150rpx;
					color: #0B8E69;
				}
				.otherPeople_box_list_sfz {
					color: #4C4C4C;
				}
			}
			.otherPeople_box_delete {
				position: absolute;
				width:52rpx;
				height:52rpx;
				background:rgba(255,113,113,1);
				color: #fff;
				font-size: 100rpx;
				top: -26rpx;
				right: -26rpx;
				border-radius: 50%;
				.otherPeople_box_delete_icon {
					position: absolute;
					width:25rpx;
					height:4rpx;
					background:rgba(255,255,255,1);
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
			}
		}
	}
	.personalEffect_box {
		margin-bottom: 15rpx;
	}
</style>
