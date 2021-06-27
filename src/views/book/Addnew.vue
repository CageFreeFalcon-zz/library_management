<template>
  <MainBackground>
    <v-container>
      <h1>Add New book</h1>
      <v-stepper v-model="steppperstep" vertical>
        <v-stepper-step :complete="steppperstep > 1" step="1">
          Search / Add book Title
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-container>
            <v-row>
              <v-col cols="12" md="6" v-if="bookIsPresent">
                <v-autocomplete
                  v-model="book.id"
                  :items="searchedBook"
                  :loading="bookSearchLoading"
                  :search-input.sync="bookSearchInput"
                  clearable
                  cache-items
                  hide-details
                  label="ISBN"
                  item-text="id"
                  item-value="id"
                  solo
                  @input="fillremaining($event)"
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          Type ISBN No To Search OR
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-btn @click="addNewBook" color="primary">
                          Add new book
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </template>
                  <template v-slot:item="{ item }">
                    <v-list-item-avatar
                      color="indigo"
                      class="text-h5 font-weight-light white--text"
                    >
                      <v-icon>mdi-bitcoin</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.id" />
                      <v-list-item-subtitle v-text="item.title" />
                    </v-list-item-content>
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col cols="12" md="6" v-else>
                <v-text-field
                  v-model="book.id"
                  solo
                  label="ISBN"
                  placeholder="ISBN"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="book.title"
                  solo
                  :disabled="bookIsPresent"
                  label="Title"
                  placeholder="Title"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="book.subject"
                  solo
                  :disabled="bookIsPresent"
                  label="subject"
                  placeholder="subject"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="book.publisher"
                  solo
                  :disabled="bookIsPresent"
                  label="publisher"
                  placeholder="Publisher"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="book.language"
                  solo
                  :disabled="bookIsPresent"
                  label="Language"
                  placeholder="Language"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="book.edition"
                  solo
                  :disabled="bookIsPresent"
                  label="Edition"
                  placeholder="Edition"
                  hide-details
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <h2 class="d-inline-block mr-6">Authors</h2>
              </v-col>
              <template v-if="bookIsPresent">
                <v-col cols="12" md="6" v-for="(author, i) in authors" :key="i">
                  <v-text-field
                    v-model="author.name"
                    solo
                    label="Author"
                    :disabled="bookIsPresent"
                    placeholder="Author"
                    hide-details
                  />
                </v-col>
              </template>
              <v-col cols="12" md="6" v-else>
                <v-autocomplete
                  v-model="authors"
                  :items="searchedAuthors"
                  :search-input.sync="authorsearch"
                  hide-details
                  hide-selected
                  multiple
                  clearable
                  cache-items
                  item-text="name"
                  item-value="id"
                  solo
                  chips
                  deletable-chips
                  return-object
                  label="Authors"
                  :disabled="bookIsPresent"
                  placeholder="Authors"
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-content class="pa-0">
                        <v-list-item-title>
                          No match Found Add New Author
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content class="pa-0">
                        <v-list-item-title>
                          <v-text-field
                            v-model="authorsearch"
                            solo-inverted
                            label="Author Name"
                            placeholder="Author Name"
                            hide-details
                          />
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-btn color="primary" @click="addNewAuthor">
                          <v-icon left>mdi-plus</v-icon>
                          Add
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </template>
                </v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="primary" @click="steppperstep = 2" class="mr-5">
                  Next
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-stepper-content>

        <v-stepper-step :complete="steppperstep > 2" step="2">
          Add book and assign barcodes
        </v-stepper-step>
        <v-stepper-content step="2">
          <v-container>
            <v-row v-for="(bookItem, i) in bookitems" :key="i">
              <v-col cols="1" class="d-flex align-center">
                <h2>{{ i + 1 }}.</h2>
              </v-col>
              <v-col cols="11" md="5">
                <v-autocomplete
                  v-model="bookItem.rackid"
                  :items="arrangedRack"
                  :search-input.sync="bookItem.searchRackText"
                  clearable
                  ref="rack"
                  hide-details
                  hide-selected
                  label="Rack"
                  placeholder="Rack"
                  item-text="name"
                  item-value="id"
                  solo
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-title>
                        No match Found Add New Rack
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content class="pa-0">
                        <v-list-item-title class="pa-3">
                          <v-text-field
                            v-model="bookItem.searchRackText"
                            class="elevation-3"
                            solo
                            label="New Rack"
                            placeholder="New Rack"
                            hide-details
                          />
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-btn
                          color="primary"
                          @click="addewRack(i)"
                          :loading="buttonIsLoading"
                        >
                          <v-icon left>mdi-plus</v-icon>
                          Add
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col cols="11" md="6" offset="1" offset-md="0">
                <v-text-field
                  v-model="bookItem.barcode"
                  solo
                  label="Barcode"
                  placeholder="Barcode"
                  hide-details
                  type="number"
                  append-outer-icon="mdi-delete"
                  @click:append-outer="bookitems.splice(i, 1)"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col offset="1">
                <v-btn
                  block
                  color="secondary"
                  @click="
                    bookitems.push({
                      rackid: '',
                      barcodeid: '',
                      searchRackText: ''
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
                <v-btn
                  color="primary"
                  class="mr-5"
                  @click="submitform"
                  :loading="buttonIsLoading"
                >
                  Submit
                </v-btn>
                <v-btn text @click="steppperstep = 1">Previous</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-stepper-content>
      </v-stepper>
    </v-container>
  </MainBackground>
</template>

<script>
import { API } from "aws-amplify";
import { listRacks, searchAuthor, searchBook } from "../../graphql/queries";
import { getBookCustom } from "../../graphql/custom";
import { BarcodeStatus, BookStatus } from "../../models";
import {
  createAuthor,
  createBook,
  createBookAuthor,
  createBookItem,
  createRack,
  updateBarcode,
  updateBook
} from "../../graphql/mutations";

export default {
  name: "Addnew",
  data() {
    return {
      steppperstep: 1,
      bookSearchLoading: false,
      bookIsPresent: true,
      book: {
        id: "",
        title: "",
        subject: "",
        publisher: "",
        language: "",
        edition: "",
        copies_present: 0,
        copies_issued: 0
      },
      authors: [{ id: "", name: "" }],
      authorsearch: "",
      bookSearchInput: "",
      searchedBook: [],
      searchedAuthors: [],
      racks: [],
      buttonIsLoading: false,
      bookitems: [{ rackid: "", barcodeid: "", searchRackText: "" }]
    };
  },
  methods: {
    async addNewAuthor() {
      if (this.authorsearch) {
        try {
          this.buttonIsLoading = true;
          const {
            data: { createAuthor: author }
          } = await API.graphql({
            query: createAuthor,
            variables: {
              input: {
                name: this.authorsearch
              }
            }
          });
          this.authors.push(author);
          this.searchedAuthors.push(author);
          this.authorsearch = "";
          this.buttonIsLoading = false;
        } catch (e) {
          console.log(e);
        }
      }
    },
    async addewRack(index) {
      if (this.bookitems[index].searchRackText) {
        try {
          this.buttonIsLoading = true;
          const {
            data: { createRack: rack }
          } = await API.graphql({
            query: createRack,
            variables: {
              input: {
                name: this.bookitems[index].searchRackText
              }
            }
          });
          console.log(rack);
          this.buttonIsLoading = false;
          this.racks.unshift(rack);
        } catch (e) {
          console.log(e);
        }
      }
    },
    addNewBook() {
      this.bookIsPresent = false;
      this.book.id = this.bookSearchInput;
      this.book.title = "";
      this.book.subject = "";
      this.book.edition = "";
      this.book.language = "";
      this.book.publisher = "";
      this.authors = [];
    },
    async fillremaining(bookid) {
      if (bookid) {
        try {
          const {
            data: { getBook: book }
          } = await API.graphql({
            query: getBookCustom,
            variables: {
              id: bookid
            }
          });
          this.book.title = book.title;
          this.book.subject = book.subject;
          this.book.edition = book.edition;
          this.book.language = book.language;
          this.book.publisher = book.publisher;
          this.book.copies_present = book.copies_present;
          this.authors = book.Authors.items.map(item => {
            return item.author;
          });
          this.bookIsPresent = true;
        } catch (e) {
          console.log(e);
        }
      }
    },
    async submitform() {
      try {
        this.buttonIsLoading = true;
        let bookid = this.book.id.replaceAll("-", "");
        if (!this.bookIsPresent) {
          const {
            data: { createBook: createdbook }
          } = await API.graphql({
            query: createBook,
            variables: {
              input: {
                id: bookid,
                title: this.book.title,
                subject: this.book.subject,
                publisher: this.book.publisher,
                language: this.book.language,
                edition: this.book.edition,
                copies_present: this.book.copies_present,
                copies_issued: this.book.copies_issued
              }
            }
          });
          for (const author of this.authors) {
            await API.graphql({
              query: createBookAuthor,
              variables: {
                input: {
                  bookID: createdbook.id,
                  authorID: author.id
                }
              }
            });
          }
        }
        for (const item of this.bookitems) {
          const {
            data: { createBookItem: BookItem }
          } = await API.graphql({
            query: createBookItem,
            variables: {
              input: {
                status: BookStatus.NOTISSUED,
                rackID: item.rackid,
                bookID: bookid
              }
            }
          });
          await API.graphql({
            query: updateBarcode,
            variables: {
              input: {
                id: item.barcode,
                status: BarcodeStatus.USED,
                bookItemID: BookItem.id
              }
            }
          });
        }
        await API.graphql({
          query: updateBook,
          variables: {
            input: {
              id: this.book.id,
              copies_present: this.bookitems.length + this.book.copies_present
            }
          }
        });
        this.buttonIsLoading = false;
        this.bookIsPresent = true;
        this.book = {
          id: "",
          title: "",
          subject: "",
          publisher: "",
          language: "",
          edition: "",
          copies_present: 0,
          copies_issued: 0
        };
        this.authors = [{ id: "", name: "" }];
        this.bookitems = [{ rackid: "", barcodeid: "", searchRackText: "" }];
      } catch (e) {
        console.log(e);
      }
    }
  },
  computed: {
    arrangedRack() {
      return [{ header: "Available" }, { divider: true }, ...this.racks];
    }
  },
  watch: {
    async bookSearchInput(newValue) {
      let s = "*";
      if (newValue) {
        s = newValue.replaceAll("-", "") + "*";
        this.bookSearchInput = newValue.replaceAll("-", "");
      }
      if (this.bookSearchInput && s.length !== 14) {
        return;
      }
      try {
        this.bookSearchLoading = true;
        console.log("searching");
        const {
          data: {
            searchBook: { items: searchedbook }
          }
        } = await API.graphql({
          query: searchBook,
          variables: {
            filter: {
              id: {
                wildcard: s
              }
            },
            sort: { field: "title", direction: "asc" },
            limit: 10
          }
        });
        this.searchedBook = searchedbook;
        this.bookSearchLoading = false;
      } catch (e) {
        console.log(e);
      }
    },
    async authorsearch(newvalue) {
      if (newvalue) {
        try {
          const {
            data: {
              searchAuthor: { items: searchedauthor }
            }
          } = await API.graphql({
            query: searchAuthor,
            variables: {
              filter: {
                name: {
                  matchPhrasePrefix: newvalue
                }
              },
              sort: { field: "name", direction: "asc" },
              limit: 10
            }
          });
          console.log(searchedauthor);
          this.searchedAuthors = searchedauthor;
        } catch (e) {
          console.log(e);
        }
      }
    }
  },
  async mounted() {
    let token = null;
    try {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const {
          data: {
            listRacks: { items: racks, nextToken }
          }
        } = await API.graphql({
          query: listRacks,
          variables: {
            nextToken: token
          }
        });
        this.racks.push(...racks);
        if (!nextToken) {
          break;
        } else {
          token = nextToken;
        }
      }
      const {
        data: {
          searchAuthor: { items: searchedauthor }
        }
      } = await API.graphql({
        query: searchAuthor,
        variables: {
          sort: { field: "name", direction: "asc" },
          limit: 10
        }
      });
      this.searchedAuthors = searchedauthor;
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style scoped></style>
