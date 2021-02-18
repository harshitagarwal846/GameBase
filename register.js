// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
//   .then(() => {
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     return firebase.auth().signInWithEmailAndPassword(email, password);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     window.alert("Error : " + errorMessage);
//   });

firebase.auth.Auth.Persistence.SESSION;

function register() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let cnfpassword = document.getElementById("cnfpassword").value;
  if (password == cnfpassword) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
  }
  else {
    window.alert("Password does not match");

  }
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    window.location.href = "main.html";
  }
});



