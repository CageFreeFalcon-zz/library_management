<template>
  <div>
    <v-alert
      border="left"
      elevation="12"
      outlined
      text
      color="error"
      v-if="msg"
    >
      {{ this.msg }}
    </v-alert>
    <v-text-field
      height="60"
      rounded
      autofocus
      solo
      label="Username"
      append-icon="fas fa-user"
      type="email"
      v-model="user.email"
    ></v-text-field>
    <v-text-field
      height="60"
      rounded
      solo
      label="Password"
      append-icon="fas fa-key"
      type="password"
      v-model="user.pass"
    ></v-text-field>
    <v-checkbox label="Remember me" class="mt-0 mb-2 ml-6"></v-checkbox>
    <v-btn
      rounded
      color="primary"
      large
      type="submit"
      width="100%"
      v-text="'Sign in'"
      height="60"
      class="grad-btn"
      @click.prevent="csignup"
    ></v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data: () => ({
    user: {
      email: "ghorai.rakesh931998@gmail.com",
      pass: "#Ghorai12$"
    },
    msg: null
  }),
  methods: {
    ...mapActions(["signUp"]),
    async csignup() {
      this.signUp(this.user).then(data => {
        this.msg = data.message;
      });
    }
  }
};
</script>

<style lang="scss"></style>
