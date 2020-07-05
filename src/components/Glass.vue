<template>
  <div>
    <div class="glass">
      <div class="water">
        <!-- Dirty hack-->
        <h2 style="display:none">{{ store.state.WaterLevel }}</h2>
        <!-- Dirty hack-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import $ from "jquery";
import store from "../store/Water";
function SetWaterLevel(height: number) {
  $(function() {
    $(".water").animate(
      {
        height: "" + height + "%",
      },
      1
    );
  });
}
export default {
  created() {
    SetWaterLevel(store.state.WaterLevel);

    // reduce waterlevel every minute
    setInterval(() => {
      if (store.state.WaterLevel > 0) {
        store.commit("SetWaterLevel", store.state.WaterLevel - 0.028);
      }
    }, 1000);
  },
  updated() {
    SetWaterLevel(store.state.WaterLevel);
  },
  data() {
    return {
      store: store,
    };
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
