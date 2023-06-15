import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu87unSkbHjrsui5sutWsc_CNbSq_e7RM",
  authDomain: "travelapp-c3b64.firebaseapp.com",
  projectId: "travelapp-c3b64",
  storageBucket: "travelapp-c3b64.appspot.com",
  messagingSenderId: "179220371923",
  appId: "1:179220371923:web:87ccb76b54fcf3a375f726",
  measurementId: "G-EH2V9L7R3M"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export {firebase};