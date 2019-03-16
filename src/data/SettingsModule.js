import settingsRepo from './../service/repositories/settingRepo';

export const ActionTypes = {
  'SET_SETTINGS': 'SET_SETTINGS',
  'GET_SETTINGS': 'GET_SETTINGS'
};

const SettingsModule = {
  namespaced: true,
  state: () => ({
    settings: {}
  }),
  getters: {
    settings: store => store.settings,
  },
  mutations: {
    [ActionTypes.GET_SETTINGS] (store) {
    },
    [ActionTypes.SET_SETTINGS] (store, settings) {
      console.log(settings, store);
      store.settings = settings;
    }
  },
  actions: {
    async getSettings (context) {
        const data = await settingsRepo.getSettings();
        context.commit(ActionTypes.SET_SETTINGS, data);
    },
    async saveSettings (context, data) {
      await settingsRepo.saveSettings(data);
    }
  }
};

export default SettingsModule;
