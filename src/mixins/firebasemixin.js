import firebase from 'firebase'
import 'firebase/firestore'

export default {
  data() {
    return {
    }
  },

  methods: {
    googleLogin: function () {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    logout: function () {
      firebase.auth().signOut();
    },

    dbAdd(collection, data) {
      let db = firebase.firestore();
      db.collection(collection).add(Object.assign({ uid: '1111' }, data)).then(() => {
      }).catch(() => {
      });
    },
  }
}