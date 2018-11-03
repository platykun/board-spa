<template>
  <div class="result">
    <div class="flex xs12 sm6 offset-sm3">
      <h2>プレイ情報</h2>
      <v-text-field
        v-model="parentId"
        label="親ID"/>
      <div>
        <h4>ボードゲーム名</h4>
        <span>{{ boardGame === null ? boardGameTitle : boardGame.title }}</span>
        <BoardGameSelectMordal v-model="boardGame"/>
      </div>
      <div>
        <h4>場所名</h4>
        <span>{{ place === null ? placeName : place.name }}</span>
        <PlaceSelectMordal v-model="place"/>
      </div>
      <h2>結果詳細</h2>
      <v-text-field
        v-model="score"
        label="スコア"/>
      <v-text-field
        v-model="comment"
        label="コメント"/>
    </div>
    <v-btn
      class="deep-orange accent-3"
      dark
      @click.stop.prevent="result">結果作成</v-btn>
  </div>
</template>

<script>
import Result from '~/plugins/js/interface/Result.js';
import HistoryResult from '~/plugins/js/interface/history/HistoryResult.js';
import BoardGameSelectMordal from '~/components/record/boardGameSelectMordal';
import PlaceSelectMordal from '~/components/record/placeSelectMordal';

export default {
  name: 'Result',
  components: {
    'BoardGameSelectMordal': BoardGameSelectMordal,
    'PlaceSelectMordal': PlaceSelectMordal,
  },
  data() {
    return {
      nextlink: '/record',
      parentId: -1,
      boardGameId: 0,
      boardGameTitle: '未入力',
      placeId: 0,
      placeName: '未入力',
      score: '',
      comment: '',
      boardGame: null,
      place: null,
    };
  },
  asyncData({ query }, callback) {
    // 親IDが指定されていない場合はデフォルト値を使う.
    if(typeof(query.parentId) === "undefined") {
      callback(null, {});
      return null;
    }

    // getパラメータにparentIdが指定されていた場合検索して値を取得してくる.
    const parentId = query['parentId'];
    if(parentId != null) {
      HistoryResult.getHistoriesById(parentId).then(
        (response) => {
          let resParent = response.data.result.parent;
          callback(null, {
            parentId: parentId,
            boardGameId: resParent.boardGameId,
            boardGameTitle: resParent.boardGameTitle,
            placeId: resParent.placeId,
            placeName: resParent.placeName,
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

      Result.result(this.parentId, sendBoardGameId, sendBoardGameTitle, sendPlaceId, sendPlaceName, this.score, this.comment).then(
        (response) => {
          // eslint-disable-next-line
          console.log(response);
          this.$router.push({ path: '/record' });
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
