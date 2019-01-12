<template>
  <v-content>
    <section>
      <v-parallax
        src="/index_background.jpg"
        height="400">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <img src="~/assets/logo.png" height="200">
          <h1 class="white--text mb-2 display-1 text-xs-center">Board Game Management</h1>
          <div class="subheading mb-3 text-xs-center">遊んだボードゲームを記録するwebアプリケーション</div>
          <v-btn
            class="accent mt-2"
            dark
            large
            to="/signup"
          >
            新規登録
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex
          xs12
          sm4
          class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Board Game Managementでできること</h2>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout
              row
              wrap
              align-center>
              <v-flex
                v-for="description in descriptions"
                :key="description"
                xs12
                md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <fa
                      class="accent--text"
                      :icon="description.icon"
                      size="2x"
                    />
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center">
                    <div class="headline text-xs-center">{{ description.title }}</div>
                  </v-card-title>
                  <v-card-text>
                    {{ description.desc }}
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <!--<section>-->
      <!--<v-parallax-->
        <!--src="/index_background.jpg"-->
        <!--height="380">-->
        <!--<v-layout-->
          <!--column-->
          <!--align-center-->
          <!--justify-center>-->
          <!--<div class="headline white&#45;&#45;text mb-3 text-xs-center">他の人の記録を見てみましょう</div>-->
          <!--<v-btn-->
            <!--class="accent mt-5"-->
            <!--dark-->
            <!--large-->
            <!--href="/pre-made-themes"-->
          <!--&gt;-->
            <!--記録を見る-->
          <!--</v-btn>-->
        <!--</v-layout>-->
      <!--</v-parallax>-->
    <!--</section>-->

    <!--<section>-->
      <!--<v-container grid-list-xl>-->
        <!--<v-layout-->
          <!--row-->
          <!--wrap-->
          <!--justify-center-->
          <!--class="my-5">-->
          <!--<v-flex-->
            <!--xs12-->
            <!--sm4>-->
            <!--<v-card class="elevation-0 transparent">-->
              <!--<v-card-title-->
                <!--primary-title-->
                <!--class="layout justify-center">-->
                <!--<div class="headline">Company info</div>-->
              <!--</v-card-title>-->
              <!--<v-card-text>-->
                <!--カンパニーじゃないからこれの代わりの何かが入る-->
              <!--</v-card-text>-->
            <!--</v-card>-->
          <!--</v-flex>-->
          <!--<v-flex-->
            <!--xs12-->
            <!--sm4-->
            <!--offset-sm1>-->
            <!--<v-card class="elevation-0 transparent">-->
              <!--<v-card-title-->
                <!--primary-title-->
                <!--class="layout justify-center">-->
                <!--<div class="headline">Contact us</div>-->
              <!--</v-card-title>-->
              <!--<v-card-text>-->
                <!--フッター情報と情報が重複してるので不要かもしれない-->
              <!--</v-card-text>-->
              <!--<v-list class="transparent">-->
                <!--<v-list-tile>-->
                  <!--<v-list-tile-action>-->
                    <!--<v-icon class="secondary&#45;&#45;text">phone</v-icon>-->
                  <!--</v-list-tile-action>-->
                  <!--<v-list-tile-content>-->
                    <!--<v-list-tile-title>**********</v-list-tile-title>-->
                  <!--</v-list-tile-content>-->
                <!--</v-list-tile>-->
                <!--<v-list-tile>-->
                  <!--<v-list-tile-action>-->
                    <!--<v-icon class="secondary&#45;&#45;text">place</v-icon>-->
                  <!--</v-list-tile-action>-->
                  <!--<v-list-tile-content>-->
                    <!--<v-list-tile-title>Chicago, US</v-list-tile-title>-->
                  <!--</v-list-tile-content>-->
                <!--</v-list-tile>-->
                <!--<v-list-tile>-->
                  <!--<v-list-tile-action>-->
                    <!--<v-icon class="secondary&#45;&#45;text">email</v-icon>-->
                  <!--</v-list-tile-action>-->
                  <!--<v-list-tile-content>-->
                    <!--<v-list-tile-title>a@a.a</v-list-tile-title>-->
                  <!--</v-list-tile-content>-->
                <!--</v-list-tile>-->
              <!--</v-list>-->
            <!--</v-card>-->
          <!--</v-flex>-->
        <!--</v-layout>-->
      <!--</v-container>-->
    <!--</section>-->
  </v-content>
</template>
<script>
  import {faTwitter} from '@fortawesome/free-brands-svg-icons';

  export default {
    layout: 'home',
    middleware: 'notAuthenticated',
    data() {
      return {
        descriptions: [
          {icon: 'pencil-alt', title: '記録する', desc: '遊んだボードゲームを記録する事ができます。'},
          {icon: 'book', title: '閲覧する', desc: '様々なプレイヤーのプレイ記録を閲覧することができます。'},
          {icon: 'dove', title: '共有する', desc: 'twitter等で情報を共有することができます。'},
        ],
      }
    },
    computed: {
      faTwitter() {
        return faTwitter;
      },
    },
  }
</script>

