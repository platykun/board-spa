<template>
  <div>
    <v-btn
      :href="twitterLink()"
      class="accent"
      data-text="custom share text"
      dark>
      <fa
        size="2x"
        :icon="faTwitter"/>
    </v-btn>
  </div>
</template>

<script>
  import {faTwitter} from '@fortawesome/free-brands-svg-icons'

  export default {
    props: {
      playNameList: {
        type: Object,
        required: true
      },
    },
    computed: {
      faTwitter() {
        return faTwitter;
      }
    },
    methods: {
      twitterLink: function () {
        return "https://twitter.com/intent/tweet?" +
          "hashtags=" +
          "boardGamemanagement&" +
          "text=" +
          this.playNameList.join("%0a") +
          "%0a" +
          "&url=" +
          "https://blissful-hopper-cb7a86.netlify.com/";
      },
    },
  }
</script>

<style>
</style>
