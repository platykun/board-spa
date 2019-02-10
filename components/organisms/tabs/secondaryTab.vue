<!--
tabs format tample
tabs: [
  {to: '/events', title: 'イベント', icon: 'home'},
  {to: '/events/checkin', title: 'チェックイン', icon: 'location_on'},
],
-->
<template>
  <v-tabs
    v-model="active_tab"
    color="blue-grey lighten-1"
    dark
    slider-color="accent"
  >
    <v-tab
      v-for="(tab, index) in tabs"
      :key="tab + 'v-tab' + index"
      ripple
      :to="tab.to"
    >
      <v-icon class="hidden-xs-only">{{ tab.icon }}</v-icon>
      {{ tab.title }}
    </v-tab>
  </v-tabs>
</template>

<script>
  export default {
    props: {
      tabs: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
      };
    },
  }
</script>

<style>
</style>
