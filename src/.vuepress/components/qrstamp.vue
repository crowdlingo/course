<template>
  <div v-if='appConfig.badgeQrVis'>
    <img
      class='qr-image'
      :src='appConfig.badgeQrPath'
    ></img>
  </div>
</template>

<style scoped>

.qr-image {
  position: absolute;
  right: 5px;
  top: 5px;
  border-radius: 10px;
  height: 100px;
  z-index: 100;
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
