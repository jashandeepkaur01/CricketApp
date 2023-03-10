
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBt31TEuneGQ9YB_DzjLxLt1l1aSgg-RHw",
  authDomain: "customcricketmatch.firebaseapp.com",
  projectId: "customcricketmatch",
  storageBucket: "customcricketmatch.appspot.com",
  messagingSenderId: "438258282778",
  appId: "1:438258282778:web:803a30c2f5e46012b3fca3",
  measurementId: "G-JY9T7QXKFC"
};

 
const app = initializeApp(firebaseConfig);
export const  defaultStorage = getStorage(app);



