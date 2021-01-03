<template>
  <v-app>
    <v-app-bar
      v-if="below_md"
      color="transparent"
      app
      floating
      absolute
      elevation="0"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      app
      floating
      :temporary="below_md"
      v-model="drawer"
      width="315px"
    >
      <template v-slot:prepend>
        <v-img
          alt="Vuetify logo"
          class="mx-12 mt-6 mb-3"
          :src="logo"
          transition="scale-transition"
        />
        <div
          class="text-h5 text--lighten-3 text-center"
          v-text="'Username'"
        ></div>
        <v-divider />
      </template>

      <template v-slot>
        <v-list shaped>
          <v-list-item-group color="primary">
            <template v-for="item in navigation">
              <v-list-item :key="item.title" :to="item.to">
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </template>

      <template v-slot:append>
        <div class="pb-4 px-2">
          <v-btn block color="primary" rounded elevation="10" @click="logOut">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main
      app
      class="main-background"
      style="background-size: contain !important;"
    >
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import logo from "./../assets/images/logo.svg";
import { mapActions } from "vuex";

export default {
  name: "main",
  data() {
    return {
      logo: logo,
      drawer: true,
      navigation: [
        { icon: "fas fa-home", title: "Home", to: "/" },
        { icon: "fas fa-book", title: "Book", to: "/book" },
        { icon: "fab fa-vuejs", title: "Issue Book", to: "/ggg" },
        { icon: "fas fa-users", title: "Users", to: "/users" },
        { icon: "fas fa-barcode", title: "Generate barcode", to: "/barcode" }
      ]
    };
  },
  methods: {
    ...mapActions(["logOut"])
  },
  computed: {
    below_md() {
      return this.$vuetify.breakpoint.mdAndDown;
    }
  },
  watch: {
    below_md(newValue) {
      this.drawer = !newValue;
    }
  },
  mounted() {
    console.log(this.$vuetify);
  }
};
</script>

<style scoped lang="scss"></style>
