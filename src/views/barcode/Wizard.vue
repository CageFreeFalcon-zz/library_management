<template>
  <v-container>
    <v-stepper v-model="steppperstep" vertical>
      <v-stepper-step :complete="steppperstep > 1" step="1">
        Page Properties
      </v-stepper-step>
      <v-stepper-content step="1">
        <v-row>
          <v-col cols="6" class="pb-0">
            <v-select
              :items="sizes"
              label="Page Size"
              outlined
              v-model="page.size"
            ></v-select>
          </v-col>
        </v-row>
        <v-row v-if="page.size !== 'Custom'">
          <v-col cols="6" class="pt-0">
            <v-radio-group v-model="page.orientation" row class="ma-0">
              <template v-slot:label>
                <h4 class="mr-5">Page Orientation</h4>
              </template>
              <v-radio value="portrait">
                <template v-slot:label>
                  <v-icon>$portrait</v-icon>
                </template>
              </v-radio>
              <v-radio value="landscape">
                <template v-slot:label>
                  <v-icon>$landscape</v-icon>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row v-if="page.size === 'Custom'">
          <v-col cols="3" class="py-0">
            <v-text-field
              v-model="page.width.length"
              outlined
              label="Width"
              type="text"
            />
          </v-col>
          <v-col cols="5" class="py-0">
            <v-radio-group
              v-model="page.width.unit"
              dense
              row
              class="ma-0 py-4"
            >
              <v-radio value="in" label="in" />
              <v-radio value="cm" label="cm" />
              <v-radio value="mm" label="mm" />
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row v-if="page.size === 'Custom'">
          <v-col cols="3" class="py-0">
            <v-text-field
              v-model="page.height.length"
              outlined
              label="Height"
              type="text"
            />
          </v-col>
          <v-col cols="5" class="py-0">
            <v-radio-group
              v-model="page.height.unit"
              dense
              row
              class="ma-0 py-4"
            >
              <v-radio value="in" label="in" />
              <v-radio value="cm" label="cm" />
              <v-radio value="mm" label="mm" />
            </v-radio-group>
          </v-col>
        </v-row>
        <v-btn color="primary" @click="steppperstep = 2" class="mr-5"
          >Next
        </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="steppperstep > 2" step="2">
        Label dimension
      </v-stepper-step>
      <v-stepper-content step="2">
        <v-row class="pt-2">
          <v-col cols="3" class="py-0">
            <v-text-field
              v-model="label.width.length"
              outlined
              label="Width"
              type="text"
            />
          </v-col>
          <v-col cols="5" class="py-0">
            <v-radio-group v-model="label.width.unit" row class="ma-0 py-4">
              <v-radio value="in" label="in" />
              <v-radio value="cm" label="cm" />
              <v-radio value="mm" label="mm" />
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="py-0">
            <v-text-field
              v-model="label.height.length"
              outlined
              label="Height"
              type="text"
            />
          </v-col>
          <v-col cols="5" class="py-0">
            <v-radio-group v-model="label.height.unit" row class="ma-0 py-4">
              <v-radio value="in" label="in" />
              <v-radio value="cm" label="cm" />
              <v-radio value="mm" label="mm" />
            </v-radio-group>
          </v-col>
        </v-row>
        <v-btn color="primary" @click="steppperstep = 3" class="mr-5"
          >Next
        </v-btn>
        <v-btn text @click="steppperstep = 1">Previous</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="steppperstep > 3" step="3">
        Label count
      </v-stepper-step>
      <v-stepper-content step="3">
        <v-row class="pt-2">
          <v-col cols="6" class="py-0">
            <v-text-field
              v-model="label.row"
              outlined
              label="Labels in a row"
              type="text"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="py-0">
            <v-text-field
              v-model="label.col"
              outlined
              label="Labels in a column"
              type="text"
            />
          </v-col>
        </v-row>
        <v-btn color="primary" class="mr-5" @click="steppperstep = 4"
          >Next</v-btn
        >
        <v-btn text @click="steppperstep = 2">Previous</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="steppperstep > 4" step="4">
        Margins
      </v-stepper-step>
      <v-stepper-content step="4">
        <v-row>
          <v-col
            cols="1"
            class="d-flex justify-center align-center pa-0 mt-10 mb-16 p-relative"
          >
            <div class="margin_link"></div>
            <v-btn
              class="ma-2 white"
              icon
              text
              @click="
                () => (this.margin.linkVertical = !this.margin.linkVertical)
              "
            >
              <v-icon v-if="this.margin.linkVertical">fas fa-lock</v-icon>
              <v-icon v-else>fas fa-unlock</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="3" class="py-0">
                <v-text-field
                  v-model="margin.top.length"
                  outlined
                  label="Top"
                  type="number"
                  @change="vertical('top', 'length')"
                />
              </v-col>
              <v-col cols="5" class="py-0">
                <v-radio-group
                  v-model="margin.top.unit"
                  row
                  class="ma-0 py-4"
                  @change="vertical('top', 'unit')"
                >
                  <v-radio value="in" label="in" />
                  <v-radio value="cm" label="cm" />
                  <v-radio value="mm" label="mm" />
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="py-0">
                <v-text-field
                  v-model="margin.bottom.length"
                  outlined
                  label="Bottom"
                  type="number"
                  @change="vertical('bottom', 'length')"
                />
              </v-col>
              <v-col cols="5" class="py-0">
                <v-radio-group
                  v-model="margin.bottom.unit"
                  row
                  class="ma-0 py-4"
                  @change="vertical('bottom', 'unit')"
                >
                  <v-radio value="in" label="in" />
                  <v-radio value="cm" label="cm" />
                  <v-radio value="mm" label="mm" />
                </v-radio-group>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="1"
            class="d-flex justify-center align-center pa-0 mt-10 mb-16 p-relative"
          >
            <div class="margin_link"></div>
            <v-btn
              class="ma-2 white"
              icon
              text
              @click="
                () => (this.margin.linkHorizontal = !this.margin.linkHorizontal)
              "
            >
              <v-icon v-if="this.margin.linkHorizontal">fas fa-lock</v-icon>
              <v-icon v-else>fas fa-unlock</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="3" class="py-0">
                <v-text-field
                  v-model="margin.left.length"
                  outlined
                  label="Left"
                  type="number"
                  @change="horizontal('left', 'length')"
                />
              </v-col>
              <v-col cols="5" class="py-0">
                <v-radio-group
                  v-model="margin.left.unit"
                  row
                  class="ma-0 py-4"
                  @change="horizontal('left', 'unit')"
                >
                  <v-radio value="in" label="in" />
                  <v-radio value="cm" label="cm" />
                  <v-radio value="mm" label="mm" />
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="py-0">
                <v-text-field
                  v-model="margin.right.length"
                  outlined
                  label="Right"
                  type="number"
                  @change="horizontal('right', 'length')"
                />
              </v-col>
              <v-col cols="5" class="py-0">
                <v-radio-group
                  v-model="margin.right.unit"
                  row
                  class="ma-0 py-4"
                  @change="horizontal('right', 'unit')"
                >
                  <v-radio value="in" label="in" />
                  <v-radio value="cm" label="cm" />
                  <v-radio value="mm" label="mm" />
                </v-radio-group>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-btn color="primary" class="mr-5" @click="steppperstep = 5"
          >Next</v-btn
        >
        <v-btn text @click="steppperstep = 3">Previous</v-btn>
      </v-stepper-content>

      <v-stepper-step step="5">
        Requirements
      </v-stepper-step>
      <v-stepper-content step="5">
        <v-row>
          <v-col cols="6" class="pb-0">
            <v-text-field
              v-model="label.count"
              outlined
              label="Labels to print"
              type="number"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="py-0">
            <v-checkbox
              class="mt-0 mb-3"
              v-model="label.remaining"
              label="Print Unused Barcodes"
            />
          </v-col>
        </v-row>
        <v-btn color="primary" @click="showPreview" class="mr-5">Submit</v-btn>
        <v-btn text @click="steppperstep = 4">Previous</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
