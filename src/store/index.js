import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin : false,
    user : null,
  },
  mutations: {
    login(state, user){
      state.user = user;
      state.isLogin = true;
    },
    logout(state){
      state.use = null;
      state.isLogin = false;
    },
  },
  actions: {
  },
  modules: {
  }
})
