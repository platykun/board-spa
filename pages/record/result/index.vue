<template>
  <div class="container">
    <div class="flex xs12 sm8 offset-sm2">
      <h1 class="display-1 primary--text">
        <p>記録 新規作成</p>
      </h1>
      <div>
        <div class="secondary--text caption">ボードゲーム名</div>
        <p class="primary--text body-2">
          <span> {{ boardGame === null ? boardGameTitle : boardGame.title }} </span>
          <BoardGameSelectModal
            v-model="boardGame"/>
        </p>
      </div>
      <PlaceOrEventSelect></PlaceOrEventSelect>
      <div>
        <div class="secondary--text caption">結果詳細</div>
        <UsersResultList
          v-model="userResults"
        />
        <v-layout>
          <v-spacer/>
          <v-btn
            class="accent"
            dark
            @click.stop.prevent="result"
          >結果作成
          </v-btn>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
  import Result from '~/plugins/js/interface/Result.js';
  import BoardGameSelectModal from '~/components/organisms/selector/boardGameSelectModal';
  import PlaceSelectModal from '~/components/organisms/selector/placeSelectModal';
  import UsersResultList from '~/components/templates/userResult/userResultList';
  import PlaceOrEventSelect from '~/components/organisms/selector/placeOrEventSelect';

  export default {
    name: 'Result',
    middleware: 'authenticated',
    components: {
      'BoardGameSelectModal': BoardGameSelectModal,
      'PlaceSelectModal': PlaceSelectModal,
      'UsersResultList': UsersResultList,
      'PlaceOrEventSelect': PlaceOrEventSelect,
    },
    data() {
      console.log(this.$store.state);
      return {
        boardGameId: 0,
        boardGameTitle: '未入力',
        placeId: '',
        placeName: '未入力',
        boardGame: null,
        place: null,
        userResults: [],
        joiningEvent: false,
        event: null,
      };
    },
    beforeCreate() {
      // Event.findJoiningEvent().then(
      //   (response) => {
      //     this.event = response.data.result;
      //     this.joiningEvent = true;
      //   }
      // );
  },
    // 参加中のイベントの存在有無　もしくはチェックイン中の場所の存在有無を確認
    asyncData({query, store}, callback) {
      // 場所情報について、store情報から取得してデフォルト表示させる.
      if (typeof (query.resultId) === "undefined") {
        callback(null, {
          resultId: -1,
          placeId: store.getters['userDetail/checkIn'].id,
          placeName: store.getters['userDetail/checkIn'].name,
        });
        return null;
      }
    },
    methods: {
      showPlaceName() {
        return !this.joiningEvent;
      },
      showEventName() {
        return this.joiningEvent;
      },
      result() {
        let sendBoardGameId = (this.boardGame === null) ? this.boardGameId : this.boardGame.id;
        let sendBoardGameTitle = (this.boardGame === null) ? this.boardGameTitle : this.boardGame.title;
        let sendPlaceId = this.getSubmitPlaceId();
        let sendPlaceName = this.getSubmitPlaceName();
        let sendEventId = (this.joiningEvent) ? this.event.id : null;
        Result.result(sendBoardGameId, sendBoardGameTitle, sendPlaceId, sendPlaceName, sendEventId, this.userResults).then(
          (response) => {
            this.$router.push({path: '/top'});
          })
          .catch((error) => {
            this.msg = '登録に失敗しました.';
          });
      },
      // 登録用場所ID.イベントに参加中の場合、イベント情報から取得.
      getSubmitPlaceId() {
        if(this.joiningEvent)return this.event.placeId;

        return (this.place === null) ? this.placeId : this.place.id;
      },
      // 登録用場所名.イベントに参加中の場合、イベント情報から取得.
      getSubmitPlaceName() {
        if(this.joiningEvent)return this.event.placeName;

        return (this.place === null) ? this.placeName : this.place.name;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
