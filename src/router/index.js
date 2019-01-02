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
  mode: 'history',
  routes: [
    { path: '/', name: 'root', component: Home },
    { path: '/calc', name: 'calc', component: Calculator }
  ]
});
