<template>
  <v-card
    color="primary"
    class="white--text">
    <v-card-title primary-title>
      <div class="headline">Login</div>
    </v-card-title>
    <v-card-text>
      <UserIdForm
        v-model="userId"
        dark
      />
      <PasswordForm
        v-model="password"
        dark
      />
    </v-card-text>
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
  import User from '~/plugins/js/interface/User';
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
      // ログイン情報をLocalStorageへ格納しつつ画面遷移を行う
      sendLogin() {
        this.setLoginUser();
        Login.login(this.userId, this.password).then(
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
      // ログイン情報を取得する
      setLoginUser() {
        User.getUserDetail(this.userId).then(
          (response) => {
            const result = response.data.result;
            const splitIconColor = result.iconColor.split(' ');

            LoginUserStore.storeUserInfo(
              result.icon,
              splitIconColor[0],
              splitIconColor[1]
            );
          });
      }
    }
  }
</script>


<style>
</style>
