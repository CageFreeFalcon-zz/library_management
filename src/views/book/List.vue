<template>
  <MainBackground>
    <v-container>
      <v-row>
        <v-col>
          <h1>Books List</h1>
        </v-col>
        <v-col>
          <v-text-field
            solo
            hide-details
            rounded
            v-model="search"
            class="mx-4"
            placeholder="Search Book"
            label="Search Book"
            append-outer-icon="mdi-account-search"
            @click:append-outer="searchclick"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="books"
            :loading="loading"
            class="elevation-1"
            @click:row="showdetails($event)"
            disable-sort
            disable-pagination
            hide-default-footer
          >
            <template v-slot:header.name="{ header }">
              {{ header.text.toUpperCase() }}
            </template>
          </v-data-table>
          <v-dialog v-model="dialog" max-width="600px">
            <v-card outlined>
              <v-card-title class="text-h5">
                Book
                <v-spacer />
                <v-btn small color="primary" @click="edit" v-if="!edit_active">
                  Edit
                </v-btn>
                <v-btn icon color="primary" @click="cancel" class="ml-4">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text v-if="book" class="pb-0">
                <v-container class="px-0">
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        disabled
                        outlined
                        hide-details
                        label="ISBN"
                        placeholder="ISBN"
                        v-model="book.id"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        :disabled="!edit_active"
                        outlined
                        hide-details
                        label="Title"
                        placeholder="Title"
                        v-model="book.title"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        :disabled="!edit_active"
                        outlined
                        hide-details
                        label="Subject"
                        placeholder="Subject"
                        v-model="book.subject"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        :disabled="!edit_active"
                        outlined
                        hide-details
                        label="Publisher"
                        placeholder="Publisher"
                        v-model="book.publisher"
                      />
                    </v-col>
                    <v-col cols="5">
                      <v-text-field
                        :disabled="!edit_active"
                        outlined
                        hide-details
                        label="Edition"
                        placeholder="Edition"
                        v-model="book.edition"
                      />
                    </v-col>
                    <v-col cols="7">
                      <v-text-field
                        :disabled="!edit_active"
                        outlined
                        hide-details
                        label="Language"
                        placeholder="Language"
                        v-model="book.language"
                      />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        disabled
                        outlined
                        hide-details
                        label="Copies Present"
                        placeholder="Copies Present"
                        v-model="book.copies_present"
                      />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        disabled
                        outlined
                        hide-details
                        label="copies Issued"
                        placeholder="copies Issued"
                        v-model="book.copies_issued"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions v-if="edit_active">
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="cancel">
                  Cancel
                </v-btn>
                <v-btn
                  color="green darken-1"
                  text
                  @click="save"
                  :loading="saving"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </MainBackground>
</template>

<script>
import { API } from "aws-amplify";
// eslint-disable-next-line no-unused-vars
import { listBooks, searchBook } from "../../graphql/queries";
import { updateBook } from "../../graphql/mutations";
import { searchBookCustom } from "../../graphql/custom";

export default {
  name: "List",
  data: () => ({
    search: null,
    loading: false,
    dialog: false,
    token: null,
    book: null,
    oldBook: null,
    edit_active: false,
    saving: false,
    headers: [
      { text: "Title", align: "start", value: "title" },
      { text: "Publisher", value: "publisher" },
      { text: "Edition", value: "edition" },
      { text: "Subject", value: "subject" }
    ],
    books: []
  }),
  methods: {
    searchclick() {},
    showdetails(book) {
      this.dialog = true;
      this.book = book;
    },
    edit() {
      this.oldBook = JSON.parse(JSON.stringify(this.book));
      this.edit_active = true;
    },
    cancel() {
      this.edit_active = false;
      this.dialog = false;
      this.book = null;
      this.oldBook = null;
    },
    async save() {
      this.saving = true;
      let temp = { id: this.book.id };
      for (const bookKey in this.book) {
        if (this.book[bookKey] !== this.oldBook[bookKey]) {
          if (!(bookKey === "BookItems" || bookKey === "Authors")) {
            temp[bookKey] = this.book[bookKey];
          }
        }
      }
      if (Object.keys(temp).length > 1) {
        try {
          await API.graphql({
            query: updateBook,
            variables: {
              input: temp
            }
          });
          this.$swal("saved", "Data Saved", "success");
        } catch (e) {
          this.$swal("Error", e, "error");
        }
      }
      this.saving = false;
    }
  },
  async mounted() {
    try {
      this.loading = true;
      const {
        data: { searchBook: searchedbook }
      } = await API.graphql({
        query: searchBookCustom,
        variables: {
          limit: 1,
          sort: { field: "title", direction: "asc" }
        }
      });
      this.books = searchedbook.items;
      console.log(searchedbook);
      this.loading = false;
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style scoped lang="scss"></style>
