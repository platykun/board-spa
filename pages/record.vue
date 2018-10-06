<template>
  <div class="record">
    <v-tabs
      color="blue-grey lighten-1 hidden-xs-only"
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
    <router-view/>
    <v-speed-dial
      v-model="fab"
      bottom
      floating
      fixed
      right
      class="hidden-sm-and-up"
    >
      <v-btn
        slot="activator"
        v-model="fab"
        color="deep-orange accent-3"
        dark
        fab>
        <v-icon>menu</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        v-for="dial in speedDials"
        :key="dial"
        :to="dial.action"
        fab
        dark
        small
        color="blue-grey darken-1"
      >
        <v-icon> {{ dial.icon }} </v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to record page',
      fab: false,
      tabs: [
        { action: '/record', title: '記録トップ', icon: 'home' },
        { action: '/record/checkin', title: 'チェックイン', icon: 'location_on' },
        { action: '/record/create', title: 'ルーム作成', icon: 'group' },
        { action: '/record/join', title: 'ルーム参加', icon: 'group_add' },
        { action: '/record/result', title: '結果入力', icon: 'note_add' },
      ],
      speedDials: [
        { action: '/record/result', title: '結果入力', icon: 'note_add' },
        { action: '/record/join', title: 'ルーム参加', icon: 'group_add' },
        { action: '/record/create', title: 'ルーム作成', icon: 'group' },
        { action: '/record/checkin', title: 'チェックイン', icon: 'location_on' },
        { action: '/record', title: '記録トップ', icon: 'home' },
      ]
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
