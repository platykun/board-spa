<template>
    <v-btn
      class="secondary"
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
