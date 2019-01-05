<template>
  <div>
    <LoggedInHeader
      :iconLink="iconLink"
      v-on:clicked="showDrawer"
    />
    <LoggedInNavigationDrawer
      v-model="drawer"
      :avatarLink="avatarLink"
      :items="items"
    />
  </div>
</template>

<script>
  import LoginUserStore from '~/plugins/js/store/LoginUserStore';
  import LoggedInHeader from '~/components/organisms/headers/loggedInHeader';
  import LoggedInNavigationDrawer from '~/components/organisms/navigation/loggedInNavigationDrawer';

  export default {
    components: {
      'LoggedInHeader': LoggedInHeader,
      'LoggedInNavigationDrawer': LoggedInNavigationDrawer,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        drawer: false,
        items: [
          {divider: true},
          {action: '/', title: 'ページトップ', icon: 'home'},
          {action: '/login', title: 'ログイン', icon: 'home'},
          {divider: true},
          {header: '記録'},
          {action: '/top', title: 'トップ', icon: 'home'},
          {action: '/record/checkin', title: 'チェックイン', icon: 'location_on'},
          {action: '/record/result', title: '結果入力', icon: 'note_add'},
          {divider: true},
          {header: '共有'},
          {action: '/share/tweet', title: 'ツイート', icon: 'record_voice_over'},
          {divider: true},
          {header: 'other'},
          {action: '/tutorial', title: 'チュートリアル', icon: 'contact_support'},
          {action: '/logout', title: 'ログアウト', icon: 'directions_run'},
        ],
      };
    },
    computed: {
      iconLink() {
        const userId = LoginUserStore.getUserId();
        return LoginUserStore.isLogining() ? '/users/' + userId : '/';
      },
      loginUserName() {
        return LoginUserStore.isLogining() ? LoginUserStore.getUserId() : '未ログイン';
      },
      avatarLink() {
        return '/users/' + this.loginUserName;
      },
    },
    methods: {
      showDrawer() {
        this.drawer = !this.drawer;
        console.log(this.drawer);
      },
    }
  };
</script>
<style scoped>
</style>
