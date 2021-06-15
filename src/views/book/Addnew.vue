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
              <v-col cols="12" md="6">
                <v-autocomplete
                  v-model="book.isbn"
                  :items="items"
                  :loading="isLoading"
                  :search-input.sync="search"
                  clearable
                  hide-details
                  hide-selected
                  label="ISBN"
                  solo
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-title>
                        No data found
                      </v-list-item-title>
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
                      <v-list-item-title v-text="item.name" />
                      <v-list-item-subtitle v-text="item.symbol" />
                    </v-list-item-content>
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="book.title"
                  solo
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
                  @click="book.authors.push({ name: '' })"
                >
                  <v-icon dark small left>mdi-plus</v-icon>
                  Add Author
                </v-btn>
              </v-col>
              <template v-for="author in book.authors">
                <v-col cols="12" md="6" :key="author">
                  <v-text-field
                    v-model="author.name"
                    solo
                    label="Author"
                    placeholder="Author"
                    hide-details
                    append-outer-icon="mdi-delete"
                    @click:append-outer="
                      book.authors.splice(book.authors.indexOf(author), 1)
                    "
                  />
                </v-col>
              </template>
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
                  v-model="bookItem.rack"
                  :items="arrangedRack"
                  :loading="isLoading"
                  :search-input.sync="bookItem.searchRackText"
                  clearable
                  hide-details
                  hide-selected
                  label="Rack"
                  placeholder="Rack"
                  solo
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-title>
                        No match Found
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
                        <v-btn color="primary" @click="addnewRack(i)">
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
                  @click="
                    bookitems.push({
                      rack: '',
                      barcode: '',
                      searchRackText: '',
                      newRack: false
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
export default {
  name: "Addnew",
  data() {
    return {
      steppperstep: 1,
      isLoading: false,
      items: [
        { text: "gtedf", value: "HHHF" },
        { text: "gfdg", value: "THJH" }
      ],
      recentracks: [
        {
          text: "Rack 8",
          value: "rack8"
        },
        {
          text: "Rack 5",
          value: "rack5"
        },
        {
          text: "Rack 6",
          value: "rack6"
        },
        {
          text: "Rack 7",
          value: "rack7"
        }
      ],
      racks: [
        {
          text: "Rack 1",
          value: "rack1"
        },
        {
          text: "Rack 2",
          value: "rack2"
        },
        {
          text: "Rack 3",
          value: "rack3"
        },
        {
          text: "Rack 4",
          value: "rack4"
        },
        {
          text: "Rack 7",
          value: "rack7"
        }
      ],
      search: null,
      searchrack: null,
      bookIsPresent: false,
      book: {
        isbn: "",
        title: "",
        subject: "",
        publisher: "",
        language: "",
        edition: "",
        authors: [{ name: "test 1" }, { name: "test 2" }]
      },
      bookitems: [{ rack: "", barcode: "", searchRackText: "", newRack: "" }]
    };
  },
  methods: {
    addnewRack(index) {
      this.racks.unshift({
        text: this.bookitems[index].searchRackText,
        value: this.bookitems[index].searchRackText
          .toLowerCase()
          .replace(/ /g, "")
      });
    }
  },
  computed: {
    arrangedRack() {
      return [
        { header: "Recents" },
        { divider: true },
        ...this.recentracks.slice(0, 3),
        { header: "Available" },
        { divider: true },
        ...this.racks
      ];
    }
  }
};
</script>

<style scoped></style>
