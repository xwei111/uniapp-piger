<template>
	<!-- 车辆三洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="记录人" v-model="carNo" disabled></self-input>
			</view>
			<view slot="task">
				<self-input label="车牌号">
					<view slot="fill" class="fill_content">
						<picker @change="reansChange" :value="reansindex" :range="reans">
							<view class="uni-input">{{reans[reansindex]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="驾驶员">
					<view slot="fill" class="fill_content">
						<picker @change="reansChange" :value="reansindex" :range="reans">
							<view class="uni-input">{{reans[reansindex]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="进入地点">
					<view slot="fill" class="fill_content">
						<picker @change="reansChange" :value="reansindex" :range="reans">
							<view class="uni-input">{{reans[reansindex]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="进入时间">
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
	
	export default {
		data() {
			return {
				detail: {},
				carNo: '老李',
				startTime: '',
				reans: ["A", "B", "c"],
				reansindex: 0
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButton,
			timer
		},
		onLoad(options) {
			const { detail } = options;
			if(detail) {
				this.detail = JSON.parse(detail);
				console.log('-----', this.detail)
			}
		},
		methods: {
			reansChange(e) {
				this.reansindex = e.target.value;
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
