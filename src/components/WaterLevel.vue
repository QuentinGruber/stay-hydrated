<template>
  <div class="hello">
    <div class="glass">
      <div class="water"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import $ from "jquery";

$(function() {
  $(".water").animate(
    {
      height: "75%",
    },
    1000
  );
});

@Component
export default class WaterLevel extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.glass {
  margin: 30px auto;
  height: 300px;
  width: 100px;
  position: relative;
  border-style: none solid solid solid;
  border-width: 10px;
  border-color: lightgray;
  border-radius: 10px;
}

.water {
  width: 100%;
  height: 10%;
  background-color: skyblue;
  position: absolute;
  bottom: 0;
}
</style>
