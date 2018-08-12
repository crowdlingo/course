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
    <div class='debug'>
      {{imgPath}}
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
  position: absolute;
  bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  background: rgba(0, 0, 0, 0.75);
  /* border-radius: 15px; */
}

.title {
  font-size: 40px;
  font-weight: bold;
  width: 100%;
  border-bottom: 1px solid white;
  line-height: 120%;
}

.description {
  position: relative;
  width: 100%;
  font-size: 24px;
  font-weight: normal;
  line-height: 120%;
}

.debug {
  /* visibility: hidden; */
  position: absolute;
  bottom: 5px;
  left: 10px;
  font-size: 12px;
  background: black;
}

</style>

<script>
export default {
  props: ['imgPath'],

  data: function() {
    return {
      appConfig: {}
    }
  },

  created: function() {
    this.appConfig = this.$site.themeConfig.appConfig
  },

}

</script>
