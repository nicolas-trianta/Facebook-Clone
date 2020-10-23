import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCVxQRWpKW6EqBo_oZF6IwHSl6L-RH4f7Q",
    authDomain: "facebook-clone-e210f.firebaseapp.com",
    databaseURL: "https://facebook-clone-e210f.firebaseio.com",
    projectId: "facebook-clone-e210f",
    storageBucket: "facebook-clone-e210f.appspot.com",
    messagingSenderId: "720602670237",
    appId: "1:720602670237:web:fbc562125b49947a21a074"
  };

  const  firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;