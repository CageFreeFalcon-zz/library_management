import { API, Auth } from "aws-amplify";
import { listBarcodes } from "../../graphql/queries";
import { createBarcode } from "../../graphql/mutations";
import router from "../../router";
import { BarcodeStatus } from "../../models";

export default {
  state: {
    pageSize: {
      count: 2,
      size: "A4",
      orientation: "portrait",
      width: {
        length: 210,
        unit: "mm"
      },
      height: {
        length: 297,
        unit: "mm"
      }
    },
    pageMargin: {
      linkVertical: true,
      linkHorizontal: true,
      top: {
        length: 0.5,
        unit: "cm"
      },
      bottom: {
        length: 0.5,
        unit: "cm"
      },
      left: {
        length: 0.5,
        unit: "cm"
      },
      right: {
        length: 0.5,
        unit: "cm"
      }
    },
    labelDimension: {
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
    barcodeProps: {
      width: 2.3,
      height: 40,
      marginTop: 5,
      fontSize: 11,
      textMargin: 0,
      showText: true
    },
    barcodes: []
  },
  getters: {
    getPageProps: state => state.pageSize,
    getPageMargin: state => state.pageMargin,
    getLabelDimension: state => state.labelDimension,
    getBarcodeProps: state => state.barcodeProps,
    getBarcodes: state => {
      let total =
        state.pageSize.count *
        state.labelDimension.row *
        state.labelDimension.col;
      return state.barcodes.slice(0, total);
    }
  },
  mutations: {
    setPageProps: (state, payload) => (state.pageSize = payload),
    setPageMargin: (state, payload) => (state.pageMargin = payload),
    setLabelDimension: (state, payload) => (state.labelDimension = payload),
    setBarcodeProps: (state, payload) => (state.barcodeProps = payload),
    setBarcodes: (state, payload) => (state.barcodes = payload)
  },
  actions: {
    async adminQueries(context, payload) {
      if (payload.type === "get") {
        return await API.get("AdminQueries", payload.path, {
          queryStringParameters: payload.params,
          headers: {
            "Content-Type": "application/json",
            Authorization: `${(await Auth.currentSession())
              .getAccessToken()
              .getJwtToken()}`
          }
        });
      } else if (payload.type === "post") {
        return await API.post("AdminQueries", payload.path, {
          body: payload.params,
          headers: {
            "Content-Type": "application/json",
            Authorization: `${(await Auth.currentSession())
              .getAccessToken()
              .getJwtToken()}`
          }
        });
      }
    },
    async generateBarcodes(context) {
      let barcodes = [];
      let token = null;
      let total =
        context.state.pageSize.count *
        context.state.labelDimension.row *
        context.state.labelDimension.col;
      if (context.state.labelDimension.remaining) {
        // eslint-disable-next-line no-constant-condition
        while (1 === 1) {
          const {
            data: {
              listBarcodes: { items: bc, nextToken }
            }
          } = await API.graphql({
            query: listBarcodes,
            variables: {
              filter: {
                status: {
                  eq: BarcodeStatus.UNUSED
                }
              },
              nextToken: token
            }
          });
          barcodes.push(...bc);
          token = nextToken;
          if (!nextToken || barcodes.length >= total) {
            break;
          }
        }
      }
      if (barcodes.length < total) {
        let remaining = total - barcodes.length;
        for (let i = 0; i < remaining; i++) {
          const {
            data: { createBarcode: barcode }
          } = await API.graphql({
            query: createBarcode,
            variables: {
              input: {
                id: new Date().getTime().toString(),
                status: BarcodeStatus.UNUSED
              }
            }
          });
          barcodes.push(barcode);
        }
      }
      context.commit("setBarcodes", barcodes);
      console.log("success created barcodes");
      await router.push({ path: "/barcode/preview" });
    }
  }
};
