<template>
  <MainBackground>
    <v-container>
      <h1>Return book</h1>
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
                  :loading="userloading"
                  @input="getuser"
                />
              </v-col>
            </v-row>
            <v-row v-if="user || false" class="userdata">
              <v-col
                class="flex-md-grow-0"
                cols="12"
                md="auto"
                v-if="userimage"
              >
                <v-avatar
                  rounded
                  size="200"
                  class="ma-auto d-block overflow-visible"
                >
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
          <v-container class="userdata">
            <v-row v-for="(book, i) in books" :key="i">
              <v-col cols="1" class="d-flex align-center">
                <h2>{{ i + 1 }}.</h2>
              </v-col>
              <v-col cols="11" md="5">
                <v-text-field
                  v-model="book.barcode"
                  solo
                  label="Barcode"
                  placeholder="Barcode"
                  hide-details
                  type="number"
                  @input="getTransactionOfBarcode(i)"
                />
              </v-col>
              <v-col cols="11" md="12" offset="1" v-if="book.data">
                <h2>{{ book.data.bookItem.book.title }}</h2>
                <h3>{{ book.data.bookItem.book.subject }}</h3>
                <h3>Publisher - {{ book.data.bookItem.book.publisher }}</h3>
                <h3>Published on - {{ book.data.bookItem.book.edition }}</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="11" offset="1">
                <v-btn
                  block
                  color="secondary"
                  @click="books.push({ barcode: '', data: null })"
                >
                  <v-icon left>mdi-plus</v-icon>
                  Add Book
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn
                  color="primary"
                  class="mr-5"
                  @click="returnBook"
                  :loading="sending"
                >
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
import { API, Storage } from "aws-amplify";
import userFields from "../../mixins/userFields";
import debounce from "debounce";
import { getBarcodeCustom } from "../../graphql/custom";
import { BookStatus, TransactionStatus } from "../../models";
import {
  updateBook,
  updateBookItem,
  updateTransaction
} from "../../graphql/mutations";

export default {
  name: "Return",
  data() {
    return {
      stepperstep: 1,
      username: "",
      user: null,
      userimage: null,
      userloading: false,
      books: [{ barcode: "", data: null }],
      sending: false
    };
  },
  mixins: [userFields],
  methods: {
    ...mapActions(["adminQueries"]),
    reset() {
      this.stepperstep = 1;
      this.username = "";
      this.user = null;
      this.userimage = null;
      this.userloading = false;
      this.books = [{ barcode: "", data: null }];
      this.sending = false;
    },
    async getuser() {
      if (this.username.length === 36) {
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
      }
    },
    async getTransactionOfBarcode(index) {
      try {
        let {
          data: { getBarcode: barcode }
        } = await API.graphql({
          query: getBarcodeCustom,
          variables: {
            id: this.books[index].barcode
          }
        });
        this.books[index].data = barcode;
      } catch (e) {
        this.$swal("Error", JSON.stringify(e), "error");
      }
    },
    async returnBook() {
      this.sending = true;
      try {
        for (const book of this.books) {
          await API.graphql({
            query: updateTransaction,
            variables: {
              input: {
                id: book.data.bookItem.Transactions.items[0].id,
                status: TransactionStatus.RETURNED
              }
            }
          });
          await API.graphql({
            query: updateBookItem,
            variables: {
              input: {
                id: book.data.bookItem.id,
                status: BookStatus.NOTISSUED
              }
            }
          });
          await API.graphql({
            query: updateBook,
            variables: {
              input: {
                id: book.data.bookItem.book.id,
                copies_issued: book.data.bookItem.book.copies_issued - 1
              }
            }
          });
        }
        this.$swal("Success", "Return Successfully", "success");
        this.reset();
      } catch (e) {
        this.$swal("Success", "Return Successfully", "success");
      }
      this.sending = false;
    }
  },
  async mounted() {
    if (this.$route.query.u) {
      this.username = this.$route.query.u;
      try {
        await this.getuser();
      } catch (e) {
        console.log(e);
      }
    }
    this.getuser = debounce(this.getuser, 1000);
    this.getTransactionOfBarcode = debounce(this.getTransactionOfBarcode, 1000);
  }
};
</script>

<style scoped></style>
