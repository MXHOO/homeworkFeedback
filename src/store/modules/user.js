import { createStore } from 'vuex'
const user = createStore({
  state: {
    userInfo: {}
  },
  getters: {
    getUserInfo: function(state) {
      return state.userInfo
    }
  },
  mutations: {
    setUserInfo: function(state, payload) {
      state.userInfo = payload
    }
  }
})

export { user }