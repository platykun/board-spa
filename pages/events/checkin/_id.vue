<template>
  <div class="container">
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
            class="accent--text"
            flat
            to="/events/checkin">
            <v-icon>arrow_back_ios</v-icon>
            戻る
          </v-btn>
          <v-spacer/>
          <v-btn
            class="accent"
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
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    middleware: 'authenticated',
    data() {
      return {
        place: '',
      };
    },
    beforeCreate() {
      const id = this.$route.params.id;
      Place.findById(id).then(
        (response) => {
          this.place = response.data.result;
        }
      );
    },
    methods: {
      checkIn() {
        Place.checkIn(this.place.id);
        this.$router.push({path: '/top'});
        this.store.dispatch("userDetail/updateCheckIn", this.place);
      },
    }
  };
</script>
<style scoped>
</style>
