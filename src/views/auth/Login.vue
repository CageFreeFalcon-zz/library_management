<template>
  <div>
    <v-alert outlined text :type="getmsgtype" rounded="pill" v-if="getmessage">
      {{ getmessage }}
    </v-alert>
    <v-text-field
      rounded
      autofocus
      solo
      hide-details
      height="60"
      label="Email"
      placeholder="Email"
      append-icon="fas fa-user"
      type="email"
      class="mb-5"
      v-model="email"
    />
    <v-text-field
      rounded
      solo
      hide-details
      height="60"
      label="Password"
      placeholder="Password"
      append-icon="fas fa-key"
      type="password"
      class="mb-5"
      v-model="password"
    />
    <a @click="forgot" class="text-right d-block mb-5">Forgot password ?</a>
    <v-btn
      rounded
      large
      block
      color="primary"
      type="submit"
      height="60"
      class="grad-btn"
      :loading="getloading"
      @click="signin"
    >
      Sign in
    </v-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Forgot from "./Forgot";

export default {
  name: "Login",
  components: {},
  data: () => ({
    email: "",
    password: ""
  }),
  computed: {
    ...mapGetters(["getloading", "getmsgtype", "getmessage"])
  },
  methods: {
    ...mapMutations(["setAuthState", "setmessage"]),
    ...mapActions(["signIn"]),
    async signin() {
      await this.signIn({
        username: this.email,
        password: this.password
      });
    },
    forgot() {
      this.setmessage({
        message: null,
        type: "error"
      });
      this.setAuthState(Forgot);
    }
  }
};
</script>

<style lang="scss"></style>
