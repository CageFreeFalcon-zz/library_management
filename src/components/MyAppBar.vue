<template>
  <v-app-bar
    v-if="below_md"
    color="transparent"
    app
    floating
    absolute
    elevation="0"
    class="d-print-none"
  >
    <v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "MyAppBar",
  methods: {
    ...mapMutations(["setDrawerState"]),
    openDrawer() {
      console.log("opening");
      this.setDrawerState(true);
    }
  },
  computed: {
    below_md() {
      return this.$vuetify.breakpoint.mdAndDown;
    }
  },
  watch: {
    below_md(newValue) {
      this.setDrawerState(!newValue);
    }
  }
};
</script>

<style scoped></style>
