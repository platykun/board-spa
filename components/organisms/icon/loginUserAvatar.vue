<template>
  <v-avatar>
    <font-awesome-icon
      :size="iconSize"
      :icon="icon"
      :class="iconClass()"
    />
  </v-avatar>
</template>

<script>
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
  import LoginUserStore from '~/plugins/js/store/LoginUserStore';

  export default {
    components: {
      'font-awesome-icon': FontAwesomeIcon,
    },
    props: {
      iconSize: {
        type: String,
        required: false,
        default: '2x'
      },
      adjustSize: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data() {
      return {};
    },
    computed: {
      icon() {
        return LoginUserStore.getIcon();
      },
      hueColor() {
        return LoginUserStore.getHueColor();
      },
      chromaColor() {
        return LoginUserStore.getChromaColor();
      },
    },
    methods: {
      clickedIcon() {
        this.$emit('clicked');
      },
      iconClass() {
        var iconClass = this.hueColor + '--text ' + 'text--' + this.chromaColor;

        return this.adjustSize ? iconClass + ' adjustFontSize' : iconClass;
      }
    },
  }
</script>


<style scoped>
  .adjustFontSize {
    font-size: 1.8em
  }
</style>
