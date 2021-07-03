<template>
  <MainBackground>
    <v-container>
      <v-row>
        <v-col cols="12" md="auto" order-md="2">
          <v-row>
            <v-col cols="12" sm="auto" md="12">
              <v-avatar
                rounded
                size="200"
                class="ma-auto d-block overflow-visible"
              >
                <v-img :src="dp" class="elevation-10" />
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="auto" md="12" class="d-flex flex-column">
              <v-btn
                color="secondary"
                class="mb-3"
                rounded
                :to="{ path: '/books/issue', query: { u: this.user.sub } }"
                v-if="usergroups['students']"
              >
                <v-icon left>mdi-account</v-icon>
                Issue Book
              </v-btn>
              <v-btn
                color="success"
                class="mb-3"
                rounded
                @click="verifyRequest"
                v-if="usergroups['requests']"
              >
                <v-icon left>mdi-account-check</v-icon>
                Verify
              </v-btn>
              <v-btn
                color="error"
                class=""
                rounded
                @click="cancelRequest"
                v-if="usergroups['requests']"
              >
                <v-icon left>mdi-account-cancel</v-icon>
                Cancel
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          class="highlight_data flex-md-grow-1"
          cols="12"
          md="auto"
          order-md="1"
        >
          <h1 class="name mb-2">{{ user.name }}</h1>
          <h4 class="fname">C/O {{ user.family_name }}</h4>
          <h4 class="email mt-1">
            <v-icon color="secondary" left>mdi-email</v-icon>
            {{ user.email }}
            <v-icon color="info" v-if="user.email_verified === 'true'"
              >mdi-check-decagram
            </v-icon>
          </h4>
          <h4 class="phone mt-1">
            <v-icon color="secondary" left>mdi-phone</v-icon>
            {{ user.phone_number }}
            <v-icon color="info" v-if="user.phone_number_verified === 'true'"
              >mdi-check-decagram
            </v-icon>
          </h4>
          <div class="groups mt-1">
            <v-icon left color="secondary">mdi-account-group</v-icon>
            <v-hover
              v-slot="{ hover }"
              v-for="group in currentGroups"
              :key="group"
            >
              <v-chip
                ripple
                class="font-weight-bold overline"
                :close="hover"
                color="secondary"
                @click:close="removeFromGroup(group)"
              >
                {{ group }}
              </v-chip>
            </v-hover>
            <v-menu
              offset-y
              offset-x
              nudge-left="30"
              nudge-top="10"
              rounded="lg"
              class="d-inline"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  class="font-weight-bold overline"
                  color="secondary"
                  ripple
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-chip>
              </template>

              <v-list dense>
                <v-list-item
                  v-if="!usergroups['librarians']"
                  @click="addUserToGroup('librarians')"
                >
                  <v-list-item-title>Librarians</v-list-item-title>
                </v-list-item>
                <v-list-item
                  v-if="!usergroups['students']"
                  @click="addUserToGroup('students')"
                >
                  <v-list-item-title>Students</v-list-item-title>
                </v-list-item>
                <v-list-item
                  v-if="!usergroups['requests']"
                  @click="addUserToGroup('requests')"
                >
                  <v-list-item-title>Requests</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <v-sheet rounded max-width="470" elevation="5" class="mt-2">
            <v-img :src="card"></v-img>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <h2>
            <v-icon color="secondary" left>mdi-map-marker</v-icon>
            Address Details
          </h2>
          <div class="pl-12">
            <h4 class="email mt-1">
              Street
              <v-icon left color="secondary">mdi-chevron-right</v-icon>
              {{ user.address }}
            </h4>
            <h4 class="email mt-1">
              City
              <v-icon left color="secondary">mdi-chevron-right</v-icon>
              {{ user["custom:city"] }}
            </h4>
            <h4 class="email mt-1">
              PIN
              <v-icon left color="secondary">mdi-chevron-right</v-icon>
              {{ user["custom:pin"] }}
            </h4>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <h2>
            <v-icon color="secondary" left>mdi-school</v-icon>
            Academic Details
          </h2>
          <div class="pl-12">
            <h4 class="email mt-1">
              Course
              <v-icon left color="secondary">mdi-chevron-right</v-icon>
              {{ user["custom:course"] }}
              {{ user["custom:islateral"] === "true" ? "(Lateral)" : "" }}
            </h4>
            <h4 class="email mt-1">
              Department
              <v-icon left color="secondary">mdi-chevron-right</v-icon>
              {{ user["custom:department"] }}
            </h4>
            <h4 class="email mt-1">
              Batch
              <v-icon left color="secondary">mdi-chevron-right</v-icon>
              {{ user["custom:yoa"] }}
            </h4>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </MainBackground>
