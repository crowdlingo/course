<template>
  <div class='banner'
    :style="{ 'background-image': bgImageUrl }"
  >
    <div class='text-box'>
      <div class='title'>
        {{$page.frontmatter.title}}
      </div>
      <div class='description'>
        {{$page.frontmatter.description}}
      </div>
    </div>
    <qrstamp></qrstamp>

    <img :src='bgImageUrl' />

    <div class='debug'>
      {{bgImageUrl}}
    </div>
  </div>
</template>

<style scoped>

.banner {
  position: relative;
  background: purple;
  color: white;
  height: 300px;
  border-radius: 15px;
}

.text-box {
  position: relative;
  top: 100px;
  padding: 10px;
}

.title {
  font-size: 40px;
  font-weight: bold;
  width: 100%;
  border-bottom: 1px solid white;
}

.description {
  position: relative;
  width: 100%;
  font-size: 24px;
  font-weight: normal;
}

.debug {
  position: absolute;
  bottom: 5px;
}

</style>

<script>
export default {
  computed: {
    bgImageUrl() {
      let cname = this.$page.frontmatter.cname
      let url = `../assets/${cname}/cover.jpg`
      console.log('cname', cname)
      console.log('url', url)
      return url
    }
  }
}
</script>
