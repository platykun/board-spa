<template>
  <div class="container">
    <div class="flex xs12 sm8 offset-sm2">
      <h1 class="display-1 primary--text">
        <p>記録 新規作成</p>
      </h1>
      <div>
        <div class="secondary--text caption">ボードゲーム名</div>
        <p class="primary--text body-2">
          <span> {{ boardGame === null ? boardGameTitle : boardGame.title }} </span>
          <BoardGameSelectMordal
            v-model="boardGame"/>
        </p>
      </div>
      <div>
        <div class="secondary--text caption">場所名</div>
        <p class="primary--text body-2">
          <span>{{ place === null ? placeName : place.name }}</span>
          <PlaceSelectMordal
            v-model="place"/>
        </p>
      </div>
      <div>
        <div class="secondary--text caption">結果詳細</div>
        <UsersResultList
          v-model="userResults"
        />
        <v-layout>
          <v-spacer/>
          <v-btn
            class="accent"
            dark
            @click.stop.prevent="result"
          >結果作成
          </v-btn>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
  import Result from '~/plugins/js/interface/Result.js';
  import BoardGameSelectMordal from '~/components/organisms/selector/boardGameSelectMordal';
  import PlaceSelectMordal from '~/components/organisms/selector/placeSelectMordal';
  import UsersResultList from '~/components/templates/userResult/userResultList';

  export default {
    name: 'Result',
    middleware: 'authenticated',
    components: {
      'BoardGameSelectMordal': BoardGameSelectMordal,
      'PlaceSelectMordal': PlaceSelectMordal,
      'UsersResultList': UsersResultList,
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
      };
    },
    asyncData({query, store}, callback) {
      // 場所情報について、store情報から取得してデフォルト表示させる.
      if (typeof (query.resultId) === "undefined") {
        callback(null, {
          isNewCreate: true,
          resultId: -1,
          placeId: store.getters['userDetail/checkIn'].id,
          placeName: store.getters['userDetail/checkIn'].name,
        });
        return null;
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
