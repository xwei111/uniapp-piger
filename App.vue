<script>
	export default {
		globalData: {
			baseUrl: process.env.NODE_ENV === 'development' ? 'http://4bkec15r.xiaomy.net' : 'http://localhost:4000'
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
			
		},
		onHide: function() {
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
