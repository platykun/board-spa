<template>
  <div>
    <CommonAlert
      :alertMessage="errorMsg"
      alertType="error"
    />
    <DarkBackCard>
      <div slot="title">
        Login
      </div>
      <div slot="text">
        <UserIdForm
          v-model="userId"
          dark
        />
        <PasswordForm
          v-model="password"
          dark
        />
      </div>
      <v-layout slot="actions">
          <PrimaryBtn v-on:clickStopPrevent="sendLogin">
            ログイン
          </PrimaryBtn>
          <v-spacer/>
          <SecondaryBtn
            :to="signUpPath">
            アカウントが無い方はこちら
          </SecondaryBtn>
      </v-layout>
    </DarkBackCard>
  </div>
</template>

<script>
  import Login from '~/plugins/js/interface/Login';
  import User from '~/plugins/js/interface/User';
  import PrimaryBtn from '~/components/atoms/buttons/primaryButton';
  import SecondaryBtn from '~/components/atoms/buttons/SecondaryButton';
  import CommonAlert from '~/components/molecules/alert/commonAlert';
  import LoginUserStore from '~/plugins/js/store/LoginUserStore';
  import UserIdForm from '~/components/molecules/form/userIdForm';
  import PasswordForm from '~/components/molecules/form/passwordForm';
  import DarkBackCard from '~/components/molecules/cards/darkBackCard';

  export default {
    components: {
      'CommonAlert': CommonAlert,
      'UserIdForm': UserIdForm,
      'PasswordForm': PasswordForm,
      'DarkBackCard': DarkBackCard,
      'PrimaryBtn': PrimaryBtn,
      'SecondaryBtn': SecondaryBtn,
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
        errorMsg: null,
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
            console.log(error);
            this.loginFail(error);
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
      },
      loginFail(error) {
        this.errorMsg = 'ログインに失敗しました. reason:' + error.message;
      },
    }
  }
</script>

<style>
</style>
