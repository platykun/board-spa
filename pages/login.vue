<template>
  <div class="login flex xs12 sm6 offset-sm3">
    <h2>{{ msg }}</h2>
    <v-alert
      v-if="errorMsg"
      :value="true"
      color="red accent-2"
      icon="info"
    >{{ errorMsg }}</v-alert>
    <v-layout
      row
      wrap
      my-2
    >
      <v-flex xs12>
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
              @click.stop.prevent="sendLogin">ログイン</v-btn>
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
    </v-layout>
  </div>
</template>

<script>
import Login from '~/plugins/js/interface/Login';
import UserIdForm from '~/components/form/userIdForm';
import PasswordForm from '~/components/form/passwordForm';

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
  mounted() {
    if (localStorage.userId) {
      this.userId = localStorage.userId;
    }
    if (localStorage.password) {
      this.password = localStorage.password;
    }
  },
  methods: {
    sendLogin() {
      const login = new Login(this.userId, this.password);

      login.login().then(
        (response) => {
          // eslint-disable-next-line
          console.log(response);
          localStorage.userId = this.userId;
          localStorage.password = this.password;
          localStorage.token = response.data.token;
          localStorage.authList = response.data.authList;
          localStorage.logined = true;
          this.$router.push({ path: '/top' });
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
