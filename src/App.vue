<template>
  <v-app>
    <router-view name="appBar" />
    <router-view name="drawer" />
    <router-view />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  data: () => ({}),
  computed: {
    ...mapGetters(["getLayout"])
  },
  methods: {
    ...mapActions(["redirectIfAuthenticated"])
  },
  async beforeMount() {
    await this.redirectIfAuthenticated();
  }
};
</script>

<style lang="scss"></style>
