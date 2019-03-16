import Vue from 'vue';
import Vuex from 'vuex';
import UserModule from './data/UserModule';
import VuexPersistence from 'vuex-persist';
import SettingsModule from './data/SettingsModule';
import { firebaseMutations } from 'vuexfire';
import VoteModule from "./data/VoteModule";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: UserModule,
    settings: SettingsModule,
    votes: VoteModule
  },
  mutations: {
    ...firebaseMutations,
  },
  plugins: [vuexLocal.plugin]
});
