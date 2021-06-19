import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import Amplify, { API, DataStore } from "aws-amplify";
import aws_exports from "./aws-exports";

import "./scss/main.scss";
import MainBackground from "./components/MainBackground";

Amplify.configure(aws_exports);
API.configure(aws_exports);
DataStore.configure(aws_exports);

Vue.config.productionTip = false;

Vue.component("MainBackground", MainBackground);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
