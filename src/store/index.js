import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import Loading from './modules/Loading'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Loading
  },
  getters
})

export default store
