import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface State {
  WaterLevel: number;
  _paused: boolean;
}
// Accesible with $store.state.count
const state = {
  WaterLevel: 100,
  _paused: false,
};

export default new Vuex.Store({
  state,
  mutations: {
    SetWaterLevel(state: State, number: number) {
      state.WaterLevel = number;
    },
    PauseToggle(state: State) {
      if (state._paused) {
        state._paused = false;
      } else {
        state._paused = true;
      }
    },
  },
});
