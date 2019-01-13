<template>
  <div class="container">
    <div class="flex xs12 sm8 offset-sm2">
      <h1 class="display-1 primary--text">
        <p>記録 更新</p>
      </h1>
      <div>
        <div class="secondary--text caption">ボードゲーム名</div>
        <p class="primary--text body-2">
          <span> {{ boardGame === null ? boardGameTitle : boardGame.title }} </span>
        </p>
      </div>
      <div>
        <div class="secondary--text caption">場所名</div>
        <p class="primary--text body-2">
          <span>{{ place === null ? placeName : place.name }}</span>
        </p>
      </div>
      <div>
        <div class="secondary--text caption">結果詳細</div>
        <UserUpdateList
          :input-users="userResults"
          :result-id="resultId"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import HistoryResult from '~/plugins/js/interface/history/HistoryResult.js';
  import UserUpdateList from '~/components/templates/userResult/userUpdateList';

  export default {
    name: 'Result',
    middleware: 'authenticated',
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    components: {
      'UserUpdateList': UserUpdateList,
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
      };
    },
    asyncData({store, params}, callback) {
      // getパラメータに結果Idが指定されていた場合検索して値を取得してくる.
      const resultId = params.id;
      if (resultId != null) {
        HistoryResult.getHistoriesById(resultId).then(
          (response) => {
            let userList = response.data.result.userList;
            let result = response.data.result;
            callback(null, {
              isNewCreate: false,
              resultId: resultId,
              boardGameId: result.boardGameId,
              boardGameTitle: result.boardGameTitle,
              placeId: result.placeId,
              placeName: result.placeName,
              userResults: userList,
            })
          });
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
