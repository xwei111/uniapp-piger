<template>
	<!-- 人员入场审核 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="人员类型" v-model="userKind" disabled></self-input>
				<self-input label="姓名" v-model="name" disabled></self-input>
				<self-input label="当前所在地" v-model="currentAdd" disabled></self-input>
				<self-input label="上次接触猪只时间" v-model="lastPigTime" disabled></self-input>
				<self-input label="上次接触高风险场所时间" v-model="lastDangerTime" disabled></self-input>
				<self-higinfo></self-higinfo>
				<self-input label="来访原因" v-model="comeReason" disabled></self-input>
				<self-input label="预计到达时间" v-model="comeTime" disabled></self-input>
				<view class="otherPeople">
					<view class="otherPeople_title">携带个人物品</view>
					<view v-for="(item, index) in personalEffects" :key="index" class="personalEffect_box" >
						<self-checkbox :chekck="personalEffects.indexOf(item) > -1" @selectHandle="thingsHandle" :label="item"></self-checkbox>
					</view>
					<self-input v-if="personalEffects.indexOf('其他') > -1" placeholder="请输入其他物品" v-model="otherEffects" disabled></self-input>
				</view>
				<self-input label="到达隔离点交通方式" v-model="waykind" disabled></self-input>
				<self-input label="审核人" v-model="okp" disabled></self-input>
			</view>
			<view slot="task">
				<self-button-radio label="审核结果" :dataSource="dataSource1" :active="active1" @selectHandle="selectHandle1"></self-button-radio>
				<self-input v-model="remarks" placeholder="请填写备注内容"></self-input>
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
	import selfHiginfo from '@/components/self-higinfo.vue';
	import selfCheckbox from '@/components/self-checkbox.vue';
	
	export default {
		data() {
			return {
				detail: {},
				userKind: '员工',
				name: '王五',
				comeReason: '休班返厂',
				okp: '李七',
				comeTime: '2020-04-19',
				currentAdd: '梧州',
				lastPigTime: '无',
				lastDangerTime: '无',
				waykind: '步行',
				personalEffectList: ['手机', '眼镜', '其他'],
				otherEffects: '外衣',
				personalEffects: ['手机', '眼镜', '其他'],
				dataSource1: [
					{ id: 1, title: '通过' },
					{ id: 2, title: '不通过' }
				],
				active1: 1,
				remarks: ''
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButtonRadio,
			selfButton,
			selfHiginfo,
			selfCheckbox
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
	.personalEffect_box {
		margin-bottom: 15rpx;
	}
</style>
