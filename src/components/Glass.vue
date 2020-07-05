<template>
  <div>
    <div class="glass">
      <div class="water"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import $ from "jquery";
import store from "../store/Water";
export default {
  methods: {
    SetWaterLevel(height: number) {
      $(function() {
        $(".water").animate(
          {
            height: "" + height + "%",
          },
          1000
        );
      });
    },
  },
  created() {
    store.commit("SetWaterLevel", 10);
    this.SetWaterLevel(store.state.WaterLevel);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.glass {
  margin: 30px auto;
  height: 400px;
  width: 150px;
  position: relative;
  border-style: none solid solid solid;
  border-width: 10px;
  border-color: lightgray;
  border-radius: 10px;
}

.water {
  width: 100%;
  height: 00%;
  background-color: skyblue;
  position: absolute;
  bottom: 0;
}
</style>
