<template>
  <MainBackground>
    <v-container :style="cssVars">
      <v-row class="d-print-none">
        <v-col>
          <h1>Label Layout</h1>
        </v-col>
        <v-col class="pb-0 pt-6">
          <v-slider
            v-model="zoom"
            append-icon="mdi-magnify-plus-outline"
            prepend-icon="mdi-magnify-minus-outline"
            min="0"
            max="3"
            step="0.1"
            :thumb-label="below_md"
            hide-details
            @click:append="() => (this.zoom += 0.1)"
            @click:prepend="() => (this.zoom -= 0.1)"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="justify-space-around d-flex flex-wrap">
          <v-sheet
            :width="convertToPixel(page.width.length, page.width.unit, zoom)"
            :height="convertToPixel(page.height.length, page.height.unit, zoom)"
            class="elevation-5 mb-10 d-flex"
            tile
            v-for="i in parseInt(page.count)"
            :key="i"
          >
            <div
              :style="pageMargins"
              class="d-flex flex-wrap justify-space-between align-content-space-between"
            >
              <v-sheet
                outlined
                rounded
                v-for="i in label.row * label.col"
                :key="i"
                :min-width="
                  convertToPixel(label.width.length, label.width.unit, zoom)
                "
                :min-height="
                  convertToPixel(label.height.length, label.height.unit, zoom)
                "
                class="justify-center d-flex"
              >
                <barcode
                  :value="1000 + Math.floor(Math.random() * 2000)"
                  :width="barcode.width * zoom"
                  :height="barcode.height * zoom"
                  :margin="0"
                  :text-margin="barcode.textMargin * zoom"
                  :font-size="barcode.fontSize * zoom"
                  :margin-top="barcode.marginTop * zoom"
                  :display-value="barcode.showText"
                >
                  Please select the barcode configuration properly
                </barcode>
              </v-sheet>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </MainBackground>
</template>

<script>
import VueBarcode from "vue-barcode";
import { mapGetters } from "vuex";

export default {
  name: "PrintPreview",
  data() {
    return {
      zoom: 0.4,
      barcode: {
        width: 2.3,
        height: 40,
        marginTop: 5,
        fontSize: 11,
        textMargin: 0,
        showText: true
      },
      page: {
        size: "Custom",
        orientation: "portrait",
        count: null,
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
  components: {
    barcode: VueBarcode
  },
  methods: {
    convertToPixel(len, unit = "in", scale = 1) {
      switch (unit) {
        case "in":
          return `${Math.floor(+len * 96) * scale}px`;
        case "cm":
          return this.convertToPixel(len / 2.54, "in", scale);
        case "mm":
          return this.convertToPixel(len / 10, "cm", scale);
      }
    }
  },
  computed: {
    ...mapGetters([
      "getLabelDimension",
      "getPageProps",
      "getPageMargin",
      "getBarcodeProps"
    ]),
    cssVars() {
      return {
        "--label-width": this.convertToPixel(
          this.label.width.length,
          this.label.width.unit
        ),
        "--label-height": this.convertToPixel(
          this.label.height.length,
          this.label.height.unit
        ),
        "--page-width": this.convertToPixel(
          this.page.width.length,
          this.page.width.unit
        ),
        "--page-height": this.convertToPixel(
          this.page.height.length,
          this.page.height.unit
        ),
        "--margin-top": this.convertToPixel(
          this.margin.top.length,
          this.margin.top.unit
        ),
        "--margin-bottom": this.convertToPixel(
          this.margin.bottom.length,
          this.margin.bottom.unit
        ),
        "--margin-left": this.convertToPixel(
          this.margin.left.length,
          this.margin.left.unit
        ),
        "--margin-right": this.convertToPixel(
          this.margin.right.length,
          this.margin.right.unit
        )
      };
    },
    pageMargins() {
      return {
        "margin-top": this.convertToPixel(
          this.margin.top.length,
          this.margin.top.unit,
          this.zoom
        ),
        "margin-bottom": this.convertToPixel(
          this.margin.bottom.length,
          this.margin.bottom.unit,
          this.zoom
        ),
        "margin-left": this.convertToPixel(
          this.margin.left.length,
          this.margin.left.unit,
          this.zoom
        ),
        "margin-right": this.convertToPixel(
          this.margin.right.length,
          this.margin.right.unit,
          this.zoom
        )
      };
    },
    below_md() {
      return this.$vuetify.breakpoint.mdAndDown;
    }
  },
  beforeMount() {
    this.barcode = this.getBarcodeProps;
    this.page = this.getPageProps;
    this.label = this.getLabelDimension;
    this.margin = this.getPageMargin;
  }
};
</script>

<style scoped lang="scss">
.page {
  width: var(--page-width);
  height: var(--page-height);
}
</style>
