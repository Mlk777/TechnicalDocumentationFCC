<template>
  <section id="Introduction" ref="Introduction" href="Introduction">
    <div class="content">
    <header id="section-title">
      Introduction
    </header>
      <hr id="hr-article">
    <article>
      <p>
        JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.
      </p>
      <p>
        JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:
      </p>
    </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Introduction',
}
</script>

<style>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  /* margin-top: 70px; */
  padding-left: 310px;
  border: 2px solid brown;
  /* padding: 0px 10px; */
}

#section-title {
  padding: 5px 0 0px 0;
  font-size: 1.75em;
  text-align: center;
  letter-spacing: 2px;
}

#hr-article {
  background-color: red;
  border: 0;
  width: 20%;
  height: 2px;
  margin: 5px auto 15px auto;
}

article {
  text-align: justify;
  padding: 5px;
}

p {
  margin: 0 0.75em 0 0.75em;
  letter-spacing: 3px;
  line-height: 1.5em;
}
</style>
