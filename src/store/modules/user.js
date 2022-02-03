import { login, getUserInfo } from '@/api/sys';
import { TOKEN } from '@/contant';
import { setItem, getItem, clearItem } from '@/utils/storage';
import { setTimeStamp } from '@/utils/auth';
import router from '@/router';
// 导入加密文件功能
import md5 from 'md5';

export default {
  namespaced: true,

  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {},
  }),

  mutations: {
    // 保存token
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN, token);
    },

    // 保存用户信息
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },

  actions: {
    // 登陆
    login(context, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password),
        })
          .then((res) => {
            // console.log(res);
            this.commit('user/setToken', res.token);
            // 保存登陆时间
            setTimeStamp();
            // 登陆成功，跳转首页
            router.push('/');
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // 获取用户信息
    async getUserInfo() {
      const res = await getUserInfo();
      // console.log(res);
      this.commit('user/setUserInfo', res);
      return res;
    },

    // 退出
    logout() {
      this.commit('user/setToken', '');
      this.commit('user/setUserInfo', {});
      clearItem();
      router.push('/login');
    },
  },
};
