<template>
<div>
  Section
  <ul>
    <router-link
      v-for="page in sectionPages"
      :key='page.path'
      :to="page.path">
    <li >
      {{ page.frontmatter.title }}
      <ul>
        <li>{{ page.frontmatter.description }}</li>
      </ul>
    </li>
    </router-link>
  </ul>
</div>
</template>

<script>
export default {

  computed: {
    sectionPages() {
      // TODO - passing in props for the section name
      // console.log("toc-box")
      let secPages = this.$site.pages
        .filter(x => x.path.startsWith('/speaking/'))
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
      // console.log('secPages', secPages)
      return secPages
    }
  }
}
</script>