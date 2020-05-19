<template>
	<!-- 车辆三洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="车牌号" value="折A 123" disabled></self-input>
				<self-input label="司机" value="小白" disabled></self-input>
				<self-input label="采样地点" value="前花园" disabled></self-input>
			</view>
			<view slot="task">
				<self-input label="采样时间">
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
				<self-upLoad label="打料后料仓盖关好照片" @changeHandle="changeHandle"></self-upLoad>
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
	
	export default {
		data() {
			return {
				detail: {},
				startTime: '',
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButtonRadio,
			selfButton,
			timer,
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
			changeHandle(imgs) {
				console.log('imgs', imgs)
			},
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
</style>
