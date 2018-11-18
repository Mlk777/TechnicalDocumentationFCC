<template>
    <div id="app">
      <sidebar></sidebar>
    <introduction></introduction>
    <why-git></why-git>
    <benefits></benefits>
    <getting-started></getting-started>
    <git-hub></git-hub>
    <your-first-repo></your-first-repo>
    <get-going></get-going>
    </div>

</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Introduction from './components/Introduction.vue'
import WhyGit from './components/WhyGit.vue'
import Benefits from "./components/Benefits.vue";
import GettingStarted from "./components/GettingStarted.vue";
import GitHub from "./components/GitHub.vue";
import YourFirstRepo from "./components/YourFirstRepo.vue";
import GetGoing from "./components/GetGoing.vue";

export default {
  name: 'app',
  components: {
    Sidebar, Introduction, WhyGit, Benefits, GettingStarted, GitHub, YourFirstRepo, GetGoing
  },
}
</script>

<style>
#app {
}

/* *:not(path):not(g) {
  color: hsla(210, 100%, 100%, 0.9) !important;
  background:               hsla(210, 100%,  50%, 0.5) !important;
  outline: solid 0.1rem hsla(210, 100%, 100%, 0.5) !important;
  box-shadow: none !important;
} */

body {
  font-family: arial;
  background: #202020;
  color: #f0f0f0;
  padding: 0;
  margin: 0;
}
</style>
