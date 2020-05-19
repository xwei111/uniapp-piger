<template>
	<!-- 中转站消毒确认 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="操作人" value="张三" disabled></self-input>
				<self-input label="操作地点" value="中转站" disabled></self-input>
				<self-input label="登记日期" value="2020-01-02" disabled></self-input>
			</view>
			<view slot="task">
				<view v-for="(item, index) in dataSource" :key="index" class="disinfect_list" @click="listClick(item)">
					<view class="otherPeople_box" >
						<view class="otherPeople_box_list">
							<text class="otherPeople_box_list_name">物资名称</text>
							<text class="otherPeople_box_list_sfz">{{item.title}}</text>
						</view>
						<view class="otherPeople_box_list">
							<text class="otherPeople_box_list_name">物资批次</text>
							<text class="otherPeople_box_list_sfz">{{item.idno}}</text>
						</view>
					</view>
					
					<self-input label="物资数量" v-model="item.active1"></self-input>
					<self-input label="消毒方式">
						<view slot="fill" class="fill_content">
							<picker @change="diskindChange" :value="item.diskindIdx" :range="diskinds">
								<view @click="listClick(item)" class="uni-input">{{diskinds[item.diskindIdx]}}</view>
							</picker>
						</view>
					</self-input>
					<self-input label="使用区域">
						<view slot="fill" class="fill_content">
							<picker @change="translateChange" :value="item.translateIdx" :range="translates">
								<view @click="listClick(item)" class="uni-input">{{translates[item.translateIdx]}}</view>
							</picker>
						</view>
					</self-input>
					<self-button-radio label="能否装箱" :dataSource="dataSource2" :active="item.active2" @selectHandle="selectHandle2"></self-button-radio>
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
				dataSource: [
					{ title: '卷纸', number: '10箱', idno: '0384724-038', diskindIdx: 0, active1: '1', translateIdx: 0, active2: 1  },
					{ title: '疫苗', number: '20瓶', idno: '0384724-038', diskindIdx: 0, active1: '1', translateIdx: 0, active2: 1  }
				],
				dataSource2: [
					{ id: 1, title: '装箱' },
					{ id: 2, title: '不装箱' }
				],
				diskinds: ['A', "B", "C"],
				translates: ['红区', '绿区', '橙区'],
				clickData: {}
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
			listClick(e) {
				this.clickData = e
			},
			diskindChange(e) {
				this.clickData.diskindIdx = e.target.value
			},
			translateChange(e) {
				this.clickData.translateIdx = e.target.value
			},
			selectHandle2(e) {
				this.clickData.active2 = e.id
			},
			okClick() {
				console.log('dataSourcedataSource', this.dataSource)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nextButton {
		margin: 70rpx 0 150rpx 0;
	}
	.car_box {
		position: relative;
		.car_box_delete {
			position: absolute;
			top: 50%;
			right: 28rpx;
			transform: translate(0, -50%);
			z-index: 1;
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
	.disinfect_list {
		padding: 30rpx 0;
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
</style>
