
import firebase from 'firebase/compat/app';
import "firebase/compat/database"
import "firebase/compat/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBt31TEuneGQ9YB_DzjLxLt1l1aSgg-RHw",
    authDomain: "customcricketmatch.firebaseapp.com",
    databaseURL: "https://customcricketmatch-default-rtdb.firebaseio.com",
    projectId: "customcricketmatch",
    storageBucket: "customcricketmatch.appspot.com",
    messagingSenderId: "438258282778",
    appId: "1:438258282778:web:803a30c2f5e46012b3fca3",
    measurementId: "G-JY9T7QXKFC"
  };
 const firedb=firebase.initializeApp(firebaseConfig );
 export default firedb.database().ref();

 export const auth =firebase.auth()