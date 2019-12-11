<template>
  <router-view />
</template>


<!--
<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>
-->

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    user : {
      id: '',
      displayName: ''
    },
    isLogin: false,
    drawer: null,
    nav_lists:[
      {
        name: '販売',
        icon: 'mdi-keyboard',
        lists:[
          {
            name: '得意先から入力',
            link: '/fromCustomers'
          },
          {
            name: '商品から入力',
            link: '/fromItems'
            }
        ]
      },
      {
        name: '設定',
        icon: 'mdi-wrench',
        lists:[
          {
            name: '商品',
            link: '/items'
          },
          {
            name: '得意先',
            link: '/customers'
          },
          {
            name: '納品書',
            link: '/deliveryNotes'
          },
          {
            name: 'アカウント',
            link: '/accounts'
          },
        ]
      },
    ],
  }),

  created: function() {
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.isLogin = true;
    //     this.user = user;
    //   } else {
    //     this.isLogin = false;
    //     this.user = null;
    //   }
    // })
  },

  methods:{
    googleLogin: function() {
      // var provider = new firebase.auth.GoogleAuthProvider();
      // firebase.auth().signInWithRedirect(provider);
      this.isLogin = true;
      this.$router.push("/customers");
      alert("aaa")
    },
    logout: function() {
      //firebase.auth().signOut();
    }
  }
};
</script>
