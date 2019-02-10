<template>
  <div class="container">
    <v-flex
      xs12
      sm6
      offset-sm3>
      <EventDetail
        :eventDetail="eventDetail"
        :joinUserList="joinUserList"
        :resultList="resultList"
        v-on:joinEvent="joinEvent()"
      />
    </v-flex>
  </div>
</template>

<script>
  import Event from '~/plugins/js/interface/Event.js';
  import RecordCard from '~/components/molecules/cards/recordCard';
  import EventDetail from '~/components/organisms/detail/eventDetail';

  export default {
    middleware: 'authenticated',
    components: {
      'RecordCard': RecordCard,
      'EventDetail': EventDetail,
    },
    name: 'Checkin',
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    data() {
      return {
        event: null,
        eventDetail: null,
        joinUserList: null,
        resultList: null,
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
