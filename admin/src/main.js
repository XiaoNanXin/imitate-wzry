import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import http from './http';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = http

import './style.css'


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
