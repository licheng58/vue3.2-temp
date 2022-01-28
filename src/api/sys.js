import request from '@/utils/request'

/**
 * @Author licheng
 * @Description 
 * @return 
 * @Date 2022-01-28
 */
export const login = data => {
    return request({
        url: 'sys/login',
        method: 'post',
        data
    })
}