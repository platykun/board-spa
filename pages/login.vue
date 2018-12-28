<template>
  <div class="container">
    <h2>{{ msg }}</h2>
    <v-flex
      xs12
      sm6
      offset-sm3>
      <v-alert
        v-if="errorMsg"
        :value="true"
        class="warn"
        icon="info"
      >{{ errorMsg }}
      </v-alert>
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
            to="/signup">
            アカウントが無い方はこちら
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
  import Login from '~/plugins/js/interface/Login';
  import UserIdForm from '~/components/molecules/form/userIdForm';
  import PasswordForm from '~/components/molecules/form/passwordForm';
  import LoginUserStore from '~/plugins/js/store/LoginUserStore';

  export default {
    layout: 'home',
    components: {
      'UserIdForm': UserIdForm,
      'PasswordForm': PasswordForm,
    },
    data() {
      return {
        msg: 'Welcome to login page. you can enter admin/password',
        errorMsg: null,
        errors: null,
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
            this.$router.push({path: '/top'});
          })
          .catch((error) => {
            this.errorMsg = 'ログインに失敗しました. reason:' + error.message;
          });
      },
    },
  };


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
