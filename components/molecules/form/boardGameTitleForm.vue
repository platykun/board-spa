<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :dark="dark"
      label="タイトル"
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
        v => !!v || 'Name is required',
        v => v.length <= 100 || 'Name must be less than 100 characters'
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
