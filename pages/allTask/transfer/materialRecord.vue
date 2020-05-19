<template>
	<!-- 物料厂装货登记 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="采样人" value="张三" disabled></self-input>
				<self-input label="采样地点" value="中转沾" disabled></self-input>
				<self-input label="采样时间" value="2020-01-01" disabled></self-input>
			</view>
			<view slot="task">
				<view v-if="accompanying.length" class="otherPeople">
					<!-- <view class="otherPeople_title">其他访客</view> -->
					<view v-for="(item, index) in accompanying" :key="index" class="otherPeople_box" >
						<view class="otherPeople_box_list">
							<text class="otherPeople_box_list_name">物资名称</text>
							<text class="otherPeople_box_list_sfz">{{item.name}}</text>
						</view>
						<view class="otherPeople_box_list">
							<text class="otherPeople_box_list_name">物资批次</text>
							<text class="otherPeople_box_list_sfz">{{item.idNO}}</text>
						</view>
						<view class="otherPeople_box_delete" @click="deleteHandle(item, index)">
							<view class="otherPeople_box_delete_icon"></view>
						</view>
					</view>
				</view>
				
				<view class="addUser" v-if="!accShow" >
					<text @click="addUserHandle">+ 新增物资</text>
				</view>
				<view v-if="accShow">
					<self-input label="物资批次" v-model="idNO"></self-input>
					<self-input label="物资名称" v-model="name"></self-input>
				</view>
				<view class="addUser" v-if="accShow"  >
					<text @click="addHandle">加入该物资</text>
					<text @click="cancleHandle">取消</text>
				</view>
			</view>
		</self-task-box>
		<self-button text="提交" @handleClick="okClick" class="nextButton"></self-button>
		<selfTaskColor></selfTaskColor>
	</view>
</template>

<script>
	import selfTaskBox from '@/components/self-task-box.vue';
	import selfInput from '@/components/self-input.vue';
	import selfButtonRadio from '@/components/self-button-radio.vue';
	import selfButton from '@/components/self-button.vue';
	import timer from '@/components/timer/index.vue';
	import selfUpLoad from '@/components/self-upLoad.vue';
	
	export default {
		data() {
			return {
				detail: {},
				accompanying: [],
				accShow: false,
				idNO: '',
				name: '',
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButtonRadio,
			selfButton,
			timer,
			selfUpLoad
		},
		onLoad(options) {
			const { detail } = options;
			if(detail) {
				this.detail = JSON.parse(detail);
				console.log('-----', this.detail)
			}
		},
		methods: {
			addHandle() {
				if(!this.idNO) {
					uni.showToast({ title: '请输入物资批次', icon: 'none' });
					return
				}
				if(!this.name) {
					uni.showToast({ title: '请输入物资名称', icon: 'none' });
					return
				}
				this.accompanying.push({idNO: this.idNO, name: this.name})
				this.idNO = '';
				this.name = '';
				this.accShow = false
			},
			cancleHandle() {
				this.idNO = '';
				this.name = '';
				this.accShow = false
			},
			addUserHandle() {
				this.accShow = true
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
	.addUser {
		font-size:34rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(15,187,135,1);
		padding: 30rpx 0 0 0;
		display: flex;
		justify-content: space-between;
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
</style>
