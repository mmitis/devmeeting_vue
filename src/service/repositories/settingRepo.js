import FirebaseService from './../firebase';
import axios from 'axios';
const BASE_URL = 'https://vueworhshops.firebaseio.com/settings.json';


export default {
  async getSettings (setting) {
    const { data } = await axios.get(BASE_URL);
    return data;
  },

  async saveSettings (data) {
     await axios.patch(BASE_URL, data);
  }
};
