import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      SessionToken: null,
      Username: null,
      publicKey: null,
      privateKey: null,
      backupKey: null
    },
    mutations: {

    }
})