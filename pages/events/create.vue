<template>
  <div class="container">
    <div class="flex xs12 sm6 offset-sm3">
      <h1 class="display-1 primary--text">イベント新規作成</h1>
      <div class="mt-3">
        <h3 class="primary--text">{{ place === null ? placeName : place.name }}</h3>
      </div>
      <PlaceSelectModal v-model="place"/>
      <br>
      <span class="primary--text">開始日時</span>
      <DateTimeSelectForm v-model="dateTimeFrom"/>
      <span class="primary--text">終了日時</span>
      <DateTimeSelectForm v-model="dateTimeTo"/>
      <v-textarea
        name="コメント"
        label="コメント"
        :value="comment"
        v-model="comment"
      ></v-textarea>
      <v-layout>
        <v-spacer/>
        <v-btn
          class="accent"
          dark
          @click="registerEvent"
        >作成
        </v-btn>
      </v-layout>
    </div>
  </div>
</template>

<script>
  import PlaceSelectModal from '~/components/organisms/selector/placeSelectMordal';
  import DateTimeSelectForm from '~/components/molecules/form/dateTimeSelectForm';
  import Event from '~/plugins/js/interface/Event.js';

  export default {
    middleware: 'authenticated',
    components: {
      'PlaceSelectModal': PlaceSelectModal,
      'DateTimeSelectForm': DateTimeSelectForm,
    },
    data() {
      return {
        'place': null,
        'placeName': '場所が未選択です',
        'dateTimeFrom': null,
        'dateTimeTo': null,
        'comment': null
      };
    },
    computed: {},
    beforeCreate() {
    },
    methods: {
      registerEvent() {
        Event.regist(this.place.id, this.place.name, this.dateTimeFrom, this.dateTimeTo, this.comment).then(
          (response) => {
            this.$router.push({path: '/events'})
          }
        );
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
