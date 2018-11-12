<template>
  <v-content>
    <v-flex 
      xs12 
      sm6 
      offset-sm3>
      {{ selected }}
      <v-card>
        <v-checkbox 
          v-model="selected" 
          label="John" 
          value="John"/>

        <v-list
          subheader
          two-line
        >
          <v-subheader>Hangout notifications</v-subheader>

          <v-list-tile>
            <v-list-tile-action>
              <v-checkbox v-model="sound"/>
            </v-list-tile-action>

            <v-list-tile-content @click="sound = !sound">
              <v-list-tile-title>Sound</v-list-tile-title>
              <v-list-tile-sub-title>Hangouts message</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile :v-for="play in playList">
            <v-list-tile-action>
              <v-checkbox v-model="hoge"/>
              {{ play }}
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <TweetButton/>
      </v-card>
    </v-flex>
  </v-content>
</template>

<script>
import TweetButton from '~/components/record/tweetButton';

export default {
  components: {
    'TweetButton': TweetButton,
  },
  data() {
    return {
      selected: ['John'],
      playList: [
        { name: "ボドゲ1" ,status: false },
        { name: "ボドゲ2" ,status: false },
        ],
      hoge: false,
      sound: false,
    }
  }
}
</script>

