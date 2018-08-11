<template>
  <div>
    <div class='footer-pad'></div>
    <div class='qr-footer'>
      Please visit this 小程序 to try this lesson!
      <img class='qr-image' src='../../images/qrcodes/tutor-mp.jpg'></img>
    </div>
  </div>
</template>

<style scoped>

.footer-pad {
  position: relative;
  height: 20px;
  border-top: 1px solid blue;
}

.qr-footer {
  position: fixed;
  bottom: 0px;
  width: 120vw;
  background: white;
  /* left: -50px; */
  /* background: purple; */
  /* color: white; */
  /* height: 300px; */
}

.qr-image {
  position: relative;
  left: 0px;
  bottom: 0px;
  height: 150px;
}

</style>