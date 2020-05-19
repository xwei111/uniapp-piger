<template>
	<!-- 物资到场登记 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="记录人" v-model="address" disabled></self-input>
				<self-input label="记录时间">
					<view slot="fill" class="fill_content">
						<timer
							fields="second"
							start="2010-00-00 00:00:00"
							end="2999-12-30 23:59:59"
							:value="startTime"
							@change="startTimeChange"
						></timer>
					</view>
				</self-input>
				<view v-if="accompanying.length" class="otherPeople">
					<view class="otherPeople_title">人员列表</view>
					<view v-for="(item, index) in accompanying" :key="index" class="otherPeople_box" >
						<view class="otherPeople_box_list">
							<text class="otherPeople_box_list_name">姓名</text>
							<text class="otherPeople_box_list_sfz">{{item.name}}</text>
						</view>
						<view class="otherPeople_box_list">
							<text class="otherPeople_box_list_name">进入时间</text>
							<text class="otherPeople_box_list_sfz">{{item.time}}</text>
						</view>
					</view>
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
	import selfMaterialBox from '@/components/self-material-box.vue';
	
	export default {
		data() {
			return {
				detail: {},
				address: '前花园',
				startTime: '',
				cars: [],
				accompanying: [
					{ name: '张三', time: '2018-01-02' },
					{ name: '李四', time: '2018-01-02' }
				]
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButtonRadio,
			selfButton,
			timer,
			selfUpLoad,
			selfMaterialBox
		},
		onLoad(options) {
			const { detail } = options;
			if(detail) {
				this.detail = JSON.parse(detail);
				console.log('-----', this.detail)
			}
		},
		methods: {
			startTimeChange(e) {
				this.startTime = e
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
