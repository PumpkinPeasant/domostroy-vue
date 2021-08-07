<template>
  <div class="slider">
    <div class="slide">
      <img :src="getImageUrl">
      <div class="controls">
        <div class="controlBox">
          <i class="material-icons" @click="slideIndex === 0 ? slideIndex = sliderImages.length-1 : slideIndex--">
            arrow_backward
          </i>
          <span>{{slideIndex + 1}}/{{sliderImages.length}}</span>
          <i class="material-icons" @click="slideIndex === sliderImages.length-1 ? slideIndex = 0 : slideIndex++">
            arrow_forward
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    sliderImages: Array
  },
  data() {
    return{
      slideIndex: 0,
    }
  },
  computed:{
    getImageUrl() {
      console.log(this.sliderImages[this.slideIndex])
      return require('../../assets/images/slider/'+ this.sliderImages[this.slideIndex].path)
    },
  },
}
</script>

<style scoped lang="scss">
.slider{
  position: relative;
  z-index: 1;
  .slide{
    position: relative;
    img{
      width: 45vw;
      height: auto;
    }
    &::before{
      z-index: -1;
      content: "";
      position: absolute;
      width: 45vw;
      height: 30vw;
      top: 2vw;
      right: -2vw;
      background-size: cover;
      background: url("../../assets/images/textures/worksImgDecoration.jpg") no-repeat;
    }
    .controls{
      position: absolute;
      display: flex;
      justify-content: center;
      height: 40px;
      width: 45vw;
      top: calc(30vw - 40px);
      .controlBox{
        color: white;
        background: #D68C45;
      }
    }
  }
}

</style>
