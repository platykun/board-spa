<template>
  <div class="container">
    <LogoutForm/>
  </div>
</template>

<script>
  import LoginUserStore from '~/plugins/js/store/LoginUserStore';
  import LogoutForm from '~/components/organisms/form/logoutForm';

  export default {
    layout: 'home',
    components: {
      'LogoutForm': LogoutForm,
    },
    beforeCreate() {
      LoginUserStore.storeLogout();
    },
    data() {
      return {};
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
