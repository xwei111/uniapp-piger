<template>
	<!-- 物资转移待转区 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="操作人" value="张三" disabled></self-input>
				<self-input label="操作地点" value="中转站" disabled></self-input>
				<self-input label="操作时间" value="2020-01-02" disabled></self-input>
			</view>
			<view slot="task">
				<view v-for="(item, index) in dataSource" :key="index" class="disinfect_list" @click="listClick(item)">
					<view class="otherPeople_box" >
						<view class="self_mater_list_child_top">
							<text>{{item.title}}</text>
							<text>{{item.number}}</text>
						</view>
						<view class="self_mater_list_child_bottom">
							批次: {{item.idno}}
						</view>
					</view>
					<self-button-radio label="采样结果" :dataSource="dataSource1" :active="item.active1" @selectHandle="selectHandle1"></self-button-radio>
					<self-input label="移动到">
						<view slot="fill" class="fill_content">
							<picker @change="translateChange" :value="item.translateIdx" :range="translates">
								<view @click="listClick(item)" class="uni-input">{{translates[item.translateIdx]}}</view>
							</picker>
						</view>
					</self-input>
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
					{ title: '卷纸', number: '10箱', idno: '0384724-038', active1: 1, translateIdx: 0 },
					{ title: '疫苗', number: '20瓶', idno: '0384724-038', active1: 1, translateIdx: 0 }
				],
				dataSource1: [
					{ id: 1, title: '合格' },
					{ id: 2, title: '不合格' }
				],
				diskinds: ['A', "B", "C"],
				translates: ['A', 'B', 'C'],
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
			translateChange(e) {
				this.clickData.translateIdx = e.target.value
			},
			selectHandle1(e) {
				this.clickData.active1 = e.id
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
		height: 153rpx;
		background-color: #F5F5F5;
		margin-bottom: 10rpx;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius:10rpx;
		box-sizing: border-box;
		padding: 0 26rpx 0 50rpx;
		.self_mater_list_child_top {
			font-size:32rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(51,51,51,1);
			margin-bottom: 5rpx;
			display: flex;
			justify-content: space-between;
		}
		.self_mater_list_child_bottom {
			font-size:28rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color: #999;
		}
	}
</style>
