<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    {{ $data }}
    <v-text-field
      v-model="place"
      label="場所名検索"/>
    <v-list subheader>
      <v-subheader>検索結果</v-subheader>

      <v-list-tile
        v-for="onePlace in places"
        :key="onePlace"
        @click="checkin(onePlace.name)">
        <v-list-tile-content @click="notifications = !notifications">
          <v-list-tile-title v-text="onePlace.name"/>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import Place from '~/plugins/js/interface/Place.js';

export default {
  data() {
    return {
      msg: 'Welcome to Checkin page',
      place: '',
      places: null,
      notifications: null,
    };
  },
  watch: {
    place(val) {
      Place.findPlace(val).then(
        (response) => {
          this.places = response.data.result;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.msg = '登録に失敗しました.';
        });
    },
  },
  beforeCreate() {
    Place.findAllPlace().then(
      (response) => {
        // eslint-disable-next-line
        console.log(response.data.result);
        this.places = response.data.result;
      });
  },
  methods: {
    checkin(val) {
      Place.checkIn(val);
      this.$router.push({ path: '/record' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
