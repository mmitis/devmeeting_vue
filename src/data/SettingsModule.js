export const ActionTypes = {
  'SET_SETTINGS': 'SET_SETTINGS',
  'GET_SETTINGS': 'GET_SETTINGS'
};

const SettingsModule = {
  namespaced: true,
  state: () => ({
    settings: ''
  }),
  getters : {
    settings: store => store.settings,
    title: store => store.settings.title ? 'Default Title!'
  },
  mutations: {
    [ActionTypes.GET_SETTINGS] (store) {
    },
    [ActionTypes.SET_SETTINGS] (store) {
    }
  },
  actions: {
    getSettings (context) {

    },
    setSettings (context) {

    }
  }
};

export default SettingsModule;
