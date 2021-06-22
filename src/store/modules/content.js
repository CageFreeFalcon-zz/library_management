// eslint-disable-next-line no-unused-vars
import { API, Auth, DataStore, Predicates, SortDirection } from "aws-amplify";
// eslint-disable-next-line no-unused-vars
import { createBarcode } from "../../graphql/mutations";
import * as models from "../../models";
// eslint-disable-next-line no-unused-vars
import router from "../../router";

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
    getBarcodes: state => state.barcodes
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
    async addBooks(context, payload) {
      DataStore.save(
        new models.BookItem({
          title: payload.title
        })
      );
    },
    async generateBarcodes(context) {
      let barcodes = [];
      if (context.state.labelDimension.remaining) {
        barcodes = await DataStore.query(models.Barcode, c => {
          c.status("eq", models.BarcodeStatus.UNUSED);
        });
      }
      console.log(barcodes);
      let total =
        context.state.pageSize.count *
        context.state.labelDimension.row *
        context.state.labelDimension.col;
      if (barcodes.length < total) {
        let lastcode = await DataStore.query(models.Barcode, Predicates.ALL, {
          page: 0,
          limit: 10,
          sort: s => s.id(SortDirection.DESCENDING)
        });
        console.log(lastcode);
        let remaining = total - barcodes.length;
        for (let i = 0; i < remaining; i++) {
          let data = {
            // id: new Date().getTime().toString(),
            status: models.BarcodeStatus.UNUSED
          };
          // console.log(typeof createBarcode);
          // console.log(API);
          // const session = await Auth.currentSession();
          // console.log(session);
          // let headers = {
          //   Authorization: session.getAccessToken().getJwtToken()
          // };
          // let temp = await API.graphql(
          //   {
          //     query: createBarcode,
          //     variables: { input: data },
          //     authMode: "AMAZON_COGNITO_USER_POOLS"
          //   },
          //   headers
          // );
          let temp = await DataStore.save(new createBarcode(data));
          console.log(temp);
        }
      }
      context.commit("setBarcodes", barcodes);
      console.log("success");
      // await router.push({ path: "/barcode/preview" });
    }
  }
};
