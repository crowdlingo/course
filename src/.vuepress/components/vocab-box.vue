<template>
<div class='vocab-box' v-if='vocab'>
  <div class='header-box'>
    <div class='header-topic'>
      {{$page.title}}
    </div>
    <qrstamp></qrstamp>
  </div>
  <div class='row' v-for="word in vocab">
    <span class='en'>
      {{word[0]}}
    </span>
    <span class='zh'>
      {{word[1]}}
    </span>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    vocab() {
      let vocab = this.$page.frontmatter.vocab
      if (!vocab) return
      let words = vocab.map( line => {
        let [en, cn] = line.split('/')
        return [en, cn]
      })
      // console.log('vocab', words)
      return words
    }
  }
}
</script>

<style scoped>

.vocab-box {
  margin-top: 10px;
  position: relative;
  background: #FFFBC9;
  padding: 10px;
  border-radius: 15px;
  color: black;
}

.header-box {
  width: 70%;
  height: 100px;
  padding-left: 10px;
}

.header-slug {
  font-size: 12px;
}

.header-topic {
  font-size: 36px;
}

.row {
  padding: 10px;
  border-top: 1px solid #ccc;
}

.en {
  width: 50%;
  display: inline-block;
  color: black;
  font-size: 18px;
  text-align: right;
  margin-right: 10px;
  display: inline-block;
}

.zh {
  color: #622;
  font-weight: bold;
  font-size: 18px;
}


.qr-image {
  /* position: fixed; */
  right: 20px;
  bottom: 20px;
  height: 100px;
}

</style>
