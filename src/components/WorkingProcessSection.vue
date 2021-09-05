<template>
  <section id="workingProcess">
    <div class="sectionInfo">
      <h2 class="heading-2-text">
        Рабочий процесс
      </h2>
      <h3 class="heading-1-text">Не знаете с чего начать?</h3>
      <p class="primary-text">Хотите дом, баню или просто какую то постройку,
        но не знаете с чего начать? Не проблема!
        Достаточно нарисовать небольшой набросок
        и можно смело обращаться к нам, а наши специалисты доработают
        Вашу идею, помогут и подскажут Вам, как правильнее осуществить
        Вашу мечту, а так же на чем можно сэкономить!</p>
      <a target="_blank" href="https://vk.com/domostroi_29" class="moreButton">Подробнее</a>
    </div>
    <div class="sectionSide">
      <img class="sectionSideImg" src="../assets/images/processImg1.jpg" alt="">
    </div>
    <div class="sectionInfoImgDiv">
      <img class="sectionInfoImg" id="sectionInfoImg1" src="../assets/images/processImg2.jpg" alt="">
      <img class="sectionInfoImg" id="sectionInfoImg2" src="../assets/images/textures/processImgDecoration.jpg" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: "WorkingProcessSection"
}
</script>

<style scoped lang="scss">
section {
  justify-content: space-between;
  width: 100%;
  height: 115vh;
  background: #FFEFE9;
  transition: 500ms linear;

  h2 {
    color: #D68C45;
  }

  h3 {
    font-weight: normal;
    padding: 6vh 0 2vh 0;
    color: #033319;
  }

  p {
    color: #20633E;
    padding: 1vh 0 3vh 0;
    line-height: 1.5em;
  }
}
//section::after{
//  content: "";
//  position: absolute;
//  z-index: 1;
//  background-repeat: no-repeat;
//  background-size: contain;
//  background-position: 50%;
//  background-image: url("../assets/images/trees/tree1.svg");
//}

.sectionInfo {
  display: flex;
  width: 30vw;
  flex-direction: column;

  p {
    text-align: justify;
  }
}

.sectionInfoImgDiv {
  align-self: flex-end;
  position: absolute;
}

.sectionInfoImg {
  display: flex;
  position: absolute;
  width: 31vw;
}

#sectionInfoImg1 {
  z-index: 2;
  bottom: -10vw;
  box-shadow: 0 4px 29px -4px rgba(146, 66, 49, .5);
}

#sectionInfoImg2 {
  z-index: 1;
  bottom: -12vw;
  left: -2vw;
}

.sectionSide {
  display: flex;
  justify-content: flex-end;
}

.sectionSideImg {
  width: auto;
  height: 100%;
  max-height: 90vh;
  box-shadow: 0 4px 29px -4px rgba(146, 66, 49, .5);
  z-index: 3;
}

.moreButton {
  color: #FDFDF9;
}

@media screen and (min-width: 959px) and (max-width: 1280px) {
  section {
    height: 95vh;

    p {
      line-height: 1.7em;
    }
  }
  .sectionSideImg {
    max-height: 80vh;
  }
}

@media screen and (min-width: 600px) and (max-width: 959px) {
  section {
    height: 85vh;

    p {
      line-height: 1.7em;
    }

    .sectionSideImg {
      max-height: 65vh;
    }


    .sectionInfoImg {
      width: 33vw;
    }
  }
}

@media screen and (max-width: 599px) {
  section {
    height: 145vh;
    flex-direction: column;

    p {
      padding-bottom: 3em;
      line-height: 1.8em;
    }
    .sectionInfo{
      width: 100%;
    }

    .sectionSideImg {
      display: none;
    }
    .sectionInfoImgDiv {
      z-index: 5;
      align-self: unset;
      position: relative;
      .sectionInfoImg {
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
