<template>
  <v-toolbar
    dark
    color="primary"
    clipped="true">
    <v-toolbar-side-icon :to="logoLink">
      <v-icon>ballot</v-icon>
    </v-toolbar-side-icon>
    <v-toolbar-title
      class="hidden-xs-only">
      BoardGameDiary
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-side-icon @click.stop="clickedIcon()">
      <v-icon>person</v-icon>
    </v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
  export default {
    props: {
      logoLink: {
        type: String,
        required: false,
      },
    },
    data() {
      return {
      };
    },
    methods: {
      clickedIcon() {
        this.$emit('clicked');
      },
    },
  }
</script>


<style>
</style>
