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
          color="blue-grey darken-1"
          class="white--text">
          <v-card-title primary-title>
            <div class="headline">Login</div>
          </v-card-title>
          <v-card-content>
            <div class="mx-2">
              <v-text-field
                v-validate="'required|max:10'"
                v-model="userId"
                :error-messages="errors"
                name="userId"
                type="text"
                label="ユーザID"
                dark
              />
              <v-text-field
                v-validate="'required'"
                v-model="password"
                :error-messages="errors"
                name="password"
                type="password"
                label="パスワード"
                dark
              />
            </div>
          </v-card-content>
          <v-card-actions>
            <v-btn
              class="deep-orange accent-3"
              dark
              @click.stop.prevent="sendLogin">ログイン</v-btn>
            <v-spacer/>
            <v-btn
              flat
              dark>
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

export default {
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
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
