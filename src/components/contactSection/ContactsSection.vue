<template>
  <section id="contacts">
    Контакты
    <yandex-map :coords="coords">
      <yandex-map-marker
          marker-id="1"
          :coords="coords"
      />
    </yandex-map>
    <contact-popup/>
  </section>
</template>

<script>
import {yandexMap, ymapMarker as yandexMapMarker} from "vue-yandex-maps";
import ContactPopup from "@/components/contactSection/ContactPopup";

export default {
  name: "ContactsSection",
  data: () => ({
    coords: [64.557177, 39.859165]
  }),
  components: {
    ContactPopup,
    yandexMap,
    yandexMapMarker,
  }
}
</script>

<style scoped>
section {
  display: flex;
  padding: 10vh;
  position: relative;
  width: 100%;
  height: 115vh;
  background: #FFEFE9 fixed;
  transition: 500ms linear;
}
</style>