import router from "../../router";

export default {
  name: "wizard",
  data() {
    return {
      steppperstep: 1,
      units: ["in", "cm", "mm"],
      sizes: ["Letter", "A4", "A3", "Custom"],
      page: {
        size: "Custom",
        orientation: "portrait",
        width: {
          length: 10,
          unit: "in"
        },
        height: {
          length: 10,
          unit: "cm"
        }
      },
      label: {
        row: 3,
        col: 8,
        count: null,
        remaining: true,
        width: {
          length: 10,
          unit: "cm"
        },
        height: {
          length: 10,
          unit: "cm"
        }
      },
      margin: {
        linkVertical: true,
        linkHorizontal: true,
        top: {
          length: 10,
          unit: "cm"
        },
        bottom: {
          length: 10,
          unit: "cm"
        },
        left: {
          length: 10,
          unit: "cm"
        },
        right: {
          length: 10,
          unit: "cm"
        }
      }
    };
  },
  methods: {
    vertical(side, property) {
      if (this.margin.linkVertical) {
        if (side === "top" && property === "length") {
          this.margin.bottom.length = this.margin.top.length;
        } else if (side === "top" && property === "unit") {
          this.margin.bottom.unit = this.margin.top.unit;
        } else if (side === "bottom" && property === "length") {
          this.margin.top.length = this.margin.bottom.length;
        } else if (side === "bottom" && property === "unit") {
          this.margin.top.unit = this.margin.bottom.unit;
        }
      }
    },
    horizontal(side, property) {
      if (this.margin.linkHorizontal) {
        if (side === "left" && property === "length") {
          this.margin.right.length = this.margin.left.length;
        } else if (side === "left" && property === "unit") {
          this.margin.right.unit = this.margin.left.unit;
        } else if (side === "right" && property === "length") {
          this.margin.left.length = this.margin.right.length;
        } else if (side === "right" && property === "unit") {
          this.margin.left.unit = this.margin.right.unit;
        }
      }
    },
    showPreview() {
      let config = {
        page: this.page,
        label: this.label,
        margin: this.margin
      };
      console.log(config);
      router.push({ path: "/barcode/preview", query: config });
    }
  }
};
</script>

<style scoped></style>
