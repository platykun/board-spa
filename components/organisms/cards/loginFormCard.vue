<template>
  <v-card
    color="primary"
    class="white--text">
    <v-card-title primary-title>
      <div class="headline">Login</div>
    </v-card-title>
    <v-card-content>
      <div class="mx-2">
        <UserIdForm
          v-model="userId"
          dark
        />
        <PasswordForm
          v-model="password"
          dark
        />
      </div>
    </v-card-content>
    <v-card-actions>
      <v-btn
        class="accent"
        dark
        @click.stop.prevent="sendLogin">ログイン
      </v-btn>
      <v-spacer/>
      <v-btn
        flat
        dark
        :to="signUpPath">
        アカウントが無い方はこちら
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import Login from '~/plugins/js/interface/Login';
  import LoginUserStore from '~/plugins/js/store/LoginUserStore';
  import UserIdForm from '~/components/molecules/form/userIdForm';
  import PasswordForm from '~/components/molecules/form/passwordForm';

  export default {
    components: {
      'UserIdForm': UserIdForm,
      'PasswordForm': PasswordForm,
    },
    props: {
      loginSuccessPath: {
        type: String,
        required: true,
      },
      signUpPath: {
        type: String,
        required: true,
      }
    },
    data() {
      return {
        userId: '',
        password: '',
      };
    },
    methods: {
      sendLogin() {
        const login = new Login(this.userId, this.password);

        login.login().then(
          (response) => {
            LoginUserStore.storeLoginInfo(
              this.userId,
              response.data.token,
              response.data.authList,);
            this.$router.push({path: this.loginSuccessPath});
          })
          .catch((error) => {
            this.$emit('fail', error);
          });
      },
    }
  }
</script>


<style>
</style>
