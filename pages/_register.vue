<template>
  <div class="register">
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
        to="/register/top">
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
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
