import { generateColors } from '@/utils/theme'
import { MAIN_COLOR } from '@/contant'
import { getItem } from '@/utils/storage'
const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: (state) => {
    return {
      ...state.theme.variables,
      ...generateColors(getItem(MAIN_COLOR)),
    }
  },

  sidebarOpened: (state) => state.app.sidebarOpened,
  language: (state) => {
    // console.log(state.app.language);
    return state.app.language
  },
  mainColor: (state) => state.theme.mainColor,
  tagsViewList: (state) => state.app.tagsViewList,
  routes: (state) => state.permission.routes,
}
// console.log(getters.cssVar.menuBg);
export default getters
