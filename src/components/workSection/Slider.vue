<template>
  <div class="slider">
    <div class="slide">
      <ClientOnly>
        <img :src="getImageUrl" alt="" class="lazy"/>
      </ClientOnly>
      <div class="controls">
        <div class="controlBox">
          <i
            class="material-icons"
            @click="slide === 0 ? (slide = sliderImages.length - 1) : slide--"
          >
            arrow_back
          </i>
          <span>{{ slide + 1 }}/{{ sliderImages.length }}</span>
          <i
            class="material-icons"
            @click="
              slideIndex === sliderImages.length - 1 ? (slide = 0) : slide++
            "
          >
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
    sliderImages: Array,
    slideIndex: Number,
  },
  computed: {
    slide: {
      get() {
        return this.slideIndex;
      },
      set(value) {
        this.$emit("update:slideIndex", value);
      },
    },
    getImageUrl() {
      return require("../../assets/images/slider/" +
        this.sliderImages[this.slide].path);
    },
  },
};
</script>

<style scoped lang="scss">
.slider {
  position: relative;
  z-index: 1;
  .slide {
    width: 45vw;
    height: 34vw;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &::before {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      max-width: 45vw;
      height: 34vw;
      top: 30px;
      right: -30px;
      background: url("../../assets/images/textures/worksImgDecoration.jpg")
        no-repeat;
      background-size: 100%;
    }
    .controls {
      position: absolute;
      display: flex;
      justify-content: center;
      max-height: 50px;
      height: 10%;
      max-width: 900px;
      width: 100%;
      bottom: 0;
      .controlBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        background: #d68c45;
        span {
          font-family: "Montserrat", sans-serif;
          letter-spacing: 0.3em;
          display: flex;
          justify-content: center;
          font-size: 1.9rem;
        }
        i {
          user-select: none;
          display: flex;
          align-items: center;
          height: 100%;
          cursor: pointer;
          transition: 0.4s;
          &:nth-child(1) {
            padding: 0 30px 0 5px;
          }
          &:nth-child(3) {
            padding: 0 5px 0 30px;
          }
          &:hover {
            font-size: 2.5rem;
          }
          &:active {
            font-size: 2.6rem;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 959px) and (max-width: 1280px) {
  .slider {
    .slide {
      img {
      }
      &::before {
        top: 20px;
        right: -20px;
      }
      .controls {
        .controlBox {
          span {
            font-size: 1.4rem;
          }
          i {
            font-size: 1.8rem;
            &:nth-child(1) {
              padding: 0 20px 0 5px;
            }
            &:nth-child(3) {
              padding: 0 5px 0 20px;
            }
            &:hover {
              font-size: 2rem;
            }
            &:active {
              font-size: 2.2rem;
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 600px) and (max-width: 959px) {
  .slider{
    position: relative;
    .slide{
      width: 100%;
      height: unset;
      min-height: 60vw;
      img{
      }
      &::before{
        display: none;
      }
      .controls{
        height: 40px;
        bottom: -10px;
        .controlBox{
          span{
            font-size: 1.2rem;
          }
          i {
            font-size: 1.5rem;
            &:nth-child(1) {
              padding: 0 15px 0 5px;
            }
            &:nth-child(3) {
              padding: 0 5px 0 15px;
            }
            &:hover {
              font-size: 1.6rem;
            }
            &:active {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 599px) {
  .slider{
    position: relative;
    .slide{
      width: 100%;
      height: unset;
      min-height: 60vw;
      img{
      }
      &::before{
        display: none;
      }
      .controls{
        height: 40px;
        bottom: -10px;
        .controlBox{
          span{
            font-size: 1.2rem;
          }
          i{
            font-size: 1.5rem;
            &:nth-child(1){
              padding: 0 15px 0 5px;
            }
            &:nth-child(3){
              padding: 0 5px 0 15px;
            }
            &:hover{
              font-size: 1.6rem;
            }
            &:active{
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
}
</style>
