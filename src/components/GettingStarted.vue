<template>
  <section id="GettingStarted" href="GettingStarted">
    <div class="content">
      <header id="section-title">
      Getting Started
    </header>
    <!-- <hr id="hr-article"> -->
    <article>
      <p>
        Now that you have an overview of the purpose of Git, maybe you would like to give it a try but don't know where to start ?. Well, first you'll have to install Git on your computer by downloading the client from <a href="https://git-scm.com/downloads" target="_blank">here</a> or, if you're on Debian/Ubuntu, you can install it by the package manager with the following command :<br>
        <code>
          apt-get install git
        </code>
        <br>
        Once you have git installed, you can access the full documentation by entering :<br>
        <code>
          man git
        </code>
        <br>
        Informations about a subcommands and concept guides can be accessed by the following :
        <code>
          git help -a <br>
          &nbsp;or <br>
          git help -g
        </code>
        <br>
      </p>
      <p>
        The next step will be to create your first repository to get your hands dirty and have a better comprehension of the concept. But first we need to talk about <a href="#GitHub">GitHub</a>.
      </p>
    </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GettingStarted',
}
</script>