<template>
<section id="works">
  <h2>Работы</h2>
  <div class="content">
    <div class="sectionInfo">

    </div>
    <div class="slider">

    </div>
  </div>

</section>
</template>

<script>
export default {
name: "WorksSection"
}
</script>

<style scoped lang="scss">
section {
  position: relative;
  width: 100%;
  height: 115vh;
  background: #195131;
  transition: 500ms linear;
  h2{
    color:#FEE3D9;
  }
  h3{
    font-weight: normal;
    padding: 6vh 0 2vh 0;
    color: #033319;
  }
  p{
    color: #20633E;
    padding: 1vh 0 3vh 0;
    line-height: 140%;
  }
}
</style>
