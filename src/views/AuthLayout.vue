<template>
  <v-main
    app
    class="auth-background"
    style="background-size: contain !important;"
  >
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4" offset-md="1" class="my-16">
          <v-img :src="logo" max-width="350px" class="mx-auto mb-10"></v-img>
          <component :is="getAuthState" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Logo from "../assets/images/logo.svg";
import { mapGetters } from "vuex";

export default {
  name: "Auth",
  data() {
    return {
      logo: Logo
    };
  },
  computed: {
    ...mapGetters(["getAuthState"])
  }
};
</script>

<style scoped></style>
