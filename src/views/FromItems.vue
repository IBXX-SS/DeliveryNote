<style>
th, td {
   cursor: pointer;
   font-size: 18px !important;
}

td .v-icon {
   font-size: 20px !important;
}
</style>

<template>
  <div class="about">
    <v-form>
      <v-card>
        <v-toolbar
          flat
          color="green" dark
        >
          <v-icon>mdi-clipboard-text</v-icon>
          <v-toolbar-title>納品書入力</v-toolbar-title>
        </v-toolbar>
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="3">
              得意先名
            </v-col>
            <v-col cols="12" md="9">
              bb
            </v-col>



            <v-col cols="12">
              <v-data-table
                :headers="headers"
                :items="desserts"
                class="elevation-2"
                multi-sort
              >
                <template v-slot:top>
                  <v-toolbar flat >
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                      <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark class="mb-2" v-on="on">商品追加</v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" md="12">
                                <v-text-field v-model="editedItem.itemName" label="商品"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.ammount" label="数量"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.unitPrice" label="単価"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.price" label="金額"></v-text-field>
                              </v-col>
                              <v-col cols="12" md="12">
                                <v-text-field v-model="editedItem.summary" label="摘要"></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="green darken-1" text @click="close">キャンセル</v-btn>
                          <v-btn color="green darken-1" text @click="save">保存</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-toolbar>
                </template>
                <template v-slot:item.action="{ item }">
                  <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                  >
                    mdi-pencil-circle
                  </v-icon>
                  <v-icon
                    small
                    @click="deleteItem(item)"
                  >
                    mdi-delete-circle
                  </v-icon>
                </template>
                <template v-slot:no-data>
                  <v-btn color="primary" @click="initialize">Reset</v-btn>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-form>
  </div>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        { text: '商品', value: 'itemName', divider: true },
        { text: '数量', value: 'ammount' },
        { text: '単価', value: 'unitPrice' },
        { text: '金額', value: 'price' },
        { text: '摘要', value: 'summary' },
        { text: '編集', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        itemName: '',
        ammount: 0,
        unitPrice: 0,
        price: 0,
        summary: '',
      },
      defaultItem: {
        itemName: '',
        ammount: 0,
        unitPrice: 0,
        price: 0,
        summary: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? '追加' : '編集'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            itemName: 'キャベツ',
            ammount: 159,
            unitPrice: 6.0,
            price: 24,
            summary: '摘要欄',
          },
          {
            itemName: 'レタス',
            ammount: 237,
            unitPrice: 9.0,
            price: 37,
            summary: 4.3,
          },
          {
            itemName: '玉ねぎ',
            ammount: 262,
            unitPrice: 16.0,
            price: 23,
            summary: 6.0,
          },
          {
            itemName: 'きゅうり',
            ammount: 305,
            unitPrice: 3.7,
            price: 67,
            summary: 4.3,
          },
          {
            itemName: 'アスパラ',
            ammount: 356,
            unitPrice: 16.0,
            price: 49,
            summary: 3.9,
          },
          {
            itemName: 'トマト',
            ammount: 375,
            unitPrice: 0.0,
            price: 94,
            summary: 0.0,
          },
          {
            itemName: 'かぼちゃ',
            ammount: 392,
            unitPrice: 0.2,
            price: 98,
            summary: 0,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
