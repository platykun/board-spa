<template>
  <v-card
    :to= "resultLink"
    class="ma-2"
  >
    <v-card-title>
      <div>
        <span class="grey--text">ボードゲーム名</span>
        <h2 class="blue-grey--text text--darken-1">{{ boardGame }}</h2>
      </div>
      <v-spacer/>
      <div>
        <span class="grey--text">{{ date }}</span>
        <h3 class="grey--text">{{ name }}</h3>
        <h3 class="grey--text">{{ place }}</h3>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
  export default {
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
      }
    },
    computed: {
      resultLink: function(){
        if(this.parentId === -1) {
          return '/record/result/' + this.id;
        } else {
          return '/record/result/' + this.parentId;
        }

      },
    },
  }
</script>


<style>
</style>
