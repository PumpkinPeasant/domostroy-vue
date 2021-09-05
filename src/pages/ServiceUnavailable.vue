<template>
<section>
  <div class="text">
    <h1>Домострой</h1>
    <div>
      <h2 class="heading-2-text">Каркасное строительство</h2>
    </div>
    <h3><span>Извините</span>, наш сайт находится на реконструкции!</h3>
    <p>Вы можете задать интересующий вас вопрос, позвонив нам по номеру
      <a href="tel:+79532627584"><span>+7 (953) 262-75-84</span></a> или написать на нашу страницу
      <a href="https://vk.com/domctroy"><span>ВКонтакте</span></a>.
    </p>
    <a href="https://vk.com/domctroy">
      <button>Перейти в VK</button>
    </a>

  </div>

</section>
</template>

<script>
export default {
name: "ServiceUnavailable",
  data () {
    return {
      imgUrl: '../assets/images/house2.jpg',
    }

},
  methods: {
    changeStyle(){
      return "'background: " + this.backgr + "'"
    }
  }
}
</script>

<style scoped lang="scss">
.round {
  width: 10em;
  height: 10em;
  border-radius: 50%;
  line-height: 10em;  /* подробнее про line-height */
  text-align: center;  /* выравнять текст по середине по горизонтали */;
}
section {
  display: flex;
  padding: 20px;
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../assets/images/house2.jpg"),rgba(0,0,0,0.5) fixed;
  background-blend-mode: overlay;
  color: #FDFDF9;
  background-size: cover;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 750px;
    text-align: center;
    h1 {
      font-family: "Yeseva One", serif;
      font-size: 120px;
      letter-spacing: 0.025em;
      font-weight: normal;
    }

    div {
      display: flex;

      h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 28px;
        text-transform: uppercase;
        font-weight: 600;
      }

      hr {
        border: 2px solid #FDFDF9;
      }
    }

    h3 {
      padding-top: 65px;
      font-family: 'Montserrat', sans-serif;
      font-size: 30px;
      font-weight: 600;
      letter-spacing: 0.02em;
      padding-bottom: 15px;
      span {
        color: #FFC9B9;
        white-space: nowrap
      }
    }

    p {
      max-width: 600px;
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 27pt;
      padding-bottom: 65px;
      a {
        text-decoration: none;
      }

      span {
        color: #FFC9B9;
        font-weight: 700;
        transition: 0.2s;
        white-space: nowrap
      }

      span:hover {
        text-shadow: 0 0 10px rgba(255, 201, 85, 0.7);
      }

      span:active {
        color: #FDFDF9;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
      }
    }

    button {
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 700;
      color: #FDFDF9;
      border: 2px solid #FDFDF9;
      padding: 20px 40px;
      border-radius: 100px;

    }

    button:hover {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(2px);
      transition: 0.2s;
    }

    button:focus {
      outline: none;
    }

    button:active {
      background-color: #FDFDF9;
      color: #FFC9B9;
    }

    a:target {
      background-color: #FDFDF9;
      color: #FFC9B9;
    }

    a:focus {
      text-decoration: none;
    }
  }
}
h2::before,
h2::after {
  display: inline-block;
  content: "";
  border-top: 3px solid #FDFDF9;
  width: 110px;
  margin: 0 1rem;
  transform: translateY(-0.5rem);
}
@media only screen and (max-width: 788px) {
  section{
    div{
      h1{
        font-size: 100px;
      }
      div{
        h2{
          font-size: 24px;
        }
      }

    }
  }
  h2::before,
  h2::after {
    width: 80px;
  }
}
@media only screen and (max-width: 642px) {
  section {
    div {
      max-width: 480px;
      h1 {
        font-size: 60px;
      }
      div {
        h2 {
          font-size: 16px;
        }
      }
      h3 {
        padding-top: 45px;
        font-size: 20px;
        padding-bottom: 15px;
      }

      p {
        max-width: 400px;
        font-size: 12px;
        line-height: 18pt;
        padding-bottom: 45px;
      }
      button {
        font-size: 12px;
        padding: 10px 20px;
      }
    }
  }
  h2::before,
  h2::after {
    border-top: 2px solid #FDFDF9;
    width: 35px;
    margin: 0 0.5rem;
    transform: translateY(-0.3rem);
  }
}
@media only screen and (max-width: 405px) {
  section {
    div {
      max-width: 280px;
      h1 {
        font-size: 40px;
      }
      div {
        h2 {
          font-size: 10px;
        }
      }
      h3 {
        padding-top: 25px;
        font-size: 14px;
        padding-bottom: 10px;
      }

      p {
        max-width: 400px;
        font-size: 10px;
        line-height: 12pt;
        padding-bottom: 25px;
      }
      button {
        font-size: 10px;
        padding: 8px 16px;
      }
    }
  }
  h2::before,
  h2::after {
    border-top: 1.5px solid #FDFDF9;
    width: 25px;
    margin: 0 0.5rem;
    transform: translateY(-0.2rem);
  }
}
</style>
