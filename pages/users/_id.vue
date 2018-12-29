<template>
  <div>
    <v-flex xs12 sm6 offset-sm3 mt-5>
      <v-card>
        <v-card-content>
          <v-layout
            justify-center
          >
            <font-awesome-icon
              size="4x"
              :icon="icon"
              :class="avatarColor()"
              :key="icon + 'font-awesome-icon'"
            />
          </v-layout>
          <div class="mx-2">
            <div class="secondary--text caption">ユーザID</div>
            <p class="primary--text title">{{ userDetail.id }}</p>
            <div class="secondary--text caption">名前</div>
            <p class="primary--text title">{{ userDetail.name }}</p>
            <div class="secondary--text caption">権限</div>
            <p class="primary--text title">{{ userDetail.authority }}</p>
          </div>
        </v-card-content>
        <v-divider/>
        <v-card-action>
          <v-spacer/>
          <v-dialog
            v-model="dialog"
            fullscreen
          >
            <div slot="activator">
              <v-btn
                outline
                round
                class="mb-2 accent accent--text"
                dark>
                <v-icon>add_circle</v-icon>
                アイコン編集
              </v-btn>
            </div>
            <UpdateUserIconModal
              :icon="icon"
              :hueColor="hueColor"
              :chromaColor="chromaColor"
              v-on:close="closeUserResultModal"
              v-on:updateAvatar="updateAvatarColor"
            />
          </v-dialog>
        </v-card-action>
      </v-card>
      ここに当人のプレイ記録が表示される
    </v-flex>
  </div>
</template>

<script>
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
  import User from '~/plugins/js/interface/User';
  import UpdateUserIconModal from '~/components/organisms/modal/updateUserIconModal';

  export default {
    name: 'userDetail',
    components: {
      'font-awesome-icon': FontAwesomeIcon,
      'UpdateUserIconModal': UpdateUserIconModal,
    },
    validate({params}) {
      return /^[a-zA-Z0-9]*$/.test(params.id)
    },
    data() {
      return {
        dialog: false,
      };
    },
    asyncData({app, query}, callback) {
      const resultId = app.context.params.id;
      User.getUserDetail(resultId).then(
        (response) => {
          const result = response.data.result;
          const splitIconColor = result.iconColor.split(' ');

          callback(null, {
            userDetail: result,
            resultId: resultId,
            icon: result.icon,
            hueColor: splitIconColor[0],
            chromaColor: splitIconColor[1],
          })
        }
      );
    },
    methods: {
      avatarColor() {
        return this.hueColor + '--text ' + 'text--' + this.chromaColor;
      },
      // モーダルをクローズするときに呼ばれる
      closeUserResultModal() {
        this.dialog = false;
      },
      updateAvatarColor(icon, hueColor, chromaColor) {
        this.icon = icon;
        this.hueColor = hueColor;
        this.chromaColor = chromaColor;
      }
    }
  };
</script>
<style scoped>
</style>
