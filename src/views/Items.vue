<template>
  <div class="items">
    <v-form>
      <v-container>
<v-card class="px-4">

        <v-card-title class="headline pl-0 pb-0">商品登録</v-card-title>
        <v-card-title class="pl-0 pb-0">商品名</v-card-title>
          <v-text-field
            v-model="item.itemName"
            outlined
          ></v-text-field>
        <v-card-title class="pa-0">単価</v-card-title>
          <v-text-field
            v-model="item.itemName"
            outlined
            suffix="円"
          ></v-text-field>
        <v-card-title class="pa-0">定貫区分</v-card-title>
        <v-radio-group v-model="item.teikanType" row class="mt-0">
          <v-radio label="定貫" value="1"></v-radio>
          <v-radio label="不定貫" value="2"></v-radio>
        </v-radio-group>
        <v-card-title class="pa-0">単価</v-card-title>
        <v-select 
          v-model="item.unit"
          :items="units"
          outlined
          menu-props="auto"
        ></v-select>
        <v-card-title class="pa-0">商品説明</v-card-title>
        <v-textarea
          v-model="item.itemDescription"
          outlined
          auto-grow
          rows="5"
        ></v-textarea>

        <v-card-title class="pa-0">商品説明</v-card-title>
        <v-autocomplete
      label="Components"
      :items="customers"
    ></v-autocomplete>

        </v-card>
      </v-container>
    </v-form>
  </div>
</template>

<!--
<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-system-bar
      color="indigo darken-2"
      dark
    >
      <v-spacer></v-spacer>

      <v-icon>mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Discover</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
-->
<script>
export default {
  name: 'Items',

  components: {

  },

  data: () => ({
    item : {
      itemCategoryCode : '',
      itemCode : '',
      itemName : '',
      unitPrice : '',
      teikanType : '',
      unit : '',
      itemDescription : '',
    },
    units : [
      {text: '個', value : '1'},
      {text: 'Kg', value : '2'},
      {text: 'g', value : '3'},
    ],
    customers : [
      {customerName : '山田　太郎', billingDate : new Date()},
      {customerName : '山田　次郎', billingDate : new Date()},
      {customerName : '山田　三郎', billingDate : new Date()},
      {customerName : '織田　信長', billingDate : new Date()},
      {customerName : '武田　信玄', billingDate : new Date()},
      {customerName : '上杉　謙信', billingDate : new Date()},
      {customerName : '伊達　政宗', billingDate : new Date()},
    ],

    hasSaved: false,
        isEditing: null,
        model: null,
        states: [
          { name: 'Florida', abbr: 'FL', id: 1 },
          { name: 'Georgia', abbr: 'GA', id: 2 },
          { name: 'Nebraska', abbr: 'NE', id: 3 },
          { name: 'California', abbr: 'CA', id: 4 },
          { name: 'New York', abbr: 'NY', id: 5 },
        ],
  }),

  created: function() {
  },

  methods:{
  }
};
</script>