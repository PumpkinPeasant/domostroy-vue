<template>
<section id="works">
  <h2>Работы</h2>
  <div class="content">
    <div class="sectionInfo">
      <accordion :section-items.sync="sectionItems"/>
    </div>
    <div class="slider">
      <slider/>
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
          id: 'facades',
          title: 'Фасады',
          text: 'Так же, как и с кровлей, все поставщики дают нам хорошую ' +
              'скидку на закупку необходимого материала для фасадных работ, и' +
              ' доставляют его до места строительства.',
          link: 'https://vk.com/domostroi_29',
          active: true,
          images: [
            {
              path: '',
            },
            {
              path: '',
            },
            {
              path: '',
            }
          ],
        },
        {
          id: 'roofing',
          title: 'Кровля',
          text: 'Монтаж любых видов кровли, сотрудничаем с крупнейшими магазинам, ' +
              'что позволяет сделать покупку максимально выгодной.',
          link: 'https://vk.com/domostroi_29',
          active: false,
          images: [
            {
              path: '',
            },
            {
              path: '',
            },
            {
              path: '',
            }
          ],
        },
        {
          id: 'fences',
          title: 'Заборы',
          text: 'Основное наше направление по установке заборов, ' +
              'это бюджетный сегмент, заборы, которые может позволить ' +
              'себе каждый, не в ущерб качеству и долговечности.',
          link: 'https://vk.com/domostroi_29',
          active: false,
          images: [
            {
              path: '',
            },
            {
              path: '',
            },
            {
              path: '',
            }
          ],
        },
      ],
    }
  }
}
</script>

<style scoped lang="scss">
section {
  position: relative;
  width: 100%;
  height: 115vh;
  background: #195131;
  transition: 500ms linear;
  flex-direction: column;
  h2{
    color:#FEE3D9;
  }
  .content{
    display: flex;
  }
}
</style>
