<template>
  <div class="footer">
    <div class="content">
      <img alt="" src="../assets/images/logo_color.svg">
    </div>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped lang="scss">
.footer{
  position: relative;
  display: flex;
  height: 20vh;
  width: 100%;
  background: #FFEFE9;
  .content{
    z-index: 15;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
      width: 15%;
    }
  }
}
</style>
