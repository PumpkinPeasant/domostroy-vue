<template>
  <section id="contacts">
    <h2>Контакты</h2>
    <yandex-map
        :coords="coords"
        :controls="controls"
        :scroll-zoom="false"
        style="padding: 0 !important; height: 100%" >
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
    coords: [64.557177, 39.859165],
    controls: ['zoomControl','geolocationControl'],
  }),
  components: {
    ContactPopup,
    yandexMap,
    yandexMapMarker,
  }
}
</script>

<style scoped lang="scss">
#contacts {
  display: flex;
  position: relative;
  padding: 0;
  width: 100%;
  height: 100vh;
  background: #FFEFE9 fixed;
  transition: 500ms linear;
  flex-direction: column;
  h2{
    padding: 6vh 8vw;
  }
}
</style>
