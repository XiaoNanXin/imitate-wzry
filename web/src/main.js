import Vue from 'vue'
import App from './App.vue'
import "./assets/sass/style.scss";
import router from './router'
Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
import './assets/font/iconfont.css'
import Card from './components/Card.vue'
Vue.component('Mcard',Card);
import ListCard from './components/ListCard.vue'
Vue.component('m-list-card',ListCard);

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL:process.env.VUE_APP_API_URL || "/web/api",

})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
