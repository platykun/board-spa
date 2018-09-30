<template>
  <div class="result">
    <h1>{{ msg }}</h1>
    Result
    <div class="flex xs12 sm6 offset-sm3">
      <v-text-field
        v-model="rank"
        label="順位"/>
      <v-text-field
        v-model="score"
        label="スコア"/>
      <v-text-field
        v-model="comment"
        label="コメント"/>
    </div>
    <v-btn @click.stop.prevent="result">結果作成</v-btn>
  </div>
</template>

<script>
import Result from '~/plugins/js/interface/Result.js';

export default {
  name: 'Result',
  data() {
    return {
      msg: 'Welcome to Result page',
      rank: 0,
      score: '',
      comment: '',
    };
  },
  methods: {
    result() {
      Result.result(this.rank, this.score, this.comment).then(
        (response) => {
          // eslint-disable-next-line
          console.log(response);
          this.$router.push({ path: '/result' });
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
