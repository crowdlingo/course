<template>
  <div>
    <a href='#topic'>
    </a>
    <div class='banner'>
      <img v-if='$page.frontmatter.cover' class='banner-bg-image' :src='coverPath'></img>
      <!-- <qrstamp></qrstamp> -->
      <div class='text-box'>
        <div class='title'>
          {{$page.frontmatter.title}}
        </div>
        <div class='description'>
          {{$page.frontmatter.description}}
        </div>
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
  position: absolute;
  top: 50px;
  left: -50px;
  padding: 10px;
  padding-left: 70px;
  padding-right: 15px;
  background: black;
  /* background: rgba(0, 0, 0, 0.75); */
  /* border-radius: 15px; */
}

.title {
  font-size: 40px;
  font-weight: bold;
  width: 100%;
  /* border-bottom: 1px solid white; */
  line-height: 120%;
}

.description {
  position: relative;
  width: calc(100% - 50px);
  border: 1px solid white;
  font-size: 24px;
  padding: 20px;
  font-weight: normal;
  line-height: 120%;
}

.debug {
  visibility: hidden;
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
      appConfig: {},
      coverPath: ''
    }
  },

  created: function() {
    this.appConfig = this.$site.themeConfig.appConfig
    console.log("this page", this.$page)
    this.coverPath = `../assets/speaking/${this.$page.frontmatter.cname}/cover.jpg`
    console.log('set cover', this.coverPath)
  },

}

</script>
