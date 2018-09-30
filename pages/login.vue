<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <v-alert
      v-if="errorMsg"
      :value="true"
      color="info"
      icon="info"
    >{{ errorMsg }}</v-alert>
    <div class="flex xs12 sm6 offset-sm3">
      <v-text-field
        v-validate="'required|max:10'"
        v-model="userId"
        :error-messages="errors"
        name="userId"
        label="ユーザID"/>
      <v-text-field
        v-validate="'required'"
        v-model="password"
        :error-messages="errors"
        name="password"
        label="パスワード"/>
    </div>
    <v-btn @click.stop.prevent="sendLogin">ログイン</v-btn>
  </div>
</template>

<script>
import Login from '~/plugins/js/interface/Login';

export default {
  data() {
    return {
      msg: 'Welcome to login page. you can enter admin/password',
      errorMsg: null,
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
        // eslint-disable-next-line
        console.log(error);
          this.errorMsg = 'ログインに失敗しました.';
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
