import axios from 'axios';
import store from '@/store';
import { ElMessage } from 'element-plus';
import { isCheckTimeout } from '@/utils/auth';
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 项目需要
    config.headers.icode = `256C7B088E4531A6`;
    if (store.getters.token) {
      // 判断token时效性
      if (isCheckTimeout()) {
        // 退出登陆
        store.dispatch('user/logout');
        return Promise.reject(new Error('Token 失效 !'));
      }
      config.headers.Authorization = `Bearer ${store.getters.token}`;
      config.headers['Accept-Language'] = store.getters.language;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    // 响应成功
    // console.log(response);
    const { success, message, data } = response.data;
    if (success) {
      // 业务成功
      return data;
    } else {
      // 业务失败
      ElMessage.error(message);
      return Promise.reject(message);
    }
  },
  (error) => {
    // 响应失败
    // 处理token超时
    if (error.response && error.response.data && error.response.data.code === 401) {
      store.dispatch('user/logout');
    }
    ElMessage.error(error.message);
    return Promise.reject(error);
  },
);
export default service;
