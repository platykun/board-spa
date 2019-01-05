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
    <div>
      <v-toolbar-side-icon
        class="white"
        :to="iconLink">
        <LoginUserAvatar adjustSize/>
      </v-toolbar-side-icon>
    </div>
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
