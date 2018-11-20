<template>
  <div class="result">
    <h1>{{ msg }}</h1>
    {{ $route.params.id }}

    <v-card class="ma-2">
      <v-card-title>
        <div>
          <span class="grey--text">ボードゲーム名</span>
          <h2 class="blue-grey--text text--darken-1">{{ boardGameTitle }}</h2>
          <span class="grey--text">場所</span>
          <h2 class="blue-grey--text text--darken-1">{{ placeName }}</h2>
        </div>
      </v-card-title>
    </v-card>

    <h2>記録一覧</h2>
    <v-card
      v-for="user in userList"
      :key="user"
    >
      <v-card-title>
        <div>
          <span class="grey--text">ユーザ名</span>
          <h2 class="blue-grey--text text--darken-1">{{ user.userId }}</h2>
        </div>
        <v-spacer/>
        <div>
          <span class="grey--text">{{ user.create | moment }}</span>
        </div>
      </v-card-title>
      <v-card-text>
        <div>
          <span class="grey--text">スコア:</span>
          <h3 class="blue-grey--text text--darken-1">{{ user.score }}</h3>
          <span class="grey--text">コメント</span>
          <h3 class="blue-grey--text text--darken-1">{{ user.comment }}</h3>
        </div>
      </v-card-text>
    </v-card>

    <v-btn
      :to="{ path: '/record/result', query: { resultId: resultId}}"
      class="deep-orange accent-3"
      dark>
      <v-icon>add</v-icon>
      編集
    </v-btn>
  </div>
</template>

<script>
import Result from '~/plugins/js/interface/Result.js';
import HistoryResult from '~/plugins/js/interface/history/HistoryResult.js';
import recordCard from '~/components/record/recordCard';
import moment from 'moment';

export default {
  name: 'Result',
  filters: {
    moment: function (date) {
      return moment(date).format('YYYY/MM/DD HH:mm');
    },
  },
  components: {
    'recordCard': recordCard,
  },
  data() {
    return {
      msg: 'Welcome to Result page',
    };
  },
  asyncData({app, query}, callback) {
    const resultId = app.context.params.id;
    HistoryResult.getHistoriesById(resultId).then(
      (response) => {
        let res = response.data.result;
        callback(null, {
          resultId: resultId,
          boardGameTitle: res.boardGameTitle,
          placeName: res.placeName,
          userList: res.userList
        })
      });
  },
  methods: {
    addButton() {
      return {
        path: '/record/result',
        params: {
          resultId: this.resultId,
        },
      };
    }
  }
};
</script>
<style scoped>
</style>
