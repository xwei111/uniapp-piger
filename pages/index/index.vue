<template>
	<view class="content">
		<self-bg src="/static/home.png"></self-bg>
		<self-content>
			<text class='title'>新希望养殖场，欢迎你！</text>
			<self-button text="我是员工" class="button_top" @handleClick="workHandleClick"></self-button>
			<self-button text="我是访客" kind="plain" @handleClick="guestHandleClick"></self-button>
		</self-content>
	</view>
</template>

<script>
	import selfButton from '@/components/self-button.vue';
	import selfBg from '@/components/self-bg.vue';
	import selfContent from '@/components/self-content.vue';
	import { getGuestInfo } from '@/api/login.js';
	
	export default {
		data() {
			return {
			}
		},
		components:{
			selfButton,
			selfBg,
			selfContent
		},
		onLoad() {
			
		},
		methods: {
			workHandleClick() {
				uni.navigateTo({ url: '/pages/workLogin/index' });
			},
			guestHandleClick() {
				getGuestInfo().then(e=> {
					if(e.success) {
						const { data } = e;
						if(data.checkStatus === 0) {
							uni.navigateTo({ url: '/pages/guestFirst/index' });
						} else {
							const detail = {
								visitorType: data.visitorType,
								visitors: data.visitors,
								reason: data.reason,
								companyName: data.companyName,
								visitDate: data.visitDate,
								targetLocation: data.targetLocation,
								phone: data.phone,
								whence: data.whence,
								lastTouchTime: data.lastTouchTime,
								lastHighRishTime: data.lastHighRishTime,
								arriveWay: data.arriveWay,
								personalEffects: data.personalEffects,
								otherEffects: data.otherEffects,
								mainVisitors: [{
									name: data.name,
									idNo: data.idNo
								}],
								checkStatus: data.checkStatus,
								isolation: data.isolation ? data.isolation : '',
								openTime: data.openTime ? data.openTime : ''
							}
							uni.navigateTo({
								url: `/pages/guestInfo/index?detail=${JSON.stringify(detail)}`
							})
						}
					}
				})
				
			},
			workGetuserinfo(e) {
				// if(!e.detail.userInfo) return
				// uni.navigateTo({ url: '/pages/workLogin/index' });
			},
			guestGetuserinfo(e) {
				// if(!e.detail.userInfo) return
				// uni.navigateTo({ url: '/pages/guestFirst/index' });
			}
		}
	}
</script>

<style lang='scss' scoped>
	.content {
		.logo {
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
		}
		.title {
			height:67rpx;
			font-size:48rpx;
			font-family:PingFangSC-Light,PingFang SC;
			font-weight:300;
			color:rgba(53,53,53,1);
			line-height:67rpx;
			margin-bottom: 50rpx;
		}
		.button_top {
			margin-bottom: 44rpx;
		}
	}
</style>
