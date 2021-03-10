<template>
  <div>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');
@font-face {
  font-family: YesevaOne;
  src: url(/assets/fonts/YesevaOne-Regular.ttf);
}
@font-face {
  font-family: Prata;
  src: url(/assets/fonts/Prata-Regular.ttf);
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

</style>
