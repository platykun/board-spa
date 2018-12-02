<template>
  <div>
    <v-toolbar
      dark
      color="primary"
      clipped="true">
      <v-toolbar-side-icon :to="logoLink">
        <v-icon>ballot</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title 
        class="hidden-xs-only">
        BoardGameDiary
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
        <v-icon>person</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary>
      <v-list dense>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon>person</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title> {{ loginUserName }} </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <template v-for="(item, index) in items">
          <v-list-tile
            v-if="item.action"
            :key="item.title"
            :to="item.action"
            @click="item.action">
            <!--v-list__tile v-list__tile--link v-list__tile--avatar theme--light-->
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider
            v-else-if="item.divider"
            :key="index"/>
          <v-subheader
            v-else-if="item.header"
            :key="item.header"
          >
            {{ item.header }}
          </v-subheader>
        </template>
      </v-list>
    </v-navigation-drawer>
    <nuxt/>
    <div id="v-bottom-nav-space" />
    <v-bottom-nav
      value="true"
      fixed
      app
      color="primary"
    >
      <template v-for="navBottom in navBottoms">
        <v-btn
          :to="navBottom.link"
          :key="navBottom.name"
          dark
        >
          <span>{{ navBottom.name }}</span>
          <v-icon>{{ navBottom.icon }}</v-icon>
        </v-btn>
      </template>
    </v-bottom-nav>
  </div>
</template>

<script>
  export default {
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
          { action: '/share/tweet', title: 'ツイート', icon: 'fa-twitter' },
          { divider: true },
          { header: 'other' },
          { action: '/tutorial', title: 'チュートリアル', icon: 'contact_support' },
          { divider: true },
        ],
        footerIcons: [
          { name: 'fa-twitter-square', link: 'https://twitter.com/platykun'},
          { name: 'fa-github-square', link: 'https://github.com/platykun'},
        ],
        navBottoms: [
          { name: "Top", icon: "home", link: '/top'},
          { name: "CheckIn", icon: "location_on", link: '/record/checkin'},
          { name: "Record", icon: "note_add", link: '/record/result'},
          { name: "Tweet", icon: "fa-twitter", link: '/share/tweet'},
        ],
      };
    },
    computed: {
      logoLink() {
        return localStorage.logined ? '/top' : '/';
      },
      loginUserName() {
        return localStorage.logined ? localStorage.userId : '未ログイン';
      },
    }
  };
</script>
<style scoped>
  #v-bottom-nav-space {
    height: 60px;
  }
</style>
