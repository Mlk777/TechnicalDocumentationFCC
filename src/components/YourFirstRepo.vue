<template>
  <section id="YourFirstRepo" href="YourFirstRepo">
    <div class="content">
      <header id="section-title">Your First Repository</header>
      <article>
        <p>
          Now that we have our first repository ready we will use Git to add a file and make our first commit. On the GitHub page in your repository click on "clone or download" button and get the https link. Then, on your computer open a terminal and place yourself in document. Now paste the link you copied before and type the following :
          <code>git clone "link you copied" "folder to clone into"
            <br>
            <br>&nbsp;
            <u>Example</u>: git clone https://github.com/Mlk777/test.git TestRepository
          </code>
          <br>
        </p>
        <p>And voila! You did your first step with Git. Don't forget that this is a documentation template for FreeCodeCamp. Besides that, Git is a tool that I recommend to learn if you're looking for a developper job whether you work in team or not.</p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "YourFirstRepo"
};
</script>