import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  
  apiKey: "AIzaSyDrqqq9qZZkwZHGWbeTjFZKZ5YTvpyMmt4",
  authDomain: "pro-c67-e310f.firebaseapp.com",
  projectId: "pro-c67-e310f",
  storageBucket: "pro-c67-e310f.appspot.com",
  messagingSenderId: "765201852883",
  appId: "1:765201852883:web:98c289cfa86a3f5b88e726"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();