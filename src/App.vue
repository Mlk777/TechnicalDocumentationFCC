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
require("@/assets/styles.css");

import Sidebar from "./components/Sidebar.vue";
import Introduction from "./components/Introduction.vue";
import WhyGit from "./components/WhyGit.vue";
import Benefits from "./components/Benefits.vue";
import GettingStarted from "./components/GettingStarted.vue";
import GitHub from "./components/GitHub.vue";
import YourFirstRepo from "./components/YourFirstRepo.vue";
import GetGoing from "./components/GetGoing.vue";

export default {
  name: "app",
  components: {
    Sidebar,
    Introduction,
    WhyGit,
    Benefits,
    GettingStarted,
    GitHub,
    YourFirstRepo,
    GetGoing
  }
};
</script>
