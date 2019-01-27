<template>
  <div class="container">
    <div class="flex xs12 sm6 offset-sm3">
      <h2 class="secondary--text">
        <v-icon class="secondary--text">location_on</v-icon>
        {{ msg }}
      </h2>
      <v-switch
        v-model="isUserHome"
        color="accent"
        label="宅ボドゲの場合チェック"
        hide-details
      ></v-switch>
      <div v-if="!isUserHome">
        <PlaceSelectList
          v-on:selected="selectedPlace"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Place from '~/plugins/js/interface/Place.js';
  import PlaceSelectList from '~/components/organisms/list/placeSelectList';

  export default {
    middleware: 'authenticated',
    components: {
      'PlaceSelectList': PlaceSelectList,
    },
    data() {
      return {
        msg: 'チェックイン',
        notifications: null,
        isUserHome: false,
      };
    },
    computed: {},
    beforeCreate() {
      Place.findAllPlace().then(
        (response) => {
          // eslint-disable-next-line
          console.log(response.data.result);
          this.places = response.data.result;
        });
    },
    methods: {
      selectedPlace(id) {
        let path = '/events/checkin/' + id;
        this.$router.push({path: path});
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
