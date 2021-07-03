<template>
  <v-navigation-drawer
    app
    floating
    :temporary="below_md"
    v-model="drawer"
    width="315px"
    class="d-print-none"
  >
    <template v-slot:prepend>
      <v-img
        alt="Vuetify logo"
        class="mx-12 mt-6 mb-3"
        :src="logo"
        transition="scale-transition"
      />
      <div class="text-h5 text--lighten-3 text-center font-weight-bold">
        {{ username }}
      </div>
      <v-divider />
    </template>

    <template>
      <v-list shaped>
        <v-list-item to="/dashboard" color="primary">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Home</v-list-item-content>
        </v-list-item>

        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Books</v-list-item-content>
          </template>

          <v-list-item to="/books/list">
            <v-list-item-icon>
              <v-icon>mdi-book-search</v-icon>
            </v-list-item-icon>
            <v-list-item-content>List</v-list-item-content>
          </v-list-item>

          <v-list-item to="/books/addnew">
            <v-list-item-icon>
              <v-icon>mdi-book-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Add New</v-list-item-content>
          </v-list-item>

          <v-list-item to="/books/issue">
            <v-list-item-icon>
              <v-icon>mdi-book-play</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Issue</v-list-item-content>
          </v-list-item>

          <v-list-item to="/books/return">
            <v-list-item-icon>
              <v-icon>mdi-book-play</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Return</v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item to="/users" color="primary">
          <v-list-item-icon>
            <v-icon>mdi-account-supervisor</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Users</v-list-item-content>
        </v-list-item>

        <v-list-item to="/barcode/generate" color="primary">
          <v-list-item-icon>
            <v-icon>mdi-barcode</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Generate Labels</v-list-item-content>
        </v-list-item>
      </v-list>
    </template>

    <template v-slot:append>
      <div class="pb-4 px-2">
        <v-btn
          block
          color="primary"
          rounded
          class="grad-btn elevation-0"
          @click="signOut"
          :loading="getloading"
        >
          Sign out
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import Logo from "../assets/images/logo.svg";
import { mapActions, mapGetters } from "vuex";
import { Auth } from "aws-amplify";

export default {
  name: "MyNavigationDrawer",
  data() {
    return {
      logo: Logo,
      username: null
    };
  },
  computed: {
    ...mapGetters(["getloading"]),
    below_md() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    drawer: {
      get() {
        return this.$store.getters.getDrawerState;
      },
      set(value) {
        this.$store.commit("setDrawerState", value);
      }
    }
  },
  methods: {
    ...mapActions(["signOut"])
  },
  async mounted() {
    let user = await Auth.currentAuthenticatedUser();
    // console.log(user.attributes);
    this.username = user.attributes.name;
    // this.$swal(user);
  }
};
</script>

<style scoped></style>
