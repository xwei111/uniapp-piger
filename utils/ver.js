// 电话
export const verTell = (value) => {
	const reg = /^1[3456789]\d{9}$/;
	return reg.test(value)
}
// 身份证
export const verSfz = (value) => {
	const reg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
	return reg.test(value)
}