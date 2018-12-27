// 参加者追加ボタン押下時のモーダル画面
<template>
    <v-card>
      <v-card-title>
        <v-btn icon @click="close()">
          <v-icon>close</v-icon>
        </v-btn>
        <span class="headline">参加者編集</span>
      </v-card-title>
      <v-divider/>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex>
              <p class="secondary--text">ユーザ名</p>
              <h3 v-text="userResultData.userId"
                  class="primary--text"></h3>
              <v-text-field
                      v-model="userResultData.score"
                      label="スコア"/>
              <v-textarea
                      v-model="userResultData.comment"
                      label="コメント"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
                class="accent"
                flat
                dark
                @click="save">追加</v-btn>
      </v-card-actions>

    </v-card>
</template>

<script>
export default {
  props: {
    // 入力情報を格納するオブジェクト
    userResultData: {
      type: Object,
      required: false,
    },
    editedIndex: {
      type: Number,
      required: false,
    },
  },
    methods: {
      // モーダル自身をクローズする
      close() {
        this.$emit('close');
      },
      // 入力情報を登録する
      save() {
        this.$emit('save', this.userResultData, this.editedIndex);
      }
    }
  }
</script>

<style>
</style>
