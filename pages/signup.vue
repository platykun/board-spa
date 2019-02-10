<template>
  <div class="container">
    <v-flex
      my-5
      xs12
      sm6
      offset-sm3>
      <SignUpForm
        signUpSuccessPath="/tutorial"
        loginPath="/login"
      />
    </v-flex>
  </div>
</template>

<script>
  import SignUpForm from '~/components/organisms/form/signupForm';

  export default {
    layout: 'home',
    middleware: 'notAuthenticated',
    components: {
      'SignUpForm': SignUpForm,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
