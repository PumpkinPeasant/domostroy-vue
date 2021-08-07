<template>
  <div class="accordion">
    <div class="tabs">
      <div class="tab" v-for="(item,index) in sectionItems" :key="index">
        <input type="radio" :id="'item'+index" name="rd" :checked="item.active">
        <label class="tab-label" :for="'item'+index" @click="activateItem(index)">
          <div class="title">
            <span>0{{ index+1 }}</span>
            <h3>{{ item.title }}</h3>
          </div>
        </label>
        <div class="tab-content">
          <p>{{ item.text }}</p>
          <a :href="item.link" class="moreTextButton">
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
    padding: 2em 2em 2em 0;
    font-weight: bold;
    cursor: pointer;
    color: #FFFFFF;
    span{
      font-size: 20px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
    }

    h3 {
      font-weight: 500;
      font-size: 20px;
    }

    &:hover {
      background: #093B20;
    }

    &::after {
      content: "\276F";
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
    p{
      font-size: 16px;
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


</style>
