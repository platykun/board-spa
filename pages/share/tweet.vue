<template>
  <div class="container">
    <v-flex
      xs12
      sm8
      offset-sm2>
      <p class="subheading primary--text">共有したい履歴を選択してツイートボタンを押してください</p>
      <v-list
        subheader
        two-line
      >
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
      <v-layout>
        <v-spacer/>
        <TweetButton
          :play-name-list="activePlayNameList()"
        />
      </v-layout>
    </v-flex>
  </div>
</template>

<script>
  import TweetButton from '~/components/molecules/buttons/tweetButton';
  import Detail from '~/plugins/js/interface/Detail.js';

  export default {
    components: {
      'TweetButton': TweetButton,
    },
    middleware: 'authenticated',
    data() {
      return {
        playList: [],
      }
    },
    beforeCreate() {
      let playList = [];
      Detail.getDetail().then(
        (response) => {
          playList = response.data.result.myHistory.map(function (m) {
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
      activePlayNameList: function () {
        return this.playList
          .filter(p => p.status === true)
          .map(p => p.name);
      },
    },
  }
</script>

