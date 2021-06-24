<template>
  <MainBackground>
    <v-container>
      <h1>Label Layout</h1>
      <v-row justify="center" class="mt-4">
        <v-card
          :width="
            convertToPixel(this.label.width.length, this.label.width.unit)
          "
          :height="
            convertToPixel(this.label.height.length, this.label.height.unit)
          "
          class="justify-center d-flex"
        >
          <barcode
            :value="new Date().getTime().toString()"
            :width="this.barcode.width * this.scale_rate"
            :height="this.barcode.height * this.scale_rate"
            :margin="0"
            :text-margin="this.barcode.textMargin * this.scale_rate"
            :font-size="this.barcode.fontSize * this.scale_rate"
            :margin-top="this.barcode.marginTop * this.scale_rate"
            :display-value="barcode.showText"
          >
            Please select the barcode configuration properly
          </barcode>
        </v-card>
      </v-row>
      <v-row>
        <v-col class="pb-0">
          <h2>Settings</h2>
          <p class="red--text text--accent-4 subtitle-2">
            NOTE:- Please make sure the barcode is placed inside the box resize
            if necessary
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-text>
              <h4>Zoom</h4>
              <v-slider
                v-model="scale_rate"
                append-icon="mdi-magnify-plus-outline"
                prepend-icon="mdi-magnify-minus-outline"
                min="1"
                max="3"
                step="0.1"
                thumb-label
                @click:append="() => (this.scale_rate += 0.1)"
                @click:prepend="() => (this.scale_rate -= 0.1)"
              >
                <template v-slot:thumb-label="{ value }">
                  {{ value + " X" }}
                </template>
              </v-slider>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-text>
              <h4>Barcode Width</h4>
              <v-slider
                v-model="barcode.width"
                append-icon="mdi-plus-circle-outline"
                prepend-icon="mdi-minus-circle-outline"
                min="1"
                max="8"
                step="0.1"
                @click:append="() => (this.barcode.width += 0.1)"
                @click:prepend="() => (this.barcode.width -= 0.1)"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-text>
              <h4>Barcode Height</h4>
              <v-slider
                v-model="barcode.height"
                append-icon="mdi-plus-circle-outline"
                prepend-icon="mdi-minus-circle-outline"
                min="1"
                max="100"
                @click:append="() => this.barcode.height++"
                @click:prepend="() => this.barcode.height--"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-text>
              <h4>Margin Top</h4>
              <v-slider
                v-model="barcode.marginTop"
                append-icon="mdi-plus-circle-outline"
                prepend-icon="mdi-minus-circle-outline"
                min="0"
                max="20"
                @click:append="() => this.barcode.marginTop++"
                @click:prepend="() => this.barcode.marginTop--"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-text>
              <h4>Text Top Margin</h4>
              <v-slider
                v-model="barcode.textMargin"
                append-icon="mdi-plus-circle-outline"
                prepend-icon="mdi-minus-circle-outline"
                min="0"
                max="20"
                @click:append="() => this.barcode.textMargin++"
                @click:prepend="() => this.barcode.textMargin--"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-text>
              <h4>Font Size</h4>
              <v-slider
                v-model="barcode.fontSize"
                append-icon="mdi-plus-circle-outline"
                prepend-icon="mdi-minus-circle-outline"
                min="1"
                max="30"
                thumb-label
                @click:append="() => this.barcode.fontSize++"
                @click:prepend="() => this.barcode.fontSize--"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="auto" class="flex-grow-1">
          <v-checkbox
            hide-details
            class="mt-0 mb-3"
            v-model="barcode.showText"
            label="Show Barcode value at the bottom"
          />
        </v-col>
        <v-col cols="12" sm="auto" class="justify-end">
          <v-btn color="primary" @click="showPreview">Print Preview</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </MainBackground>
</template>

<script>
import VueBarcode from "vue-barcode";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Preview",
  components: {
    barcode: VueBarcode
  },
  data() {
    return {
      scale_rate: 2.5,
      barcode: {
        width: 2.3,
        height: 40,
        marginTop: 5,
        fontSize: 11,
        textMargin: 0,
        showText: true
      },
      label: {
        row: 3,
        col: 13,
        remaining: true,
        width: {
          length: 2,
          unit: "in"
        },
        height: {
          length: 0.625,
          unit: "in"
        }
      }
    };
  },
  methods: {
    ...mapMutations(["setBarcodeProps"]),
    ...mapActions(["generateBarcodes"]),
    convertToPixel(len, unit = "in") {
      switch (unit) {
        case "in":
          return `${Math.floor(+len * 96) * this.scale_rate}px`;
        case "cm":
          return this.convertToPixel(len / 2.54);
        case "mm":
          return this.convertToPixel(len / 10, "cm");
      }
    },
    async showPreview() {
      this.setBarcodeProps(this.barcode);
      try {
        await this.generateBarcodes();
      } catch (e) {
        console.log(e);
      }
    }
  },
  computed: {
    ...mapGetters(["getLabelDimension"])
  },
  mounted() {
    this.label = this.getLabelDimension;
  }
};
</script>

<style scoped lang="scss"></style>
