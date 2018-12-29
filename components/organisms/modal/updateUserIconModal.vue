<template>
  <v-card>
    <v-card-title>
      <v-btn icon @click="close()">
        <v-icon>close</v-icon>
      </v-btn>
      <span class="headline">アイコン編集</span>
    </v-card-title>
    <v-divider/>
    <v-card-text>
      <font-awesome-icon
        size="4x"
        :icon="icon"
        :class="avatarColor()"
      />
      <v-expansion-panel>
        <v-expansion-panel-content
          key="1"
        >
          <h3 slot="header">Icon</h3>
          <div>
            <v-avatar
              :class="avatarColor()"
              v-for="icon in icons"
              :key="icon"
              @click="updateIcon(icon)"
            >
              <font-awesome-icon
                size="2x"
                :icon="icon"
                :key="icon + 'font-awesome-icon'"
              />
            </v-avatar>
          </div>
        </v-expansion-panel-content>
        <v-expansion-panel-content
          key="2"
        >
          <h3 slot="header">色相</h3>
          <div>
            <v-chip
              v-for="color in hueColors"
              :class="getHueColor(color)"
              text-color="white"
              @click="updateHueColor(color)"
            >
              {{color}}
            </v-chip>
          </div>
        </v-expansion-panel-content>
        <v-expansion-panel-content
          key="3"
        >
          <h3 slot="header">色彩</h3>
          <div>
            <v-chip
              v-for="color in chromaColors"
              :class="getChromaColor(color)"
              text-color="black"
              @click="updateChromaColor(color)"
            >
              {{color}}
            </v-chip>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn
        class="accent"
        flat
        dark
        @click="submitIcon">変更
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
  import User from '~/plugins/js/interface/User';


  export default {
    components: {
      'font-awesome-icon': FontAwesomeIcon,
    },
    data() {
      return {
        icons: [
          'cat',
          'crow',
          'dog',
          'dove',
          'fish',
          'frog',
          'hippo',
          'horse',
          'kiwi-bird',
          'otter',
        ],
        hueColors: [
          'red',
          'pink',
          'purple',
          'deep-purple',
          'indigo',
          'blue',
          'light-blue',
          'cyan',
          'teal',
          'green',
          'light-green',
          'lime',
          'yellow',
          'amber',
          'orange',
          'deep-orange',
          'brown',
          'blue-grey',
          'grey',
        ],
        chromaColors: [
          '',
          'lighten-1',
          'lighten-2',
          'lighten-3',
          'lighten-4',
          'lighten-5',
          'darken-1',
          'darken-2',
          'darken-3',
          'darken-4',
          'accent-1',
          'accent-2',
          'accent-3',
          'accent-4',
        ]
      };
    },
    props: {
      icon: {
        type: String,
        required: true,
      },
      hueColor: {
        type: String,
        required: true,
      },
      chromaColor: {
        type: String,
        required: true,
      },
    },
    methods: {
      // モーダル自身をクローズする
      close() {
        this.$emit('close');
      },
      avatarColor() {
        return this.hueColor + '--text ' + 'text--' + this.chromaColor;
      },
      getHueColor(color) {
        return color + ' ' + this.chromaColor;
      },
      getChromaColor(color) {
        return this.hueColor + ' ' + color;
      },
      updateIcon(icon) {
        this.icon = icon;
      },
      updateHueColor(color) {
        this.hueColor = color;
      },
      updateChromaColor(color) {
        this.chromaColor = color;
      },
      submitIcon() {
        User.submitIcon(this.icon, this.hueColor + ' ' + this.chromaColor);
        this.$emit('updateAvatar', this.icon, this.hueColor, this.chromaColor);
        this.close();
      }
    }
  }
</script>

<style>
</style>
