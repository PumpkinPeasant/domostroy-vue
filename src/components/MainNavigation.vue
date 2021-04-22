<template>
  <nav v-bind:class="navClass">
    <div class="navItems">
      <ul>
        <li>
          <router-link :to="'/'">Строительство</router-link>
        </li>
        <li>
          <router-link :to="'/'">Работы</router-link>
        </li>
        <li>
          <router-link :to="'/'">Материалы</router-link>
        </li>
      </ul>
    </div>

    <router-link :to="{hash: '#home'}">
        <img class="logo" id="logo_nav" :src=getImage alt="Домострой логотип">
    </router-link>
    <div class="navItems">
      <ul>
        <li>
          <router-link :to="{hash: '#workingProcess'}">Рабочий процесс</router-link>
        </li>
        <li>
          <router-link :to="'/'">О нас</router-link>
        </li>
        <li>
          <router-link :to="'/'">Контакты</router-link>
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
        // let element = document.getElementById("logo_nav")
        // element.src='../assets/images/logo_color.svg'
        // console.log(element)
        this.imagePath = 'logo_color.svg';
      }
      else{
        this.navClass = ''
        this.imagePath = 'logo_white.svg';
        //document.getElementById("logo_nav").src= '../assets/images/'+ this.imagePath;
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
  padding: 40px 90px;
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
    justify-content: space-around;
    padding-inline-start: 0;
    li{
      display: flex;
      font-family: Prata, sans-serif;
      position: relative;
      color: #FDFDF9;
      font-size: 1em;
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
.navScrolled{
  padding: 5px 100px;
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
