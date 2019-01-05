<template>
  <div class="container">
    <div class="flex xs12 sm6 offset-sm3">
      <h1 class="display-1 primary--text">場所新規登録</h1>
      <PlaceNameForm
        v-model="placeName"
      />
      <PlaceUrlForm
        v-model="placeUrl"
      />
      <v-layout>
        <v-spacer/>
        <v-btn
          class="accent"
          dark
          @click="registerPlace"
        >登録
        </v-btn>
      </v-layout>
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
    middleware: 'authenticated',
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
