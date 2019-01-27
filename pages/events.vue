<template>
  <div>
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
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    middleware: 'authenticated',
    data() {
      return {
        tabs: [
          {to: '/events', title: 'イベント', icon: 'home'},
          {to: '/events/checkin', title: 'チェックイン', icon: 'location_on'},
        ],
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
