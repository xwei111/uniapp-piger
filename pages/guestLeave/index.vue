<template>
	<view class="mian_background main_content">
		<view class="self_task">
			<view class="self_task_mine_tag" :style="{'background-color': '#88BFFE'}"></view>
			<view class="self_task_mine_info">
				<image class="self_task_mine_info_logo" src="/static/img2.png"></image>
				<view>
					<view class="self_task_mine_info_title">离场申请</view>
				</view>
			</view>
			<self-input label="离场原因">
				<view slot="fill" class="fill_content">
					<picker @change="leaveChange" :value="leaveIdx" :range="leaves">
						<view class="uni-input">{{leaves[leaveIdx]}}</view>
					</picker>
				</view>
			</self-input>
			<self-input label="离场时间">
				<view slot="fill" class="fill_content">
					<timer
						fields="second"
						start="2010-00-00 00:00:00"
						end="2999-12-30 23:59:59"
						:value="leaveTime"
						@change="leaveTimeChange"
					></timer>
				</view>
			</self-input>
		</view>
		<self-button text="提交" @handleClick="okClick" class="nextButton"></self-button>
	</view>
</template>

<script>
	import selfInput from '@/components/self-input.vue';
	import selfButton from '@/components/self-button.vue';
	import timer from '@/components/timer/index.vue';
	
	export default {
		data() {
			return {
				leaves: ["A", "B", "C"],
				leaveIdx: 0,
				leaveTime: ''
			}
		},
		components: {
			selfInput,
			selfButton,
			timer
		},
		methods: {
			leaveChange(e) {
				this.leaveIdx = e.target.value
			},
			leaveTimeChange(e) {
				this.leaveTime = e
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_task {
		position: relative;
		width:656rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 2rpx 10rpx 0rpx rgba(215,215,215,0.5);
		border-radius:26rpx;
		padding:0 30rpx 40rpx 30rpx;
		box-sizing: border-box;
		.self_task_mine_tag{
			width:108rpx;
			height:7rpx;
			background:rgba(15,187,135,1);
			margin-bottom: 26rpx;
		}
		.self_task_mine_info{
			height: 163rpx;
			display: flex;
			box-sizing: border-box;
			padding: 0 10rpx;
			margin-bottom: 38rpx;
			align-items: center;
			padding-bottom: 32rpx;
			border-bottom: 1px solid #D1D1D1;
			.self_task_mine_info_logo {
				height: 83rpx;
				width: 83rpx;
				margin-right: 26rpx;
			}
			.self_task_mine_info_title {
				font-size:32rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(34,34,34,1);
				margin-bottom: 4rpx;
			}
		}
	}
	.nextButton {
		margin: 70rpx 0 150rpx 0;
	}
</style>
