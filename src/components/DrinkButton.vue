<template>
  <div>
    <button @click="ResetWaterLevel">Drink</button>
  </div>
</template>

<script lang="ts">
import $ from "jquery";
import store from "../store/Water";
export default {
  methods: {
    ResetWaterLevel() {
      store.commit("SetWaterLevel", 100);
      $(function() {
        $(".water").animate(
          {
            height: "" + 100 + "%",
          },
          1000
        );
      });
    },
  },
};
</script>

<style scoped>
button {
  box-shadow: inset 0px 1px 0px 0px #bbdaf7;
  background: linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
  background-color: #79bbff;
  border-radius: 6px;
  border: 1px solid #84bbf3;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;
}
button:hover {
  background: linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
  background-color: #378de5;
}
button:active {
  position: relative;
  top: 1px;
}
</style>
