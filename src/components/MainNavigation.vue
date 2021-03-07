<template>
  <nav v-bind:class="navClass">
    <router-link :to="'/'">
        <img class="logo" src="../assets/logo.svg" alt="Домострой" height="40px" width="40px">
    </router-link>
    <ul>
      <li>
        <router-link v-for="(item, i) in menuItems"
                     :key="`menuItem${i}`"
                     :to="item.route">
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
name: "MainNavigation",
  props:['menuItems','background'],
  data(){
    return{
      navClass:''
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
      }
      else{
        this.navClass = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
nav{
  width: 100%;
  background-color: blanchedalmond;
  display: flex;
  position: fixed;
  justify-content: space-between;
  top:0;
  left: 0;
  align-items: center;
  transition: 0.6s;
  padding: 40px 100px;
  z-index: 100000;
  ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    li{
      position: relative;
      font-size: 18px;
      list-style: none;
      a{
        position: relative;
        text-decoration: none;
        margin: 0 15px;
        color: brown;
        letter-spacing: 2px;
        transition: 0.6s;
      }
      a:hover{
        background-color: azure;
      }
    }
  }
  .logo{
    position: relative;
    transition: 0.6s;
  }
}
.navScrolled{
  padding: 5px 100px;
  background: #fff;
  ul{
    li{
      a{
        color: #000;
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
