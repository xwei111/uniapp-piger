import request from '@/utils/request.js';

export const getTellCode = async () => {
	return request({
		url: `/dw/gw/gr/rkkShhdSbjnmx/getByYear`,
	}).then(res => res)
}