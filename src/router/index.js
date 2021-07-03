import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/AuthLayout";
import { Auth as auth } from "aws-amplify";
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
    path: "/books/return",
    name: "BookReturn",
    components: layout("book/Return")
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

router.beforeEach(async (to, from, next) => {
  if (to.name === "Auth") {
    try {
      await auth.currentAuthenticatedUser();
      next("/dashboard");
    } catch (e) {
      console.log(e);
      next();
    }
  } else {
    try {
      await auth.currentAuthenticatedUser();
      next();
    } catch (e) {
      console.log(e);
      next("/");
    }
  }
});

export default router;
