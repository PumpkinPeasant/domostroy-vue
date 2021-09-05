<template>
  <div class="accordion">
    <div class="tabs">
      <div class="tab" v-for="(item,index) in sectionItems" :key="index">
        <input type="radio" :id="'item'+index" name="rd" :checked="item.active">
        <label class="tab-label" :for="'item'+index" @click="activateItem(index)">
          <div class="title">
            <span>0{{ index+1 }}</span>
            <h3 class="heading-1-text">{{ item.title }}</h3>
          </div>
        </label>
        <div class="tab-content">
          <p class="primary-text">{{ item.text }}</p>
          <a :href="item.link" class="more-text-button" target="_blank">
            Подробнее
            <i class="material-icons">
              arrow_right_alt
            </i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    sectionItems: Array
  },
  data() {
    return {
      isItemToggled: false,
    }
  },
  methods: {
    activateItem(index) {
      this.sectionItems[index].active = true;
      this.sectionItems.forEach((item, i) => {
            if (i !== index) {
              item.active = false;
            }
          }
      )
      this.$emit('refreshIndex')
    }
  },
}
</script>

<style scoped lang="scss">

input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.accordion {
  display: flex;

  .tabs {
    overflow: hidden;
  }
}

.tab {
  width: 100%;
  overflow: hidden;

  &-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em;
    font-weight: bold;
    cursor: pointer;
    color: #FFFFFF;
    span{
      font-size: 3rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      display: flex;
      align-items: center;
    }

    h3 {
      font-family: "Yeseva One", serif;
      font-weight: 400;
      letter-spacing: 0.05vw;
    }

    &:hover {
      background: rgba(9,59,32, 0.3);
    }

    &::after {
      content: "\276F";
      font-size: 1.8rem;
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all .35s;
    }
    .title{
      display: flex;
      gap: 6rem;
      span{
        width: 4rem;
      }
    }
  }

  &-content {
    max-height: 0;
    padding: 0 1em;
    transition: all .35s;
    border-bottom: 1px solid #628A73;
    color: white;
    p, .more-text-button{
      margin-left: calc(2rem + 4rem + 6rem);
    }

  }
}

input:checked {
  + .tab-label {
    &::after {
      transform: rotate(90deg);
    }
    span{
      color: #D68C45;
    }
  }

  ~ .tab-content {
    max-height: 100vh;
    padding: 2em 2em 2em 0;
    p{
      padding-bottom: 1em;
    }
  }
}

@media screen and (min-width: 959px) and (max-width: 1280px) {
  .tab {
    &-label {
      padding: 1em;
      &::after {
        font-size: 1.4rem;
      }
      .title{
        gap: 4rem;
        span{
          font-size: 2vw;
          width: 2rem;
        }
      }
    }

    &-content {
      p, .more-text-button{
        margin-left: calc(1rem + 4rem + 2rem);
      }

    }
  }

  input:checked {
    + .tab-label {
      &::after {
        transform: rotate(90deg);
      }
      span{
        color: #D68C45;
      }
    }

    ~ .tab-content {
      max-height: 100vh;
      padding: 1.3em 1.3em 1.3em 0;
      p{
        padding-bottom: 1em;
      }
    }
  }
}

@media screen and (min-width: 600px) and (max-width: 959px) {
  .tab {
    &-label {
      padding: 1em;
      &::after {
        font-size: 1.4rem;
      }
      .title{
        gap: 4rem;
        span{
          font-size: 2vw;
          width: 2rem;
        }
      }
    }

    &-content {
      p, .more-text-button{
        margin-left: calc(1rem + 4rem + 2rem);
      }
      .more-text-button{
        i{
          font-size: 1.2rem;
        }
      }

    }
  }

  input:checked {
    + .tab-label {
      &::after {
        transform: rotate(90deg);
      }
      span{
        color: #D68C45;
      }
    }

    ~ .tab-content {
      max-height: 100vh;
      padding: 1.3em 1.3em 1.3em 0;
      p{
        padding-bottom: 1em;
      }
    }
  }
}

@media screen and (max-width: 599px) {
  .tab {
    &-label {
      padding: 1em;
      &::after {
        font-size: 1.4rem;
      }
      .title{
        gap: 4rem;
        span{
          font-size: 16px;
          width: 2rem;
        }
      }
    }

    &-content {
      p, .more-text-button{
        margin-left: 1rem;
      }
      .more-text-button{
        i{
          font-size: 1rem;
        }
      }

    }
  }

  input:checked {
    + .tab-label {
      &::after {
        transform: rotate(90deg);
      }
      span{
        font-weight: 700;
        color: #D68C45;
      }
    }

    ~ .tab-content {
      max-height: 100vh;
      padding: 1.3em 1.3em 1.3em 0;
      p{
        padding-bottom: 1em;
        text-align: justify;
      }
    }
  }
}
</style>
