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
      >{{ errorMsg }}</v-alert>
      <v-card
        color="primary"
        class="white--text">
        <v-card-title primary-title>
          <div class="headline">Signup</div>
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
            @click.stop.prevent="createUser">作成</v-btn>
          <v-spacer/>
          <v-btn
            flat
            dark
            to="/login">
            ログインはこちら
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import Signup from '~/plugins/js/interface/Signup';
import Login from '~/plugins/js/interface/Login';
import UserIdForm from '~/components/form/userIdForm';
import PasswordForm from '~/components/form/passwordForm';
import LoginUserStore from '~/plugins/js/store/LoginUserStore';

export default {
  layout: 'home',
  components: {
    'UserIdForm': UserIdForm,
    'PasswordForm': PasswordForm,
  },
  data() {
    return {
      msg: 'Welcome to signup page.',
      errorMsg: null,
      errors: null,
      userId: '',
      userName: '',
      password: '',
    };
  },
  watch: {
    userId(val) {
      if(val === '')return;

      Signup.isAvailableUser(val).then(
        (response) => {
          const result = response.data.result;
          if(result === false) {
            this.errorMsg = '記載されたユーザIDはすでに使われています.'
          } else {
            this.errorMsg = null;
          }
        }
      )
    }
  },
  methods: {
    createUser() {
      Signup.signup(this.userId, this.userId, this.password).then(
        (response) => {
          const login = new Login(this.userId, this.password);
          login.login().then(
            (response) => {
              LoginUserStore.storeLoginInfo(
                      this.userId,
                      response.data.token,
                      response.data.authList,);
              this.$router.push({path: '/tutorial'});
            }).catch((error) => {
              this.errorMsg = 'ユーザ作成後のログインに失敗しました. reason:' + error.message;
          });
        })
        .catch((error) => {
          this.errorMsg = 'ユーザの作成に失敗しました. reason:' + error.message;
        });
    },
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
