<template>
  <div class="container">
    <v-alert
      value=true
      class="info"
      icon="info"
    >ログアウトしました
    </v-alert>
    <v-flex
      xs12
      sm6
      offset-sm3>
      <v-card
        color="primary"
        class="white--text">
        <v-card-content>
          <div class="mx-2">
          </div>
        </v-card-content>
        <v-card-actions>
          <v-btn
            class="accent"
            dark
            to="/login">ログイン画面へ
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
  import LoginUserStore from '~/plugins/js/store/LoginUserStore';

  export default {
    layout: 'logout',
    beforeCreate() {
      LoginUserStore.storeLogout();
    },
    data() {
      return {};
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
