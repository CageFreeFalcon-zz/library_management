import { API, Auth, DataStore } from "aws-amplify";
import { BookItem } from "../../models";

export default {
  state: {
    pageSize: {},
    pageMargin: {},
    labelDimension: {},
    barcodeProps: {}
  },
  getters: {
    getPageProps: state => state.pageSize,
    getPageMargin: state => state.pageMargin,
    getLabelDimension: state => state.labelDimension,
    getBarcodeProps: state => state.barcodeProps
  },
  mutations: {
    setPageProps: (state, payload) => (state.pageSize = payload),
    setPageMargin: (state, payload) => (state.pageMargin = payload),
    setLabelDimension: (state, payload) => (state.labelDimension = payload),
    setBarcodeProps: (state, payload) => (state.barcodeProps = payload)
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
    // eslint-disable-next-line no-unused-vars
    async addBooks(context, payload) {
      DataStore.save(
        new BookItem({
          title: ""
        })
      );
    }
  }
};
