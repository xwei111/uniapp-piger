<template>
	<!-- 物资厂采样 -->
	<view class="mian_background main_content">
		<self-start-task :detail="detail">
			<view slot="task">
				<self-input label="物资类型">
					<view slot="fill" class="fill_content">
						<picker @change="taskKindsChange" :value="taskKindsidx" :range="taskKinds">
							<view class="uni-input">{{taskKinds[taskKindsidx]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="出发地">
					<view slot="fill" class="fill_content">
						<picker @change="startAdressChange" :value="startAdressidx" :range="startAdress">
							<view class="uni-input">{{startAdress[startAdressidx]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="目的地">
					<view slot="fill" class="fill_content">
						<picker @change="startAdressChange" :value="startAdressidx" :range="startAdress">
							<view class="uni-input">{{startAdress[startAdressidx]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="操作人" value="王五" disabled></self-input>
				<self-button-radio label="车辆外观是否干净" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
				<self-input label="车牌号/编号">
					<view slot="fill" class="fill_content">
						<picker @change="startAdressChange" :value="startAdressidx" :range="startAdress">
							<view class="uni-input">{{startAdress[startAdressidx]}}</view>
						</picker>
					</view>
				</self-input>
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
	import selfButtonRadio from '@/components/self-button-radio.vue';
	
	export default {
		data() {
			return {
				detail: {},
				taskKinds: ["A", "B", "C"],
				taskKindsidx: 0,
				startAdress: ["A", "B", "C"],
				startAdressidx: 0,
				dataSource1: [
					{ id: 1, title: '需要' },
					{ id: 2, title: '不需要' }
				],
				active1: 2,
			}
		},
		components: {
			selfStartTask,
			selfInput,
			selfButton,
			selfButtonRadio
		},
		onLoad(options) {
			const { detail } = options;
			if(detail) {
				this.detail = JSON.parse(detail);
				console.log('-----', this.detail)
			}
		},
		methods: {
			selectHandle1(e) {
				this.active1 = e.id
			},
			taskKindsChange(e) {
				this.taskKindsidx = e.target.value
			},
			startAdressChange(e) {
				this.startAdressidx = e.target.value
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
