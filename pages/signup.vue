<template>
  <div class="container">
    <v-flex
      my-5
      xs12
      sm6
      offset-sm3>
      <CommonAlert
        :alertMessage="errorMsg"
        hideCloseBtn
        alertType="error"
      />
      <SignUpFormCard
        signUpSuccessPath="/tutorial"
        loginPath="/login"
        v-on:createFail="createFail"
        v-on:loginFail="loginFail"
        v-on:validateFail="validateFail"
      />
    </v-flex>
  </div>
</template>

<script>
  import CommonAlert from '~/components/molecules/alert/commonAlert';
  import SignUpFormCard from '~/components/organisms/cards/signupFormCard';

  export default {
    layout: 'home',
    middleware: 'notAuthenticated',
    components: {
      'CommonAlert': CommonAlert,
      'SignUpFormCard': SignUpFormCard,
    },
    data() {
      return {
        errorMsg: null,
      };
    },
    methods: {
      createFail(message) {
        this.errorMsg = 'ユーザ作成に失敗しました. reason:' + message;
      },
      loginFail(message) {
        this.errorMsg = 'ログインに失敗しました. reason:' + message;
      },
      validateFail(message) {
        this.errorMsg = message;
      }
    },
  };


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
