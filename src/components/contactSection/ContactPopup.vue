<template>
  <div class="contacts-popup">
    <h3 class="heading-1-text">Наш офис</h3>
    <div class="contacts-popup-text">
      <div
        class="contacts-popup-text-row"
        v-for="(contact, index) in contacts"
        :key="index"
      >
        <a :href="contact.link">
          <i style="font-size: 35px" class="material-icons">{{
            contact.icon
          }}</i>
          <span>{{ contact.text }}</span>
        </a>
      </div>
    </div>
    <h3 class="heading-1-text">Или просто оставьте заявку</h3>
    <div class="contacts-popup-actions">
      <a class="moreButton" href="https://vk.com/im?media=&sel=-14943073"
        >Назначить встречу</a
      >
      <ClientOnly>
      <img
        loading="lazy"
        class="vk-button lazy"
        src="../../assets/images/icons/vk-orange.png"
        alt=""
      />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPopup",
  data: () => ({
    contacts: [
      {
        icon: "location_on",
        text: "г. Северодвинск, ул. \n Железнодорожная 54а, офис 5",
        link: "https://yandex.ru/maps/-/CCUiRLS01D",
      },
      {
        icon: "email",
        text: "domostroi@lenta.ru",
        link: "mailto:domostroi@lenta.ru",
      },
      {
        icon: "phone",
        text: "+7 (911) 563-43-75",
        link: "tel:+79115634375",
      },
      {
        icon: "phone",
        text: "+7 (953) 262-75-84",
        link: "tel:+79532627584",
      },
    ],
  }),
};
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
  max-width: 500px;
  height: 100%;
  width: 100%;
  padding: 60px 70px;
  &-text {
    display: flex;
    flex-direction: column;
    &-row {
      display: flex;
      flex-direction: row;
      padding: 8px 0;
      a {
        display: flex;
        align-items: center;
        font-family: "Montserrat", sans-serif;
        text-decoration: none;
        font-size: 19px;
        i {
          color: #ffc9b9;
        }
        span {
          margin-left: 20px;
          color: #195131;
          transition: 0.2s;

          &:hover {
            color: #033319;
            font-size: 20px;
          }

          &:active {
            color: #033319;
            font-size: 21px;
          }
        }
      }
    }
  }
  &-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .moreButton {
      padding: 20px;
    }
  }
}

.vk-button {
  width: 57px;
  height: 57px;
}

h3 {
  font-weight: 400;
  color: #033319;
}
</style>
