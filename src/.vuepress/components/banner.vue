<template>
<div class='banner'>
  <div class='title'>
   {{$page.frontmatter.title}}
  </div>
  <div class='description'>
    {{$page.frontmatter.description}}
  </div>
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
}

.title {
  position: relative;
  top: 50px;
  left: 50px;
  font-size: 48px;
  font-weight: bold;
}

.description {
  position: relative;
  top: 100px;
  left: 50px;
  font-size: 24px;
  font-weight: normal;
  width: 80%;
}

</style>

<script>

</script>