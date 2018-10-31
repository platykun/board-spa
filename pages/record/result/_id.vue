<template>
  <div class="result">
    <h1>{{ msg }}</h1>
    {{ $route.params.id }}

    <v-card class="ma-2">
      <v-card-title>
        <div>
          <span class="grey--text">ボードゲーム名</span>
          <h2 class="blue-grey--text text--darken-1">{{ boardGame }}</h2>
          <span class="grey--text">場所</span>
          <h2 class="blue-grey--text text--darken-1">{{ place }}</h2>
        </div>
      </v-card-title>
    </v-card>

    <h2>記録一覧</h2>
    <recordCard
      v-for="history in histories"
      :key="history"
      :board-game="history.boardGameTitle"
      :date="history.create"
      :name="history.userId"
      :place="history.placeName"
    />


  </div>
</template>

<script>
import Result from '~/plugins/js/interface/Result.js';
import recordCard from '~/components/record/recordCard';

export default {
  name: 'Result',
  components: {
    'recordCard': recordCard,
  },
  data() {
    return {
      msg: 'Welcome to Result page',
      boardGame: 'ボードゲームの名前',
      place: 'ボドゲショップ1',
      histories: [
        {boardGameTitle: 'タイトル', create: '2018/10/29 11:11:11', userId: 'admin', placeName: 'ボドゲショップ1'},
        {boardGameTitle: 'タイトル', create: '2018/10/29 11:11:11', userId: 'admin', placeName: 'ボドゲショップ1'},
        {boardGameTitle: 'タイトル', create: '2018/10/29 11:11:11', userId: 'admin', placeName: 'ボドゲショップ1'},
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
