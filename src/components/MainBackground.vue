<template>
  <v-main
    app
    class="main-background"
    style="background-size: contain !important;"
  >
    <slot />
  </v-main>
</template>

<script>
export default {
  name: "MainBackground",
  mounted() {
    console.log(this.$vuetify);
  }
};
</script>

<style scoped lang="scss"></style>
