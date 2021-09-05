<template>
  <section id="works">
    <h2>Работы</h2>
    <div class="content">
      <div class="sectionInfo">
        <accordion :section-items.sync="sectionItems" @refreshIndex="slideIndex = 0"/>
      </div>
      <div class="slider">
        <slider :slider-images.sync="sectionItems[sliderActiveItem].images" :slide-index.sync="slideIndex"/>
      </div>
    </div>

  </section>
</template>

<script>
import Accordion from "@/components/workSection/Accordion";
import Slider from "@/components/workSection/Slider";

export default {
  name: "WorksSection",
  components: {Slider, Accordion},
  data() {
    return {
      sectionItems: [
        {
          title: 'Фасады',
          text: 'Так же, как и с кровлей, все поставщики дают нам хорошую ' +
              'скидку на закупку необходимого материала для фасадных работ, и' +
              ' доставляют его до места строительства.',
          link: 'https://vk.com/domostroi_29',
          active: true,
          images: [
            {
              path: 'works_facades_1.jpg',
            },
            {
              path: 'works_facades_2.jpg',
            },
            {
              path: 'works_facades_3.jpg',
            },
            {
              path: 'works_facades_4.jpg',
            }
          ],
        },
        {
          title: 'Кровля',
          text: 'Монтаж любых видов кровли, сотрудничаем с крупнейшими магазинам, ' +
              'что позволяет сделать покупку максимально выгодной.',
          link: 'https://vk.com/domostroi_29',
          active: false,
          images: [
            {
              path: 'works_roofing_1.jpg',
            },
            {
              path: 'works_roofing_2.jpg',
            },
            {
              path: 'works_roofing_3.jpg',
            },
            {
              path: 'works_roofing_4.jpg',
            },
            {
              path: 'works_roofing_5.jpg',
            },
          ],
        },
        {
          title: 'Заборы',
          text: 'Основное наше направление по установке заборов, ' +
              'это бюджетный сегмент, заборы, которые может позволить ' +
              'себе каждый, не в ущерб качеству и долговечности.',
          link: 'https://vk.com/domostroi_29',
          active: false,
          images: [
            {
              path: 'works_fence_1.jpg',
            },
            {
              path: 'works_fence_2.jpg',
            },
            {
              path: 'works_fence_3.jpg',
            },
            {
              path: 'works_fence_4.jpg',
            },
            {
              path: 'works_fence_5.jpg',
            },
          ],
        },
      ],
      slideIndex: 0,
    }
  },
  computed: {
    sliderActiveItem() {
      return this.sectionItems.findIndex(item => item.active)
    }
  }
}
</script>

<style scoped lang="scss">
section {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #195131;
  transition: 500ms linear;
  flex-direction: column;

  h2 {
    color: #FEE3D9;
    padding-bottom: 6vh;
    z-index: 11;
  }

  .content {
    z-index: 10;
    display: grid;
    grid-template-columns: 5fr 7fr;
    grid-gap: 13rem;

    .sectionInfo{
      display: flex;
      align-items: center;
    }
  }
  &::before{
    content: "";
    position: absolute;
    left: 0;
    bottom: 40vh;
    width: 100%;
    height: 100%;
    mix-blend-mode: overlay;
    background: linear-gradient(0deg, rgba(25,81,49,1) 0%, rgba(25,81,49,0) 50%),
    url('../assets/images/trees/tree2_cut.svg') no-repeat;
    opacity: 0.5;

  }
  &::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 40vh;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(25,81,49,1) 0%, rgba(25,81,49,0) 50%);
    background-blend-mode: normal;
  }
}

@media screen and (min-width: 959px) and (max-width: 1280px) {
  section {
    height: 110vh;
    .content {
      grid-gap: 10rem;

    }
  }
}

@media screen and (min-width: 600px) and (max-width: 959px) {
  section {
    height: 105vh;
    .content {
      grid-gap: 7rem;

    }
  }
}

@media screen and (max-width: 599px) {
  section {
    height: 150vh;
    .content {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
