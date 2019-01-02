// Vue import
import Vue from 'vue';
import Vuex from 'vuex';
// Modules import
import calculator from './modules/calculator';

// Vuex setting
Vue.use(Vuex);

// Vuex definition
const store = new Vuex.Store({
  modules: {
    calculator
  }
});
export default store;
