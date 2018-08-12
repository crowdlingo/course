<template>
  <div class='vocab-box'>
    <div class='header-box'>
      <div class='header-topic'>
        {{$page.title}}
      </div>
      <qrstamp></qrstamp>
    </div>
    <slot></slot>
  </div>
</template>

<script>
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
