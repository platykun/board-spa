<template>
  <v-card
    :to="resultLink"
    class="ma-2"
  >
    <v-card-title>
      <div>
        <h3 class="blue-grey--text text--darken-1">{{ placeName }}</h3>
      </div>
      <v-spacer/>
      <div>
        <span class="grey--text">開始:{{ dateTimeFrom | moment }}</span>
        <br>
        <span class="grey--text">終了:{{ dateTimeTo | moment }}</span>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
  import moment from 'moment';

  export default {
    filters: {
      moment: function (date) {
        return moment(date).format('YYYY-MM-DD HH:mm');
      },
    },
    props: {
      placeId: {
        type: Number,
        required: false
      },
      placeName: {
        type: String,
        required: true
      },
      eventId: {
        type: Number,
        required: true
      },
      dateTimeFrom: {
        type: Date,
        default: null,
        required: true
      },
      dateTimeTo: {
        type: Date,
        default: null,
        required: true
      },
    },
    computed: {
      resultLink: function () {
        return '/events/' + this.eventId;
      },
    },
  }
</script>

<style>
</style>
