<template>
	<!-- 车辆三洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="task">
				<self-input label="种源地" value="浙A123" disabled></self-input>
				<self-input label="采样时间" value="2020-01-02" disabled></self-input>
				<self-input label="计划时间" value="2020-01-02" disabled></self-input>
				<self-input label="操作人">
					<view slot="fill" class="fill_content">
						<picker @change="arriveWayChange" :value="arriveWayIdx" :range="arriveWays">
							<view class="uni-input">{{arriveWays[arriveWayIdx]}}</view>
						</picker>
					</view>
				</self-input>
			</view>
			<view class="self_task_basic">进猪台洗消</view>
			<self-input label="进猪台" value="1号进猪口" disabled></self-input>
			<self-input label="消毒方式">
				<view slot="fill" class="fill_content">
					<picker @change="arriveWayChange" :value="arriveWayIdx" :range="arriveWays">
						<view class="uni-input">{{arriveWays[arriveWayIdx]}}</view>
					</picker>
				</view>
			</self-input>
			<self-input label="消毒配置" value="1:1000"></self-input>
			<self-input label="消毒时间">
				<view slot="fill" class="fill_content">
					<picker @change="arriveWayChange" :value="arriveWayIdx" :range="arriveWays">
						<view class="uni-input">{{arriveWays[arriveWayIdx]}}</view>
					</picker>
				</view>
			</self-input>
			<self-input label="消毒人员">
				<view slot="fill" class="fill_content">
					<picker @change="arriveWayChange" :value="arriveWayIdx" :range="arriveWays">
						<view class="uni-input">{{arriveWays[arriveWayIdx]}}</view>
					</picker>
				</view>
			</self-input>
			<self-input label="检察人员">
				<view slot="fill" class="fill_content">
					<picker @change="arriveWayChange" :value="arriveWayIdx" :range="arriveWays">
						<view class="uni-input">{{arriveWays[arriveWayIdx]}}</view>
					</picker>
				</view>
			</self-input>
			<self-input label="备注" value="remark"></self-input>
			<self-upLoad label="消毒照片" @changeHandle="changeHandle1"></self-upLoad>
			
			<view class="self_task_basic">进猪台采样</view>
			<self-input label="进猪台" value="1号进猪台" disabled></self-input>
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
				arriveWayIdx: 0
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
</style>
