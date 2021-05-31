import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import ui from "./modules/ui";
import content from "./modules/content.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    ui,
    content
  }
});
