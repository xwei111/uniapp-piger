<template>
	<!-- 物资到场登记 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="当前流程" v-model="currentPro" disabled></self-input>
				<self-input label="车牌号" v-model="carNo" disabled></self-input>
				<self-input label="驾驶员" v-model="carUser" disabled></self-input>
				<self-input label="到达地点" v-model="address" disabled></self-input>
				<self-material-box label="物资列表" :dataSource="dataSource"></self-material-box>
			</view>
			<view slot="task">
				<self-input label="登记时间">
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
				<self-button-radio label="车辆中专" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
				<self-input label="车牌号/编号" v-model="carID" placeholder="请输入车牌号/编号"></self-input>
				<view class="car_box" v-for="(item, index) in cars" :key="index">
					<self-input v-model="item.carID" placeholder="请输入车牌号/编号"></self-input>
					<view class="car_box_delete" @click="deleteHandle(index)">
						<icon type="clear" size="16"/>
					</view>
				</view>
				<view class="addUser" >
					<text @click="addUserHandle">+ 新增车牌号</text>
				</view>
			</view>
		</self-task-box>
		<self-button text="提交" @handleClick="okClick" class="nextButton"></self-button>
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
				currentPro: '物资到场登记',
				carNo: '浙A 123',
				carUser: '王五',
				address: '前花园',
				dataSource: [
					{ title: '卷纸', number: '10箱', idno: '0384724-038' },
					{ title: '疫苗', number: '20瓶', idno: '0384724-038' }
				],
				startTime: '',
				dataSource1: [
					{ id: 1, title: '需要' },
					{ id: 2, title: '不需要' }
				],
				active1: 2,
				carID: '',
				cars: []
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
			selectHandle1(e) {
				this.active1 = e.id
			},
			addUserHandle() {
				if(!this.carID || this.cars.some(e=>!e.carID)) {
					uni.showToast({ title: '有未填写的车牌号', icon: 'none' });
					return
				}
				this.cars.push({ carID: '' })
			},
			deleteHandle(index) {
				this.cars.splice(index, 1);
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
</style>
