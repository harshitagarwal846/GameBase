// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCDMvFD5zthICujULAK7ocBmpZamJ7View",
    authDomain: "gamebase-fa264.firebaseapp.com",
    projectId: "gamebase-fa264",
    storageBucket: "gamebase-fa264.appspot.com",
    messagingSenderId: "307863343800",
    appId: "1:307863343800:web:8a4bf144a06b04f4869a4d",
    measurementId: "G-5L8T4Q6WGY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      //   window.location.href="main.html";
    } else {
      window.location.href = "login.html";
      // No user is signed in.
    }
  });

  function logout() {
    firebase.auth().signOut().catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
  }


  let bestGame=firebase.database().ref().child("Best");
  let bestGame1=bestGame.child("1");

  bestGame1.on("value",(snap) =>{

      let image1=snap.child("Image").val();
      document.getElementById("game1").style.backgroundImage=url(image1);


  });