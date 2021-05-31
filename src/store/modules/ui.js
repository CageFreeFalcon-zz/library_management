export default {
  state: {
    drawer: true
  },
  getters: {
    getDrawerState: state => state.drawer
  },
  mutations: {
    setDrawerState: (state, payload) => (state.drawer = payload)
  },
  actions: {}
};
