import router from '@/router';
import store from '@/store';
// 路由白名单
const whiteList = ['/login'];
/**
 * 路由前置
 */
router.beforeEach(async (to, from, next) => {
  // 存在token，进入首页
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/');
    } else {
      // 判断是否存在用户信息
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo');
      }
      next();
    }
  } else {
    // 没有token，进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next('/login');
    }
  }
});
