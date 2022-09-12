import './package/theme-chalk/index.scss';

import KIcon from './package/components/icon/index';
import KButton from './package/components/button';

function install(Vue) {
  Vue.component(KIcon.name, KIcon);
  Vue.component(KButton.name, KButton);
}

export { KIcon, KButton };
export default {
  install,
};
