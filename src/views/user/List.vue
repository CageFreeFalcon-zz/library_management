<template>
  <MainBackground>
    <v-container>
      <v-row>
        <v-col>
          <h1>Users List</h1>
        </v-col>
        <v-col>
          <v-text-field
            solo
            hide-details
            rounded
            v-model="search"
            class="mx-4"
            placeholder="Search"
            label="Search"
            append-outer-icon="mdi-account-search"
            @click:append-outer="searchclick"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="users"
            disable-sort
            class="elevation-4 p-relative rounded-lg overflow-hidden"
            :loading="loading"
            loading-text="Please wait......"
            hide-default-footer
            disable-pagination
            @click:row="viewprofile($event)"
          >
            <template v-slot:top>
              <v-tabs v-model="tab">
                <v-tab>Librarians</v-tab>
                <v-tab>Students</v-tab>
                <v-tab>Requests</v-tab>
                <v-tab v-show="showsearchtab">Search</v-tab>
              </v-tabs>
            </template>

            <template v-slot:item.custom:yoa="{ item }">
              <span v-html="academicYear(item)"></span>
            </template>

            <template v-slot:item.actions="{ item }">
              <template v-if="tab === 2">
                <v-btn icon text color="success" @click="confirmRequest(item)">
                  <v-icon>mdi-account-check</v-icon>
                </v-btn>
                <v-btn icon text color="error" @click="cancelRequest(item)">
                  <v-icon>mdi-account-cancel</v-icon>
                </v-btn>
              </template>
            </template>

            <template v-slot:footer>
              <v-pagination
                circle
                total-visible="6"
                :length="pages"
                v-model="page"
              />
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </MainBackground>
</template>

<script>
import { mapActions } from "vuex";
import userData from "@/mixins/userFields";
import router from "../../router";

export default {
  name: "List",
  mixins: [userData],
  data: () => ({
    search: "",
    tab: undefined,
    loading: false,
    showsearchtab: false,
    page: 1,
    token: "",
    items: []
  }),
  methods: {
    ...mapActions(["adminQueries"]),
    async list_users_in_group() {
      this.loading = true;
      try {
        const res = await this.adminQueries({
          type: "get",
          path: "/listUsersInGroup",
          params: {
            groupname: this.groups[this.tab],
            limit: 10,
            token: this.token
          }
        });
        this.items = [
          ...this.items,
          ...res["Users"].map(this.mapUserAttributes)
        ];
        this.token = res["NextToken"] || "";
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
    async search_user() {
      this.loading = true;
      if (!this.search) {
        console.log("Enter name to search");
        this.loading = false;
        return;
      }
      try {
        const res = await this.adminQueries({
          type: "get",
          path: "/listUsers",
          params: {
            filter: 'name ^= "' + this.search + '"',
            token: this.token
          }
        });
        if (!this.token) {
          this.items = res["Users"].map(this.mapUserAttributes);
        } else {
          this.items = [
            ...this.items,
            ...res["Users"].map(this.mapUserAttributes)
          ];
        }
        this.token = res["NextToken"] || "";
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
    searchclick() {
      this.items = [];
      this.showsearchtab = true;
      this.token = "";
      this.page = 1;
      this.tab = 3;
      this.search_user();
    },
    async confirmRequest(user) {
      const index = this.items.indexOf(user);
      try {
        const res = await this.adminQueries({
          type: "post",
          path: "/verifyUser",
          params: {
            username: user.sub
          }
        });
        this.items.splice(index, 1);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    },
    async cancelRequest(user) {
      const index = this.items.indexOf(user);
      try {
        const res = await this.adminQueries({
          type: "post",
          path: "/removeUserFromGroup",
          params: {
            username: user.sub,
            groupname: "requests"
          }
        });
        this.items.splice(index, 1);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    },
    viewprofile(userdata) {
      router.push("/users/profile/" + userdata.sub);
    }
  },
  computed: {
    pages() {
      let pages = Math.ceil(this.items.length / 10);
      if (this.token) {
        return pages + 1;
      }
      return pages;
    },
    users() {
      let start = 10 * (this.page - 1);
      let end = start + 10;
      return this.items.slice(start, end);
    },
    headers() {
      const headers = [
        [
          { text: "Name", align: "start", value: "name" },
          { text: "Email", value: "email" },
          { value: "actions", align: "end" }
        ],
        [
          { text: "Name", align: "start", value: "name" },
          { text: "Email", value: "email" },
          { text: "Year", value: "custom:yoa" },
          { value: "actions", align: "end" }
        ],
        [
          { text: "Name", align: "start", value: "name" },
          { text: "Email", value: "email" },
          { text: "Year", value: "custom:yoa" },
          { value: "actions", align: "end" }
        ],
        [
          { text: "Name", align: "start", value: "name" },
          { text: "Email", value: "email" },
          { text: "Year", value: "custom:yoa" },
          { value: "actions", align: "end" }
        ]
      ];
      return headers[this.tab];
    }
  },
  watch: {
    tab(newValue) {
      this.items = [];
      this.token = "";
      this.page = 1;
      if (newValue !== 3) {
        this.search = "";
        this.showsearchtab = false;
        this.list_users_in_group();
      }
    },
    page(newValue) {
      if (newValue === this.pages && this.token && this.tab !== 3) {
        this.list_users_in_group();
      }
      if (newValue === this.pages && this.token && this.tab === 3) {
        this.search_user();
      }
    }
  },
  mounted() {
    this.tab = 1;
  }
};
</script>

<style scoped lang="scss">
.next_page {
  position: absolute;
  top: 6px;
  right: 10px;
}
</style>
