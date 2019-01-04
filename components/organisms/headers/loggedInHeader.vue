<template>
  <v-toolbar
    dark
    color="primary"
    clipped="true">
    <v-toolbar-side-icon @click.stop="clickedLogo()">
      <v-icon>ballot</v-icon>
    </v-toolbar-side-icon>
    <v-toolbar-title
      class="hidden-xs-only">
      BoardGameDiary
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-side-icon :to="iconLink">
      <LoginUserAvatar/>
    </v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
  import LoginUserAvatar from '~/components/organisms/icon/loginUserAvatar';

  export default {
    components: {
      'LoginUserAvatar': LoginUserAvatar,
    },
    props: {
      iconLink: {
        type: String,
        required: false,
      },
    },
    data() {
      return {};
    },
    methods: {
      clickedLogo() {
        this.$emit('clicked');
      },
    },
  }
</script>


<style>
</style>
