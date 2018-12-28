<template>
  <div v-if="alertMessage">
    <v-alert
      v-model="show"
      value
      :dismissible="!hideCloseBtn"
      :type="alertType"
      icon="info"
    >{{ alertMessage }}
    </v-alert>
  </div>
</template>

<script>
  export default {
    props: {
      // alert内に表示させるメッセージ
      alertMessage: {
        type: String,
        required: false,
        default: null,
      },
      // 警告色を指定。
      //success, info, warning, error
      alertType: {
        type: String,
        required: false,
        default: 'info'
      },
      hideCloseBtn: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data: () => ({
      show: true,
    }),
  }
</script>

<style>
</style>
