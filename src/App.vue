<template>
  <div id="app">
    <h1>STAY HYDRATED !</h1>
    <Glass />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Glass from "./components/Glass.vue";

@Component({
  components: {
    Glass,
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
