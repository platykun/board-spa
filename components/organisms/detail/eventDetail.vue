<template>
  <div>
    <Title>イベント詳細</Title>
    <v-card>
      <v-card-title primary-title>
        <div><!-- div内が開業された状態にするために必要 -->
          <DescriptionValue>
            <div slot="description">場所名</div>
            <div slot="valueSpan">{{ getPlaceName()}}</div>
          </DescriptionValue>
          <DescriptionValue>
            <div slot="description">開始日時</div>
            <div slot="valueSpan">{{ getDateTimeFrom() | moment }}</div>
          </DescriptionValue>
          <DescriptionValue>
            <div slot="description">終了日時日時</div>
            <div slot="valueSpan">{{ getDateTimeTo() | moment }}</div>
          </DescriptionValue>
        </div>
      </v-card-title>
    </v-card>
    <v-layout>
      <v-spacer/>
      <PrimaryBtn v-on:click="joinEvent">
        このイベントに参加
      </PrimaryBtn>
    </v-layout>

    <div v-if="showUserList()">
      <Title>参加者一覧</Title>
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
    </div>
    <div v-if="showResultList">
      <Title>結果一覧</Title>
      <RecordCard
        v-for="result in resultList"
        :key="result"
        :id="result.id"
        :parent-id="result.parentId"
        :board-game="result.boardGameTitle"
        :date="result.create"
        disable-place
        disable-name
      />
    </div>
  </div>
</template>

<script>
  import Title from '~/components/atoms/texts/title';
  import PrimaryBtn from '~/components/atoms/buttons/primaryButton';
  import RecordCard from '~/components/molecules/cards/recordCard';
  import DescriptionValue from '~/components/molecules/texts/descriptionValue';
  import moment from 'moment';

  export default {
    components: {
      'Title': Title,
      'PrimaryBtn': PrimaryBtn,
      'RecordCard': RecordCard,
      'DescriptionValue': DescriptionValue,
    },
    props: {
      eventDetail: {
        type: Object,
        required: true,
      },
      joinUserList: {
        type: Object,
        required: true,
      },
      resultList: {
        type: Object,
        required: true,
      },
    },
    filters: {
      moment: function (date) {
        console.log(date);
        return moment(date).format('YYYY-MM-DD HH:mm');
      },
    },
    data() {
      return {}
    },
    methods: {
      getPlaceName() {
        return this.eventDetail == null ? '' : this.eventDetail.placeName;
      },
      getDateTimeFrom() {
        return this.eventDetail == null ? null : this.eventDetail.date_time_from;
      },
      getDateTimeTo() {
        return this.eventDetail == null ? null : this.eventDetail.date_time_to;
      },
      showUserList() {
        return this.joinUserList != null;
      },
      showResultList() {
        return this.resultList != null;
      },
      joinEvent() {
        this.$emit('joinEvent');
      }
    },
  }
</script>

<style>
</style>
