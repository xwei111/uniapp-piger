<template>
	<!-- 车辆三洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="task">
				<self-input label="计划时间" value="2020-01-02" disabled></self-input>
				<self-input label="采样地点" value=""></self-input>
				<self-input label="记录人">
					<view slot="fill" class="fill_content">
						<picker @change="arriveWayChange" :value="arriveWayIdx" :range="arriveWays">
							<view class="uni-input">{{arriveWays[arriveWayIdx]}}</view>
						</picker>
					</view>
				</self-input>
			</view>
			
			<view class="self_task_basic">车辆信息</view>
			<self-input label="车牌号" value="浙A 123" disabled></self-input>
			<self-button-radio label="采样结果" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
			
			
			<view class="self_task_basic self_user">人员列表</view>
			<view 
				v-for="(item, index) in userList" 
				:key="index" 
				:class="[
					'self_userList',
					index === userList.length - 1 ? 'self_userList_last' : ''
				]"
			>
				{{item.user}}
			</view>
			<self-button-radio label="采样结果" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
			
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
	import selfCheckbox from '@/components/self-checkbox.vue';
	import selfUpLoad from '@/components/self-upLoad.vue';
	
	export default {
		data() {
			return {
				detail: {},
				startTime: '',
				arriveWays: ["A", "B", "C"],
				arriveWayIdx: 0,
				dataSource1: [
					{ id: 1, title: '合格' },
					{ id: 2, title: '不合格' }
				],
				active1: 2,
				userList: [
					{ user: '张三' },
					{ user: '黄四' }
				]
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButtonRadio,
			selfButton,
			timer,
			selfCheckbox,
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
			selectHandle1(e) {
				this.active1 = e.id
			},
			arriveWayChange(e) {
				this.arriveWayIdx = e.target.value
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
	.otherPeople_title {
		display: block;
		height: 48rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.7);
		line-height: 48rpx;
		margin: 24rpx 0 0 0;
		padding: 20rpx 0 20rpx 20rpx;
	}
	.self_task_basic {
		font-size:32rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:rgba(34,34,34,1);
		margin-top: 32rpx;
	}
	.self_user {
		margin-bottom: 40rpx;
	}
	.self_userList {
		width: 582rpx;
		background-color: #f7f7f7;
		font-size: 28rpx;
		color: #999;
		height: 80rpx;
		line-height: 80rpx;
		border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
		box-sizing: border-box;
		padding-left: 40rpx;
	}
	.self_userList_last {
		border: none;
	}
</style>
