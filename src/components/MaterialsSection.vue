<template>
  <section id="materials">
    <h2>Материалы</h2>
    <div class="content">
      <div
          class="materialBox"
          :id="item.active ? 'material'+(index+1)+'Active' : 'material'+(index+1)"
          v-for="(item,index) in materialItems"
          :key="index">
        <h3>{{ item.title }}</h3>
        <transition name="textAnimation">
          <p v-if="item.active">{{ item.text }}</p>
        </transition>
        <transition name="moreButtonAnimation" appear>
          <a class="moreTextButton" @click="item.active = !item.active">
            {{ item.active ? 'Скрыть' : 'Подробнее' }}
          </a>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MaterialsComponent",
  data() {
    return {
      materialItems: [
        {
          title: 'Lorem ipsum',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, ' +
              'cum deleniti laborum nesciunt qui rem tenetur veritatis? Doloremque, ' +
              'illum, nobis.',
          background: 'materialsImg1.jpg',
          active: false
        },
        {
          title: 'Lorem ipsum',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
              'Dicta dolores expedita impedit neque odit quis quo reprehenderit voluptas?',
          background: 'materialsImg2.jpg',
          active: false
        },
        {
          title: 'Lorem ipsum',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
              'Exercitationem iusto officia quasi ratione totam veritatis.',
          background: 'materialsImg3.jpg',
          active: false
        },
      ]
    }
  },
  methods: {
    getBackgroundImage(imageName) {
     return '../assets/images/' + imageName;
    }
  }
}
</script>

<style scoped lang="scss">
section {
  width: 100%;
  height: 115vh;
  background: #195131 fixed;
  flex-direction: column;

  h2 {
    color: #FEE3D9;
    padding-bottom: 6vh;
  }

  .content {
    display: flex;
    height: 100%;
    width: 100%;

    .materialBox {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3 {
        color: white;
      }

      p {
        text-align: center;
        color: white;
        padding: 30px;
      }

      .moreTextButton {
        margin-top: 50px;
      }

      &Active {
        background: #18ffff;
        background-blend-mode: multiply;
      }
    }

    #material1 {
      background: url("../assets/images/materialsImg1.jpg"), rgba(25, 81, 49, .25) no-repeat;
      background-blend-mode: multiply;
      background-size: 100%;
      &Active{
        background: url("../assets/images/materialsImg1.jpg"),
        linear-gradient(0deg, rgba(25,81,49,1) 0%, rgba(25,81,49,0) 100%) no-repeat;
        background-blend-mode: multiply;
        background-size: 100%;
      }
    }

    #material2 {
      background: url("../assets/images/materialsImg2.jpg"), rgba(25, 81, 49, .25) no-repeat;
      background-blend-mode: multiply;
      background-size: 100%;
      &Active{
        background: url("../assets/images/materialsImg2.jpg"),
        linear-gradient(0deg, rgba(25,81,49,1) 0%, rgba(25,81,49,0) 100%) no-repeat;
        background-size: 100%;
        background-blend-mode: multiply;
      }
    }

    #material3 {
      background: url("../assets/images/materialsImg3.jpg"), rgba(25, 81, 49, .25) no-repeat;
      background-blend-mode: multiply;
      background-size: 100%;
      &Active{
        background: url("../assets/images/materialsImg3.jpg"),
        linear-gradient(0deg, rgba(25,81,49,1) 0%, rgba(25,81,49,0) 100%) no-repeat;
        background-size: 100%;
        background-blend-mode: multiply;
      }
    }
  }
}

.textAnimation-enter-active, .textAnimation-leave-active {
  transition: all .8s;
}

.textAnimation-leave-to, .textAnimation-enter {
  transform: translateY(50px);
  opacity: 0;
}

.moreButtonAnimation-move {
  transition: all .3s ease;
}
</style>
