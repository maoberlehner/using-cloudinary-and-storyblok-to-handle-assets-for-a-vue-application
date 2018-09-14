import Vue from 'vue';

import App from './App.vue';
import Img from './plugins/img';

Vue.use(Img);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount(`#app`);
