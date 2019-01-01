<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary>
    <v-list dense>
      <v-list-tile
        :to="avatarLink"
        avatar>
        <v-list-tile-avatar>
          <v-icon>person</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title> {{ loginUserName }} </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <template v-for="(item, index) in items">
        <v-list-tile
          v-if="item.action"
          :key="item.title"
          :to="item.action"
          @click="item.action">
          <!--v-list__tile v-list__tile--link v-list__tile--avatar theme--light-->
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider
          v-else-if="item.divider"
          :key="index"/>
        <v-subheader
          v-else-if="item.header"
          :key="item.header"
        >
          {{ item.header }}
        </v-subheader>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import LoginUserStore from '~/plugins/js/store/LoginUserStore';

  export default {
    props: {
      drawer: {
        type: Boolean,
        required: true,
      },
      avatarLink: {
        type: String,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      }
    },
    data() {
      return {
      };
    },
    computed: {
      loginUserName() {
        return LoginUserStore.isLogining() ? LoginUserStore.getUserId() : '未ログイン';
      },
    },
    methods: {
      clickedIcon() {
        this.$emit('clicked');
      },
    },
  }
</script>


<style>
</style>
