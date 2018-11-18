<template>
  <section id="Introduction" href="Introduction">
    <div class="content">
    <header id="section-title">
      Introduction
    </header>
      <!-- <hr id="hr-article"> -->
    <article>
      <p>
        In today's world, software developers working in teams are continually writing new source code and changing existing source code. Working in teams also means working on different features or even on the same bit of code with several person. <br><br> <span><strong>The question is : How do you manage that ?</strong></span>
      </p>
      <br>
      <p>
        That's where <em>version control</em> comes into play. Version control systems are a category of software tools that help a software team manage changes to source code over time. By keeping track of every modification to the code, allowing developer to go back on an earlier version and preventing conflicts, a <abbr title="Version Control System">VCS</abbr> is a must have to work properly in team nowaday.
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
  padding-left: 310px;
  /* border: 2px solid brown; */
}

#section-title {
  padding: 5px 0 0px 0;
  font-size: 1.75em;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 2px;
  text-decoration: underline;
  text-decoration-color: #607d8b;
}

/*#hr-article {
  background-color: red;
  border: 0;
  width: 20%;
  height: 2px;
  margin: 5px auto 15px auto;
}*/

article {
  text-align: justify;
  padding: 5px;
}

p {
  margin: 0 0.75em 0 0.75em;
  letter-spacing: 3px;
  line-height: 1.5em;
}

span {
  display: inline-block;
  width: 100%;
  text-align: center;
}

em {
  color: red;
}

code {
  display: block;
  padding: 10px 20px 10px 20px;
  background: grey;
  color: #060606;
  margin: 10px;
  border: 1px solid #607d8b;
  border-radius: 5px;
  max-width: 100%;
  text-align: left;
}

u {
  text-decoration: underline;
}
</style>
