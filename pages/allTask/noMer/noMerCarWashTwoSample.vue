<template>
	<!-- 车辆二洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="车牌号" v-model="carNo" disabled></self-input>
				<self-input label="操作人" value="黄四" disabled></self-input>
				<self-input label="采样地点" value="消洗中心" disabled></self-input>
				
			</view>
			<view slot="task">
				<self-input label="采样时间">
					<view slot="fill" class="fill_content">
						<timer
							fields="second"
							start="2010-00-00 00:00:00"
							end="2999-12-30 23:59:59"
							:value="lastHighRishTime"
							@change="lastHighRishTimeChange"
						></timer>
					</view>
				</self-input>
			</view>
		</self-task-box>
		<self-button text="提交" @handleClick="okClick" class="nextButton"></self-button>
		<selfTaskColor></selfTaskColor>
	</view>
</template>

<script>
	import selfTaskBox from '@/components/self-task-box.vue';
	import selfInput from '@/components/self-input.vue';
	import selfButton from '@/components/self-button.vue';
	import timer from '@/components/timer/index.vue';
	import selfUpLoad from '@/components/self-upLoad.vue';
	
	export default {
		data() {
			return {
				detail: {},
				carNo: '浙A 123',
				carUse: '人员中转',
				lastHighRishTime: ''
			}
		},
		components: {
			selfTaskBox,
			selfInput,
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
			lastHighRishTimeChange(e) {
				this.lastHighRishTime = e
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
