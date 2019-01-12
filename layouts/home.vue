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
      <v-toolbar-items>
        <v-btn
          flat
          to="/login"
        >ログイン</v-btn>
        <v-btn
          flat
          to="/signup"
        >新規登録</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <nuxt/>
    <v-footer class="mt-5">
      <v-card
        class="flex"
        flat
        tile
        dark
      >
        <v-card-actions class="primary justify-center">
          contact
          {{ test }}
          <v-btn
            v-for="icon in footerIcons"
            :key="icon"
            :href="icon.link"
            class="mx-3"
            icon
          >
            <fa
              size="2x"
              :icon="icon.icon"/>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
  import {faTwitterSquare, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
  import LoginUserStore from '~/plugins/js/store/LoginUserStore';

  export default {
    data() {
      return {
        footerIcons: [
          {icon: faTwitterSquare, link: 'https://twitter.com/platykun'},
          {icon: faGithubSquare, link: 'https://github.com/platykun'},
        ]
      };
    },
    computed: {
      logoLink() {
        return LoginUserStore.isLogining() ? '/top' : '/';
      },
      loginUserName() {
        return LoginUserStore.isLogining() ? LoginUserStore.getUserId() : '未ログイン';
      },
    }
  };
</script>
