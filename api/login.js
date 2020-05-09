import request from '@/utils/request.js';

// 员工登录
export const workerLogin = (params) => {
	return request({
		url: `/h5/user/index/staff_login`,
		params: params,
		method: 'POST'
	}).then(res => res)
}
// 获取手机验证码 
export const getTellCode = (params) => {
	return request({
		url: `/h5/user/wechat/first_verify_phone_step`,
		params: params,
		method: 'POST'
	}).then(res => res)
}
// 员工第一步/h5/user/wechat/first_verify_sms_step
export const workFirst = (params) => {
	return request({
		url: `/h5/user/wechat/first_verify_sms_step`,
		params: params,
		method: 'POST'
	}).then(res => res)
}
// 员工第二步/h5/user/wechat/first_verify_sms_step
export const workSecond = (params) => {
	return request({
		url: `/h5/user/wechat/second_verify_step`,
		params: params,
		method: 'POST'
	}).then(res => res)
}

// 员工第三步 /h5/user/wechat/third_verify_step
export const workThree = (params) => {
	return request({
		url: `/h5/user/wechat/third_verify_step`,
		params: params,
		method: 'POST'
	}).then(res => res)
}
// 查询访客信息 /h5/user/wechat/query_visitor_status
export const getGuestInfo = (params) => {
	return request({
		url: `/h5/user/wechat/query_visitor_status`,
		params: params,
		method: 'POST'
	}).then(res => res)
}

// 访客手机验证码  /h5/user/wechat/first_visitor_phone_step
export const guestGetTellCode = (params) => {
	return request({
		url: `/h5/user/wechat/first_visitor_phone_step`,
		params: params,
		method: 'POST'
	}).then(res => res)
}

// 访客第一步  /h5/user/wechat/first_visitor_sms_step
export const guestFirst = (params) => {
	return request({
		url: `/h5/user/wechat/first_visitor_sms_step`,
		params: params,
		method: 'POST'
	}).then(res => res)
}
// 访客第二步  /h5/user/wechat/second_visitor_step
export const guestSecond = (params) => {
	return request({
		url: `/h5/user/wechat/second_visitor_step`,
		params: params,
		method: 'POST'
	}).then(res => res)
}

// 访客第3步  /h5/user/wechat/third_visitor_step
export const guestThree= (params) => {
	return request({
		url: `/h5/user/wechat/third_visitor_step`,
		params: params,
		method: 'POST'
	}).then(res => res)
}

//访客第3步修改 /h5/user/wechat/update_visitor_info
export const changeGuestThree= (params) => {
	return request({
		url: `/h5/user/wechat/update_visitor_info`,
		params: params,
		method: 'POST'
	}).then(res => res)
}
