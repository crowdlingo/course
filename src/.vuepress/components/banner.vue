<template>
  <div class='banner'>
    <img class='banner-bg-image' :src='imgPath'></img>
    <qrstamp></qrstamp>
    <div class='text-box'>

      <div class='title'>
        {{$page.frontmatter.title}}
      </div>
      <div class='description'>
        {{$page.frontmatter.description}}
      </div>
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

.banner-bg-image {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 15px;
  height: 300px;
}

.text-box {
  position: relative;
  top: 110px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
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
  left: 10px;
  font-size: 12px;
}

</style>

<script>
export default {
  props: ['imgPath'],

  computed: {
    bgImageUrl() {
      let cname = this.$page.frontmatter.cname
      let url = `../../assets/${cname}/cover.jpg`
      console.log('cname', cname)
      console.log('url', url)
      return url
    }
  }
}

//     :style="{ 'background-image': imgPath }"


</script>
