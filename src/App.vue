<template>
  <div id="app">
    <h1>STAY HYDRATED !</h1>
    <Glass />
    <DrinkButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Glass from "./components/Glass.vue";
import DrinkButton from "./components/DrinkButton.vue";

@Component({
  components: {
    Glass,
    DrinkButton,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
