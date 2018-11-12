<template>
  <div>
    <v-btn
      :href="twitterLink"
      data-text="custom share text">
      <v-icon>home</v-icon>
    </v-btn>
  </div>
</template>

<script>

export default {
  data () {
    return {
      playList: ["ボドゲ1","ボドゲ2"],
      link: "https://twitter.com/intent/tweet?" +
        "hashtags=" +
        "boardGamemanagement&" +
        "text=" +
        "てすと" +
        "&url=" +
        "https://blissful-hopper-cb7a86.netlify.com/",
    }
  },
  computed: {
    twitterLink: function() {
      return "https://twitter.com/intent/tweet?" +
        "hashtags=" +
        "boardGamemanagement&" +
        "text=" +
        this.playList.join("%0a") +
        "%0a" +
        "&url=" +
        "https://blissful-hopper-cb7a86.netlify.com/";
    }
  },
}
</script>

<style>
</style>
