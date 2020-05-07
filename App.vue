<script>
	export default {
		globalData: {
			baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://localhost:4000'
		},
		onLaunch: function() {
			uni.getProvider({
				service: 'oauth',
				success: function(provider) {
					console.log('provider---------', provider)
					uni.login({
						provider: 'weixin',
						success: function(loginRes) {
							console.log('loginRes-----------', loginRes);
						}
					});
				}
			});
			
			
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
