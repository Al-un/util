// Vue import
import Vue from 'vue';
import Router from 'vue-router';
// Vue config
import { baseUrl } from '../../vue.config';
// Components
import Calculator from 'Components/calculator/Calculator';
import Home from 'Components/Home';

// Assign to Vue
Vue.use(Router);

// Router definition
export default new Router({
  // path router instead of hash router
  // https://router.vuejs.org/api/#mode
  mode: 'history',
  // Routes base
  // https://router.vuejs.org/api/#mode
  base: baseUrl,
  // routes defintions
  routes: [
    { path: '/', name: 'root', component: Home },
    { path: '/calc', name: 'calc', component: Calculator }
  ]
});
