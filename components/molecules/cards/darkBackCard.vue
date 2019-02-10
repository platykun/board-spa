<template>
  <v-card
    color="primary"
    class="white--text">
    <v-card-title primary-title>
      <div class="headline">
        <slot name="title"></slot>
      </div>
    </v-card-title>
    <v-card-text>
      <slot name="text"></slot>
    </v-card-text>
    <v-card-actions>
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
  }
</script>


<style>
</style>
