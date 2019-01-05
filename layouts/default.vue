<template>
  <div>
    <HeaderBaseLayout/>
    <nuxt/>
    <div id="v-bottom-nav-space"/>
    <LoggedInBottomNav
      :navBottoms="navBottoms"
    />
  </div>
</template>

<script>
  import HeaderBaseLayout from '~/components/templates/layouts/headerBaseLayout';
  import LoggedInBottomNav from '~/components/organisms/navigation/loggedInBottomNav';

  export default {
    components: {
      'HeaderBaseLayout': HeaderBaseLayout,
      'LoggedInBottomNav': LoggedInBottomNav,
    },
    data() {
      return {
        navBottoms: [
          {awesome: false, name: "Top", icon: "home", link: '/top'},
          {awesome: false, name: "CheckIn", icon: "location_on", link: '/record/checkin'},
          {awesome: false, name: "Record", icon: "note_add", link: '/record/result'},
          {awesome: true, name: "Tweet", icon: "twitter", link: '/share/tweet'},
        ],
      };
    },
  };
</script>
<style scoped>
  #v-bottom-nav-space {
    height: 60px;
  }
</style>
