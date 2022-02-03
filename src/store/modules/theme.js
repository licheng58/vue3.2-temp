import { getItem, setItem } from '@/utils/storage';
import { MAIN_COLOR, DEFAULT_COLOR } from '@/contant';
import variables from '@/styles/variables.scss';
export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
    variables: variables,
  }),
  mutations: {
    /**
     * 设置主题色
     */
    setMainColor(state, newColor) {
      state.variables.menuBg = newColor;
      state.mainColor = newColor;
      setItem(MAIN_COLOR, newColor);
    },
  },
};
