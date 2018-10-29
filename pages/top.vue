<template>
  <div class="index">
    <section>
      <v-parallax
        src="/index_background.jpg"
        height="150">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <h2 class="white--text mb-2 display-1 text-xs-center">Welcome to Board Game Management</h2>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-tabs
        color="blue-grey lighten-1"
        dark
        slider-color="deep-orange accent-3"
      >
        <v-tab
          v-for="tab in tabs"
          :key="tab"
          :to="tab.action"
          ripple
        >
          <v-icon class="hidden-md-and-down">{{ tab.icon }}</v-icon>
          {{ tab.title }}
        </v-tab>
      </v-tabs>
    </section>

    <section>
      <h3>記録する</h3>

      // :valueが使えていないため要修正
      <div :value="needToCheckIn">
        <div>
          今日はまだチェックインされてません。
        </div>
        <v-btn
          class="deep-orange accent-3"
          dark
          large
          to="/record/checkin"
        >
          チェックインする
        </v-btn>
      </div>
      <div :value="needToCheckIn">
        <div>
          今日はまだ結果が記録されてません。
        </div>
        <v-btn
          class="deep-orange accent-3"
          dark
          large
          to="/record/checkin"
        >
          結果を記録する
        </v-btn>
      </div>
      <div :value="needToCheckIn">
        <div>
          今日はまだチェックインされてません。
        </div>
        <v-btn
          class="deep-orange accent-3"
          dark
          large
          to="/record/checkin"
        >
          チェックインする
        </v-btn>
      </div>

    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      msg: 'Welcome to Board Game Diary',
      tabs: [
        { action: '/record', title: '記録する', icon: 'home' },
        { action: '/browse', title: '履歴', icon: 'location_on' },
        { action: '/', title: '共有(工事中)', icon: 'group' },
      ],
    };
  },
  computed: {
    ...mapGetters({
      needToCheckIn: 'userDetail/needToCheckIn',
      needToJoinRoom: 'userDetail/needToJoinRoom',
      needToAddResult: 'userDetail/needToAddResult',
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
