import Vue from 'vue';
import Vuex from 'vuex';
import UserModule from './data/UserModule';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: UserModule
  },
  plugins: [vuexLocal.plugin]
});
