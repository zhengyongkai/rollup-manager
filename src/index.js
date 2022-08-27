import './package/theme-chalk/index.scss';

import KIcon from './package/components/icon/index';

function install(Vue) {
  Vue.component(KIcon.name, KIcon);
}

export { KIcon };
export default {
  install,
};
