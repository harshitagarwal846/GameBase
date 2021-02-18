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


function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    window.location.href = "main.html";
  }
});

let eye = document.getElementById("eye");
let slasheye = document.getElementById("slasheye");
let pass = document.getElementById("password");
eye.addEventListener('click', () => { //TogglePassword
  pass.type = "text";
  eye.style.display = "none";
  slasheye.style.display = "inline";
});

slasheye.addEventListener('click', () => { //TogglePassword
  pass.type = "password";
  eye.style.display = "inline";
  slasheye.style.display = "none";

});



