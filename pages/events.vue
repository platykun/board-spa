<template>
  <div>
    <SecondaryTab
      :tabs="tabs"
    ></SecondaryTab>
    <router-view></router-view>
  </div>
</template>

<script>
  import SecondaryTab from '~/components/organisms/tabs/secondaryTab';

  export default {
    components: {
      'SecondaryTab': SecondaryTab,
    },
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
