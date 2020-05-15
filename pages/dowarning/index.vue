<template>
	<!-- 处理报警 -->
	<view class="mian_background main_content" >
		<view class="dowar_box">
			<view :class="[
				'self_task_mine_war',
				detail.type == 'red' ? 'self_task_mine_war_red' : detail.type == 'blue' ? 'self_task_mine_war_blue' : detail.type == 'origin' ? 'self_task_mine_war_origin' : ''
			]">
				{{ detail.type == 'red' ? '红色预警' : detail.type == 'blue' ? '蓝色预警' : detail.type == 'origin' ? '橙色预警' : '' }}
			</view>
			<view :class="[
				'self_task_mine_tag',
				detail.type == 'red' ? 'self_task_mine_tag_red' : detail.type == 'blue' ? 'self_task_mine_tag_blue' : detail.type == 'origin' ? 'self_task_mine_tag_origin' : ''
			]"></view>
			<view class="self_task_mine_info">
				<image class="self_task_mine_info_logo" :src="detail.type == 'red' ? '/static/red.png' : detail.type == 'blue' ? '/static/blue.png' : detail.type == 'origin' ? '/static/origin.png' : ''"></image>
				<view>
					<view class="self_task_mine_info_title">{{detail.title}}</view>
					<view class="self_task_mine_info_user">{{detail.detail}}</view>
				</view>
			</view>
			
			<self-input label="报警时间" v-model="warningTime" :disabled='true'></self-input>
			<self-input label="消毒区域" v-model="region" :disabled='true'></self-input>
			<self-input label="消毒方式" v-model="region"></self-input>
		</view>
		<self-button text="提交" @handleClick="okClick" class="nextButton"></self-button>
		<selfTaskColor></selfTaskColor>
	</view>
</template>

<script>
	import selfInput from '@/components/self-input.vue';
	import selfButton from '@/components/self-button.vue';
	
	export default {
		data() {
			return {
				detail: null,
				warningTime: '2020/04/29 10:01:11',
				region: '一号公路'
			}
		},
		components: {
			selfInput,
			selfButton
		},
		onLoad(options) {
			let { detail } = options;
			if(detail) {
				detail = JSON.parse(detail);
				console.log('detail', detail)
				this.detail = detail;
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.dowar_box {
		position: relative;
		width:656rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 2rpx 10rpx 0rpx rgba(215,215,215,0.5);
		border-radius:26rpx;
		padding:0 30rpx 40rpx 30rpx;
		box-sizing: border-box;
		.self_task_mine_war {
			position: absolute;
			top: 30rpx;
			right: 30rpx;
			font-size:28rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			&.self_task_mine_war_red {
				color: #EC2A00;
			}
			&.self_task_mine_war_blue {
				color: #355DC6;
			}
			&.self_task_mine_war_origin {
				color: #EC6800;
			}
		}
		.self_task_mine_tag{
			width:108rpx;
			height:7rpx;
			margin-bottom: 26rpx;
			&.self_task_mine_tag_red {
				background-color: #EC2A00;
			}
			&.self_task_mine_tag_blue {
				background-color: #355DC6;
			}
			&.self_task_mine_tag_origin {
				background-color: #EC6800;
			}
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
				height: 44rpx;
				width: 44rpx;
				margin-right: 26rpx;
			}
			.self_task_mine_info_title {
				font-size:32rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(34,34,34,1);
				margin-bottom: 4rpx;
			}
			.self_task_mine_info_user {
				font-size:28rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(168,168,168,1);
			}
		}
	}
	.nextButton {
		margin: 70rpx 0 150rpx 0;
	}
</style>
