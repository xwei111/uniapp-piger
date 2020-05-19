<template>
	<!-- 车辆三洗 -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="姓名" value="李白" disabled></self-input>
				<self-input label="离场时间" value="2020-01-02" disabled></self-input>
				<self-input label="离场原因" value="离职" disabled></self-input>
				<self-input label="申请时间" value="2020-03-01" disabled></self-input>
				<self-input label="审核人" value="李四" disabled></self-input>
			</view>
			<view slot="task">
				<self-input label="审核结果">
					<view slot="fill" class="fill_content">
						<picker @change="reansChange" :value="reansindex" :range="reans">
							<view class="uni-input">{{reans[reansindex]}}</view>
						</picker>
					</view>
				</self-input>
				<self-input label="备注" v-model="remark"></self-input>
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
	import selfUpLoad from '@/components/self-upLoad.vue';
	import selfButtonRadio from '@/components/self-button-radio.vue';
	import timer from '@/components/timer/index.vue';
	
	export default {
		data() {
			return {
				detail: {},
				reans: ["A", "B", "c"],
				reansindex: 0,
				remark: ''
			}
		},
		components: {
			selfTaskBox,
			selfInput,
			selfButton,
			selfUpLoad,
			selfButtonRadio,
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
