<template>
  <form>
    <v-alert outlined text :type="getmsgtype" rounded="pill" v-if="getmessage">
      {{ getmessage }}
    </v-alert>
    <v-text-field
      rounded
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
    <v-btn
      rounded
      large
      block
      color="primary"
      type="submit"
      height="60"
      class="grad-btn mb-5"
      :loading="getloading"
      @click="forgot"
    >
      Send OTP
    </v-btn>
    <v-btn text rounded color="info" @click="back" class="d-block ma-auto">
      <v-icon dense>mdi-arrow-left</v-icon>
      Back to sign in
    </v-btn>
  </form>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Login from "./Login";

export default {
  name: "Forgot",
  components: {},
  data: () => ({
    email: "",
    loading: false
  }),
  computed: {
    ...mapGetters(["getloading", "getmsgtype", "getmessage"])
  },
  methods: {
    ...mapMutations(["setAuthState", "setmessage"]),
    ...mapActions(["forgotPassword"]),
    async forgot() {
      await this.forgotPassword({ email: this.email });
    },
    back() {
      this.setmessage({
        message: null,
        type: "error"
      });
      this.setAuthState(Login);
    }
  }
};
</script>

<style lang="scss"></style>
