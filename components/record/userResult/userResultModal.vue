// 参加者追加ボタン押下時のモーダル画面
<template>
    <v-card>
      <v-card-title>
        <v-btn icon @click="close()">
          <v-icon>close</v-icon>
        </v-btn>
        <span class="headline">参加者追加</span>
      </v-card-title>
      <v-divider/>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex v-if="selectingUserName">
              <h3>ユーザ名を入力してください</h3>
              <v-text-field
                      v-model="userNameSearchCondition"
                      solo
                      prepend-icon="search"
                      label="ユーザ名はここから入力"/>
              <v-list>
                <v-list-tile
                        v-for="userName in userNameList"
                        :key="userName.id"
                        @click="selectUser(userName.id)"
                >
                  <v-list-tile-content>
                    <v-list-tile-title v-text="userName.id"/>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
            <v-flex v-if="selectingOther">
              <p class="secondary--text">ユーザ名</p>
              <h3 v-text="editedItem.userId"
                  class="primary--text"></h3>
              <v-text-field
                      v-model="editedItem.score"
                      label="スコア"/>
              <v-textarea
                      v-model="editedItem.comment"
                      label="コメント"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions
              v-if="selectingOther">
        <v-spacer/>
        <v-btn
                color="secondary"
                flat
                @click="reselectUser">戻る</v-btn>
        <v-btn
                class="accent"
                flat
                dark
                @click="save">追加</v-btn>
      </v-card-actions>

    </v-card>
</template>

<script>
import User from '~/plugins/js/interface/User.js';

export default {
    data() {
      return {
        // 初期値
        defaultItem: {
          userId: '',
          score: null,
          comment: '',
        },
        // 編集中の値
        editedItem: {
          userId: '',
          score: null,
          comment: '',
        },
        userNameSearchCondition: '',
        userNameList: [],
        selectedUserName: false,
      };
    },

    computed: {
      // ユーザ名の入力フォームを表示するか判定
      selectingUserName() {
        return !this.selectedUserName;
      },
      // その他の入力フォームを表示するか判定
      selectingOther() {
        return this.selectedUserName;
      },
    },

    watch: {
      // ユーザ名情報を監視し、apiからユーザ一覧を取得する
      userNameSearchCondition(val) {
        if(val == null)return;
        if(val === '')return;

        User.findLikeId(val).then(
          (response) => {
            this.userNameList = response.data.result;
          }
        )
      }
    },
    methods: {
      initialize () {
        this.selectingUserName = true;
        this.selectingOther = false;
        this.userNameList = [];
        this.userNameSearchCondition = '';
        this.editedItem = JSON.parse(JSON.stringify(this.defaultItem));
        this.selectedUserName = false;
      },

      selectUser(val) {
        this.editedItem.userId = val;
        this.selectedUserName = true;
      },

      reselectUser() {
        this.selectingUserName = true;
        this.selectedUserName = false;
      },
      // モーダル自身をクローズする
      close() {
        this.$emit('close');
        this.initialize();
      },
      // 入力情報を登録する
      save() {
        this.$emit('save', this.editedItem, this.editedIndex);
        this.initialize();
      }
    }
  }
</script>

<style>
</style>
