<template>
  <div class="accordion">
    <div class="tabs">
      <div class="tab" v-for="(item,index) in sectionItems" :key="index">
        <input type="radio" :id="'item'+index" name="rd">
        <label class="tab-label" :for="'item'+index">
          <span>0{{ index }}</span>
          <h2>{{ item.title }}</h2>
        </label>
        <div class="tab-content">
          {{ item.text }}
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
$midnight: #2c3e50;
$clouds: #ecf0f1;

input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.accordion {
  display: flex;

  &:last-child {
    margin-left: 1em;
  }
  .tabs {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);

  }
}

.tab {
  width: 100%;
  color: white;
  overflow: hidden;

  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: $midnight;
    font-weight: bold;
    cursor: pointer;
    /* Icon */
    &:hover {
      background: darken($midnight, 10%);
    }

    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all .35s;
    }
  }

  &-content {
    max-height: 0;
    padding: 0 1em;
    color: $midnight;
    background: white;
    transition: all .35s;
  }
}

input:checked {
  + .tab-label {
    background: darken($midnight, 10%);

    &::after {
      transform: rotate(90deg);
    }
  }

  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}


</style>
