<template>
  <div class="contacts-popup">
    <h3>Наш офис</h3>
    <div class="contacts-popup-text">
      <div class="contacts-popup-text-row" v-for="(contact, index) in contacts" :key="index">
        <a :href="contact.link">
          <i class="material-icons-outlined">{{contact.icon}}</i>
          <span>{{contact.text}}</span>
        </a>
      </div>
    </div>
    <h3>Или просто оставьте заявку</h3>
    <div class="contacts-popup-actions">
      <a class="moreTextButton" href="https://vk.com/im?media=&sel=-14943073">Назначьте встречу</a>
      <img class="vk-button" src="../../assets/images/icons/vk-orange.png" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPopup",
  data: () => ({
    contacts: [
      {
        icon: 'location_on',
        text: 'г. Северодвинск, ул. \n Железнодорожная 54а, офис 5',
        link: 'https://yandex.ru/maps/-/CCUiRLS01D'
      },
      {
        icon: 'email',
        text: 'domostroi@lenta.ru',
        link: 'mailto:domostroi@lenta.ru'
      },
      {
        icon: 'phone',
        text: '+7 (911) 563-43-75',
        link: 'tel:+79115634375'
      },
      {
        icon: 'phone',
        text: '+7 (953) 262-75-84',
        link: 'tel:+79532627584'
      },
    ]
  })
}
</script>

<style scoped lang="scss">

.contacts-popup {
  background: white;
  position: absolute;
  bottom: 8vh;
  right: 8vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 70vh;
  max-width: 30vw;
  height: 100%;
  width: 100%;
  &-text {
    display: flex;
    flex-direction: column;
    &-row {
      display: flex;
      flex-direction: row;
    }
  }
}

.vk-button {
  width: 57px;
  height: 57px;
}

</style>
