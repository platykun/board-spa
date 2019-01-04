<template>
  <div>
    <LoggedInHeader
      :logoLink="logoLink"
      v-on:clicked="showDrawer"
    />
    <LoggedInNavigationDrawer
      :drawer="drawer"
      :avatarLink="avatarLink"
      :items="items"
    />
    <nuxt/>
    <div id="v-bottom-nav-space" />
    <LoggedInBottomNav
      :navBottoms="navBottoms"
    />
  </div>
</template>

<script>
  import LoginUserStore from '~/plugins/js/store/LoginUserStore';
  import LoggedInHeader from '~/components/organisms/headers/loggedInHeader';
  import LoggedInNavigationDrawer from '~/components/organisms/navigation/loggedInNavigationDrawer';
  import LoggedInBottomNav from '~/components/organisms/navigation/loggedInBottomNav';

  export default {
    components: {
      'LoggedInHeader': LoggedInHeader,
      'LoggedInNavigationDrawer': LoggedInNavigationDrawer,
      'LoggedInBottomNav': LoggedInBottomNav,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        drawer: false,
        items: [
          { divider: true },
          { action: '/', title: 'ページトップ', icon: 'home' },
          { action: '/login', title: 'ログイン', icon: 'home'},
          { divider: true },
          { header: '記録' },
          { action: '/top', title: 'トップ', icon: 'home' },
          { action: '/record/checkin', title: 'チェックイン', icon: 'location_on' },
          { action: '/record/result', title: '結果入力', icon: 'note_add' },
          { divider: true },
          { header: '共有' },
          { action: '/share/tweet', title: 'ツイート', icon: 'record_voice_over' },
          { divider: true },
          { header: 'other' },
          { action: '/tutorial', title: 'チュートリアル', icon: 'contact_support' },
          { action: '/logout', title: 'ログアウト', icon: 'directions_run'},
        ],
        navBottoms: [
          { awesome: false, name: "Top", icon: "home", link: '/top'},
          { awesome: false, name: "CheckIn", icon: "location_on", link: '/record/checkin'},
          { awesome: false, name: "Record", icon: "note_add", link: '/record/result'},
          { awesome: true, name: "Tweet", icon: "twitter", link: '/share/tweet'},
        ],
      };
    },
    computed: {
      logoLink() {
        return LoginUserStore.isLogining() ? '/top' : '/';
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
        console.log("called");
        this.drawer = !this.drawer;
        console.log(this.drawer);
      },
    }
  };
</script>
<style scoped>
  #v-bottom-nav-space {
    height: 60px;
  }
</style>
