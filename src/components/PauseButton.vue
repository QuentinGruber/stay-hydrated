<template>
  <div>
    <button v-if="store.state._paused" @click="Pause">I'm back</button>
    <button v-else @click="Pause">I'm out</button>
  </div>
</template>

<script lang="ts">
import $ from "jquery";
import store from "../store/Water";
export default {
  methods: {
    Pause() {
      store.commit("PauseToggle");
    },
  },
  data() {
    return {
      store: store,
    };
  },
};
</script>

<style scoped>
button {
  margin-top: 2%;
  box-shadow: inset 0px 1px 0px 0px #ffda37;
  background: linear-gradient(to bottom, #ffda37 5%, #ffa228 100%);
  background-color: #ffa228;
  border-radius: 6px;
  border: 1px solid #ffda37;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  outline: none;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffa228;
}
button:hover {
  background: linear-gradient(to bottom, #ffa228 5%, #ffda37 100%);
  background-color: #ffa228;
}
button:active {
  position: relative;
  top: 1px;
}
</style>