</template>

<script>
import { Storage } from "aws-amplify";
import { mapActions } from "vuex";
import userField from "../../mixins/userFields";
import router from "../../router";

export default {
  name: "profile",
  mixins: [userField],
  data() {
    return {
      loading: false,
      user: {
        sub: "",
        picture: "",
        name: "",
        email: "",
        email_verified: "",
        phone_number: "",
        phone_number_verified: "",
        family_name: "",
        address: "",
        "custom:city": "",
        "custom:pin": "",
        "custom:course": "",
        "custom:department": "",
        "custom:yoa": "",
        "custom:islateral": "",
        UserStatus: "",
        Enabled: true,
        UserCreateDate: "",
        UserLastModifiedDate: ""
      },
      dp: undefined,
      card: undefined,
      usergroups: {}
    };
  },
  computed: {
    currentGroups() {
      let temp = [];
      this.groups.forEach(group => {
        if (this.usergroups[group]) {
          temp.push(group);
        }
      });
      return temp;
    }
  },
  methods: {
    ...mapActions(["adminQueries"]),
    async removeFromGroup(groupname) {
      try {
        await this.adminQueries({
          type: "post",
          path: "/removeUserFromGroup",
          params: {
            username: this.$route.params.username,
            groupname: groupname
          }
        });
        this.usergroups[groupname] = false;
      } catch (e) {
        console.log(e);
      }
    },
    async addUserToGroup(groupname) {
      try {
        await this.adminQueries({
          type: "post",
          path: "/addUserToGroup",
          params: {
            username: this.$route.params.username,
            groupname: groupname
          }
        });
        this.usergroups[groupname] = true;
      } catch (e) {
        console.log(e);
      }
    },
    async verifyRequest() {
      try {
        await this.adminQueries({
          type: "post",
          path: "/verifyUser",
          params: {
            username: this.user.sub
          }
        });
        console.log("verified");
        this.usergroups["requests"] = false;
        this.usergroups["students"] = true;
      } catch (e) {
        console.log(e);
      }
    },
    async cancelRequest() {
      try {
        await this.adminQueries({
          type: "post",
          path: "/removeUserFromGroup",
          params: {
            username: this.user.sub,
            groupname: "requests"
          }
        });
        this.usergroups["requests"] = false;
      } catch (e) {
        console.log(e);
      }
    },
    issueBook() {
      router.push({ path: "/books/issue", query: { u: this.user.sub } });
    }
  },
  async mounted() {
    this.loading = true;
    try {
      const user = await this.adminQueries({
        type: "get",
        path: "/getUser",
        params: { username: this.$route.params.username }
      });
      const { Groups } = await this.adminQueries({
        type: "get",
        path: "/listGroupsForUser",
        params: { username: this.$route.params.username }
      });
      this.user = this.mapUserAttributes(user);
      this.usergroups = this.mapGroups(Groups);
      this.dp = await Storage.get(this.user.picture);
      this.card = await Storage.get("card/" + this.user.sub + ".png");
    } catch (e) {
      console.log(e);
    }
    this.loading = false;
  }
};
</script>

<style scoped lang="scss">
.highlight_data {
  .name {
    font-size: 4rem;
    line-height: 4rem;
  }

  .fname {
    font-size: 2rem;
  }
}
</style>
