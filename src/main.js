import './styles/common.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VModal from 'vue-js-modal';

Vue.config.productionTip = false;

Vue.use(VModal, { dynamic: true, height: 'auto' });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
