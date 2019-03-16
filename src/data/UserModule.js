export const ActionTypes = {
  'SET_USER_ID': 'SET_USER_ID',
  'SET_ADMIN': 'SET_ADMIN'
};

var uuid4 = require('uuid4');

const UserModule = {
  namespaced: true,
  state: () => ({
    userID: null,
    isAdmin: false
  }),
  getters: {
    userID: store => store.userID,
    isAdmin: store => store.isAdmin
  },
  mutations: {
    [ActionTypes.SET_USER_ID] (store, userData) {
      store.userID = userData;
    },
    [ActionTypes.SET_ADMIN] (store, userData) {
      store.isAdmin = userData;
    }
  },
  actions: {
    getUser(context) {
      const userId = uuid4();
      context.commit(ActionTypes.SET_USER_ID, userId);
      context.commit(ActionTypes.SET_ADMIN, false);
    }
  }
};

export default UserModule;
