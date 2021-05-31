import { Auth } from "aws-amplify";
import router from "./../../router";
import Login from "../../views/auth/Login";
import NewPassword from "../../views/auth/NewPassword";
import Otp from "../../views/auth/Otp";

export default {
  state: {
    user: undefined,
    message: undefined,
    msg_type: "error",
    loading: false,
    email: "",
    otp: "",
    authstatus: undefined,
    authstate: Login
  },
  getters: {
    getUser: state => state.user,
    getmessage: state => state.message,
    getmsgtype: state => state.msg_type,
    getloading: state => state.loading,
    getEmail: state => state.email,
    getOtp: state => state.otp,
    getAuthStatus: state => state.authstatus,
    getAuthState: state => state.authstate
  },
  mutations: {
    setuser: (state, payload) => (state.user = payload),
    setmessage: (state, payload) => {
      state.message = payload.message;
      state.msg_type = payload.type;
    },
    setloading: (state, payload) => (state.loading = payload),
    setOtp: (state, payload) => (state.otp = payload),
    setEmail: (state, payload) => (state.email = payload),
    setAuthStatus: (state, payload) => {
      state.authstatus = payload;
      state.email = "";
      state.otp = "";
    },
    setAuthState: (state, payload) => (state.authstate = payload)
  },
  actions: {
    async isLoggedIn(context) {
      try {
        await Auth.currentAuthenticatedUser();
        context.commit("setAuthStatus", true);
        return true;
      } catch (e) {
        context.commit("setAuthStatus", false);
        return false;
      }
    },
    async completePassword(context, payload) {
      context.commit("setloading", true);
      context.commit("setmessage", {
        message: null,
        type: "error"
      });
      try {
        if (payload.password === payload.re_password) {
          const user = await Auth.completeNewPassword(
            context.getters.getUser,
            payload.password
          );
          console.log(user);
          context.commit("setuser", user);
          context.dispatch("loginIfLibrarian", user);
        } else {
          throw Error("password didn't match");
        }
      } catch (error) {
        context.commit("setmessage", {
          message: error.message,
          type: "error"
        });
      }
      context.commit("setloading", false);
    },
    async forgotPassword(context, payload) {
      context.commit("setEmail", payload.email);
      context.commit("setloading", true);
      context.commit("setmessage", {
        message: null,
        type: "error"
      });
      try {
        await Auth.forgotPassword(payload.email);
        context.commit("setmessage", {
          message: "Code send successfully",
          type: "info"
        });
        context.commit("setAuthState", Otp);
      } catch (error) {
        context.commit("setmessage", {
          message: error.message,
          type: "error"
        });
      }
      context.commit("setloading", false);
    },
    async forgotPasswordsubmit(context, payload) {
      context.commit("setloading", true);
      context.commit("setmessage", {
        message: null,
        type: "error"
      });
      try {
        if (payload.password === payload.re_password) {
          await Auth.forgotPasswordSubmit(
            context.state.email,
            context.state.otp,
            payload.password
          );
          context.dispatch("signIn", {
            username: context.state.email,
            password: payload.password
          });
        } else {
          throw Error("Password didn't match");
        }
      } catch (error) {
        console.log(error);
        if (error.code === "CodeMismatchException") {
          context.commit("setAuthState", Otp);
        }
        context.commit("setmessage", {
          message: error.message,
          type: "error"
        });
      }
      context.commit("setloading", false);
    },
    async signIn(context, payload) {
      context.commit("setloading", true);
      context.commit("setmessage", {
        message: null,
        type: "error"
      });
      try {
        const user = await Auth.signIn(payload.username, payload.password);
        console.log(user);
        context.commit("setuser", user);
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          context.commit("setAuthState", NewPassword);
        } else {
          context.dispatch("loginIfLibrarian", user);
        }
      } catch (error) {
        context.commit("setmessage", {
          message: error.message,
          type: "error"
        });
      }
      context.commit("setloading", false);
    },
    async changePassword(context, payload) {
      Auth.currentAuthenticatedUser()
        .then(user => {
          return Auth.changePassword(user, payload.oldpass, payload.newpass);
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    },
    async signOut(context) {
      context.commit("setloading", true);
      try {
        await Auth.signOut();
        context.commit("setAuthStatus", false);
        context.commit("setuser", undefined);
        context.commit("setAuthState", Login);
        await router.push("/");
      } catch (error) {
        context.commit("setmessage", {
          message: error.message,
          type: "error"
        });
      }
      context.commit("setloading", false);
    },
    async loginIfLibrarian(context, payload) {
      const pl = payload.signInUserSession.accessToken.payload;
      let isLibrarian = false;
      if ("cognito:groups" in pl) {
        if (pl["cognito:groups"].includes("librarians")) {
          isLibrarian = true;
        }
      }
      if (isLibrarian) {
        context.commit("setAuthStatus", true);
        context.commit("setAuthState", Login);
        router.push("/dashboard");
      } else {
        context.commit("setmessage", {
          message: "you are not authorized",
          type: "error"
        });
        await context.dispatch("signOut");
      }
    }
  }
};
