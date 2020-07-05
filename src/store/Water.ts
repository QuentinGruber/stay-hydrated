import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface State {
  WaterLevel: number;
}
// Accesible with $store.state.count
const state = {
  WaterLevel: 100,
};

export default new Vuex.Store({
  state,
  mutations: {
    SetWaterLevel(state: State, number: number) {
      state.WaterLevel = number;
    },
  },
});
