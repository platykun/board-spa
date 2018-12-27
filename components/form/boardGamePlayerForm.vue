<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :dark="dark"
      label="プレイ人数"
      type="number"
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
