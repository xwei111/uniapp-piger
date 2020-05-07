const { globalData: { baseUrl } } = getApp();

export default async ({url, method = "GET", params}) => {
	const [error, response] = await uni.request({
		url: `${baseUrl}${url}`,
		method: method,
		data: params,
		timeout: 3000
	})
	if(error) {
		uni.showToast({ title: error.errMsg, icon: 'none' });
		return null
	} else {
		const { statusCode, errMsg, data: { code, data, msg } } = response;
		if(statusCode == 200) {
			if(code == 10000) {
				return data
			} else {
				uni.showToast({ title: msg, icon: 'none' });
				return null
			}
		} else {
			uni.showToast({ title: errMsg, icon: 'none' });
			return null
		}
	}
}