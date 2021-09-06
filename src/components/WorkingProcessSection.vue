<template>
  <section id="workingProcess">
    <div class="section-info">
      <h2 class="heading-2-text">Рабочий процесс</h2>
      <h3 class="heading-1-text">Не знаете с чего начать?</h3>
      <p class="primary-text">
        Хотите дом, баню или просто какую то постройку, но не знаете с чего
        начать? Не проблема! Достаточно нарисовать небольшой набросок и можно
        смело обращаться к нам, а наши специалисты доработают Вашу идею, помогут
        и подскажут Вам, как правильнее осуществить Вашу мечту, а так же на чем
        можно сэкономить!
      </p>
      <a target="_blank" href="https://vk.com/domostroi_29" class="moreButton"
      >Подробнее</a
      >
    </div>
    <ClientOnly>
      <div class="section-side">
        <div class="wrapper">
          <img
              loading="lazy"
              class="lazy"
              src="../assets/images/processImg1.jpg"
              alt=""
          />
        </div>
      </div>
      <div class="section-info-img-div">
        <img
            loading="lazy"
            class="section-info-img lazy"
            id="sectionInfoImg1"
            src="../assets/images/processImg2.jpg"
            alt=""
        />
        <img
            loading="lazy"
            class="section-info-img lazy"
            id="sectionInfoImg2"
            src="../assets/images/textures/processImgDecoration.jpg"
            alt=""
        />
      </div>
    </ClientOnly>
  </section>
</template>

<script>
export default {
  name: "WorkingProcessSection",
};
</script>

<style scoped lang="scss">
@import "../mixins.scss";

section {
  display: grid;
  grid-template-columns: 35% auto;
  grid-column-gap: 8vw;
  position: relative;
  width: 100%;
  background: #ffefe9;
  transition: 500ms linear;

  h2 {
    color: #d68c45;
  }

  h3 {
    font-weight: normal;
    padding: 6vh 0 2vh 0;
    color: #033319;
  }

  p {
    color: #20633e;
    padding: 1vh 0 3vh 0;
    line-height: 1.5em;
  }
}

.section-info {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 10;

  p {
    text-align: justify;
  }

  &-img-div {
    position: absolute;
    bottom: 15vw;
    left: 8vw;

    .section-info-img {
      display: flex;
      position: absolute;
      width: 31vw;
    }

    #sectionInfoImg1 {
      z-index: 2;
      box-shadow: 0 4px 29px -4px rgba(146, 66, 49, 0.5);
    }

    #sectionInfoImg2 {
      z-index: 1;
      left: -2vw;
      top: 2vw;
    }
  }
}

.section-side {
  width: unset !important;
  @include aspect-ratio(1600, 1968);

  .wrapper {
    img {
      box-shadow: 0 4px 29px -4px rgba(146, 66, 49, 0.5);
      z-index: 3;
    }
  }
}

.moreButton {
  color: #fdfdf9;
}

@media screen and (min-width: 959px) and (max-width: 1280px) {
  section {

    p {
      line-height: 1.3em;
    }
  }
}

@media screen and (min-width: 600px) and (max-width: 959px) {
  section {
    flex-direction: column;

    p {
      padding-bottom: 3em;
      line-height: 1.8em;
    }

    .section-info {
      width: 100%;
    }

    .sectionSideImg {
      display: none;
    }

    .section-info-img-div {
      z-index: 5;
      align-self: unset;
      position: relative;

      .section-info-img {
        position: unset;
        width: 100%;
        height: auto;
      }

      #sectionInfoImg2 {
        display: none;
      }
    }


  }
}

@media screen and (max-width: 599px) {
  section {
    gap: 5vh;
    flex-direction: column;

    p {
      padding-bottom: 3em;
      line-height: 1.8em;
    }

    .section-info {
      width: 100%;
    }

    .sectionSideImg {
      display: none;
    }

    .section-info-img-div {
      z-index: 5;
      align-self: unset;
      position: relative;

      .section-info-img {
        position: unset;
        width: 100%;
        height: auto;
      }

      #sectionInfoImg2 {
        display: none;
      }
    }
  }
}
</style>
