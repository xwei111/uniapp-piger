<template>
	<!-- 饲料车打料前    -->
	<view class="mian_background main_content">
		<self-task-box :detail="detail">
			<view slot="basic">
				<self-input label="当前流程" v-model="currentPro" disabled></self-input>
				<self-input label="车牌号" v-model="carNo" disabled></self-input>
				<self-input label="驾驶员" v-model="carUser" disabled></self-input>
			</view>
			<view slot="task">
				<self-upLoad label="饲料车铅封完整" @changeHandle="changeHandle1"></self-upLoad>
				<self-upLoad label="饲料口末端确认包裹塑料袋" @changeHandle="changeHandle2"></self-upLoad>
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
				currentPro: '饲料车打料前',
				carNo: '浙A 123',
				carUser: '王五',
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
			changeHandle1(imgs1) {
				console.log('imgs1', imgs1)
			},
			changeHandle2(imgs2) {
				console.log('imgs2', imgs2)
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
