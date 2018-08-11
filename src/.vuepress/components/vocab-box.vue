<template>
<div class='vocab-box'>
  <div class='header-box'>
    <div class='header-slug'>
      Vocabulary for
    </div>
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

<style scoped>

.vocab-box {
  position: relative;
  background: black;
  color: white;
  min-height: 300px;
  padding: 20px;
  border-radius: 15px;
}

.header-box {
  width: 70%;
  height: 100px;
}

.header-slug {
  font-size: 12px;
}

.header-topic {
  font-size: 36px;
}

.row {
  padding: 10px;
  border-bottom: 1px solid #444;
}

.en {
  width: 50%;
  display: inline-block;
  color: white;
  font-size: 24px;
  text-align: right;
  margin-right: 10px;
}

.zh {
  color: #AAA;
  font-weight: bold;
  font-size: 20px;
}


.qr-image {
  /* position: fixed; */
  right: 20px;
  bottom: 20px;
  height: 100px;
}

</style>
