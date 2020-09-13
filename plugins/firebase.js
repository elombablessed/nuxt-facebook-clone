import * as firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAIyU9jii6IduvKb3IQUNr54dYa2UZoVFQ",
    authDomain: "facebook-clone-f908c.firebaseapp.com",
    databaseURL: "https://facebook-clone-f908c.firebaseio.com",
    projectId: "facebook-clone-f908c",
    storageBucket: "facebook-clone-f908c.appspot.com",
    messagingSenderId: "194850111135",
    appId: "1:194850111135:web:5bcc1408619cc20edd2caa",
    measurementId: "G-QE7M2SYP58"
  };

  let app = null;
  if(!firebase.app.length) {
      app=firebase.initializeApp(firebaseConfig);
  }
  export default firebase;