<template>
  <div class="record">
    <div class="flex xs12 sm6 offset-sm3">
      <h2>ボードゲーム新規登録</h2>
      <BoardGameTitleForm v-model="boardGameTitle"/>
      <BoardGamePlayerForm v-model="boardGamePlayer"/>
      <BoardGameOverviewForm v-model="boardGameOverview"/>

      <v-btn
        class="accent"
        dark
        @click="registerBoardGame"
      >登録
      </v-btn>
    </div>
  </div>
</template>

<script>
  import BoardGameOverviewForm from '~/components/molecules/form/boardGameOverviewForm';
  import BoardGamePlayerForm from '~/components/molecules/form/boardGamePlayerForm';
  import BoardGameTitleForm from '~/components/molecules/form/boardGameTitleForm';
  import BoardGame from '~/plugins/js/interface/BoardGame.js';

  export default {
    components: {
      'BoardGameOverviewForm': BoardGameOverviewForm,
      'BoardGamePlayerForm': BoardGamePlayerForm,
      'BoardGameTitleForm': BoardGameTitleForm,
    },
    data() {
      return {
        boardGameTitle: '',
        boardGamePlayer: 1,
        boardGameOverview: '',
      };
    },
    methods: {
      registerBoardGame() {
        BoardGame.regist(this.boardGameTitle, this.boardGamePlayer, this.boardGameOverview).then(
          (response) => {
            this.$router.push({path: '/top'});
          }
        );
      }
    }
  };
</script>

<style scoped>
</style>
