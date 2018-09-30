<template>
  <div class="record">
    recordvue
    <router-view/>
    <v-speed-dial
      v-model="fab"
      bottom
      floating
      fixed
      right>
      <v-btn
        slot="activator"
        v-model="fab"
        color="blue darken-2"
        dark
        fab>
        <v-icon>menu</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
        to="/record/result">
        <v-icon>note_add</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
        to="/record/checkin">
        <v-icon>location_on</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
        to="/record/join">
        <v-icon>group_add</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
        to="/record/create">
        <v-icon>group</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
        to="/record">
        <v-icon>home</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to record page',
      fab: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
