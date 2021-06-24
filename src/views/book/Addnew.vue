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
                  clearable
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
                  clearable
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
                  clearable
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
                  clearable
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
                  clearable
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
                  clearable
                  hide-details
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <h2 class="d-inline-block mr-6">Authors</h2>
                <v-btn
                  color="secondary"
                  small
                  rounded
                  @click="authors.push({ id: '', name: '' })"
                  v-if="!bookIsPresent"
                >
                  <v-icon dark small left>mdi-plus</v-icon>
                  Add Author
                </v-btn>
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
                  cache-items
                  item-text="name"
                  item-value="id"
                  solo
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
              <v-col cols="12" md="1" class="d-flex align-center">
                <h2>{{ i + 1 }}.</h2>
              </v-col>
              <v-col cols="12" md="5">
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
                        <v-btn color="primary" @click="addewRack(i)">
                          <v-icon left>mdi-plus</v-icon>
                          Add
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="bookItem.barcode"
                  solo
                  label="Barcode"
                  placeholder="Barcode"
                  hide-details
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col offset-md="1">
                <v-btn
                  block
                  color="secondary"
                  :loading="buttonIsLoading"
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
                <v-btn color="primary" class="mr-5" @click="submitform">
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
// eslint-disable-next-line no-unused-vars
import { listRacks, searchAuthor, searchBook } from "../../graphql/queries";
import { getBookCustom } from "../../graphql/custom";
import { BarcodeStatus, BookStatus } from "../../models";
// eslint-disable-next-line no-unused-vars
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
      authorsearch: null,
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
      this.buttonIsLoading = true;
    },
    async addewRack(index) {
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
    },
    addNewBook() {
      this.bookIsPresent = false;
      this.book.title = "";
      this.book.subject = "";
      this.book.edition = "";
      this.book.language = "";
      this.book.publisher = "";
      this.authors = [];
    },
    async fillremaining(bookid) {
      if (bookid) {
        const {
          data: { getBook: book }
        } = await API.graphql({
          query: getBookCustom,
          variables: {
            id: bookid
          }
        });
        if (book) {
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
        } else {
          this.book.title = "";
          this.book.subject = "";
          this.book.edition = "";
          this.book.language = "";
          this.book.publisher = "";
          this.authors = [{ name: "" }];
          this.bookIsPresent = false;
        }
      }
    },
    async submitform() {
      let bookid = this.book.id.replaceAll("-", "");
      if (!this.bookIsPresent) {
        const {
          data: { createBook: createdbook }
        } = await API.graphql({
          query: createBook,
          variables: {
            input: {
              id: bookid,
              title: this.book.title.toLowerCase(),
              subject: this.book.subject.toLowerCase(),
              publisher: this.book.publisher.toLowerCase(),
              language: this.book.language.toLowerCase(),
              edition: this.book.edition.toLowerCase(),
              copies_present: this.book.copies_present,
              copies_issued: this.book.copies_issued
            }
          }
        });
        console.log(createdbook);
        for (const author of this.authors) {
          const {
            data: { createBookAuthor: matchbookauthor }
          } = await API.graphql({
            query: createBookAuthor,
            variables: {
              input: {
                bookID: createdbook.id,
                authorID: author.id
              }
            }
          });
          console.log(matchbookauthor);
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
        console.log(BookItem);
        console.log(item.barcode);
        console.log(BarcodeStatus.USED);
        console.log(BookItem.id);
        const {
          data: { updateBarcode: updatedbarcode }
        } = await API.graphql({
          query: updateBarcode,
          variables: {
            input: {
              id: item.barcode,
              status: BarcodeStatus.USED,
              bookItemID: BookItem.id
            }
          }
        });
        console.log(updatedbarcode);
      }
      const {
        data: { updateBook: updatedbook }
      } = await API.graphql({
        query: updateBook,
        variables: {
          input: {
            id: this.book.id,
            copies_present: this.bookitems.length + this.book.copies_present
          }
        }
      });
      console.log(updatedbook);
    }
  },
  computed: {
    arrangedRack() {
      return [{ header: "Available" }, { divider: true }, ...this.racks];
    }
  },
  watch: {
    async bookSearchInput(newValue) {
      this.bookSearchLoading = true;
      let s = "*" + newValue.replaceAll("-", "") + "*";
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
          limit: 10
        }
      });
      this.searchedBook = searchedbook;
      this.bookSearchLoading = false;
    },
    async authorsearch(newvalue) {
      let s = "*" + newvalue + "*";
      const {
        data: {
          searchAuthor: { items: searchedauthor }
        }
      } = await API.graphql({
        query: searchAuthor,
        variables: {
          filter: {
            name: {
              wildcard: s
            }
          },
          limit: 10
        }
      });
      console.log(searchedauthor);
      this.searchedAuthors = searchedauthor;
    }
  },
  async mounted() {
    let token = null;
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
  }
};
</script>

<style scoped></style>
