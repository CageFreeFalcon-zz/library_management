<template>
  <component :is="getLayout" />
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
