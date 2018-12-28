<template>
  <div class="container">
    <div class="flex xs12 sm8 offset-sm2">
      <h1 class="display-1 primary--text">
        <p>{{ title() }}</p>
      </h1>
      <div>
        <div class="secondary--text caption">ボードゲーム名</div>
        <p class="primary--text body-2">
          <span> {{ boardGame === null ? boardGameTitle : boardGame.title }} </span>
          <BoardGameSelectMordal
            v-if="isNewResult"
            v-model="boardGame"/>
        </p>
      </div>
      <div>
        <div class="secondary--text caption">場所名</div>
        <p class="primary--text body-2">
          <span>{{ place === null ? placeName : place.name }}</span>
          <PlaceSelectMordal
            v-if="isNewResult"
            v-model="place"/>
        </p>
      </div>
      <div>
        <div class="secondary--text caption">結果詳細</div>
        <UsersResultList
          v-if="isNewResult"
          v-model="userResults"
        />
        <UserUpdateList
          v-if="!isNewResult"
          :input-users="userResults"
          :result-id="resultId"
        />
        <v-btn
          v-if="isNewResult"
          class="accent"
          dark
          @click.stop.prevent="result"
        >結果作成
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import Result from '~/plugins/js/interface/Result.js';
  import HistoryResult from '~/plugins/js/interface/history/HistoryResult.js';
  import BoardGameSelectMordal from '~/components/organisms/selector/boardGameSelectMordal';
  import PlaceSelectMordal from '~/components/organisms/selector/placeSelectMordal';
  import UsersResultList from '~/components/templates/userResult/userResultList';
  import UserUpdateList from '~/components/templates/userResult/userUpdateList';

  export default {
    name: 'Result',
    components: {
      'BoardGameSelectMordal': BoardGameSelectMordal,
      'PlaceSelectMordal': PlaceSelectMordal,
      'UsersResultList': UsersResultList,
      'UserUpdateList': UserUpdateList,
    },
    data() {
      console.log(this.$store.state);
      return {
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
    asyncData({query, store}, callback) {
      // 親IDが指定されていない場合はデフォルト値を使う.
      if (typeof (query.resultId) === "undefined") {
        callback(null, {
          isNewCreate: true,
          resultId: -1,
          placeId: store.getters['userDetail/checkIn'].id,
          placeName: store.getters['userDetail/checkIn'].name,
        });
        return null;
      }

      // getパラメータに結果Idが指定されていた場合検索して値を取得してくる.
      const resultId = query['resultId'];
      if (resultId != null) {
        HistoryResult.getHistoriesById(resultId).then(
          (response) => {
            let userList = response.data.result.userList;
            let result = response.data.result;
            callback(null, {
              isNewCreate: false,
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
      title() {
        return this.isNewCreate ? "記録 新規作成" : "記録 編集";
      },
      result() {
        let sendBoardGameId = (this.boardGame === null) ? this.boardGameId : this.boardGame.id;
        let sendBoardGameTitle = (this.boardGame === null) ? this.boardGameTitle : this.boardGame.title;
        let sendPlaceId = (this.place === null) ? this.placeId : this.place.id;
        let sendPlaceName = (this.place === null) ? this.placeName : this.place.name;

        Result.result(sendBoardGameId, sendBoardGameTitle, sendPlaceId, sendPlaceName, this.userResults).then(
          (response) => {
            this.$router.push({path: '/top'});
          })
          .catch((error) => {
            this.msg = '登録に失敗しました.';
          });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
