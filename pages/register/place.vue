<template>
  <div class="record">
    <div class="flex xs12 sm6 offset-sm3">
      <h2>場所新規登録</h2>
      <PlaceNameForm
        v-model="placeName"
      />
      <PlaceUrlForm
        v-model="placeUrl"
      />
      <v-btn
        class="accent"
        dark
        @click="registerPlace"
      >登録
      </v-btn>
    </div>
  </div>
</template>

<script>
  import PlaceNameForm from '~/components/molecules/form/placeNameForm';
  import PlaceUrlForm from '~/components/molecules/form/placeUrlForm';
  import Place from '~/plugins/js/interface/Place.js';

  export default {
    components: {
      'PlaceNameForm': PlaceNameForm,
      'PlaceUrlForm': PlaceUrlForm,
    },
    data() {
      return {
        placeName: '',
        placeUrl: '',
      };
    },
    methods: {
      registerPlace() {
        Place.regist(this.placeName, this.placeUrl).then(
          (response) => {
            this.$router.push({path: '/top'});
          }
        );
      }
    }
  };
</script>

<style scoped>
</style>
