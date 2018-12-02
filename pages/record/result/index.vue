<template>
  <div class="result">
    <div class="flex xs12 sm6 offset-sm3">
      <h2>プレイ情報</h2>
      <v-text-field
        v-model="resultId"
        label="結果ID"/>
      <div>
        <h4>ボードゲーム名</h4>
        <span>{{ boardGame === null ? boardGameTitle : boardGame.title }}</span>
        <BoardGameSelectMordal
          v-if="isNewResult"
          v-model="boardGame"/>
      </div>
      <div>
        <h4>場所名</h4>
        <span>{{ place === null ? placeName : place.name }}</span>
        <PlaceSelectMordal
          v-if="isNewResult"
          v-model="place"/>
      </div>
      <h2>結果詳細</h2>
      <UsersSelectMordal
        v-if="isNewResult"
        v-model="userResults"
      />
      <UsersUpdateMordal
        v-if="!isNewResult"
        :input-users="userResults"
        :result-id="resultId"
      />
      <v-btn
        v-if="isNewResult"
        class="accent"
        dark
        @click.stop.prevent="result"
      >結果作成</v-btn>
    </div>
  </div>
</template>

<script>
import Result from '~/plugins/js/interface/Result.js';
import HistoryResult from '~/plugins/js/interface/history/HistoryResult.js';
import BoardGameSelectMordal from '~/components/record/boardGameSelectMordal';
import PlaceSelectMordal from '~/components/record/placeSelectMordal';
import UsersSelectMordal from '~/components/record/usersSelectMordal';
import UsersUpdateMordal from '~/components/record/usersUpdateMordal';

export default {
  name: 'Result',
  components: {
    'BoardGameSelectMordal': BoardGameSelectMordal,
    'PlaceSelectMordal': PlaceSelectMordal,
    'UsersSelectMordal': UsersSelectMordal,
    'UsersUpdateMordal': UsersUpdateMordal,
  },
  data() {
    console.log(this.$store.state);
    return {
      nextlink: '/top',
      parentId: -1,
      boardGameId: 0,
      boardGameTitle: '未入力',
      placeId: '',
      placeName: '未入力',
      boardGame: null,
      place: null,
      userResults: [],
      isNewResult: true,
    };
  },
  asyncData({ query, store }, callback) {
    // 親IDが指定されていない場合はデフォルト値を使う.
    if(typeof(query.resultId) === "undefined") {
      callback(null, {
        resultId: -1,
        placeId: store.getters['userDetail/checkIn'].id,
        placeName: store.getters['userDetail/checkIn'].name,
      });
      return null;
    }

    // getパラメータに結果Idが指定されていた場合検索して値を取得してくる.
    const resultId = query['resultId'];
    if(resultId != null) {
      HistoryResult.getHistoriesById(resultId).then(
        (response) => {
          let userList = response.data.result.userList;
          let result = response.data.result;
          callback(null, {
            resultId: resultId,
            boardGameId: result.boardGameId,
            boardGameTitle: result.boardGameTitle,
            placeId: result.placeId,
            placeName: result.placeName,
            userResults: userList,
            isNewResult: false,
          })
        });
    }
  },
  methods: {
    result() {
      let sendBoardGameId = (this.boardGame === null) ? this.boardGameId : this.boardGame.id;
      let sendBoardGameTitle = (this.boardGame === null) ? this.boardGameTitle : this.boardGame.title;
      let sendPlaceId = (this.place === null) ? this.placeId : this.place.id;
      let sendPlaceName = (this.place === null) ? this.placeName : this.place.name;

      Result.result(sendBoardGameId, sendBoardGameTitle, sendPlaceId, sendPlaceName, this.userResults).then(
        (response) => {
          // eslint-disable-next-line
          console.log(response);
          this.$router.push({ path: '/top' });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.msg = '登録に失敗しました.';
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
