<template>
  <div class="record">
    <div class="flex xs12 sm6 offset-sm3 mt-3">
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
import Detail from '~/plugins/js/interface/Detail.js';

export default {
  data() {
    return {
      msg: 'Welcome to record page',
      placeName: '',
      roomName: '',
      boardTitle: '',
      player: '',
      remark: '',
      joinPlayerName: [],
    };
  },
  beforeCreate() {
    Detail.getDetail().then(
      (response) => {
        const result = response.data.result;
        this.placeName = result.placeName;
        this.roomName = result.roomName;
        this.boardTitle = result.boardTitle;
        this.player = result.player;
        this.remark = result.remark;
        this.joinPlayerName = result.joinPlayerName;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
