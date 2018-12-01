<template>
  <v-content>
    <section>
      <v-parallax
        src="/index_background.jpg"
        height="600">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <v-icon
            dark
            size="100px">ballot</v-icon>
          <h1 class="white--text mb-2 display-1 text-xs-center">Board Game Management</h1>
          <div class="subheading mb-3 text-xs-center">This is an application to record the board game you played</div>
          <v-btn
            class="accent mt-5"
            dark
            large
            to="/login"
          >
            はじめる
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
                    <v-icon
                      x-large
                      class="accent--text">{{ description.icon }}</v-icon>
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

    <section>
      <v-parallax
        src="/index_background.jpg"
        height="380">
        <v-layout
          column
          align-center
          justify-center>
          <div class="headline white--text mb-3 text-xs-center">ここに気の利いたキャッチコピーが入る</div>
          <em>ここにも気の利いたキャッチーなコメントが入る</em>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            href="/pre-made-themes"
          >
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout
          row
          wrap
          justify-center
          class="my-5">
          <v-flex
            xs12
            sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title
                primary-title
                class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                カンパニーじゃないからこれの代わりの何かが入る
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex
            xs12
            sm4
            offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title
                primary-title
                class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                フッター情報と情報が重複してるので不要かもしれない
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="secondary--text">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>**********</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="secondary--text">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="secondary--text">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>a@a.a</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  layout: 'home',
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      descriptions: [
        {icon: 'fa-pencil', title: '記録する', desc: '遊んだボードゲームを記録する事ができます。'},
        {icon: 'fa-book', title: '閲覧する', desc: '様々なプレイヤーのプレイ記録を閲覧することができます。'},
        {icon: 'fa-twitter', title: '共有する', desc: 'twitter等で情報を共有することができます。'},
      ],
    }
  }
}
</script>

