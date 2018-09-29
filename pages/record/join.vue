<template>
  <div class="index">
    <v-layout row>
      <v-flex
        xs12
        sm6
        offset-sm3/>
    </v-layout>


    <div class="flex xs12 sm6 offset-sm3">
      <v-text-field
        v-model="room"
        label="ルーム名検索"/>
      <v-list subheader>
        <v-subheader>検索結果</v-subheader>

        <v-list-tile
          v-for="oneRoom in rooms"
          :key="oneRoom"
          @click="join(oneRoom.id)">
          <v-list-tile-content @click="notifications = !notifications">
            <v-list-tile-title v-text="oneRoom.roomName"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </div>
    <v-btn to=".">ルームに参加</v-btn>
    <p>{{ $data }}</p>
  </div>
</template>

<script>
import JoinRoom from '~/plugins/js/interface/JoinRoom';

export default {
  name: 'Room',
  data() {
    return {
      msg: 'Welcome to JoinRoom page',
      room: '',
      rooms: [],
    };
  },
  watch: {
    room(val) {
      new JoinRoom(val).findRoom().then(
        (response) => {
          this.rooms = response.data.result;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.msg = '登録に失敗しました.';
        });
    },
  },
  beforeCreate() {
    JoinRoom.findAllRoom().then(
      (response) => {
        this.rooms = response.data.result;
      });
  },
  methods: {
    joinRoom(val) {
      JoinRoom.joinRoom(val);
      this.$router.push({ path: './top' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
