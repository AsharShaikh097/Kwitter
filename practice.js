
var firebaseConfig = {
    apiKey: "AIzaSyDWbw2mzYFUy0WQjRD85Ik-gZY4w5qHUXw",
    authDomain: "kwitter-34c14.firebaseapp.com",
    databaseURL: "https://kwitter-34c14-default-rtdb.firebaseio.com",
    projectId: "kwitter-34c14",
    storageBucket: "kwitter-34c14.appspot.com",
    messagingSenderId: "16290637993",
    appId: "1:16290637993:web:27f8a18e028cea2715a1b8"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}