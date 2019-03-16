import firebase from 'firebase/app';

import 'firebase/firestore';
const config = {
  apiKey: "AIzaSyBgiHCt3iAmX4dwVt9ZoEk7u4RiM9I1m2o",
  authDomain: "vueworhshops.firebaseapp.com",
  databaseURL: "https://vueworhshops.firebaseio.com",
  projectId: "vueworhshops",
  storageBucket: "vueworhshops.appspot.com",
  messagingSenderId: "409950557103"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
export default db;

