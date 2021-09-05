<template>
  <section id="about">
    <h2>
      О нас
    </h2>
    <div class="content">
      <h3>
        Более <span>100 </span>договоров ежегодно!
      </h3>
      <p>
        В <span>2007 </span>году Мы открылись в городе Северодвинск,
        став одними из главных конкурентов местных компаний,
        осуществляющих строительство типовых домов из дерева.
        Внимательное отношение к пожеланием клиента, любовь к
        своему делу и качество производимого продукта — вот что
        отличает <span>ДОМОСТРОЙ </span>от многочисленных конкурентов.
      </p>
    </div>
    </section>
</template>

<script>
export default {
name: "AboutSection"
}
</script>

<style scoped lang="scss">
section {
  position: relative;
  width: 100%;
  height: 50vh;
  flex-direction: column;
  background: #20633E fixed;

  h2 {
    color: #FEE3D9;
    padding-bottom: 6vh;
  }
  .content{

    h3{
      color: white;
      font-weight: 400;
      padding-bottom: 20px;
      span{
        color: #FFC9B9;
        font-weight: bold;
      }
    }
    p{
      color: #FFEFE9;
      span{
        color: #FFC9B9;
      }
    }

  }


}
</style>
