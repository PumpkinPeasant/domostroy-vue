<template>
  <div class="contacts-popup">
    <h2>Наш офис</h2>
    <div class="contacts-popup-text">
      <div class="contacts-popup-text-row" v-for="(contact, index) in contacts" :key="index">
        <i class="material-icons-outlined">{{contact.icon}}</i>
        <span>{{contact.text}}</span>
      </div>
    </div>
    <h2>Или просто оставьте заявку</h2>
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
        text: 'г. Северодвинск, ул. \n Железнодорожная 54а, офис 5'
      },
      {
        icon: 'email',
        text: 'domostroi@lenta.ru'
      },
      {
        icon: 'phone',
        text: '+7 (911) 563-43-75'
      },
      {
        icon: 'phone',
        text: '+7 (953) 262-75-84'
      },
    ]
  })
}
</script>

<style scoped lang="scss">

.contacts-popup {
  background: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 250px;
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
