<template>
  <section>
    <div class="parallaxImage"></div>
  </section>
</template>

<script>
export default {
  name: "BenefitsSection"
}
</script>

<style scoped lang="scss">
section {
  width: 100%;
  padding: 0;
  height: 90vh;
  flex-direction: column;
  .parallaxImage{
    background-image: url("../assets/images/aboutImg1.jpg");
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
