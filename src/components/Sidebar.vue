<template>
  <nav id="navbar" role="navigation">
    <header id="sidebar-title">
      Git documentation
    </header>
    <hr>
    <ul class="nav-menu">
      <a v-on:click.prevent="scroll('Introduction', $event)" href="#Introduction">
        <li>Introduction</li>
      </a>
      <a v-on:click.prevent="scroll('WhyGit')" href="#WhyGit">
        <li>Why Git ?</li>
      </a>
      <a href="Prerequisites">
        <li>Prerequisites</li>
      </a>
      <a href="Configuration">
        <li>Configuration</li>
      </a>
      <a href="">
        <li></li>
      </a>
      <a href="">
        <li></li>
      </a>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
      scroll: function(section) {
        this.$nextTick( () => {          // console.log(event.target)
          let idSection = document.getElementById(section);
          idSection.scrollIntoView({
            behavior: 'smooth'
          });
        });
      }
  },
}
</script>

<style>
#navbar {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 300px;
  border: 1px solid black;
  height: 100vh;
}

header {
  /* margin: auto; */
}

hr {
  margin: 0 10px 20px 10px;
}

#sidebar-title {
  padding: 15px 0 5px 0;
  font-size: large;
  text-align: center;
  font-size: 1.5em;
  font-weight: 800;
  color: #f0f0e8;
  /* #ee4c34 out
    #f0f0e8 in
   */
  line-height: 2;
}

#sidebar-title:hover {
  text-shadow: 0 0 0px #ee4c34, 0 0 20px #ee4c34, 0 0 10px #ee4c34,
    0 0 20px #ff5722, 0 0 0px #ff5722, 0 0 0px #ff5722, 0 0 0px #ff5722,
    0 0 0px #ff5722;
}

ul:hover > a > li:not(:hover) {
  opacity: 0.3;
}

li {
  display: inline;
  color: white;
  list-style-type: none;
  font-size: 1.15em;
  cursor: pointer;
  pointer-events: auto;
  position: relative;
  transition: opacity 200ms;
}

li::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 2px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  border-bottom: 2px solid;
  transform: scale(0);
  transition: transform 200ms ease-out;
  transform-origin: bottom;
  box-sizing: border-box;
}

li:hover::before {
  transform: scale(1);
  box-sizing: border-box;
}

ul {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 0;
  pointer-events: none;
  color: red;
  margin: 0;
}

a {
  display: block;
  margin: 0.5em 0;
  padding: 0.1em 0.5em;
  text-align: center;
  text-decoration: none;
}

/*.nav-menu {
  position: fixed;
  width: 100vh;
  top: 0px;
  left: 0px;
  border: 1px solid black;
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-items: center;
}*/
</style>


