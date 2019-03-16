export const ActionTypes = {
  'SET_SETTINGS': 'SET_SETTINGS',
  'GET_SETTINGS': 'GET_SETTINGS'
};

const UserModule = {
  namespaced: true,
  state: () => ({
    title: ''
  }),
  settings: store => store.title,
  mutations: {
    [ActionTypes.SET_USER_ID] (store, userData) {
      store.user = userData;
    },
    [ActionTypes.SET_ADMIN] (store, userData) {
      store.isAdmin = userData;
    }
  },
  actions: {
    getUser (context) {
      try {
        const userObject = localStorage.getItem('userObject');
        if (userObject) {
          const data = JSON.parse(userObject);
          context.commit([ActionTypes.SET_USER_ID], data);
          return data;
        }
      } catch (e) {
        console.warn('No local storage/userobject');
      }
      return null;
    }
  }
};

export default UserModule;
