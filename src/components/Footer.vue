<template>
  <div class="footer">
    <div class="content">
      <ClientOnly>
        <img alt="" class="lazy" src="../assets/images/logo_color.svg" />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  display: flex;
  height: 20vh;
  width: 100%;
  background: #ffefe9;
  .content {
    z-index: 15;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 15%;
    }
  }
}
</style>
