<template>
  <div>
    <v-toolbar
      color="teal"
      dark
      clipped="true">
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
        <v-icon>dashboard</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
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
    <nuxt/>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        drawer: null,
        items: [
          { header: '記録' },
          { action: '/record', title: '記録トップ', icon: 'home' },
          { action: '/record/checkin', title: 'チェックイン', icon: 'location_on' },
          { action: '/record/create', title: 'ルーム作成', icon: 'group' },
          { action: '/record/join', title: 'ルーム参加', icon: 'group_add' },
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
      };
    },
  };
</script>
