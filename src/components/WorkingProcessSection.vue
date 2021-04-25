<template>
  <section id="workingProcess">
    <div class="sectionInfo">
      <h2>
        Рабочий процесс
      </h2>
      <h3>Не знаете с чего начать?</h3>
      <p>Хотите дом, баню или просто какую то постройку,
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
  </section>
</template>

<script>
export default {
name: "WorkingProcessSection"
}
</script>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: 35vw auto;
  column-gap: 5vw;
  padding: 12vh 8vw;
  position: relative;
  width: 100%;
  height: 115vh;
  background: #FFEFE9 fixed;
  transition: 500ms linear;
  h2{
    color:#D68C45;
  }
  h3{
    padding: 6vh 0 2vh 0;
    color: #033319;
  }
  p{
    color: #20633E;
    padding: 1vh 0 3vh 0;
  }
}
.sectionInfo{
  display: flex;
  flex-direction: column;
  p{
    text-align: justify;
  }
}
.sectionInfoImgDiv{

  border: 2px solid #18ffff;
}
.sectionInfoImg{
  position: relative;
  top: 300px;
  width: 100%;
}
.sectionSideImg{
  display: flex;
  justify-items: flex-end;
  position: relative;
  left: 8vw;
  width: 100%;
  height: auto;
  box-shadow: 0 4px 29px -4px rgba(146,66,49,.5) ;
}
.moreButton{
  color: #FDFDF9;
}
</style>
