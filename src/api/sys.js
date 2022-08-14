import request from '@/utils/request'

/**
 * @Author licheng
 * @Description login
 * @return promise
 * @Date 2022-01-28
 */
export const login = (data) => {
  return request({
    url: 'sys/login',
    method: 'post',
    data,
  })
}

/**
 * @Author licheng
 * @Description 获取用户信息
 * @return promise
 * @Date 2022-01-28
 */
export const getUserInfo = () => {
  return request({
    url: 'sys/profile',
  })
}
