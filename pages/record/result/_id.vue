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
    <v-card>
      <v-card-title>
        <div>
          <span class="grey--text">ユーザ名</span>
          <h2 class="blue-grey--text text--darken-1">{{ parent.userId }}</h2>
        </div>
        <v-spacer/>
        <div>
          <span class="grey--text">{{ parent.create | moment }}</span>
        </div>
      </v-card-title>
      <v-card-text>
        <div>
          <span class="grey--text">スコア:</span>
          <h3 class="blue-grey--text text--darken-1">{{ parent.score }}</h3>
          <span class="grey--text">コメント</span>
          <h3 class="blue-grey--text text--darken-1">{{ parent.comment }}</h3>
        </div>
      </v-card-text>
    </v-card>
    <v-card
      v-for="child in children"
      :key="child"
    >
      <v-card-title>
        <div>
          <span class="grey--text">ユーザ名</span>
          <h2 class="blue-grey--text text--darken-1">{{ child.userId }}</h2>
        </div>
        <v-spacer/>
        <div>
          <span class="grey--text">{{ child.create | moment }}</span>
        </div>
      </v-card-title>
      <v-card-text>
        <div>
          <span class="grey--text">スコア:</span>
          <h3 class="blue-grey--text text--darken-1">{{ child.score }}</h3>
          <span class="grey--text">コメント</span>
          <h3 class="blue-grey--text text--darken-1">{{ child.comment }}</h3>
        </div>
      </v-card-text>
    </v-card>

    <v-btn
      :to="{ path: '/record/result', query: { parentId: parentId}}"
      class="deep-orange accent-3"
      dark>
      <v-icon>add</v-icon>
      追加
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
      parent: null,
      children: null,
    };
  },
  asyncData({app, query}, callback) {
    const parentId = app.context.params.id;
    HistoryResult.getHistoriesById(parentId).then(
      (response) => {
        let resParent = response.data.result.parent;
        let resChildren = response.data.result.child;
        callback(null, {
          parentId: parentId,
          boardGameTitle: resParent.boardGameTitle,
          placeName: resParent.placeName,
          parent: resParent,
          children: resChildren,
        })
      });
  },
  methods: {
    addButton() {
      return {
        path: '/record/result',
        params: {
          parentId: this.parentId,
        },
      };
    }
  }
};
</script>
<style scoped>
</style>
