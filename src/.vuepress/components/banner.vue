<template>
  <div class='banner'>
    <div class='text-box'>
      <div class='title'>
      {{$page.frontmatter.title}}
      </div>
      <div class='description'>
        {{$page.frontmatter.description}}
      </div>
    </div>
    <qrstamp></qrstamp>
  </div>
</template>

<style scoped>

.banner {
  position: relative;
  /* top: -50px;
  left: -50px; */
  /* width: 120vw; */
  background: purple;
  color: white;
  height: 300px;
  border-radius: 15px;
}

.text-box {
  position: relative;
  top: 100px;
  padding: 10px;
  /* left: 10%;
  width: 80%; */
}

.title {
  font-size: 40px;
  font-weight: bold;
  width: 100%;
  border-bottom: 1px solid white;
}

.description {
  position: relative;
  left: 20px;
  width: 100%;
  font-size: 24px;
  font-weight: normal;
}

</style>

<script>

</script>