<template>
  <div>
    <div class="container">
      <div class="flex xs12 sm6 offset-sm3">
        <h2 class="secondary--text">
          <v-icon class="secondary--text">location_on</v-icon>
          イベント管理
        </h2>
        <v-layout>
          <v-spacer/>
          <v-btn
            class="accent mt-2"
            dark
            to="/events/create"
          >
            <v-icon>add</v-icon>
             イベント作成
          </v-btn>
        </v-layout>
        <div v-for="event in events">
          <EventCard
            :placeName="event.placeName"
            :eventId="event.id"
            :dateTimeFrom="event.date_time_from"
            :dateTimeTo="event.date_time_to"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Event from '~/plugins/js/interface/Event.js';
  import EventCard from '~/components/molecules/cards/eventCard';

  export default {
    middleware: 'authenticated',
    components: {
      'EventCard': EventCard,
    },
    data() {
      return {
        events: [],
      };
    },
    computed: {},
    beforeCreate() {
    },
    asyncData({app}, callback) {
      Event.findAll().then(
        (response) => {
          callback(null, {
            events: response.data.result
          })
        }
      )
    },
    methods: {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
