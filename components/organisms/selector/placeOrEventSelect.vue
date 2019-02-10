<!--
場所　もしくは　Eventを選択する.
Eventは事前に登録済みであることが前提。
-->
<template>
  <div>
    <div v-if="showPlaceName()">
      <div class="secondary--text caption">場所名</div>
      <p class="primary--text body-2">
        <span>{{ place === null ? placeName : place.name }}</span>
        <PlaceSelectModal v-model="place"/>
      </p>
    </div>
    <div v-if="showEventName()">
      <div class="primary--text body-2">イベント参加中</div>
      <p class="secondary--text caption">場所 {{getPlaceNameValue()}}</p>
    </div>
  </div>
</template>

<script>
  import PlaceSelectModal from '~/components/organisms/selector/placeSelectMordal';
  import Event from '~/plugins/js/interface/Event.js';
  export default {
    components: {
      'PlaceSelectModal': PlaceSelectModal,
    },
    data() {
      return {
        joiningEvent : false,
        place: null,
        placeId: '',
        placeName: '未入力',
        event: null,
      }
    },
    beforeCreate() {
      // イベントに参加中かどうか確認
      Event.findJoiningEvent().then(
        (response) => {
          this.event = response.data.result;
          console.log(this.event);
          if(this.event != null) {
            this.joiningEvent = true;
          }
        }
      );
    },
    watch: {
    },
    methods: {
      showPlaceName() {
        return !this.joiningEvent;
      },
      getPlaceNameValue() {
        return this.event == null ? '' : this.event.placeName;
      },
      showEventName() {
        return this.joiningEvent;
      },
    },
  }
</script>

<style>
</style>
