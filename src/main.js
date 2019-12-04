import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.config.devtools = true;

var config = {

}

firebase.initializeApp(config);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
