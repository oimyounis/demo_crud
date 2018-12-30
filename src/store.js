import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    isLoggedIn: false
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    login(state){
      state.isLoggedIn = true;
    },
    logout(state){
        state.isLoggedIn = false;
    }
  },
  actions: {

  }
})
