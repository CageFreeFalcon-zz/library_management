import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("./../views/user/List")
  },
  {
    path: "/users/profile/:id",
    name: "Profile",
    component: () => import("./../views/user/profile")
  },
  {
    path: "/barcode",
    name: "Users",
    component: () => import("./../views/barcode/Wizard")
  },
  {
    path: "/barcode/preview",
    name: "Users",
    component: () => import("./../views/barcode/Preview")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
