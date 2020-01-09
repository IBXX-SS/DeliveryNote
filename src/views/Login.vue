<template>
  <v-btn v-on:click="login">サインイン</v-btn>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth'

export default {
  name: 'Login',

  components: {

  },

  data: () => ({
  }),

  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit('login', user);
        this.$router.push("/");
      } else {
        // this.isLogin = false;
        // this.user = null;
      }
    })
  },

  methods:{
    googleLogin: function() {
      // var provider = new firebase.auth.GoogleAuthProvider();
      // firebase.auth().signInWithRedirect(provider);
    },
    login: function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      // firebase.auth().signInWithRedirect(provider);
      // alert("aa")
      // this.$store.commit('login');
      // this.$router.push("/");
      firebase.auth().signInWithPopup(provider).then(function() {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // // The signed-in user info.
        // var user = result.user;
        // ...
      }).catch(function() {
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
      });
    },
    logout: function() {
      //firebase.auth().signOut();
    }
  }
};
</script>