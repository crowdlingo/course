<template>
  <div>
    <a
      v-for="link in downLinks"
      :key='link.part'
      :href="link.uri"
    >
      <span class='picitem'>
        {{link.part}}
      </span>
    </a>
  </div>
</template>

<style scoped>

.picitem {
  background: #ccc;
  border-radius: 10px;
  padding: 10px;
  line-height: 300%;
  margin: 5px;
}

</style>

<script>
export default {

  computed: {
    downLinks() {

      console.log("toc-box")
      const parts = [
        'topic',
        'vocabulary',
        'answers',
        'practice',
        'summary'
      ]
      let cname = this.$page.frontmatter.cname
      let links = parts
        .map(part => {
          return {
            uri: `../assets/shots/${cname}/${part}.jpg`,
            part: part
          }
        })
      console.log('links', links)
      return links
    }
  }
}
</script>