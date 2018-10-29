<template>
  <div class="record">
    <v-flex
      xs12
      sm6
      offset-sm3
      py-3>
      <v-card>
        <v-card-title>
          <div>
            <span class="grey--text">チェックイン場所</span><br>
            <h2 class="blue-grey--text text--darken-1">{{ checkIn }}</h2>
          </div>
          <v-spacer/>
          <v-btn
            to="/record/checkin"
            color="deep-orange accent-3"
            dark>
            <v-icon>location_on</v-icon>
            チェックイン
          </v-btn>
        </v-card-title>
      </v-card>
    </v-flex>

    <v-tabs
      color="blue-grey lighten-1"
      dark
      slider-color="deep-orange accent-3"
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab"
        ripple
      >
        <v-icon class="hidden-xs-only">{{ tab.icon }}</v-icon>
        {{ tab.title }}
      </v-tab>
      <v-tab-item
        v-for="tab in tabs"
        :key="tab"
      >
        <div v-if="tab.action === 'myHistory'">
          <h2 class="blue-grey--text text--darken-1">自分のプレイ履歴</h2>
          <recordCard
            v-for="history in myHistory"
            :key="history"
            :board-game="history.boardGameTitle"
            :date="history.create"
            :name="history.userId"
            :place="history.placeName"
          />
        </div>
        <div v-else-if="tab.action === 'nearHistory'">
          <h2 class="blue-grey--text text--darken-1">チェックイン場所でのプレイ履歴</h2>
          <recordCard
            v-for="history in nearHistory"
            :key="history"
            :board-game="history.boardGameTitle"
            :date="history.create"
            :name="history.userId"
            :place="history.placeName"
          />
        </div>
        <div v-else-if="tab.action === 'allHistory'">
          <h2 class="blue-grey--text text--darken-1">すべてのプレイ履歴</h2>
          <recordCard
            v-for="history in allHistory"
            :key="history"
            :board-game="history.boardGameTitle"
            :date="history.create"
            :name="history.userId"
            :place="history.placeName"
          />
        </div>
      </v-tab-item>
    </v-tabs>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import recordCard from '~/components/record/recordCard';

export default {
  components: {
   'recordCard': recordCard,
  },
  data() {
    return {
      msg: 'Welcome to record page',
      checkInPlace: 'ボドゲショップ',
      tabs: [
        { action: 'myHistory', title: 'Myりれき', icon: 'home' },
        { action: 'nearHistory', title: '付近', icon: 'location_on' },
        { action: 'allHistory', title: 'すべて', icon: 'group' },
      ],
    };
  },
  computed: {
    ...mapGetters({
      checkIn: 'userDetail/checkIn',
      myHistory: 'userDetail/myHistory',
      nearHistory: 'userDetail/nearHistory',
      allHistory: 'userDetail/allHistory',
    })
  },
  async asyncData({ route, store }) {
    store.dispatch('userDetail/addUserDetail');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
