<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :dark="dark"
      label="概要"
      type="text"
    />
  </v-form>
</template>

<script>
  export default {
    props: {
      dark: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => v.length <= 50 || 'Name must be less than 50 characters'
      ],
    }),
    watch: {
      name(val) {
        this.$emit('input', val);
      }
    }
  }
</script>

<style>
</style>
