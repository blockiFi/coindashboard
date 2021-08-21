import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from './router';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import vuetify from './plugins/vuetify';
Vue.use(VueToast , {position : 'top-right'});
Vue.config.productionTip = false
Vue.component('topmenu', require('./components/topmenu.vue').default);
Vue.component('sidebar', require('./components/sidebar.vue').default);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
