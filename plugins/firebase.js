import firebase from 'firebase/app';
import 'firebase/firestore';
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDJp9Vp0zl1Gc6hbo8nlXE68iPu2cS3Z60',
    authDomain: 'supermilesbroscom.firebaseapp.com',
    databaseURL: 'https://supermilesbroscom.firebaseio.com',
    projectId: 'supermilesbroscom',
    storageBucket: 'supermilesbroscom.appspot.com',
    messagingSenderId: '249586897114',
    appId: '1:249586897114:web:80f81700357c56bb4295e3',
    measurementId: 'G-MTTR57VFZN',
  };
  firebase.initializeApp(config);
}
const fireDb = firebase.firestore();
export { fireDb };
