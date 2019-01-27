<template>
  <div class="container">
    <v-flex
      xs12
      sm6
      offset-sm3>
      <h2 class="primary--text">イベント詳細</h2>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="secondary--text caption">場所名</div>
            <p class="primary--text title">{{ eventDetail.placeName }}</p>
            <div class="secondary--text caption">開始日時</div>
            <p class="primary--text title">{{ eventDetail.date_time_from | moment }}</p>
            <div class="secondary--text caption">終了日時日時</div>
            <p class="primary--text title">{{ eventDetail.date_time_to | moment }}</p>
          </div>
        </v-card-title>
      </v-card>
      <v-layout>
        <v-spacer/>
        <v-btn
          class="accent mt-2"
          dark
          @click="joinEvent"
        >
          このイベントに参加
        </v-btn>
      </v-layout>
      <h2 class="primary--text">参加者一覧</h2>
      <v-card>
        <v-list three-line>
          <template v-for="(user, index) in joinUserList">
            <v-list-tile
              :key="user.userId"
            >
              <v-list-tile-content>
                <div class="secondary--text body-1">
                  name:
                  <span class="primary--text title">{{ user.name }}</span>
                </div>
              </v-list-tile-content>
            </v-list-tile>
            <!--一番下のリスト以外ではdividerを表示させる-->
            <v-divider
              v-if="joinUserList.length !== index + 1"
              :key="user.userId + 'div'"/>
          </template>
        </v-list>
      </v-card>

      <h2 class="primary--text">結果一覧</h2>
      TODO: ここに結果情報を表示させる
    </v-flex>
  </div>
</template>

<script>
  import Event from '~/plugins/js/interface/Event.js';
  import moment from 'moment';

  export default {
    name: 'Checkin',
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    filters: {
      moment: function (date) {
        console.log(date);
        return moment(date).format('YYYY-MM-DD HH:mm');
      },
    },
    middleware: 'authenticated',
    data() {
      return {
      };
    },
    asyncData({app}, callback) {
      const eventId = app.context.params.id;
      Event.detail(eventId).then(
        (response) => {
          let event = response.data.result;
          callback(null, {
            eventId: eventId,
            event: event,
            eventDetail: event.eventDetail,
            joinUserList: event.joinUserList,
            resultList: event.resultList,
          })
        },
      )
    },
    methods: {
      joinEvent() {
        Event.join(this.eventId).then(
          (response) => {
            this.$router.push({path: '/events'});
          }
        )
      }
    },
  };
</script>
<style scoped>
</style>
