<template>
  <MainBackground>
    <v-container>
      <h1>Issue book</h1>
      <v-stepper v-model="stepperstep" vertical>
        <v-stepper-step :complete="stepperstep > 1" step="1">
          User Details
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="username"
                  solo
                  label="Username"
                  placeholder="Username"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-btn
                  rounded
                  :loading="userloading"
                  color="primary"
                  block
                  @click="getuser"
                >
                  Search User
                </v-btn>
              </v-col>
            </v-row>
            <v-row v-if="user || false" class="userdata">
              <v-col
                class="flex-md-grow-0"
                cols="12"
                md="auto"
                v-if="userimage"
              >
                <v-avatar rounded size="200" class="ma-auto d-block">
                  <v-img :src="userimage" class="elevation-10" />
                </v-avatar>
              </v-col>
              <v-col cols="12" md="auto">
                <h1 class="name mb-2">{{ user.name }}</h1>
                <h4 class="fname">C/O {{ user.family_name }}</h4>
                <h4 class="email mt-1">
                  <v-icon color="secondary" left>mdi-email</v-icon>
                  {{ user.email }}
                  <v-icon color="info" v-if="user.email_verified === 'true'">
                    mdi-check-decagram
                  </v-icon>
                </h4>
                <h4 class="phone mt-1">
                  <v-icon color="secondary" left>mdi-phone</v-icon>
                  {{ user.phone_number }}
                  <v-icon
                    color="info"
                    v-if="user.phone_number_verified === 'true'"
                  >
                    mdi-check-decagram
                  </v-icon>
                </h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn
                  color="primary"
                  @click="stepperstep = 2"
                  class="mr-5"
                  :disabled="!user"
                >
                  Next
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-stepper-content>

        <v-stepper-step :complete="stepperstep > 2" step="2">
          Book List
        </v-stepper-step>
        <v-stepper-content step="2">
          <v-container>
            <v-row v-for="(transaction, i) in transactions" :key="i">
              <v-col cols="12" v-if="transaction.book">
                <h3>{{ transaction.book.title }}</h3>
              </v-col>
              <v-col cols="12" md="1" class="d-flex align-center">
                <h2>{{ i + 1 }}.</h2>
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  v-model="transaction.barcode"
                  solo
                  label="Barcode"
                  placeholder="Barcode"
                  hide-details
                  @blur="getBookOfBarcode(i)"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-menu
                  v-model="transaction.menuisopen"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="transaction.returnDate"
                      label="Return Date"
                      solo
                      hide-details
                      placeholder="Return Date"
                      append-icon="mdi-calendar"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="transaction.returnDate"
                    no-title
                    @input="transaction.menuisopen = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col offset-md="1">
                <v-btn
                  block
                  color="secondary"
                  @click="
                    transactions.push({
                      barcode: null,
                      returnDate: null,
                      book: null,
                      menuisopen: false
                    })
                  "
                >
                  <v-icon left>mdi-plus</v-icon>
                  Add Book
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="primary" class="mr-5">
                  Submit
                </v-btn>
                <v-btn text @click="stepperstep = 1">Previous</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-stepper-content>
      </v-stepper>
    </v-container>
  </MainBackground>
</template>

<script>
import { mapActions } from "vuex";
import userFields from "../../mixins/userFields";
import { API, Storage } from "aws-amplify";
import { getBarcodeCustom } from "../../graphql/custom";

export default {
  name: "issue",
  data() {
    return {
      stepperstep: 2,
      username: "",
      user: null,
      userimage: null,
      userloading: false,
      transactions: [
        { barcode: null, returnDate: null, book: null, menuisopen: false }
      ]
    };
  },
  mixins: [userFields],
  methods: {
    ...mapActions(["adminQueries"]),
    async getuser() {
      this.userloading = true;
      try {
        const userdata = await this.adminQueries({
          type: "get",
          path: "/getUser",
          params: { username: this.username }
        });
        let user = this.mapUserAttributes(userdata);
        this.userimage = await Storage.get(user.picture);
        this.user = user;
      } catch (e) {
        console.log(e);
      }
      this.userloading = false;
    },
    async getBookOfBarcode(index) {
      let {
        data: { getBarcode: barcodedata }
      } = await API.graphql({
        query: getBarcodeCustom,
        variables: {
          id: this.transactions[index].barcode
        }
      });
      console.log(barcodedata);
      this.transactions[index].book = barcodedata.bookItem.book;
    }
  },
  async mounted() {
    if (this.$route.query.u) {
      this.username = this.$route.query.u;
      await this.getuser();
    }
  }
};
</script>

<style scoped lang="scss">
.userdata {
  color: #205072;

  .name {
    font-size: 4rem;
    line-height: 4rem;
  }

  .fname {
    font-size: 2rem;
  }
}
</style>
