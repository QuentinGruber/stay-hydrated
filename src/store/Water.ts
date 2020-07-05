import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Accesible with $store.state.count
const state = {
  WaterLevel: 10,
};

export default new Vuex.Store({
  state,
  mutations: {
    SetWaterLevel(state, number: number) {
      state.WaterLevel = number;
    },
  },
});
