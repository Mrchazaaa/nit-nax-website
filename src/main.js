import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/bootstrap.min.css';
import Vue from 'vue'
import App from '@/App.vue'
import _ from 'lodash';
import $ from 'jquery';

window.$ = window.jQuery = $;
window._ = _;

require('lightgallery.js');

import {
  jarallax,
  jarallaxElement,
  jarallaxVideo
} from 'jarallax';

window.jarallax = jarallax
window.jarallaxElement = jarallaxElement
window.jarallaxVideo = jarallaxVideo

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
