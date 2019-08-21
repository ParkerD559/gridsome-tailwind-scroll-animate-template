<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image v-visible-class="'rotateIn'" alt="Example image" src="~/favicon.png" width="135" />

    <h1 v-visible-class="'fadeInLeft'">Hello, world!</h1>

    <p v-visible-class="'fadeInRight'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>

    <p v-visible-class="'fadeInUp'" class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

p {
  margin: 60px 0;
}
</style>
