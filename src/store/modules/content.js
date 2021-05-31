import { API, Auth } from "aws-amplify";

export default {
  state: {},
  getters: {},
  mutations: {},
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
    }
  }
};
