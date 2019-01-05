<template>
  <div class="container">
    <v-flex
      my-5
      xs12
      sm6
      offset-sm3>
      <CommonAlert
        :alertMessage="errorMsg"
        alertType="error"
      />
      <LoginFormCard
        loginSuccessPath="/top"
        signUpPath="/signup"
        v-on:fail="loginFail"
      />
    </v-flex>
  </div>
</template>

<script>
  import CommonAlert from '~/components/molecules/alert/commonAlert';
  import LoginFormCard from '~/components/organisms/cards/loginFormCard';

  export default {
    layout: 'home',
    middleware: 'notAuthenticated',
    components: {
      'CommonAlert': CommonAlert,
      'LoginFormCard': LoginFormCard,
    },
    data() {
      return {
        errorMsg: null,
      };
    },
    methods: {
      loginFail(error) {
        this.errorMsg = 'ログインに失敗しました. reason:' + error.message;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
