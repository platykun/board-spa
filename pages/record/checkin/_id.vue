<template>
  <div class="result">
    <v-flex 
      xs12 
      sm6 
      offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ place.name }}</div>
            <span class="grey--text">url: {{ place.url }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn
            class="deep-orange--text accent-3--text"
            flat
            to="/record/checkin">
            <v-icon>arrow_back_ios</v-icon>
            戻る
          </v-btn>
          <v-spacer/>
          <v-btn
            class="deep-orange accent-3"
            dark
            large
            @click="checkIn()"
          >
            <v-icon>location_on</v-icon>
            チェックインする
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import Place from '~/plugins/js/interface/Place.js';

export default {
  name: 'Checkin',
  data() {
    return {
      place: '',
    };
  },
  beforeCreate() {
    const id = this.$route.params.id;
    Place.findById(id).then(
      ( response ) => {
        this.place = response.data.result;
      }
    );
  },
  methods: {
    checkIn() {
      Place.checkIn(this.place.id);
      this.$router.push({ path: '/record' });
      this.store.dispatch("userDetail/updateCheckIn", this.place);
    },
  }
};
</script>
<style scoped>
</style>
