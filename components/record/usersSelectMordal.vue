<template>
  <div>
    <v-dialog
      v-model="dialog"
      max-width="500px">
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
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-divider/>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex class="elevation-2">
                <v-flex>
                  <v-text-field
                    v-model="selectUserName"
                    solo
                    prepend-icon="search"
                    label="ユーザ名はここから入力"/>
                </v-flex>
                <v-list>
                  <v-list-tile
                    v-for="OneUserData in userData"
                    :key="OneUserData.id"
                    @click="selectUser(OneUserData.id)"
                  >
                    <v-list-tile-content>
                      <v-list-tile-title v-text="OneUserData.id"/>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="editedItem.userId"
                  label="ユーザ名"
                  readonly
                />
              </v-flex>
              <v-flex xs12>
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
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="secondary"
            flat
            @click="close">Cancel</v-btn>
          <v-btn
            class="accent"
            flat
            dark
            @click="save">Save</v-btn>
        </v-card-actions>

      </v-card>
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
import User from '~/plugins/js/interface/User.js';

export default {
    data() {
      return {
        dialog: false,
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
        userData: [],
        editedIndex: -1,
        editedItem: {
          userId: '',
          score: 0,
          comment: '',
        },
        defaultItem: {
          userId: '',
          score: 0,
          comment: '',
        },
        selectUserName: '',
      };
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? '参加者追加' : '参加者編集'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      selectUserName(val) {
        if(val == null)return;
        if(val === '')return;

        User.findLikeId(val).then(
          (response) => {
            this.userData = response.data.result;
          }
        )
      }

    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.users = []
      },

      editItem (item) {
        this.editedIndex = this.users.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
        this.$emit('input', this.users);
      },

      deleteItem (item) {
        const index = this.users.indexOf(item);
        confirm('Are you sure you want to delete this item?') && this.users.splice(index, 1);
        this.$emit('input', this.users);
      },

      close () {
        this.dialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1
        }, 300);
        this.$emit('input', this.users);
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.users[this.editedIndex], this.editedItem)
        } else {
          this.users.push(this.editedItem)
        }
        this.close();
        this.$emit('input', this.users);
      },

      selectUser(val) {
        this.editedItem.userId = val;
        this.selectUserName = '';
        this.userData = [];
      }

    }
  }
</script>

<style>
</style>
