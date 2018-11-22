<template>
  <div>
    <v-btn
      :href="twitterLink()"
      class="accent"
      data-text="custom share text"
      dark>
      <v-icon>fa-twitter</v-icon>
    </v-btn>
  </div>
</template>

<script>

export default {
  props: {
    playNameList: {
      type: Object,
      required: true
    },
  },
  methods: {
    twitterLink: function() {
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
