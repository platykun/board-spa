<template>
  <v-layout row wrap>
    <v-flex xs6 sm6 md6>
      <v-dialog
        ref="dialog_date"
        v-model="date_modal"
        :return-value.sync="date"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          :label="date_label"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="date_modal = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="saveDate(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
    <v-flex xs5 sm5 md5 ml-2>
      <v-dialog
        ref="dialog_time"
        v-model="time_modal"
        :return-value.sync="time"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="time"
          :label="time_label"
          readonly
        ></v-text-field>
        <v-time-picker v-model="time" color="primary">
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="time_modal = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="saveTime(time)">OK</v-btn>
        </v-time-picker>
      </v-dialog>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      date_label: {
        type: String,
        required: false,
        default: "日付を選択",
      },
      time_label: {
        type: String,
        required: false,
        default: "時間を選択",
      },
    },
    data: () => ({
      date: null,
      time: null,
      date_modal: false,
      time_modal: false,
      modal: false,
    }),
    watch: {
      date(val) {
        let value = this.createInputValue(val, this.time);
        this.$emit('input', value);
      },
      time(val) {
        let value = this.createInputValue(this.date, val);
        this.$emit('input', value);
      }
    },
    methods: {
      createInputValue(date, time) {
        return date + ' ' + time;
      },
      saveDate(date) {
        this.$refs.dialog_date.save(date);
      },
      saveTime(time) {
        this.$refs.dialog_time.save(time);
      }
    }
  }
</script>

<style>
</style>
