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
                  item-text="name"
                  item-value="symbol"
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
                  @click="book.authors.push('')"
                >
                  <v-icon dark small left>mdi-plus</v-icon>
                  Add Author
                </v-btn>
              </v-col>
              <template v-for="i in book.authors.length">
                <v-col cols="12" md="6" :key="i">
                  <v-text-field
                    v-model="book.authors[i - 1]"
                    solo
                    label="Author"
                    placeholder="Author"
                    hide-details
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
            <v-row v-for="(book, i) in bookitems" :key="i">
              <v-col cols="12" md="1" class="d-flex align-center">
                <h2>{{ i + 1 }}.</h2>
              </v-col>
              <v-col cols="12" md="5">
                <v-autocomplete
                  v-model="book.rack"
                  :items="racks"
                  :loading="isLoading"
                  :search-input.sync="searchrack"
                  clearable
                  hide-details
                  hide-selected
                  item-text="name"
                  item-value="symbol"
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
                  </template>
                  <template v-slot:item="{ item }">
                    <v-list-item-content>
                      <v-list-item-title v-text="item" />
                    </v-list-item-content>
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="book.barcode"
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
                  @click="bookitems.push({ rack: '', barcode: '' })"
                >
                  <v-icon left>mdi-plus</v-icon>
                  Add Book
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="primary" @click="steppperstep = 3" class="mr-5">
                  Next
                </v-btn>
                <v-btn text @click="steppperstep = 1">Previous</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-stepper-content>

        <v-stepper-step :complete="steppperstep > 3" step="3">
          Label dimension
        </v-stepper-step>
        <v-stepper-content step="3">
          <v-container>
            <v-row>
              <v-col md="6" class="pb-0">
                <h1>part 1</h1>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="primary" class="mr-5" @click="steppperstep = 4">
                  Next
                </v-btn>
                <v-btn text @click="steppperstep = 2">Previous</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-stepper-content>

        <v-stepper-step :complete="steppperstep > 4" step="4">
          Label count
        </v-stepper-step>
        <v-stepper-content step="4">
          <v-container>
            <v-row>
              <v-col md="6" class="pb-0">
                <h1>part 1</h1>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="primary" class="mr-5" @click="steppperstep = 5">
                  Next
                </v-btn>
                <v-btn text @click="steppperstep = 3">Previous</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-stepper-content>

        <v-stepper-step step="5">
          Requirements
        </v-stepper-step>
        <v-stepper-content step="5">
          <v-container>
            <v-row>
              <v-col md="6" class="pb-0">
                <h1>part 1</h1>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="primary" class="mr-5">
                  Submit
                </v-btn>
                <v-btn text @click="steppperstep = 4">Previous</v-btn>
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
        { name: "gtedf", symbol: "HHHF" },
        { name: "gfdg", symbol: "THJH" }
      ],
      racks: ["rack1", "rack2", "rack3", "rack4"],
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
        authors: ["", "", ""]
      },
      bookitems: [{ rack: "", barcode: "" }]
    };
  }
};
</script>

<style scoped></style>
