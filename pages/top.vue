<template>
  <div class="record">
    <v-tabs
      v-model="active_tab"
      color="blue-grey lighten-1"
      dark
      slider-color="accent"
    >
      <v-tab
        v-for="(tab, index) in tabs"
        :key="tab + 'v-tab' + index"
        ripple
      >
        <v-icon class="hidden-xs-only">{{ tab.icon }}</v-icon>
        {{ tab.title }}
      </v-tab>
      <v-tab-item
        v-for="(tab, index) in tabs"
        :key="tab + 'v-tab-item' + index"
        class="container"
      >
        <div v-show="tab.action === 'myHistory'">
          <h2 class="secondary--text">自分のプレイ履歴</h2>
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
          <h2 class="secondary--text mt-3">付近のプレイ履歴</h2>
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
          <h2 class="secondary--text mt-3">すべてのプレイ履歴</h2>
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
  import {mapGetters} from 'vuex';
  import recordCard from '~/components/organisms/cards/recordCard';

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
          {action: 'myHistory', title: 'Myりれき', icon: 'home'},
          {action: 'nearHistory', title: '付近', icon: 'location_on'},
          {action: 'allHistory', title: 'すべて', icon: 'group'},
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
    async asyncData({route, store}) {
      store.dispatch('userDetail/addUserDetail');
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
