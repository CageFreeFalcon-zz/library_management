import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// eslint-disable-next-line no-unused-vars
import Amplify, { API, Auth, DataStore } from "aws-amplify";
import aws_exports from "./aws-exports";

import "./scss/main.scss";
import MainBackground from "./components/MainBackground";

window.LOG_LEVEL = "DEBUG";

Amplify.register(Auth);
Amplify.register(API);
Amplify.register(DataStore);
Amplify.configure(aws_exports);
console.log(Amplify);

Vue.config.productionTip = false;

Vue.component("MainBackground", MainBackground);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
