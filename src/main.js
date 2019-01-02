// Vue import
import Vue from 'vue';
// Main app
import App from './App.vue';
// Routing
import router from 'Router';
// Styling
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/styles.scss';
import './registerServiceWorker'

Vue.config.productionTip = false;

// Styling
Vue.use(BootstrapVue);

// Main entry point
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
