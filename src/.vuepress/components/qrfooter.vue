<template>
  <div>
    <div class='cta-panel' v-if='appConfig.footerQrVis'>
      <img class='qr-image' :src='appConfig.footerQrPath'></img>
      <div class='cta-line'>
        Visit AI老师 English Course!
      </div>
    </div>
  </div>
</template>

<style scoped>

.footer-pad {
  position: relative;
  height: 150px;
  /* border-top: 1px solid blue; */
}

.cta-panel {
  background-color: #42B983;
  color: white;
  border-radius: 10px;
  padding: 10px;
}

.qr-footer {
  position: relative;
  bottom: 20px;
  left: 0px;
  /* width: 100%; */
  height: 150px;
  /* background: black; */
  color: white;
  /* border: 1px solid red; */

  /* left: -50px; */
  /* background: purple; */
  /* color: white; */
  /* height: 300px; */
}

.qr-image {
  /* position: fixed; */
  right: 20px;
  bottom: 20px;
  width: 100%;
  border-radius: 10px;
  /* height: 150px; */
}

.cta-line {
  font-size: 24px;
  text-align: center;
}

</style>

<script>
export default {
  props: ['qrPath'],
  data: function() {
    return {
      appConfig: {}
    }
  },

  created: function() {
    console.log('created .$site', this.$site)
    this.appConfig = this.$site.themeConfig.appConfig
  },

}

//     :style="{ 'background-image': imgPath }"


</script>
