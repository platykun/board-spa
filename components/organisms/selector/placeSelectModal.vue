<template>
  <v-dialog
    v-model="dialog"
    scrollable
  >
    <div slot="activator">
      <v-btn
        outline
        round
        class="accent accent--text"
        dark
      >
        <v-icon>library_add</v-icon>
        場所選択
      </v-btn>
    </div>
    <v-card>
      <v-card-title>
        <v-layout column>
          <v-flex xs-12>
            <v-btn icon @click="close()">
              <v-icon>close</v-icon>
            </v-btn>
            <h3>場所を選択してください 件数:{{placeCount()}}</h3>
          </v-flex>
          <v-flex xs-12>
            <v-text-field
              v-model="placeName"
              label="場所名"/>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-text>
        <v-btn
          v-if="placeCount() == 0"
          outline
          round
          class="accent accent--text"
          to="/register/place">
          見つからない場合
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="place in places"
            :key="place.name"
            @click="selectPlace(place)"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="place.name"/>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import Place from '~/plugins/js/interface/Place.js';

  export default {
    data() {
      return {
        dialog: false,
        placeName: '',
        places: [],
      }
    },
    watch: {
      placeName(val) {
        Place.findPlace(val).then(
          (response) => {
            this.places = response.data.result;
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.log(error);
            this.msg = '登録に失敗しました.';
          });
      }
    },
    methods: {
      selectPlace(val) {
        this.dialog = false;
        this.$emit('input', val);
      },
      // 検索結果の場所の数をカウントする
      placeCount() {
        return this.places.length;
      },
      // モーダルを閉じる
      close() {
        this.dialog = false;
      },
    }
  }
</script>

<style>
</style>
