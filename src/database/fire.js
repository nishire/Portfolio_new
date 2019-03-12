import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC70l2xMzLrj_K1qxhr_-ayCXtcN-KfDi8",
    authDomain: "saravana-firebase.firebaseapp.com",
    databaseURL: "https://saravana-firebase.firebaseio.com",
    projectId: "saravana-firebase",
    storageBucket: "saravana-firebase.appspot.com",
    messagingSenderId: "922489425232"
  };
var fire = firebase.initializeApp(config)
export default fire
