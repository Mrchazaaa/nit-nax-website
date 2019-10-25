import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/bootstrap.min.css';1
import Vue from 'vue'
import App from '@/App.vue'

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
