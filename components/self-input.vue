<template>
	<view class="self_input_box">
		<text class="self_input_label" v-if="label">{{label}}</text>
		<view :class="[
			'self_inputs',
			status == 'error' ? 'self_inputs-error' : '',
			disabled ? 'self_inputs_disabled' : ''
		]">
			<slot name="prefix"></slot>
			<input ref="input" class="self_input" :placeholder="placeholder" @input="onInput" :value="value" :type="type" :disabled="disabled" />
			<slot name="suffix"></slot>
			<slot name="fill"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				default: ''
			},
			placeholder: {
				type: String,
				default: '请输入'
			},
			status: {
				type: String,
				default: 'default'
			},
			value: {
				type: String,
				default: undefined
			},
			type: {
				type: String,
				default: 'text'
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			onInput(e) {
				this.$emit('input',e.target.value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_input_box {
		display: flex;
		flex-direction: column;

		.self_input_label {
			display: block;
			height: 48rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.7);
			line-height: 48rpx;
			margin: 24rpx 0 0 0;
			padding-left: 20rpx;
		}

		.self_inputs {
			display: flex;
			width: 582rpx;
			height: 94rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 10rpx;
			border: 2rpx solid rgba(11, 142, 105, 1);
			padding-left: 23rpx;
			box-sizing: border-box;
			overflow: hidden;
			align-items: center;
			justify-content: center;
			position: relative;
			margin-top: 24rpx;

			.self_input {
				flex: 1;
				height: 100%;
			}

			&.self_inputs-error {
				border-color: #f00;
			}
			&.self_inputs_disabled {
				border: none;
				background-color: #F5F5F5;
			}
		}

	}
</style>
