import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCu0JXjz4hi1paSwmIqSkvbaluFnZj073A",
  authDomain: "jasminetodo-1b638.firebaseapp.com",
  databaseURL: "https://jasminetodo-1b638.firebaseio.com",
  projectId: "jasminetodo-1b638",
  storageBucket: "jasminetodo-1b638.appspot.com",
  messagingSenderId: "961195326897",
  appId: "1:961195326897:web:069b97699542db818dd190",
  measurementId: "G-KXNKG0E7C9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
