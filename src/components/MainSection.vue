<template>
  <section id="home">
    <div class="arrow">
      <a href="#" v-scroll-to="{
          el: '#workingProcess',
          duration: 200,
          lazy: true,
          easing: 'linear',
          offset: -75,
          }"><img class="logo" src="../assets/images/icons/arrow.svg" alt=""></a>
    </div>
  </section>
</template>

<script>
export default {
name: "MainSection"
}
</script>

<style scoped lang="scss">
section{
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../assets/images/house2.jpg"),rgba(0,0,0,0.5) fixed;
  background-blend-mode: overlay;
  background-size: cover;
  align-items: flex-end;
  justify-content: center;
  transition: 500ms linear;
  .arrow{
    padding: 0.5vw;
    cursor: pointer;
    top: 0;
  }
  .logo{
    width: 1vw;
    height: auto;
    position: relative;
    top: 0;
    transition-duration: .6s;
    cursor: pointer;
  }
  .arrow .logo:hover{
    filter: drop-shadow( 0 0 10px rgba(255, 255, 255, 0.7));
    top: -1vw;
  }
}
</style>
