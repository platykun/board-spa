<template>
  <div>
    <v-dialog
      v-model="dialog"
    >
      <div slot="activator">
        <v-btn
          outline
          round
          class="mb-2 accent accent--text"
          dark>
          <v-icon>add_circle</v-icon>
          参加者追加
        </v-btn>
      </div>
      <UserResultModal
        v-on:close="closeUserResultModal"
        v-on:save="addUserResult"
      />
    </v-dialog>
    <v-dialog
      v-model="updateDialog"
      fullscreen>
      <UpdateUserResultModal
        :userResultData="updateDialogUser"
        :editedIndex="updateDialogIndex"
        v-on:close="closeUserResultModal"
        v-on:save="addUserResult"
      />
    </v-dialog>

    <v-data-table
      :headers="headers"
      :items="users"
      class="elevation-1"
      hide-actions
    >
      <template
        slot="items"
        slot-scope="props">
        <td>{{ props.item.userId }}</td>
        <td class="text-xs-right">{{ props.item.score }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>

  </div>
</template>

<script>
  import UserResultModal from '~/components/organisms/modal/userResultModal';
  import UpdateUserResultModal from '~/components/organisms/modal/updateUserResultModal';

  export default {
    components: {
      'UserResultModal': UserResultModal,
      'UpdateUserResultModal': UpdateUserResultModal,
    },
    data() {
      return {
        dialog: false,
        updateDialog: false,
        headers: [
          {
            text: 'users',
            align: 'left',
            sortable: false,
            value: 'userId'
          },
          {text: 'score', value: 'score'},
          {text: 'Actions', value: 'userId', sortable: false}
        ],
        users: [],
        editedIndex: -1,

        updateDialogUser: Object(),
        updateDialogIndex: -1,
      };
    },
    watch: {
      dialog(val) {
        val || this.close()
      },
    },
    created() {
      this.initialize()
    },

    methods: {
      initialize() {
        this.users = [];
      },

      // updateDialog用の送信データを格納した上でダイアログを出す
      editItem(item) {
        this.updateDialogUser = Object.assign({}, item);
        this.updateDialogIndex = this.users.indexOf(item);
        this.updateDialog = true;
        this.$emit('input', this.users);
      },

      deleteItem(item) {
        const index = this.users.indexOf(item);
        confirm('Are you sure you want to delete this item?') && this.users.splice(index, 1);
        this.$emit('input', this.users);
      },

      // モーダルを閉じる
      close() {
        this.dialog = false;
        this.updateDialog = false;
      },

      // ユーザ情報を追加更新する
      addUserResult(editedItem, editedIndex) {
        if (editedIndex > -1) {
          Object.assign(this.users[editedIndex], editedItem)
        } else {
          this.users.push(editedItem)
        }
        this.close();
        this.$emit('input', this.users);
      },

      // モーダルをクローズするときに呼ばれる
      closeUserResultModal() {
        this.dialog = false;
        this.updateDialog = false;
      }

    }
  }
</script>

<style>
</style>
