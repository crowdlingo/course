<template>
<div>
  <h2>
    Vocabulary
  </h2>
  <div class='word' v-for="word in vocab">
    <span class='cell'>
      {{word[0]}}
    </span>
    <span class='cell'>
      {{word[1]}}
    </span>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    vocab() {
      let v = this.$page.frontmatter.vocab
      let words = v.map( line => {
        let [en, cn] = line.split('/')
        return [en, cn]
      })
      // console.log('vocab', words)
      return words
    }
  }
}
</script>