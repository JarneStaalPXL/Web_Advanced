import { createStore } from 'vuex'

export default createStore({
  state: {
    myVar : "myValue"
  },
  mutations: {
    updateMyVar(state, payload){
      state.myVar = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
