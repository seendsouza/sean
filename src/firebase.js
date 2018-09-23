import * as admin from "firebase-admin";
    // Initialize Firebase

var config = {
  apiKey: "AIzaSyD1owOUZqfN4OJd0WRVMBAaiE4bfrNvQJs",
  authDomain: "yorkuhacks-f0a14.firebaseapp.com",
  databaseURL: "https://yorkuhacks-f0a14.firebaseio.com",
  projectId: "yorkuhacks-f0a14",
  storageBucket: "yorkuhacks-f0a14.appspot.com",
  messagingSenderId: "465255915789"
};
const app = admin.initializeApp(config);

export default app;
