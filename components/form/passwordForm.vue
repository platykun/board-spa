<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      :dark="dark"
      label="パスワード"
      type="password"
      required
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
    data () {
      const MAX_LENGTH = 20;
      const MIN_LENGTH = 4;

      return {
        maxLength: MAX_LENGTH,
        minLength: MIN_LENGTH,
        valid: false,
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length <= MAX_LENGTH || 'Password must be less than ' + MAX_LENGTH + ' characters',
          v => v.length > MIN_LENGTH || 'Password must be more than ' + MIN_LENGTH + ' characters'
        ],
      }
    },
    watch: {
      password(val) {
        this.$emit('input', val);
      }
    }
  }
</script>

<style>
</style>
