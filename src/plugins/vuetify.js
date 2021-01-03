import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

const MY_ICONS = {
  // complete: "...",
  // cancel: "fab fa-vuejs",
  // close: "...",
  // delete: "", // delete (e.g. v-chip close)
  clear: "fas fa-times"
  // success: "...",
  // info: "...",
  // warning: "...",
  // error: "...",
  // prev: "...",
  // next: "...",
  // checkboxOn: "...",
  // checkboxOff: "...",
  // checkboxIndeterminate: "...",
  // delimiter: "...", // for carousel
  // sort: "...",
  // expand: "...",
  // menu: "...",
  // subgroup: "...",
  // dropdown: "...",
  // radioOn: "...",
  // radioOff: "...",
  // edit: "...",
  // ratingEmpty: "...",
  // ratingFull: "...",
  // ratingHalf: "...",
  // loading: "...",
  // first: "...",
  // last: "...",
  // unfold: "...",
  // file: "..."
};

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#56c596",
        secondary: "#205072",
        accent: "#2c6975",
        error: "#f75010",
        info: "#47cacc",
        success: "#7be495",
        warning: "#ffcf5c"
      }
    }
  },
  icons: {
    iconfont: "fa",
    values: MY_ICONS
  }
});
