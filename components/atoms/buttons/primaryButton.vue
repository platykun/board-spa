<template>
    <v-btn
      color="accent"
      dark
      :to="to"
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
  }
</script>

<style>
</style>
