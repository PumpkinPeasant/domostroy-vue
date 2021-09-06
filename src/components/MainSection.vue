<template>
  <ClientOnly>
    <section class="lazy-bg" id="home">
      <div class="arrow">
        <a
          href="#"
          v-scroll-to="{
            el: '#workingProcess',
            duration: 200,
            lazy: true,
            easing: 'linear',
            offset: -75,
          }"
          ><img
            class="arrowImg lazy"
            src="../assets/images/icons/arrow.svg"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  </ClientOnly>
</template>

<script>
export default {
  name: "MainSection",
  data: () => ({
    img: "../assets/images/icons/arrow.svg",
  }),
};
</script>

<style scoped lang="scss">
section {
  position: relative;
  width: 100%;
  height: 100vh;
  background-blend-mode: overlay;
  background-size: cover;
  align-items: flex-end;
  justify-content: center;
  transition: 500ms linear;
  .arrow {
    padding: 0.5vw;
    cursor: pointer;
    top: 0;
    .arrowImg {
      width: 1vw;
      height: auto;
      position: relative;
      top: 0;
      transition-duration: 0.6s;
      cursor: pointer;
    }
  }

  .arrow .arrowImg:hover {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.7));
    top: -1vw;
  }
}

section.lazy-bg-loaded  {
  background: url("../assets/images/house2.jpg") no-repeat, rgba(0, 0, 0, 0.5) fixed;
  background-size: cover;
}

@media screen and (min-width: 959px) and (max-width: 1280px) {
  section {
    .arrow {
      .arrowImg {
        width: 1.4vw;
      }
    }
  }
}

@media screen and (min-width: 600px) and (max-width: 959px) {
  section {
    .arrow {
      .arrowImg {
        width: 2vw;
      }
    }
  }
}

@media screen and (max-width: 599px) {
  section {
    .arrow {
      .arrowImg {
        width: 3vw;
      }
    }
  }
}
</style>
