import Vue from 'vue'
import App from './App.vue'

import jQuery from 'jquery';
global.$ = jQuery;
global.jQuery = jQuery;
require('bootstrap');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
