<template>
  <v-card
    :to= "resultLink"
    class="ma-2"
  >
    <v-card-title>
      <div>
        <h3 class="blue-grey--text text--darken-1">{{ boardGame }}</h3>
      </div>
      <v-spacer/>
      <div>
        <span
          v-if="!disableDate"
          class="grey--text">{{ date | moment }}</span>
        <h4
          v-if="!disableName"
          class="grey--text">{{ name }}</h4>
        <h4
          v-if="!disablePlace"
          class="grey--text">{{ place }}</h4>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
  import moment from 'moment';

  export default {
    filters: {
      moment: function (date) {
        return moment(date).format('YYYY/MM/DD HH:mm');
      },
    },
    props: {
      boardGame: {
        type: String,
        required: true
      },
      id: {
        type: Number,
        required: true
      },
      parentId: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        default: null,
        required: false
      },
      name: {
        type: String,
        default: '名無し',
        required: false
      },
      place: {
        type: String,
        default: '場所情報無し',
        required: false
      },
      disableDate: {
        type: Boolean,
        default: false
      },
      disableName: {
          type: Boolean,
          default: false,
      },
      disablePlace: {
          type: Boolean,
          default: false,
      },
    },
    computed: {
      resultLink: function(){
        return '/record/result/' + this.id;
      },
    },
  }
</script>


<style>
</style>
