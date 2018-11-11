<template>
  <div>
    <v-toolbar
      dark
      color="blue-grey darken-1"
      clipped="true">
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
        <v-icon>ballot</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        BoardGameDiary
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-side-icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>person</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary>
      <v-list dense>
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
    <v-navigation-drawer
      v-model="rightDrawer"
      absolute
      temporary
      right>
      <v-toolbar 
        flat >
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon>person</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>LoginedUserName</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider/>
          <v-list-tile>
            <v-btn>tweet</v-btn>
          </v-list-tile>
        </v-list>
      </v-toolbar>
    </v-navigation-drawer>
    <nuxt/>
    <v-footer class="mt-5">
      <v-card
        class="flex"
        flat
        tile
        dark
      >
        <v-card-actions class="blue-grey darken-1 justify-center">
          contact
          <v-btn
            v-for="icon in footerIcons"
            :key="icon"
            :href="icon.link"
            class="mx-3"
            icon
          >
            <v-icon> {{ icon.name }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        drawer: null,
        rightDrawer: null,
        items: [
          { action: '/', title: 'ページトップ', icon: 'home' },
          { divider: true },
          { header: '記録' },
          { action: '/record', title: '記録トップ', icon: 'home' },
          { action: '/record/checkin', title: 'チェックイン', icon: 'location_on' },
          { action: '/record/result', title: '結果入力', icon: 'note_add' },
          { divider: true },
          { header: '履歴' },
          { action: '/browse', title: '履歴トップ', icon: 'home' },
          { divider: true },
          { header: '登録' },
          { action: '/register', title: '登録トップ', icon: 'home' },
          { divider: true },
          { header: 'Labels' },
          { action: 'label', title: 'Family', icon: 'dashboard' },
          { action: 'label', title: 'Friends', icon: 'dashboard' },
          { action: 'label', title: 'Work', icon: 'dashboard' },
        ],
        footerIcons: [
          { name: 'fa-twitter-square', link: 'https://twitter.com/platykun'},
          { name: 'fa-github-square', link: 'https://github.com/platykun'},
        ]
      };
    },
  };
</script>
