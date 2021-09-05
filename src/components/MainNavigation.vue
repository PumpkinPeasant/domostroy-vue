<template>
  <nav v-bind:class="navClass">
    <div class="navItems" id="navItemsLeft" :style="getMenuVisibility">
      <ul>
        <li>
          <a
            href="#"
            v-scroll-to="{
              el: '#building',
              duration: this.scrollDuration,
              lazy: true,
              easing: 'linear',
              offset: 10,
            }"
            @click="toggleMenu"
            >Строительство</a
          >
        </li>
        <li>
          <a
            href="#"
            v-scroll-to="{
              el: '#works',
              duration: this.scrollDuration,
              lazy: true,
              easing: 'linear',
              offset: -75,
            }"
            @click="toggleMenu"
            >Работы</a
          >
        </li>
        <li>
          <a
            href="#"
            v-scroll-to="{
              el: '#materials',
              duration: this.scrollDuration,
              lazy: true,
              easing: 'linear',
              offset: -75,
            }"
            @click="toggleMenu"
            >Материалы</a
          >
        </li>
      </ul>
    </div>
    <a
      href="#"
      v-scroll-to="{
        el: '#home',
        duration: this.scrollDuration,
        lazy: true,
        easing: 'linear',
        offset: 0,
      }"
      @click="toggleMenu"
    >
      <div class="logo">
        <ClientOnly>
          <img
            class="lazy"
            loading="lazy"
            id="logo_nav"
            :src="getImage"
            alt="Домострой логотип"
          />
        </ClientOnly>
      </div>
    </a>
    <div class="navItems" id="navItemsRight" :style="getMenuVisibility">
      <ul>
        <li>
          <a
            href="#"
            v-scroll-to="{
              el: '#workingProcess',
              duration: this.scrollDuration,
              lazy: true,
              easing: 'linear',
              offset: -75,
            }"
            @click="toggleMenu"
            >Рабочий процесс</a
          >
        </li>
        <li>
          <a
            href="#"
            v-scroll-to="{
              el: '#about',
              duration: this.scrollDuration,
              lazy: true,
              easing: 'linear',
              offset: -75,
            }"
            @click="toggleMenu"
            >О нас</a
          >
        </li>
        <li>
          <a
            href="#"
            v-scroll-to="{
              el: '#contacts',
              duration: this.scrollDuration,
              lazy: true,
              easing: 'linear',
              offset: -75,
            }"
            @click="toggleMenu"
            >Контакты</a
          >
        </li>
      </ul>
    </div>
    <div class="toggleButton">
      <i class="material-icons" @click="toggleMenu">
        {{ getMenuIcon }}
      </i>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavigation",
  props: {
    menuItems: Array,
    background: Object,
    isMenuVisible: Boolean,
  },
  data() {
    return {
      navClass: "",
      imagePath: "logo_white.svg",
      openMenuOnMobile: "",
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (event && window.scrollY > 0) {
        this.navClass = "navScrolled";
        this.imagePath = "logo_color.svg";
      } else {
        this.navClass = "";
        this.imagePath = "logo_white.svg";
      }
    },
    toggleMenu() {
      if (!this.isLaptop) this.menuVisible = !this.menuVisible;
    },
  },
  computed: {
    scrollDuration() {
      return this.isLaptop ? 300 : 600;
    },
    isLaptop() {
      return window.screen.width >= 960;
    },
    menuVisible: {
      get() {
        return this.isMenuVisible;
      },
      set(value) {
        document.body.style.position = value ? "fixed" : "";
        this.openMenuOnMobile = value ? "flex" : "none";
        this.$emit("update:isMenuVisible", value);
      },
    },
    getImage() {
      return require(`../assets/images/${this.imagePath}`);
    },
    getMenuVisibility() {
      return `display: ${this.openMenuOnMobile}`;
    },
    getMenuIcon() {
      return this.menuVisible ? "close" : "menu";
    },
  },
};
</script>

<style scoped lang="scss">
@import "../mixins.scss";

nav {
  width: 100vw;
  background-color: transparent;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  z-index: 100000;
  padding: 4rem 8vw;

  .navItems {
    display: flex;
    justify-items: center;
    flex-grow: 1;
    justify-content: center;
  }

  .toggleButton {
    z-index: 999;

    i {
      color: #ffffff;
    }
  }

  ul {
    position: relative;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding-inline-start: 0;

    li {
      display: flex;
      font-family: Prata, sans-serif;
      position: relative;
      color: #fdfdf9;
      @include fluid-type(960px, 1900px, 13px, 20px);
      list-style: none;
      cursor: pointer;
      letter-spacing: 0.08em;

      a {
        position: relative;
        color: #fdfdf9;
        text-decoration: none;
        transition: 0.4s;
        border-bottom: 2px solid transparent;
      }

      a:hover {
        border-bottom: 2px solid #d68c45;
      }
    }
  }

  .logo {
    transition: 0.6s;
    width: 100%;
    height: 100%;
    display: flex;

    img {
      max-width: 18.5vw;
      width: 100%;
      height: 100%;
    }
  }
}

#navItemsLeft {
  padding-right: 4.375vw;
}

#navItemsRight {
  padding-left: 4.375vw;
}

.toggleButton {
  display: none;
}

.navScrolled {
  padding: 5px 8vw;
  background: #fff;
  min-height: 11vh;

  ul {
    li {
      a {
        color: #195131;
      }
    }
  }

  .toggleButton {
    i {
      color: #195131;
    }
  }
}

//laptop
@media screen and (min-width: 960px) and (max-width: 1280px) {
  nav {
    padding: 25px 7vw;
  }
  .navScrolled {
    padding: 5px 8vw;
  }
}

//tablet
@media screen and (min-width: 600px) and (max-width: 959px) {
  nav {
    padding: 20px 4vw;

    .logo {
    }

    .toggleButton {
      display: flex !important;
    }

    .navItems {
      display: none !important;
    }
  }
  .navScrolled {
    padding: 5px 7vw;
  }
}

//phone
@media screen and (max-width: 599px) {
  nav {
    padding: 20px 4vw;

    a {
      flex-grow: 1;

      .logo {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;

        img {
          z-index: 10;
          width: auto;
          height: 100%;
          max-width: unset;
          max-height: 5vh;
          padding-left: 5vw;
        }
      }
    }

    .toggleButton {
      display: flex !important;
      cursor: pointer;
    }

    .navItems {
      display: none;
      position: fixed;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(5px);
      height: 100vh;
      width: 100%;

      ul {
        flex-direction: column;
        justify-content: unset;

        li {
          height: 100%;
          flex-grow: 1;

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
          }

          a:hover {
            background: rgba(255, 255, 255, 0.4);
          }

          a:active {
            background: rgba(255, 255, 255, 0.6);
          }
        }
      }
    }

    #navItemsLeft {
      height: 50vh;
      padding: 10vh 0 0 0;
    }

    #navItemsRight {
      height: 50vh;
      padding: 0 0 10vh 0;
      top: 50vh;
    }
  }
  .navScrolled {
    .navItems {
      ul {
        li {
          a:hover {
            background: rgba(32, 99, 62, 0.4);
          }

          a:active {
            background: rgba(32, 99, 62, 0.6);
          }
        }
      }
    }
    #navItemsLeft {
      background: rgba(255, 255, 255, 1);
    }

    #navItemsRight {
      background: rgba(255, 255, 255, 1);
    }
  }
}
</style>
