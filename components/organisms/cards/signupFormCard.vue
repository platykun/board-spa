<template>
  <v-card
    color="primary"
    class="white--text">
    <v-card-title primary-title>
      <div class="headline">新規ユーザ作成</div>
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
        @click.stop.prevent="createUser">作成
      </v-btn>
      <v-spacer/>
      <v-btn
        flat
        dark
        :to="loginPath">
        ログインはこちら
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import Signup from '~/plugins/js/interface/Signup';
  import User from '~/plugins/js/interface/User';
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
        userId: '',
        password: '',
      };
    },
    watch: {
      userId(val) {
        if (val === '') return;

        Signup.isAvailableUser(val).then(
          (response) => {
            const result = response.data.result;
            if (result === false) {
              this.$emit('validateFail', '記載されたユーザIDはすでに使われています.');
            } else {
              this.$emit('validateFail', null);
            }
          }
        )
      },
    },
    methods: {
      createUser() {
        Signup.signup(this.userId, this.userId, this.password).then(
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
              this.$emit('loginFail', error.message);
            });
          })
          .catch((error) => {
            this.$emit('createFail', error.message);
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
