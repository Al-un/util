// Vue import
import Vue from 'vue';
import Router from 'vue-router';
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
  // https://router.vuejs.org/api/#base
  // [ARGH]: copy pasted from vue.config.js. Export does not work
  base: process.env.NODE_ENV === 'production' ? '/utils/' : '/',
  // routes defintions
  routes: [
    { path: '/', name: 'root', component: Home },
    { path: '/calc', name: 'calc', component: Calculator }
  ]
});
