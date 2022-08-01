import request from '@/utils/request'

/**
 * 请求图片验证码
 * @param {string} clientToken 随机数请求验证码图片 
 * @returns  promise
 */
export const VerificationCodePicture=(clientToken)=>{
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    method: 'GET',
    responseType: 'arraybuffer'
  })
}
/**
 * 登录请求
 * @param {Object} data 登录基本信息 
 * @returns  promise
 */
export const login=(data)=>{
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}