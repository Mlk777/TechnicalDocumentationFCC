<template>
  <nav id="navbar" role="navigation">
    <header id="sidebar-title">Git documentation</header>
    <hr>
    <ul class="nav-menu">
      <a v-on:click.prevent="scroll('Introduction')" href="#Introduction">
        <li>Introduction</li>
      </a>
      <a v-on:click.prevent="scroll('WhyGit')" href="#WhyGit">
        <li>Why Git ?</li>
      </a>
      <a v-on:click.prevent="scroll('Benefits')" href="#Benefits">
        <li>The benefits</li>
      </a>
      <a v-on:click.prevent="scroll('GettingStarted')" href="#GettingStarted">
        <li>Getting Started</li>
      </a>
      <a v-on:click.prevent="scroll('GitHub')" href="#GitHub">
        <li>GitHub</li>
      </a>
      <a v-on:click.prevent="scroll('YourFirstRepo')" href="#YourFirstRepo">
        <li>Your First Repository</li>
      </a>
      <a v-on:click.prevent="scroll('GetGoing')" href="#GetGoing">
        <li>Get Going</li>
      </a>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    scroll: function(section) {
      this.$nextTick(() => {
        let idSection = document.getElementById(section);
        idSection.scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  }
};
</script>

<style scoped>
a {
  display: block;
  margin: 0.5em 0;
  padding: 0.1em 0.5em;
  text-align: center;
  text-decoration: none;
}
</style>
