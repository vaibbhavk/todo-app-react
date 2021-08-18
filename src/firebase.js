import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAoLjdRL77PC2GcLLZhFgxhOH1xlW6Ee5M",
    authDomain: "todo-f1c40.firebaseapp.com",
    projectId: "todo-f1c40",
    storageBucket: "todo-f1c40.appspot.com",
    messagingSenderId: "857628926085",
    appId: "1:857628926085:web:649ebe292fb912536bc9ec",
    measurementId: "G-TMZMDVR8BP"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  export default db;