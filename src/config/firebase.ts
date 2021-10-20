import firebase from 'firebase/app';
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyApjbO_UQfAvgUWLXEInYANV_SRUKmqhuI",
  authDomain: "instagramclone-9c604.firebaseapp.com",
  projectId: "instagramclone-9c604",
  storageBucket: "instagramclone-9c604.appspot.com",
  messagingSenderId: "540789649674",
  appId: "1:540789649674:web:3353b9d8adf9d0a93f0af3"
}

firebase.initializeApp(config)

export default firebase
export const db = firebase.firestore()
