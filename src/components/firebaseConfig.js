import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCn-ZeuObpHXJBwB8SgP-hxzhr7pCzMH58",
    authDomain: "weatherapp-cfbed.firebaseapp.com",
    projectId: "weatherapp-cfbed",
    storageBucket: "weatherapp-cfbed.appspot.com",
    messagingSenderId: "669077991740",
    appId: "1:669077991740:web:4bc040f3a181f17bc7ee39"
  };
  
  // Initialize Firebase
  export const app = firebase.initializeApp(firebaseConfig);

  export default firebase