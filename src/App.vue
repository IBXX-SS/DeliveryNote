<template>
  <v-app>
    <template v-if="!isLogin">
      <h1>login</h1>
      <button @click="googleLogin">ログイン</button>
    </template>
    <template v-else>
      <v-navigation-drawer app v-model="drawer" clipped >
        <v-container>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                メニュー
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list nav dense>
            <v-list-group
            v-for="nav_list in nav_lists"
            :key="nav_list.name"
            :prepend-icon="nav_list.icon"
            no-action
            :append-icon="nav_list.lists ? undefined : ''">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item v-for="list in nav_list.lists" :key="list.name" :to="list.link">
                <v-list-item-content>
                  <v-list-item-title>{{ list.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-container>
      </v-navigation-drawer>
      <v-app-bar color="primary" dark app>
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        <v-toobar-title>{{user.displayName}}家の納品書システム(⋈◍＞◡＜◍)。✧♡</v-toobar-title>
      </v-app-bar>
      <v-content>
        <router-view />
      </v-content>
      <v-footer color="primary" dark app>
        <button @click="logout">ログアウト</button>
        <span>{{ dbTest.name || '失敗' }}</span>
      </v-footer>
    </template>
  </v-app>
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
import firebase from 'firebase'
import 'firebase/firestore'
import fd from './mixins/firebasemixin'

export default {
  name: 'App',
  mixins: [fd],
  components: {

  },

  data: () => ({
    user : {
      id: '',
      displayName: ''
    },
    dbTest: {
      uid: '',
      name: 'しっぱい'
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
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLogin = true;
        this.user = user;
        this.GetData();
      } else {
        this.isLogin = false;
        this.user = null;
      }
    })
  },

  methods:{
    GetData() {
      var addData = {
          name: "mofu"
      };
      this.dbAdd('users',addData);
    }
  }
};
</script>
