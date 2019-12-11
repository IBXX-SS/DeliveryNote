<template>
  <v-app>
    <template>
      <v-app-bar color="primary" dark app>
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        <v-toobar-title>{{user.displayName}}家の納品書システム</v-toobar-title>
        <v-spacer></v-spacer>
        <v-btn @click="logout" outlined>
          ログアウト
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer"  app>
        <v-container>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                メニュー
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list nav dense expand>
            <v-list-group
            v-for="nav_list in nav_lists"
            :key="nav_list.name"
            :prepend-icon="nav_list.icon"
            no-action
            :append-icon="nav_list.lists ? undefined : ''"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-1 py-1" >{{ nav_list.name }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item v-for="list in nav_list.lists" :key="list.name" :to="list.link">
                <v-list-item-content>
                  <v-list-item-title class="subtitle-1 py-1">{{ list.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-container>
      </v-navigation-drawer>
      <v-content class="ma-5">
        <router-view />
      </v-content>
    </template>
  </v-app>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth'

export default {
  name: 'Home',

  components: {

  },

  data: () => ({
    drawer: false,
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

  computed: {
    user(){
      return this.$store.state.user;
    }
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
      firebase.auth().signOut();
      this.$router.push("/login");
    }
  }
};
</script>
