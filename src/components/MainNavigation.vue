<template>
  <nav v-bind:class="navClass">
    <div class="navItems" id="navItemsLeft">
      <ul>
        <li>
          <a href="#" v-scroll-to="{
          el: '#building',
          duration: 200,
          lazy: true,
          easing: 'linear',
          offset: -75,
          }">Строительство</a>
        </li>
        <li>
          <a href="#" v-scroll-to="{
          el: '#works',
          duration: 200,
          lazy: true,
          easing: 'linear',
          offset: -75,
          }">Работы</a>
        </li>
        <li>
          <a href="#" v-scroll-to="{
          el: '#materials',
          duration: 200,
          lazy: true,
          easing: 'linear',
          offset: -75,
          }">Материалы</a>
        </li>
      </ul>
    </div>
    <a href="#" v-scroll-to="{
          el: '#home',
          duration: 200,
          lazy: true,
          easing: 'linear',
          offset: 0,
          }">
        <img class="logo" id="logo_nav" :src=getImage alt="Домострой логотип">
    </a>
    <div class="navItems" id="navItemsRight">
      <ul>
        <li>
          <a href="#" v-scroll-to="{
          el: '#workingProcess',
          duration: 200,
          lazy: true,
          easing: 'linear',
          offset: -75,
          }">Рабочий процесс</a>
        </li>
        <li>
          <a href="#" v-scroll-to="{
          el: '#about',
          duration: 200,
          lazy: true,
          easing: 'linear',
          offset: -75,
          }">О нас</a>
        </li>
        <li>
          <a href="#" v-scroll-to="{
          el: '#contacts',
          duration: 200,
          lazy: true,
          easing: 'linear',
          offset: -75,
          }">Контакты</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
name: "MainNavigation",
  props:['menuItems','background'],
  data(){
    return{
      navClass:'',
      imagePath:'logo_white.svg',
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      if (event && window.scrollY > 0){
        this.navClass = 'navScrolled'
        this.imagePath = 'logo_color.svg';
      }
      else{
        this.navClass = ''
        this.imagePath = 'logo_white.svg';
      }
    },
  },
  computed: {
    getImage() {
      return require(`../assets/images/${this.imagePath}`)
    }
  }
}
</script>

<style scoped lang="scss">
nav{
  width: 100%;
  background-color: transparent;
  display: flex;
  position: fixed;
  justify-content: space-between;
  top:0;
  left: 0;
  align-items: center;
  transition: 0.6s;
  padding: 40px 8vw;
  z-index: 100000;
  .navItems{
    display: flex;
    justify-items: center;
    flex-grow: 1;
    justify-content: center;
  }
  ul {
    position: relative;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding-inline-start: 0;
    li{
      display: flex;
      font-family: Prata, sans-serif;
      position: relative;
      color: #FDFDF9;
      font-size: 1vw;
      list-style: none;
      cursor: pointer;
      letter-spacing: 0.08em;
      a{
        position: relative;
        color: #FDFDF9;
        text-decoration: none;
        transition: 0.4s;
        border-bottom:2px solid transparent;
      }
      a:hover{
        border-bottom:2px solid #D68C45;
      }
    }
  }

  .logo{
    display: flex;
    position: relative;
    transition: 0.6s;
    width: 18.5vw;
    height: auto;
  }
}
#navItemsLeft{
  padding-right: 4.375vw;
}
#navItemsRight{
  padding-left: 4.375vw;
}
.navScrolled{
  padding: 5px 8vw;
  background: #fff;
  height: 11vh;
  ul{
    li{
      a{
        color: #195131;
      }
    }
  }

}

@media screen and (max-width: 759px) {
  nav{
    ul{
      position: absolute;
      width: 300px;
    }
  }

}
</style>
