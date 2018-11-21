<template>
  <div class="record">
    <v-flex
      xs12
      sm6
      offset-sm3
      py-3>
      <v-card>
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-list-tile
              :key="item.title"
              avatar
            >
              <v-list-tile-content>
                <h2
                  v-if="item.showCheckIn"
                  class="blue-grey--text text--darken-1 text-overflow-ellipsis">
                  {{ checkIn.name }}
                </h2>
                <h2
                  v-else
                  class="blue-grey--text text--darken-1">
                  {{ item.title }}
                </h2>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn
                  :to="item.to"
                  color="deep-orange accent-3"
                  dark>
                  <v-icon>{{ item.icon }}</v-icon>
                  {{ item.icontitle }}
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider
              v-if="index + 1 < items.length"
              :key="index"/>
          </template>
        </v-list>
      </v-card>
    </v-flex>
    <v-tabs
      v-model="active_tab"
      color="blue-grey lighten-1"
      dark
      slider-color="deep-orange accent-3"
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab + 'v-tab'"
        ripple
      >
        <v-icon class="hidden-xs-only">{{ tab.icon }}</v-icon>
        {{ tab.title }}
      </v-tab>
      <v-tab-item
        v-for="tab in tabs"
        :key="tab + 'v-tab-item'"
      >
        <div v-show="tab.action === 'myHistory'">
          <h2 class="blue-grey--text text--darken-1">自分のプレイ履歴</h2>
          <recordCard
            v-for="history in myHistory"
            :key="history"
            :id="history.id"
            :parent-id="history.parentId"
            :board-game="history.boardGameTitle"
            :date="history.create"
            :name="history.userId"
            :place="history.placeName"
            disable-name
          />
        </div>
        <div v-show="tab.action === 'nearHistory'">
          <h2 class="blue-grey--text text--darken-1">チェックイン場所でのプレイ履歴</h2>
          <recordCard
            v-for="history in nearHistory"
            :key="history"
            :id="history.id"
            :parent-id="history.parentId"
            :board-game="history.boardGameTitle"
            :date="history.create"
            :name="history.userId"
            :place="history.placeName"
            disable-place
          />
        </div>
        <div v-show="tab.action === 'allHistory'">
          <h2 class="blue-grey--text text--darken-1">すべてのプレイ履歴</h2>
          <recordCard
            v-for="history in allHistory"
            :key="history"
            :id="history.id"
            :parent-id="history.parentId"
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
      active_tab: 0,
      msg: 'Welcome to record page',
      checkInPlace: 'ボドゲショップ',
      tabs: [
        { action: 'myHistory', title: 'Myりれき', icon: 'home' },
        { action: 'nearHistory', title: '付近', icon: 'location_on' },
        { action: 'allHistory', title: 'すべて', icon: 'group' },
      ],
      items: [
        {
          headline: 'チェックイン場所',
          title: '未チェックイン',
          to: '/record/checkin',
          icon: 'location_on',
          icontitle: 'チェックイン',
          showCheckIn: true,
        },
        {
          headline: null,
          title: '記録',
          to: '/record/result',
          icon: 'add',
          icontitle: '記録',
          showCheckIn: false,
        },
        {
          headline: null,
          title: '記録の共有',
          to: '/share/tweet',
          icon: 'fa-twitter',
          icontitle: '共有',
          showCheckIn: false,
        },
        ],
    };
  },
  computed: {
    ...mapGetters({
      checkIn: 'userDetail/checkIn',
      myHistory: 'userDetail/myHistory',
      nearHistory: 'userDetail/nearHistory',
      allHistory: 'userDetail/allHistory',
    }),
  },
  async asyncData({ route, store }) {
    console.log("record/index.vue asyncData called");
    store.dispatch('userDetail/addUserDetail');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text-overflow-ellipsis {
    text-overflow: ellipsis;
  }
</style>
