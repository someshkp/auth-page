import firebase from  'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDK9Te9ub3QjHgfIeZtgP-Vu6asxwjzDaA",
    authDomain: "auth-db-c9b7f.firebaseapp.com",
    projectId: "auth-db-c9b7f",
    storageBucket: "auth-db-c9b7f.appspot.com",
    messagingSenderId: "426318578670",
    appId: "1:426318578670:web:316439e229b1d8144dc4ff"
  };


firebase.initializeApp(config);
export const auth = firebase.auth();
