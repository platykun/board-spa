<template>
  <div class="container">
    <v-card>
      <v-card-title>
        <div>
          <div class="secondary--text caption">ボードゲーム名</div>
          <p class="primary--text title">{{ boardGameTitle }}</p>
          <div class="secondary--text caption">場所</div>
          <p class="primary--text title">{{ placeName }}</p>
        </div>
      </v-card-title>
    </v-card>

    <h3 class="primary--text title mt-3 mb-2">記録一覧</h3>

    <v-card>
      <v-list three-line>
        <template v-for="user in userList">
          <v-list-tile
            :key="user.userId"
          >
            <v-list-tile-content>
              <div class="secondary--text body-1">
                user:
                <span class="primary--text title">{{ user.userId }}</span>
              </div>
              <div class="secondary--text body-1">
                score:
                <span class="primary--text title">{{ user.score }}</span>
              </div>
              <span class="primary--text caption">{{ user.comment }}</span>

            </v-list-tile-content>
            <v-list-action>
              <v-spacer/>
              <span class="secondary--text caption">{{ user.create | moment }}</span>
            </v-list-action>
          </v-list-tile>
          <v-divider :key="user.userId + 'div'"/>
        </template>
      </v-list>
    </v-card>
    <v-layout>
      <v-spacer/>
      <v-btn
        :to="{ path: '/record/result', query: { resultId: resultId}}"
        class="accent"
        dark>
        <v-icon>add</v-icon>
        編集
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
  import HistoryResult from '~/plugins/js/interface/history/HistoryResult.js';
  import recordCard from '~/components/organisms/cards/recordCard';
  import moment from 'moment';

  export default {
    name: 'Result',
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    filters: {
      moment: function (date) {
        return moment(date).format('YYYY/MM/DD HH:mm');
      },
    },
    components: {
      'recordCard': recordCard,
    },
    data() {
      return {};
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
  };
</script>
<style scoped>
</style>
