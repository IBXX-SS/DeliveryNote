import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth'

Vue.config.productionTip = false;
Vue.config.devtools = true;

// Your web app's Firebase configuration
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
