<template>
  <!--<div id="app" class="blur-top blur-bottom">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    -->
    <div id="app">
      <sidebar></sidebar>
    <introduction></introduction>
    <why-git></why-git>
    </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/Sidebar.vue'
import Introduction from './components/Introduction.vue'
import WhyGit from './components/WhyGit.vue'

export default {
  name: 'app',
  components: {
    HelloWorld, Sidebar, Introduction, WhyGit
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
  /*font-size: 12px;*/
  background: #202020;
  color: #f0f0f0;
  /* overflow: hidden; */
  padding: 0;
  margin: 0;
}

/*#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
