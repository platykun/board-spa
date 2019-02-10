<!--
実装サンプル
<PrimaryBtn v-on:clickStopPrevent="sendLogin">
  ログイン
</PrimaryBtn>
-->
<template>
    <v-btn
      color="accent"
      dark
      :to="to"
      @click.stop.prevent="clickStopPrevent()"
      @click="click()"
    >
      <slot></slot>
    </v-btn>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        required: false
      },
    },
    methods: {
      clickStopPrevent() {
        this.$emit('clickStopPrevent');
      },
      click() {
        this.$emit('click');
      },
    },
  }
</script>

<style>
</style>
