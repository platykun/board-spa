<template>
  <div>
    <v-text-field
      v-model="place"
      label="場所名検索"/>
    <v-list subheader>
      <v-subheader>検索結果</v-subheader>

      <v-list-tile
        v-for="onePlace in places"
        :key="onePlace">
        <v-list-tile-content
          @click="selectPlace(onePlace.id)">
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
        place: '',
        places: null,
      }
    },
    watch: {
      place(val) {
        Place.findPlace(val).then(
          (response) => {
            this.places = response.data.result;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    methods: {
      // 場所が選択された場合、親コンポーネントを呼ぶ
      selectPlace(id) {
        this.$emit('selected', id);
      }
    }
  }
</script>

<style>
</style>
