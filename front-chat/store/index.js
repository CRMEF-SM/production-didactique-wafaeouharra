import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: () => {
      return {
        baseUrl: "http://192.168.100.55:5000/api",
      };
    },
    mutations: {},
    actions: {},
    getters: {},
  });
};
export default createStore;
