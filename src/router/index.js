import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth";
import MyAppBar from "../components/MyAppBar";
import MyNavigationDrawer from "../components/MyNavigationDrawer";

Vue.use(VueRouter);

function layout(viewname) {
  return {
    default: () => import("./../views/" + viewname),
    appBar: MyAppBar,
    drawer: MyNavigationDrawer
  };
}

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    components: layout("Dashboard")
  },
  {
    path: "/books/list",
    name: "BookSearch",
    components: layout("book/List")
  },
  {
    path: "/books/addnew",
    name: "BookAddNew",
    components: layout("book/Addnew")
  },
  {
    path: "/books/issue",
    name: "BookIssue",
    components: layout("book/Issue")
  },
  {
    path: "/users",
    name: "Users",
    components: layout("user/List")
  },
  {
    path: "/users/profile/:username",
    name: "Profile",
    components: layout("user/Profile")
  },
  {
    path: "/barcode/generate",
    name: "BarcodeGenerate",
    components: layout("barcode/Wizard")
  },
  {
    path: "/barcode/layout",
    name: "LabelLayout",
    components: layout("barcode/LabelLayout")
  },
  {
    path: "/barcode/preview",
    name: "PrintPreview",
    components: layout("barcode/PrintPreview")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
