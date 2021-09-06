<template>
  <section id="building">
    <ClientOnly>
      <img
        class="decorationTree lazy"
        loading="lazy"
        src="../assets/images/trees/tree1_cut.svg"
        alt=""
      />
    </ClientOnly>
    <div class="title">
      <h2 class="heading-2-text">Строительство</h2>
    </div>
    <div class="housesSection">
      <div class="section-info">
        <h3 class="heading-1-text">Дома</h3>
        <p class="primary-text">
          Технологии строительства и используемые материалы для строительства
          каркасных домов за последние года ушли далеко вперед, что позволяет
          строить дома от простых и не дорогих дачных вариантов, до домов для
          постоянного проживания в любых климатических условиях.
        </p>
        <p class="primary-text">
          Вы можете присутствовать на любой стадии строительства, что позволит
          Вам видеть все виды выполняемых работ и правильность их выполнения.
        </p>
        <a target="_blank" href="https://vk.com/domostroi_29" class="moreButton"
          >Подробнее</a
        >
      </div>
      <ClientOnly>
        <div class="sectionImgDiv">
          <img
            loading="lazy"
            class="housesSectionImg lazy"
            id="housesImg1"
            src="../assets/images/constructionImg1.jpg"
            alt=""
          />
          <img
            loading="lazy"
            class="housesSectionImg lazy"
            id="housesImg2"
            src="../assets/images/textures/constructionImgDecoration1.jpg"
            alt=""
          />
        </div>
      </ClientOnly>
    </div>

    <div class="bathSection">
      <ClientOnly>
        <div class="sectionImgDiv">
          <img
            loading="lazy"
            class="bathSectionImg lazy"
            id="bathImg1"
            src="../assets/images/constructionImg2.jpg"
            alt=""
          />
          <img
            loading="lazy"
            class="bathSectionImg lazy"
            id="bathImg2"
            src="../assets/images/textures/constructionImgDecoration2.jpg"
            alt=""
          />
        </div>
      </ClientOnly>
      <div class="section-info">
        <h3 class="heading-1-text">Бани</h3>
        <p class="primary-text">
          Наши специалисты, с многолетним опытом строительства Бань, в лучших
          северных традициях построят Вам баню на зависть всем соседям, и это
          займет всего две недели!
        </p>
        <p class="primary-text">
          В строительстве, мы используем брус из ели и сосны. При не больших
          высотах помещений (по сравнению с брусовыми домами), происходит
          минимальная усадка сруба, что позволяет не терять времени и
          осуществить строительство сразу "под ключ".
        </p>
        <a target="_blank" href="https://vk.com/domostroi_29" class="moreButton"
          >Подробнее</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConstructingSection",
};
</script>

<style scoped lang="scss">
section {
  flex-direction: column;
  padding-top: 20vh;
  padding-bottom: 12vh;
  position: relative;
  width: 100%;
  height: 190vh;
  background: #fee3d9 fixed;
  transition: 500ms linear;

  h2 {
    z-index: 2;
    color: #d68c45;
    padding-bottom: 6vh;
  }

  h3 {
    z-index: 2;
    font-weight: normal;
    padding-bottom: 2vh;
    color: #033319;
  }

  p {
    z-index: 2;
    line-height: 1.5em;
    color: #20633e;
    padding: 1vh 0 3vh 0;
  }
}

.title {
  width: 100%;
}

.housesSection,
.bathSection {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 15vh;
}
.section-info {
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 30vw;
  flex-direction: column;
  p {
    text-align: justify;
  }
}
.sectionImgDiv {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 58vh;
}

.housesSectionImg,
.bathSectionImg {
  max-height: 58vh;
}

#housesImg1 {
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 29px -4px rgba(146, 66, 49, 0.5);
}

#housesImg2 {
  position: relative;
  z-index: 1;
  top: -55vh;
  left: 3vh;
}

#bathImg1 {
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 29px -4px rgba(146, 66, 49, 0.5);
}

#bathImg2 {
  position: relative;
  z-index: 1;
  top: -54vh;
  left: -4vh;
}

.moreButton {
  color: #ffffff;
}

.decorationTree {
  position: absolute;
  height: 100vh;
  top: -50vh;
  right: 0;
  mix-blend-mode: overlay;
}

@media screen and (min-width: 959px) and (max-width: 1280px) {
  section {
    height: 175vh;

    p {
      line-height: 1.7em;
    }

    .housesSectionImg,
    .bathSectionImg {
      max-height: 50vh;
    }

    #housesImg2 {
      position: relative;
      z-index: 1;
      top: -47vh;
      left: 3vh;
    }
    #bathImg2 {
      top: -46vh;
      left: -4vh;
    }
  }
}

@media screen and (min-width: 600px) and (max-width: 959px) {
  section {
    height: 320vh;
    padding-top: 10vh;

    .section-info {
      width: 100%;
      justify-content: flex-start;
      .moreButton {
        margin-top: calc(3em - 3vh);
      }
    }

    .housesSection {
      flex-direction: column;
    }

    .bathSection {
      flex-direction: column-reverse;
    }

    .housesSectionImg,
    .bathSectionImg {
      position: relative;
      max-height: unset;
      width: 100%;
      height: auto;
    }

    #housesImg2 {
      display: none;
    }

    #bathImg2 {
      display: none;
    }

    .decorationTree {
      right: 0;
    }
  }
}

@media screen and (max-width: 599px) {
  section {
    height: 320vh;
    padding-top: 10vh;

    .section-info {
      width: 100%;
      justify-content: flex-start;
      .moreButton {
        margin-top: calc(3em - 3vh);
      }
    }

    .housesSection {
      flex-direction: column;
    }

    .bathSection {
      flex-direction: column-reverse;
    }

    .housesSectionImg,
    .bathSectionImg {
      position: relative;
      max-height: unset;
      width: 100%;
      height: auto;
    }

    #housesImg2 {
      display: none;
    }

    #bathImg2 {
      display: none;
    }

    .decorationTree {
      right: 0;
    }
  }
}
</style>
