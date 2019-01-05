<template>
  <v-bottom-nav
    value="true"
    fixed
    app
    color="primary"
  >
    <template v-for="navBottom in navBottoms">
      <v-btn
        :to="navBottom.link"
        :key="navBottom.name"
        dark
      >
        <span>{{ navBottom.name }}</span>
        <fa
          v-if="navBottom.awesome"
          size="2x"
          :icon="faTwitter"
        />
        <v-icon
          v-else
        >
          {{ navBottom.icon }}
        </v-icon>
      </v-btn>
    </template>
  </v-bottom-nav>
</template>

<script>
  import {faTwitter} from '@fortawesome/free-brands-svg-icons';

  export default {
    props: {
      navBottoms: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {};
    },
    computed: {
      faTwitter() {
        return faTwitter;
      },
    },
    methods: {},
  }
</script>


<style>
</style>
