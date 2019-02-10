<template>
  <div>
    <CommonAlert
      :alertMessage="errorMsg"
      alertType="error"
    />
    <DarkBackCard>
      <div slot="title">
        新規ユーザ作成
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
        <PrimaryBtn v-on:clickStopPrevent="createUser">
          作成
        </PrimaryBtn>
        <v-spacer/>
        <SecondaryBtn :to="loginPath">
          ログインはこちら
        </SecondaryBtn>
      </v-layout>
    </DarkBackCard>
  </div>
</template>

<script>
  import SignUp from '~/plugins/js/interface/Signup';
  import User from '~/plugins/js/interface/User';
  import Login from '~/plugins/js/interface/Login';
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
      signUpSuccessPath: {
        type: String,
        required: true,
      },
      loginPath: {
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
    watch: {
      userId(val) {
        if (val === '') return;

        SignUp.isAvailableUser(val).then(
          (response) => {
            const result = response.data.result;
            if (result === false) {
              this.validateFail('記載されたユーザIDはすでに使われています.');
            } else {
              this.validateFail(null);
            }
          }
        )
      },
    },
    methods: {
      createUser() {
        SignUp.signup(this.userId, this.userId, this.password).then(
          (response) => {
            this.setLoginUser();
            Login.login(this.userId, this.password).then(
              (response) => {
                LoginUserStore.storeLoginInfo(
                  this.userId,
                  response.data.token,
                  response.data.authList,);
                this.$router.push({path: this.signUpSuccessPath});
              }).catch((error) => {
              this.loginFail(error);
            });
          })
          .catch((error) => {
            this.createFail(error);
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
      createFail(error) {
        this.errorMsg = 'ユーザ作成に失敗しました. reason:' + error.message;
      },
      validateFail(reason) {
        this.errorMsg = reason;
      }
    }
  }
</script>

<style>
</style>
