<template>
  <div class="about">
    <v-form>
      <v-card>
        <v-toolbar
          flat
          color="green" dark
        >
          <v-icon>mdi-account</v-icon>
          <v-toolbar-title>得意先登録</v-toolbar-title>
        </v-toolbar>
        <v-container fluid>
          <v-card-title class="pa-0">得意先名</v-card-title>
          <v-text-field
            v-model="customer.customerName"
            outlined
            clearable
            dense
          ></v-text-field>
          <v-card-title class="pa-0">請求書印字名</v-card-title>
          <v-text-field
            v-model="customer.customerPrintName"
            outlined
            clearable
            dense
          ></v-text-field>
          <v-card-title class="pa-0">郵便番号</v-card-title>
          <v-text-field
            v-model="customer.zipCode"
            outlined
            clearable
            dense
            prefix="〒"
            style="width:10em"
          ></v-text-field>
          <v-card-title class="pa-0">住所</v-card-title>
          <v-text-field
            v-model="customer.address"
            clearable
            outlined
            dense
          ></v-text-field>
          <v-card-title class="pa-0">締日</v-card-title>
          <v-select 
            v-model="customer.closingDate"
            :items="dates"
            outlined
            dense
            style="width:7em"
            suffix="日"
          ></v-select>
          <v-card-title class="pa-0">支払期限</v-card-title>
            <v-select 
              v-model="customer.paymentDueDate"
              :items="dates"
              outlined
              dense
              style="width:7em"
              suffix="日"
            >
            </v-select>

          <v-card-title class="pa-0">備考</v-card-title>
          <v-textarea
            v-model="customer.remarks"
            outlined
            auto-grow
            dense
            rows="5"
          ></v-textarea>

          <v-card-title class="pa-0">支払方法</v-card-title>
          <v-select 
            v-model="customer.paymentType"
            :items="paymentTypes"
            outlined
            dense
            style="width:8em"
          ></v-select>

          <v-card-title class="pa-0">定貫区分</v-card-title>
          <v-radio-group outlined row class="mt-0">
            <v-radio label="定貫" value="1"></v-radio>
            <v-radio label="不定貫" value="2"></v-radio>
          </v-radio-group>
        </v-container>
      </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Customers',

  components: {

  },

  data() {
    return {
      customer : {
        customerCode : '',
        customerName : '',
        customerKanaName : '',
        customerPrintName : '',
        zipCode : '',
        address : '',
        phoneNumber : '',
        contactName : '',
        closingDate : '',
        billingDate : '',
        paymentDueDate : '',
        paymentType : '',
        remarks : '',
      },
      dates : [
      ],
      months : [
        {text: '当', value: '0'},
        {text: '翌', value: '1'},
        {text: '翌々', value: '2'},
      ],
      paymentTypes : [
        {text: '振込', value: '1'},
        {text: '口振', value: '2'},
        {text: 'クレカ', value: '3'},
      ]
    }
  },

  created() {
    for(let i = 1; i <= 31; i++){
      this.dates.push(
        {text: i, value : i}
      );
    }
    this.dates.push(
      {text: '末', value : 0}
    );   
    
  },

  methods:{
  }
};
</script>