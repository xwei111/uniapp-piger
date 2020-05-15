<script>
	export default {
		globalData: {
			baseUrl: process.env.NODE_ENV === 'development' ? 'http://4bkec15r.xiaomy.net' : 'http://4bkec15r.xiaomy.net',
			userInfo: {}
		},
		onLaunch: function() {
			
		},
		onShow: function() {
			const that = this;
			let user = uni.getStorageSync('user');
			if(!user) {
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						uni.request({
							url: `${that.globalData.baseUrl}/h5/user/wechat/auth/${loginRes.code}`,
							success: function(res) {
								if(res.statusCode === 200) {
									const { data } = res;
									if(data.code === 10000) {
										let openid = data.data;
										openid && uni.setStorageSync('user', openid );
									} else {
										uni.showToast({ title: data.msg, icon: 'none' });
									}
								} else {
									uni.showToast({ title: res.errMsg, icon: 'none' });
								}
							}
						})
					}
				});
			}
			// uni.connectSocket({
			//     url: 'ws://localhost:3000',
			// 	success: (e) => console.log('success', e),
			// 	fail: (e) => console.log('fail', e),
			// 	complete: (e) => console.log('complete', e)
			// });
			// uni.onSocketOpen(function (res) {
			//   console.log('WebSocket连接已打开！');
			//   uni.sendSocketMessage({
			//     data: msg
			//   });
			// });
			// uni.onSocketError(function (res) {
			//   console.log('WebSocket连接打开失败，请检查！');
			// });
			// uni.onSocketMessage(function (res) {
			//   console.log('收到服务器内容：' + res.data);
			// });
			// uni.onSocketClose(function (res) {
			//   uni.connectSocket({url: 'ws://localhost:3000'});
			// });
			
			// setTimeout(()=>{
			// 	this.$message.showModel({
			// 		color: 'origin',
			// 		callBack: ()=> {
			// 			uni.navigateTo({
			// 				url: '/pages/mineWarning/index'
			// 			})
			// 		}
			// 	})
			// }, 5000)
		},
		onHide: function() {
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	body {
		background-color: #f7f7f7;
	}
	.main_box {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.mian_background {
		background-color: #f7f7f7;
	}
	.main_content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 40rpx;
	}
	.fill_content{
		width: 100%;
		height:94rpx;
		position: absolute;
		top: 0;
		left: 0;
		background: #fff;
		font-size:34rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(178,178,178,1);
		box-sizing: border-box;
		padding-left: 30rpx;
		line-height: 94rpx;
		z-index: 9;
	}
</style>
