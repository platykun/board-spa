<template>
  <v-content>
    <v-flex 
      xs12 
      sm6 
      offset-sm3>
      <v-card
        class="ma-4">
        <v-list
          subheader
          two-line
        >
          <v-subheader>共有したい履歴を選択してツイートボタンを押してください</v-subheader>
          <template v-for="play in playList">
            <v-list-tile
              :key="play.name">
              <v-list-tile-action>
                <v-checkbox v-model="play.status"/>
              </v-list-tile-action>
              <v-list-tile-content @click="hoge = !hoge">
                <v-list-tile-title>{{ play.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ play.place }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
        <TweetButton
          :play-name-list="activePlayNameList()"
        />
      </v-card>
    </v-flex>
  </v-content>
</template>

<script>
import TweetButton from '~/components/record/tweetButton';
import Detail from '~/plugins/js/interface/Detail.js';

export default {
  components: {
    'TweetButton': TweetButton,
  },

  data() {
    return {
      playList: [],
    }
  },
  beforeCreate() {
    let playList = [];
    Detail.getDetail().then(
      (response) => {
        playList = response.data.result.myHistory.map(function(m) {
          let res = {status: false};
          res.name = m.boardGameTitle;
          res.place = m.placeName;
          return res;
        });
        this.playList = playList;
      }
    );
  },
  methods: {
    activePlayNameList: function() {
      return this.playList
        .filter(p => p.status === true)
        .map(p => p.name);
    },
  },
}
</script>

