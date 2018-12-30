import Vue from 'vue'
import App from './App.vue'
import VueLocalStorage from 'vue-localstorage'
import store from './store'
import router from './router'
import http from './http'

Vue.config.productionTip = false;
Vue.use(VueLocalStorage);
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
