<template>
  <div id="app">
    <h1 v-if="store.state._paused" style="font-size: 1.8rem; color: orange;">
      PAUSED
    </h1>
    <h1 v-else>STAY HYDRATED !</h1>
    <Glass />
    <DrinkButton />
    <PauseButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "./store/Water";
import Glass from "./components/Glass.vue";
import DrinkButton from "./components/DrinkButton.vue";
import PauseButton from "./components/PauseButton.vue";

@Component({
  components: {
    Glass,
    DrinkButton,
    PauseButton,
  },
})
export default class App extends Vue {
  data() {
    return {
      store: store,
    };
  }
}
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
