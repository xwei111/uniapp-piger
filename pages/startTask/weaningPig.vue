<template>
	<!-- 引种猪任务 -->
	<view class="mian_background main_content">
		<self-start-task :detail="detail">
			<view slot="task">
				<self-input label="种培场">
					<view slot="fill" class="fill_content">
						<picker @change="pigerAdsChange" :value="pigerAdsidx" :range="pigerAds">
							<view class="uni-input">{{pigerAds[pigerAdsidx]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="计划时间">
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
				<self-input label="目的地">
					<view slot="fill" class="fill_content">
						<picker @change="addressChange" :value="idx" :range="address">
							<view class="uni-input">{{address[idx]}}</view>
						</picker>
					</view>
				</self-input>
			</view>
			<view slot="car">
				<self-input label="车辆类别" value="断奶车" disabled></self-input>
				<self-input label="车牌号">
					<view slot="fill" class="fill_content">
						<picker @change="carIdsChange" :value="carIdsidx" :range="carIds">
							<view class="uni-input">{{carIds[carIdsidx]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="司机">
					<view slot="fill" class="fill_content">
						<picker @change="carIdsChange" :value="carIdsidx" :range="carIds">
							<view class="uni-input">{{carIds[carIdsidx]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="出猪口">
					<view slot="fill" class="fill_content">
						<picker @change="carIdsChange" :value="carIdsidx" :range="carIds">
							<view class="uni-input">{{carIds[carIdsidx]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="卸猪口">
					<view slot="fill" class="fill_content">
						<picker @change="carIdsChange" :value="carIdsidx" :range="carIds">
							<view class="uni-input">{{carIds[carIdsidx]}}</view>
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
	import timer from '@/components/timer/index.vue';
	
	export default {
		data() {
			return {
				detail: {},
				pigerAds: [ "A", "B", "C" ],
				pigerAdsidx: 0,
				plainTime: '',
				address: ['猪场A', '猪场B', '猪场C'],
				idx: 0,
				carIds: ["A", "B", "C"],
				carIdsidx: 1
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
			pigerAdsChange(e) {
				this.pigerAdsidx = e.target.value
			},
			plainTimeChange(e) {
				this.plainTime = e
			},
			addressChange(e) {
				this.idx = e.target.value
			},
			carIdsChange(e) {
				this.carIdsidx = e.target.value
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
			height: 235rpx;
			background-color: rgba(216,216,216,0.2);
			margin-bottom: 35rpx;
			position: relative;
			.otherPeople_box_list {
				width: 100%;
				height: 33.333%;
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
