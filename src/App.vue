<template>
  <v-app>
    <router-view name="appBar" />
    <router-view name="drawer" />
    <router-view />
  </v-app>
</template>

<script>
import { onCreateAdminNotification } from "./graphql/subscriptions";
import { API } from "aws-amplify";

export default {
  name: "App",
  data() {
    return {
      sub: null
    };
  },
  async mounted() {
    this.sub = await API.graphql({
      query: onCreateAdminNotification
      // variables: {
      //   owner: "5e186619-31f4-42dc-8c59-a20fe15bae4e"
      // }
    }).subscribe({
      next(value) {
        console.log("next");
        console.log(value);
      },
      error(errorValue) {
        console.log("Error");
        console.log(errorValue);
      },
      start(subscription) {
        console.log("subscription");
        console.log(subscription);
      },
      complete() {
        console.log("completed");
      }
    });
    console.log(this.sub);
  },
  beforeDestroy() {
    this.sub.unsubscribe();
  }
};
</script>

<style lang="scss"></style>
