import { watch } from 'vue';
import store from '@/store';
import i18n from '@/i18n/index';

export function generateTitle(title) {
  return i18n.global.t('msg.route.' + title);
}

/**
 *
 * @param  {...any} cbs 所有的回调
 */
export function watchSwitchLang(...cbs) {
  watch(
    () => store.getters.language,
    () => {
      console.log('语言变化了-----');
      cbs.forEach((cb) => cb(store.getters.language));
    },
  );
}
