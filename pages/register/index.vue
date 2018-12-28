<template>
  <div class="record">
    RecordTop
    <div class="flex xs12 sm6 offset-sm3">
      <h2>登録画面のトップ</h2>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        msg: 'Welcome to record page',
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
