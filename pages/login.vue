<template>
  <div class="container">
    <v-flex
      my-5
      xs12
      sm6
      offset-sm3>
      <LoginForm
        loginSuccessPath="/top"
        signUpPath="/signup"
      />
    </v-flex>
  </div>
</template>

<script>
  import LoginForm from '~/components/organisms/form/loginForm';

  export default {
    layout: 'home',
    middleware: 'notAuthenticated',
    components: {
      'LoginForm': LoginForm,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
