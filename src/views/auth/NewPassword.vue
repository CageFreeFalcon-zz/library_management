<template>
  <div>
    <v-alert outlined text :type="getmsgtype" rounded="pill" v-if="getmessage">
      {{ getmessage }}
    </v-alert>
    <v-text-field
      rounded
      autofocus
      solo
      height="60"
      label="New Password"
      append-icon="fas fa-key"
      type="password"
      v-model="password"
    ></v-text-field>
    <v-text-field
      rounded
      solo
      height="60"
      label="Re New Password"
      append-icon="fas fa-key"
      type="password"
      v-model="re_password"
    ></v-text-field>
    <v-btn
      rounded
      large
      block
      color="primary"
      type="submit"
      height="60"
      class="grad-btn"
      :loading="getloading"
      @click="createnewpass"
    >
      Create New Password
    </v-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NewPassword",
  components: {},
  data: () => ({
    password: "",
    re_password: ""
  }),
  computed: {
    ...mapGetters(["getloading", "getmsgtype", "getmessage", "getOtp"])
  },
  methods: {
    ...mapActions(["completePassword", "forgotPasswordsubmit"]),
    async createnewpass() {
      if (this.getOtp === "") {
        console.log(this.getOtp);
        console.log("executing complete password");
        await this.completePassword({
          password: this.password,
          re_password: this.re_password
        });
      } else {
        console.log(this.getOtp);
        console.log("executing forgot password");
        await this.forgotPasswordsubmit({
          password: this.password,
          re_password: this.re_password
        });
      }
    }
  }
};
</script>

<style lang="scss"></style>
