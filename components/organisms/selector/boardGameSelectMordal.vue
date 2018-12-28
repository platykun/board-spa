<template>
  <v-dialog
    v-model="dialog"
    scrollable
  >
    <div slot="activator">
      <v-btn
        outline
        round
        class="accent accent--text"
      >
        <v-icon>library_add</v-icon>
        ボードゲーム選択
      </v-btn>
    </div>
    <v-card>
      <v-card-title>
        Select BoardGame
        <v-spacer/>
        <v-btn
          outline
          round
          class="accent accent--text"
          to="/register/boardGame">
          見つからない場合
        </v-btn>
      </v-card-title>
      <v-divider/>
      <v-text-field
        v-model="boardGameTitle"
        label="ボードゲーム名"/>
      <v-divider/>
      <v-card-text>
        <v-list>
          <v-list-tile
            v-for="boardGame in boardGames"
            :key="boardGame.title"
            @click="selectBoardGame(boardGame)"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="boardGame.title"/>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import BoardGame from '~/plugins/js/interface/BoardGame.js';

  export default {
    data() {
      return {
        dialogm1: '',
        msg: '',
        dialog: false,
        boardGameTitle: '',
        boardGames: [],
      }
    },
    watch: {
      boardGameTitle(val) {
        BoardGame.findBoardGame(val).then(
          (response) => {
            this.boardGames = response.data.result;
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.log(error);
            this.msg = '登録に失敗しました.';
          });
      }
    },
    methods: {
      selectBoardGame(val) {
        this.dialog = false;
        this.$emit('input', val);
      }
    }
  }
</script>

<style>
</style>
