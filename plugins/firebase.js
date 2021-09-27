import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyABdDs1O_MvnEx2hSxqeTAXtnrkXAUEUD8",
  authDomain: "smb-web-566e1.firebaseapp.com",
  projectId: "smb-web-566e1",
  storageBucket: "smb-web-566e1.appspot.com",
  messagingSenderId: "272876484919",
  appId: "1:272876484919:web:4e89d8fe006cf0d8c9c2b2"
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export { fireDb }
