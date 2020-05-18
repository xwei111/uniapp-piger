<template>
	<!-- 粪肥任务 -->
	<view class="mian_background main_content">
		<self-start-task :detail="detail">
			<view slot="task">
				<self-input label="任务时间">
					<view slot="fill" class="fill_content">
						<timer
							fields="second"
							start="2010-00-00 00:00:00"
							end="2999-12-30 23:59:59"
							:value="plainTime"
							@change="plainTimeChange"
						></timer>
					</view>
				</self-input>
				<self-input label="出发地" v-model="coms"></self-input>
				<self-input label="目的地" v-model="address"></self-input>
			</view>
			<view slot="car">
				<self-input label="车辆类型" value="物资中转车" disabled></self-input>
				<view v-if="accompanying.length" class="otherPeople">
					<view v-for="(item, index) in accompanying" :key="index" class="otherPeople_box" >
						<view class="otherPeople_box_list">
							<text class="otherPeople_box_list_name">车牌号</text>
							<text class="otherPeople_box_list_sfz">{{item.carIdno}}</text>
						</view>
						<view class="otherPeople_box_list">
							<text class="otherPeople_box_list_name">司机</text>
							<text class="otherPeople_box_list_sfz">{{item.driver}}</text>
						</view>
						<view class="otherPeople_box_delete" @click="deleteHandle(item, index)">
							<view class="otherPeople_box_delete_icon"></view>
						</view>
					</view>
				</view>
				<view class="addUser" v-if="!accShow" >
					<text @click="addUserHandle">+ 新增车辆</text>
				</view>
				<view v-if="accShow">
					<self-input label="车牌号" v-model="carIdno" placeholder="请输入车牌号"></self-input>
					<self-input label="司机">
						<view slot="fill" class="fill_content">
							<picker @change="driversChange" :value="driversidx" :range="drivers">
								<view class="uni-input">{{drivers[driversidx]}}</view>
							</picker>
						</view>
					</self-input>
				</view>
				<view class="addUser" v-if="accShow"  >
					<text @click="addHandle">加入该车辆</text>
					<text @click="cancleHandle">取消</text>
				</view>
			</view>
		</self-start-task>
		<self-button text="提交" @handleClick="okClick" class="nextButton"></self-button>
		<selfTaskColor></selfTaskColor>
	</view>
</template>

<script>
	import selfStartTask from '@/components/self-start-task.vue';
	import selfInput from '@/components/self-input.vue';
	import selfButton from '@/components/self-button.vue';
	import timer from '@/components/timer/index.vue';
	
	export default {
		data() {
			return {
				detail: {},
				plainTime: '',
				coms: '',
				address: '',
				accompanying: [],
				accShow: false,
				othserUser: '',
				othserSfz: '',
				drivers: ["A司机", "B司机", "C司机"],
				driversidx: 0,
				carIdno: ''
			}
		},
		components: {
			selfStartTask,
			selfInput,
			timer,
			selfButton
		},
		onLoad(options) {
			const { detail } = options;
			if(detail) {
				this.detail = JSON.parse(detail);
				console.log('-----', this.detail)
			}
		},
		methods: {
			driversChange(e) {
				this.driversidx = e.target.value
			},
			plainTimeChange(e) {
				this.plainTime = e
			},
			addUserHandle() {
				this.accShow = true
			},
			addHandle() {
				if(!this.carIdno) {
					uni.showToast({ title: '请输入车牌号', icon: 'none' });
					return
				}
				this.accompanying.push({carIdno: this.carIdno, driver: this.drivers[this.driversidx]})
				this.carIdno = '';
				this.driversidx = 0;
				this.accShow = false
			},
			cancleHandle() {
				this.carIdno = '';
				this.driversidx = 0;
				this.accShow = false
			},
			deleteHandle(e, index) {
				this.accompanying.splice(index, 1);
			},
			okClick() {
				alert('a')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nextButton {
		margin: 70rpx 0 150rpx 0;
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
			height: 185rpx;
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
	.addUser {
		font-size:34rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(15,187,135,1);
		padding: 30rpx 0 0 0;
		display: flex;
		justify-content: space-between;
	}
</style>
