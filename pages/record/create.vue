<template>
  <div class="index">
    <h1>{{ msg }}{{ roomName }}</h1>
    <div class="flex xs12 sm6 offset-sm3">
      <v-text-field
        v-model="roomName"
        label="ルーム名"/>
      <v-text-field
        v-model="player"
        label="プレイ人数"/>
      <v-text-field
        v-model="boardTitle"
        label="ボードゲーム名"/>
      <v-text-field
        v-model="placeName"
        label="場所名"/>
      <v-text-field
        v-model="remark"
        label="備考"/>
    </div>
    <v-btn @click.stop.prevent="create">ルーム作成</v-btn>
  </div>
</template>

<script>
import CreateRoom from '~/plugins/js/interface/CreateRoom.js';

export default {
  name: 'Room',
  data() {
    return {
      roomName: '',
      player: '',
      boardTitle: '',
      placeName: '',
      remark: '',
      msg: 'ルーム作成',
    };
  },
  methods: {
    createRoom() {
      const createRoom = new CreateRoom(
        this.roomName, this.player, this.boardTitle, this.placeName, this.remark);

      create.createRoom().then(
        (response) => {
          // eslint-disable-next-line
          console.log(response);
          this.$router.push({ path: './top' });
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
