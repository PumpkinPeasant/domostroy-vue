<template>
  <section id="building">
    <img class="decorationTree" src="../assets/images/trees/tree1.svg"  alt="">
    <div class="title">
      <h2>Строительство</h2>
    </div>
    <div class="housesSection">
      <div class="sectionInfo">
        <h3>Дома</h3>
        <p>
          Технологии строительства и используемые материалы для строительства
          каркасных домов за последние года ушли далеко вперед, что позволяет
          строить дома от простых и не дорогих дачных вариантов, до домов для
          постоянного проживания в любых климатических условиях.
        </p>
        <p>
          Вы можете присутствовать на любой стадии строительства, что позволит
          Вам видеть все виды выполняемых работ и правильность их выполнения.
        </p>
        <a target="_blank" href="https://vk.com/domostroi_29" class="moreButton">Подробнее</a>
      </div>
      <div class="sectionImgDiv">
        <img class="housesSectionImg" id="housesImg1" src="../assets/images/constructionImg1.jpg" alt="">
        <img class="housesSectionImg" id="housesImg2" src="../assets/images/textures/constructionImgDecoration1.jpg" alt="">
      </div>
    </div>

    <div class="bathSection">
      <div class="sectionImgDiv">
        <img class="bathSectionImg" id="bathImg1" src="../assets/images/constructionImg2.jpg" alt="">
        <img class="bathSectionImg" id="bathImg2" src="../assets/images/textures/constructionImgDecoration2.jpg" alt="">
      </div>
      <div class="sectionInfo">
        <h3>Бани</h3>
        <p>
          Наши специалисты, с многолетним опытом строительства Бань,
          в лучших северных традициях построят Вам баню на зависть
          всем соседям, и это займет всего две недели!
        </p>
        <p>
          В строительстве, мы используем брус из ели и сосны.
          При не больших высотах помещений (по сравнению с брусовыми домами),
          происходит минимальная усадка сруба, что позволяет не терять времени
          и осуществить строительство сразу "под ключ".
        </p>
        <a target="_blank" href="https://vk.com/domostroi_29" class="moreButton">Подробнее</a>
      </div>
    </div>

  </section>
</template>

<script>
export default {
name: "ConstructingSection"
}
</script>

<style scoped lang="scss">
section {
  flex-direction: column;
  padding: 23vh 8vw 12vh 8vw;
  position: relative;
  width: 100%;
  height: 190vh;
  background: #FEE3D9 fixed;
  transition: 500ms linear;
  h2{
    color: #D68C45;
  }
  h3{
    font-weight: normal;
    padding: 6vh 0 2vh 0;
    color: #033319;
  }
  p{
    line-height: 140%;
    color: #20633E;
    padding: 1vh 0 3vh 0;
  }
}
.title{
  width: 100%;
}
.housesSection, .bathSection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10vh;
}
.sectionInfo{
  display: flex;
  width: 30vw;
  flex-direction: column;
  p{
    text-align: justify;
  }
}
.sectionImgDiv{
  position: relative;
  display: flex;
  flex-direction: column;
  height:  58vh;
}
.housesSectionImg, .bathSectionImg{
  height: 58vh;
}
#housesImg1{
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 29px -4px rgba(146,66,49,.5) ;
}
#housesImg2{
  position: relative;
  z-index: 1;
  top: -55vh;
  left: 3vh;
}
#bathImg1{
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 29px -4px rgba(146,66,49,.5) ;
}
#bathImg2{
  position: relative;
  z-index: 1;
  top: -54vh;
  left: -4vh;
}
.moreButton{
  color: #ffffff;
}
.decorationTree{
  position: absolute;
  height: 90vh;
  top:-50vh;
  left: 65vw;
}
</style>
