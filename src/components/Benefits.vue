<template>
  <section id="Benefits" href="Benefits">
    <div class="content">
      <header id="section-title">The Benefits</header>
      <article>
        <p>The biggest feature of Git is it's branching and merging capabilities. Branching means you create a pointer to a snapshot of your changes while you work on a new feature without impacting the main branch (master). When you're done working on your feature, you can geniusly merge back your changes in the main branch.
          <br>Of course sometimes you'll have to work jointly with a teammate on a feature. That's when you'll probably encounter merge conflicts.
          <br>
          <br>
        </p>
        <p>Fortunately, as it's a common part of the Git experience, the system manages very well this type of problem you may encounter. When a conflict happens Git will detect the lines and conflict and will ask you to chose the right one to be committed so you keep control on what's committed and also don't have to worry about losing critical changes.</p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Benefits"
};
</script>