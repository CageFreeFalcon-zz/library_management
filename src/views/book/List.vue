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
            disable-sort
            disable-pagination
            hide-default-footer
          >
            <template v-slot:header.name="{ header }">
              {{ header.text.toUpperCase() }}
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </MainBackground>
</template>

<script>
import { API } from "aws-amplify";
// eslint-disable-next-line no-unused-vars
import { listBooks, searchBook } from "../../graphql/queries";

export default {
  name: "List",
  data: () => ({
    search: null,
    loading: false,
    token: null,
    headers: [
      { text: "Title", align: "start", value: "title" },
      { text: "Publisher", value: "publisher" },
      { text: "Edition", value: "edition" },
      { text: "Subject", value: "subject" },
      { text: "Actions", value: "actions" }
    ],
    books: []
  }),
  methods: {
    searchclick() {}
  },
  async mounted() {
    try {
      this.loading = true;
      const {
        data: {
          listBooks: { items: books, nextToken }
        }
      } = await API.graphql({
        query: listBooks,
        variables: {
          limit: 10
        }
      });
      this.token = nextToken;
      this.books = books;
      this.loading = false;
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style scoped lang="scss"></style>
