<template>
  <section>
    <ClientOnly>
      <div class="parallaxImage lazy-bg"></div>
    </ClientOnly>
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
  .parallaxImage {
    z-index: 2;
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .parallaxImage.lazy-bg-loaded {
    background-image: url("../assets/images/aboutImg1.jpg");
  }
}
</style>
