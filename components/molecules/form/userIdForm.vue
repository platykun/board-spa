<template>
  <v-form v-model="valid">
    <v-text-field
      :value="name"
      :rules="nameRules"
      :dark="dark"
      label="ユーザID"
      type="text"
      required
      @change="v => this.name = v"
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
        v => v.length <= 10 || 'Name must be less than 10 characters'
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
