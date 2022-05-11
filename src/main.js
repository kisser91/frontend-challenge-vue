import Vue from "vue/dist/vue.js";
import App from "./App.vue";
import { makeServer } from "./server";
import "./index.css";
import state from "./store/state";
import getters from "./store/getters";
import actions from "./store/actions";
import mutations from "./store/mutations";
import Vuex from "vuex";
import "@babel/polyfill";
Vue.config.productionTip = false;

if (process.env.NODE_ENV === "development") makeServer();

//

Vue.use(Vuex);

const store = new Vuex.Store({ state, getters, actions, mutations });

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
