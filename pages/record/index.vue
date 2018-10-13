<template>
  <div class="record">
    <div class="flex xs12 sm6 offset-sm3 mt-3">
      <v-alert
        :value="needToCheckIn"
        color="lime"
      >
        チェックインしましょう!!
      </v-alert>
      <v-alert
        :value="needToJoinRoom"
        color="lime"
      >
        ルームに参加しましょう!!
      </v-alert>
      <v-alert
        :value="needToAddResult"
        color="lime"
      >
        結果を記録しましょう!!
      </v-alert>
      <h2 class="blue-grey--text text--darken-1">参加中ルーム情報</h2>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="blue-grey darken-1">label</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-sub-title>部屋名</v-list-tile-sub-title>
            <v-list-tile-title>{{ roomName }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="blue-grey darken-1">label</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-sub-title>ボードゲームタイトル</v-list-tile-sub-title>
            <v-list-tile-title>{{ boardTitle }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="blue-grey darken-1">label</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-sub-title>参加人数</v-list-tile-sub-title>
            <v-list-tile-title>{{ player }}人</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="blue-grey darken-1">label</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-sub-title>備考</v-list-tile-sub-title>
            <v-list-tile-title>{{ remark }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="blue-grey darken-1">people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-sub-title>参加者</v-list-tile-sub-title>
            <v-list-tile-title>{{ joinPlayerName }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider/>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="blue-grey darken-1">map</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-sub-title>チェックイン中</v-list-tile-sub-title>
            <v-list-tile-title>{{ placeName }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      msg: 'Welcome to record page',
    };
  },
  computed: {
    ...mapGetters({
      needToCheckIn: 'userDetail/needToCheckIn',
      needToJoinRoom: 'userDetail/needToJoinRoom',
      needToAddResult: 'userDetail/needToAddResult',
      placeName: 'userDetail/placeName',
      roomName: 'userDetail/roomName',
      boardTitle: 'userDetail/boardTitle',
      player: 'userDetail/player',
      remark: 'userDetail/remark',
      joinPlayerName: 'userDetail/joinPlayerName',
    })
  },
  async asyncData({ route, store }) {
    store.dispatch('userDetail/addUserDetail');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
