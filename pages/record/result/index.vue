<template>
  <div class="result">
    <h1>{{ msg }}</h1>

    Result
    <div class="flex xs12 sm6 offset-sm3">
      <h2>プレイ情報</h2>
      <v-text-field
        v-model="parentId"
        label="親ID"/>
      <div>
        <h4>ボードゲーム名</h4>
        <span>{{ boardGame === null ? '未入力' : boardGame.title }}</span>
        <BoardGameSelectMordal v-model="boardGame"/>
      </div>
      <div>
        <h4>場所名</h4>
        <span>{{ place === null ? '未入力' : place.name }}</span>
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
      msg: 'Welcome to Result page',
      rank: 0,
      score: '',
      comment: '',
      boardGame: null,
      place: null,
    };
  },
  methods: {
    result() {
      Result.result(this.rank, this.score, this.comment).then(
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
