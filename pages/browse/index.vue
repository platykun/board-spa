<template>
  <div class="record">
    RecordTop
    <div class="flex xs12 sm6 offset-sm3">
      <h2>記録の確認</h2>
    </div>
    <h3>チェックイン履歴</h3>

    <v-card>
      <v-list two-line>
        <template v-for="(checkin, index) in checkins">
          <v-list-tile
            :key="checkin.id"
            avatar
            ripple
            @click="toggle(index)"
          >
            <v-list-tile-content>
              <v-list-tile-sub-title class="text--primary"> チェックインID : {{ checkin.id }}</v-list-tile-sub-title>
              <v-list-tile-title> 場所 : {{ checkin.placeName }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ checkin.timestamp }}</v-list-tile-action-text>
              <v-chip
                close
                color="teal"
                text-color="white">
                check out
              </v-chip>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider
            v-if="index + 1 < checkins.length"
            :key="index"
          />
        </template>
      </v-list>
    </v-card>

    <h3>ルーム参加履歴</h3>

    <v-card>
      <v-list two-line>
        <template v-for="(joinRoom, index) in joinRooms">
          <v-list-tile
            :key="joinRoom.roomId"
            avatar
            ripple
            @click="toggle(index)"
          >
            <v-list-tile-content>
              <v-list-tile-sub-title class="text--primary"> ルームID : {{ joinRoom.roomId }}</v-list-tile-sub-title>
              <v-list-tile-title> ルーム名 : TODOここにルーム名が入る</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ joinRoom.joinDate }}</v-list-tile-action-text>
              <v-chip
                text-color="white">
                作成者
              </v-chip>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider
            v-if="index + 1 < checkins.length"
            :key="index"
          />
        </template>
      </v-list>
    </v-card>

    <h3>結果履歴</h3>

    <v-card>
      <v-list two-line>
        <template v-for="(result, index) in results">
          <v-list-tile
            :key="result.roomId"
            avatar
            ripple
            @click="toggle(index)"
          >
            <v-list-tile-content>
              <v-list-tile-sub-title class="text--primary"> ルームID : {{ result.roomId }}</v-list-tile-sub-title>
              <v-list-tile-title> {{ result.rank }} {{ result.score }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text> TODO: ここに日付が入る</v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider
            v-if="index + 1 < checkins.length"
            :key="index"
          />
        </template>
      </v-list>
    </v-card>

    <p>{{ $data }}</p>
  </div>
</template>

<script>
  import HistoryCheckin from '~/plugins/js/interface/history/HistoryCheckin.js';
  import HistoryJoinRoom from '~/plugins/js/interface/history/HistoryJoinRoom.js';
  import HistoryResult from '~/plugins/js/interface/history/HistoryResult.js';

  export default {
    data() {
      return {
        msg: 'Welcome to record page',
        checkins: [],
        joinRooms: [],
        results: [],
      };
    },
    beforeCreate() {
      const page = 0;
      HistoryCheckin.getHistories(page).then(
        (response) => {
          this.checkins = response.data.result;
        }
      );
      HistoryJoinRoom.getHistories(page).then(
        (response) => {
          this.joinRooms = response.data.result;
        }
      );
      HistoryResult.getHistories(page).then(
        (response) => {
          this.results = response.data.result;
        }
      );
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
