<template>
  <div class="slider">
    <div class="slide">
      <img :src="getImageUrl">
      <div class="controls">
        <div class="controlBox">
            <i class="material-icons" @click="slideIndex === 0 ? slideIndex = sliderImages.length-1 : slideIndex--" >
              arrow_back
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
  width: 100%;
  max-width: 900px;
  z-index: 1;
  .slide{
    position: relative;
    max-width: 100%;
    height: 600px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &::before{
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      max-width: 900px;
      height: 600px;
      top: 30px;
      right: -30px;
      background: url("../../assets/images/textures/worksImgDecoration.jpg") no-repeat;
      background-size: 100%;
    }
    .controls{
      position: absolute;
      display: flex;
      justify-content: center;
      height: 50px;
      max-width: 900px;
      width: 100%;
      bottom: 0;
      .controlBox{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        background: #D68C45;
        span{
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.3em;
          display: flex;
          justify-content: center;
          font-size: 1.9rem;
        }
        i{
          user-select: none;
          display: flex;
          align-items: center;
          height: 100%;
          cursor: pointer;
          transition: 0.4s;
          &:nth-child(1){
            padding: 0 30px 0 5px;
          }
          &:nth-child(3){
            padding: 0 5px 0 30px;
          }
          &:hover{
            font-size: 2.5rem;
          }
          &:active{
            font-size: 2.6rem;
          }
        }
      }
    }
  }
}

</style>
