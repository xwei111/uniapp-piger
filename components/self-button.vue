<template>
	<view :class="kind == 'default' ? 'self_default_button' : 'self_plain_button'" @click="handleClick">
		<text v-if="!isUser">{{text}}</text>
		<button 
			v-if="isUser"
			:class="[
				kind == 'default' ? 'self_default_button' : 'self_plain_button',
				'uni_btn'
			]"
			open-type="getUserInfo" 
			@getuserinfo="getuserinfo" 
			withCredentials="true"
		>
			{{text}}
		</button >
	</view>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: '确认'
			},
			kind: {
				type: String,
				default: 'default'
			},
			isUser: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			handleClick() {
				this.$emit('handleClick', this.text)
			},
			getuserinfo(e) {
				this.$emit('getuserinfo', e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_default_button {
		width:582rpx;
		height:94rpx;
		background:$primary-color;
		border-radius:10rpx;
		border:2rpx solid rgba(5,5,5,0.08);
		color: #fff;
		line-height: 94rpx;
		text-align: center;
		font-size:36rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
	}
	.self_plain_button {
		width:582rpx;
		height:94rpx;
		border-radius:10rpx;
		border:2rpx solid rgba(11,142,105,1);
		color:rgba(11,142,105,1);
		line-height: 94rpx;
		text-align: center;
		font-size:36rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
	}
	.uni_btn {
		border: none;
	}
</style>
